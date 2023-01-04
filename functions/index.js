const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://ktp-site-default-rtdb.firebaseio.com/",
});
let usersRef = admin.database().ref("users");
let allowedRef = admin.database().ref("allowed_users");
let publicRef = admin.database().ref("public_users");

/*exports.loginAuth = functions.https.onCall(async (req, res) => {
  console.log(req.idToken);
  admin
    .auth()
    .verifyIdToken(req.idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log(uid);
      console.log("allgood!");
    })
    .catch((error) => {
      console.log(error);
    });
  //res.json({result: `Message with ID: 2 added.`});
});*/

/*exports.checkIfAllowed = functions.https.onCall(async (req, res) => {
  return new Promise((resolve, reject) => {
        return usersRef.child(req.uid).once("value", (user_snapshot) => {
          if(!user_snapshot.val()["allowed"]) {
            resolve({result:"unauthorized"});
          } else if (user_snapshot.val()["signed_up"]) {
            resolve({result:"already_signed_up"});
          } else {
            resolve({result:"needs_signup"})
          }
          return true;
        })
      }
  )
});*/

/*exports.createAcc = functions.auth.user().onCreate((user) => {
  allowedRef.child(user.email.substring(0, user.email.indexOf("@"))).once("value", (allowed_snapshot) => {
    if(allowed_snapshot.exists()) {
      usersRef.child(user.uid).set({
        allowed:true,
        signed_up:false,
        profile_pic_link:user.photoURL,
        email:user.email,
      });
    } else {
      usersRef.child(user.uid).set({
        allowed:false,
        signed_up:false,
      });
    }
  })
});*/

exports.beforeSignIn = functions.auth.user().beforeSignIn(async (user) => {
  if(user.email.includes("northwestern.edu")) {
    allowedRef.child(user.email.substring(0,user.email.indexOf("@"))).once("value", (snapshot) => {
      if(snapshot.exists()) {
        usersRef.child(user.uid).update({allowed:true})
      }
    })
  }
})
exports.beforeAcc = functions.auth.user().beforeCreate(async (user) => {
  if(!user.email.includes("northwestern.edu")) {
    await usersRef.child(user.uid).set({
      allowed: false,
      signed_up: false,
    });
  }
  const prom = new Promise((resolve, reject) => {
    allowedRef
      .child(user.email.substring(0, user.email.indexOf("@")))
      .once("value", async (allowed_snapshot) => {
        if (allowed_snapshot.exists()) {
          usersRef.child(user.uid).once("value", async (user_snapshot) => {
            if (!user_snapshot.exists()) { 
              await usersRef.child(user.uid).set({
                allowed: true,
                signed_up: false,
                role: "Member",
                profile_pic_link: user.photoURL,
                cover_page_link: "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png",
                email: user.email,
              });
              await publicRef.child(user.uid).set({
                profile_pic_link: user.photoURL,
                role: "Member",
                cover_page_link: "https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png",
              })
              resolve(1); //allowed but needs to sign up, correct
            } else if (user_snapshot.val()["signed_up"]) {
              resolve(2);
              //already has uid record and signed up
            } else if (!user_snapshot.val()["signed_up"]) {
              //needs to sign up
              resolve(1);
            } else {
              //already has uid record but not signed up - shouldnt be possible
              resolve(3);
            }
          });
        } else {
          //unauthorized user
          await usersRef.child(user.uid).set({
            allowed: false,
            signed_up: false,
          });
          resolve(4);
        }
      });
  });
  const res = await prom;
  console.log("Promise result: " + res);
});
