  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJtCsRXUTbT0c_mSoLq-KkKcSonEwDBT4",
    authDomain: "kwitter-9b8e9.firebaseapp.com",
    databaseURL: "https://kwitter-9b8e9-default-rtdb.firebaseio.com",
    projectId: "kwitter-9b8e9",
    storageBucket: "kwitter-9b8e9.appspot.com",
    messagingSenderId: "485717957261",
    appId: "1:485717957261:web:e82488af73c21d2f2160c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    firebase.database().ref("/").child(user_name).update({purpose : "addUser"});
    window.location="kwitter_room.html";
}