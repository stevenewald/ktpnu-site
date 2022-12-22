const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://ktp-site-default-rtdb.firebaseio.com/",
});
let usersRef = admin.database().ref("users");
let allowedRef = admin.database().ref("allowed_users");

exports.loginAuth = functions.https.onCall(async (req, res) => {
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
});

exports.checkIfAllowed = functions.https.onCall(async (req, res) => {
  console.log("starting");
  return new Promise((resolve, reject) => {
    return allowedRef.child(req.email).once("value", (snapshot) => {
      if (snapshot.exists()) {
        console.log(req.email + "exists!");
        resolve({ result: "exists" });
      } else {
        console.log(req.email + " does not exist");
        resolve({ result: "none" });
      }
    });
  });
});

exports.createAcc = functions.auth.user().onCreate((user) => {
  /*usersRef.child(user.uid).set({
    //daily:0,
  }).then((res) => {
    console.log("Created new user with uid " + user.uid);
  }).catch((err) => {
    console.log("Error");
    console.log(err);
  });*/
  console.log("New account created");
});
