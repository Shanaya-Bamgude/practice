var firebaseConfig = {
    apiKey: "AIzaSyDpVN5nMMH8en8w5x0_kCjHO9kyJMa5pJI",
    authDomain: "classtest-da6f2.firebaseapp.com",
    databaseURL: "https://classtest-da6f2-default-rtdb.firebaseio.com",
    projectId: "classtest-da6f2",
    storageBucket: "classtest-da6f2.appspot.com",
    messagingSenderId: "133678530930",
    appId: "1:133678530930:web:f1654e84a05f4ce6ce5deb",
    measurementId: "G-8ZCP1J08G0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }
