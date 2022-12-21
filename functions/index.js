const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.loginAuth = functions.https.onCall(async (req, res) => {
    // Grab the text parameter.
    //const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    //const writeResult = await admin.firestore().collection('messages').add({original: original});
    // Send back a message that we've successfully written the message
    console.log(req.idToken);
    admin.auth()
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
