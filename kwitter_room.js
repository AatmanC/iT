
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBxk7tBIlVkrytWY-L4_CkjQHTXZrHOUF0",
      authDomain: "kwitter-c93-ca985.firebaseapp.com",
      databaseURL: "https://kwitter-c93-ca985-default-rtdb.firebaseio.com",
      projectId: "kwitter-c93-ca985",
      storageBucket: "kwitter-c93-ca985.appspot.com",
      messagingSenderId: "447225015171",
      appId: "1:447225015171:web:c2e66cc82dbf21462e64b6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - "+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
           window.location = "index.html";
} 