// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1GqMITaChOkFxxS26WiYucMBxpp9OsjI",
  authDomain: "my-mom-loves-cookies.firebaseapp.com",
  databaseURL: "https://my-mom-loves-cookies-default-rtdb.firebaseio.com",
  projectId: "my-mom-loves-cookies",
  storageBucket: "my-mom-loves-cookies.appspot.com",
  messagingSenderId: "222696000160",
  appId: "1:222696000160:web:2cc95a1980231235a697c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS

function addUser() {

    user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
    
  }
  
