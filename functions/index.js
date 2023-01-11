const path = require('path');
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const os = require("os");
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://ktp-site-default-rtdb.firebaseio.com/",
});
let usersRef = admin.database().ref("users");
let allowedRef = admin.database().ref("allowed_users");
let publicRef = admin.database().ref("public_users");

/*exports.resizeCover = functions.storage.object().onFinalize(async (object) => {
  functions.logger.log("Resizing image...");
  functions.logger.log(JSON.stringify(object))
  functions.logger.log(typeof object);
  const tempFilePath = path.join(os.tmpdir(), object.name);
  await object.download({destination: tempFilePath});
  functions.logger.log("Done!");
});*/

exports.beforeSignIn = functions.auth.user().beforeSignIn(async (user) => {
  if(user.email.includes("northwestern.edu")) {
    allowedRef.child(user.email.substring(0,user.email.indexOf("@"))).once("value", (snapshot) => {
      if(snapshot.exists()) {
        usersRef.child(user.uid).update({allowed:true})
        admin.auth().setCustomUserClaims(user.uid, {
          member: true
        });
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
              functions.logger.log("Adding user " + user.email);
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
              functions.logger.log("Already signed up:" + user.email);
              resolve(2);
              //already has uid record and signed up
            } else if (!user_snapshot.val()["signed_up"]) {
              functions.logger.log("Needs to sign up:" + user.email);
              //needs to sign up
              resolve(1);
            } else {
              functions.logger.log("Shouldn't be possible:" + user.email);
              //already has uid record but not signed up - shouldnt be possible
              resolve(3);
            }
            admin.auth().setCustomUserClaims(user.uid, {
              member: true
            });
          });
        } else {
          functions.logger.log("Rejected account creation by " + user.email);
          reject(4);
        }
      });
  });
  try {
    const res = await prom;
    console.log("Promise result: " + res);
    return true;
  } catch(err) {
    throw new functions.auth.HttpsError('permission-denied');;
  }
});
