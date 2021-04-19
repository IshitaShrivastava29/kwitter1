var firebaseConfig = {
      apiKey: "AIzaSyDJtCsRXUTbT0c_mSoLq-KkKcSonEwDBT4",
      authDomain: "kwitter-9b8e9.firebaseapp.com",
      databaseURL: "https://kwitter-9b8e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-9b8e9",
      storageBucket: "kwitter-9b8e9.appspot.com",
      messagingSenderId: "485717957261",
      appId: "1:485717957261:web:e82488af73c21d2f2160c4"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" Welcome "+user_name+"!";
function addroom(){
room_name=document.getElementById("room_name").value;
firbase.database().ref("/").child(room_name).update({
purpose:"adding room_name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

