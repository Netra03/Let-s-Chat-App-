
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAmTdA-QYJHRIsDoD-UGST9cBdrdJtHjv8",
      authDomain: "kwiter-10734.firebaseapp.com",
      databaseURL: "https://kwiter-10734-default-rtdb.firebaseio.com",
      projectId: "kwiter-10734",
      storageBucket: "kwiter-10734.appspot.com",
      messagingSenderId: "369207307028",
      appId: "1:369207307028:web:7d7e917db998138360b001"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
