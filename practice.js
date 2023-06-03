var firebaseConfig = {
    apiKey: "AIzaSyBi9KkexkgXR9vddsKSLbc14bSCkeder2I",
    authDomain: "kwitter-67136.firebaseapp.com",
    databaseURL: "https://kwitter-67136-default-rtdb.firebaseio.com",
    projectId: "kwitter-67136",
    storageBucket: "kwitter-67136.appspot.com",
    messagingSenderId: "551001719141",
    appId: "1:551001719141:web:0f267edc08b1c48fe9618c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser"
    });
}