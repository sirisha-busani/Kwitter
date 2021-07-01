//ADD YOUR FIREBASE LINKS
const firebaseConfig={
  apiKey: "AIzaSyA9yh0gxGIs097nx9hbDM5fz17GTTT7fgY",
    authDomain: "kwitter-cb131.firebaseapp.com",
    databaseURL: "https://kwitter-cb131-default-rtdb.firebaseio.com",
    projectId: "kwitter-cb131",
    storageBucket: "kwitter-cb131.appspot.com",
    messagingSenderId: "740333232312",
    appId: "1:740333232312:web:b4139e8e2a4350c9b0544d"
}

firebase.initializeApp(firebaseConfig);


function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);

  firebase.database().ref("/users").child(user_name).update({purpose : "adding room name"})
  
    window.location = "kwitter_room.html";
}
