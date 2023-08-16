var firebaseConfig = {
    apiKey: "AIzaSyAUU56iEdDggEZ0XPr6efTpzooT8GgBlpI",
    authDomain: "kwitter-project-da766.firebaseapp.com",
    databaseURL: "https://kwitter-project-da766-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-da766",
    storageBucket: "kwitter-project-da766.appspot.com",
    messagingSenderId: "1076882167987",
    appId: "1:1076882167987:web:bdc6554417cb7dd529f8c6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addRoom(){
    user_name = document.getElementById("room").value;
    firebase.database().ref("/").child("user_name").update({
        purpose : "adding user"
    });
}