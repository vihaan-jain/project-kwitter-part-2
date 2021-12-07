const firebaseConfig = {
    apiKey: "AIzaSyDOOuPPSK8doL8yZcGO9DlCqmVHvaUdQss",
    authDomain: "project-kwitter-de54e.firebaseapp.com",
    databaseURL: "https://project-kwitter-de54e-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-de54e",
    storageBucket: "project-kwitter-de54e.appspot.com",
    messagingSenderId: "1015998641077",
    appId: "1:1015998641077:web:75d935093770e8e8181ffc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_room()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding user"
    });
}

function logout()
{
    window.location = "kwitter.html";
}