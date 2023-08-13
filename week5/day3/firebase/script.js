const firebaseConfig = {
  apiKey: "AIzaSyDrewec4SkyQ7LKh49Bs7CQrN9yWLZ-XR4",
  authDomain: "quotegenorator.firebaseapp.com",
  projectId: "quotegenorator",
  storageBucket: "quotegenorator.appspot.com",
  messagingSenderId: "1014183877947",
  appId: "1:1014183877947:web:9d3c76f7c5393a150b2b1e",
  measurementId: "G-SWYMWLH14F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()

console.log(db)

let user = {
    name: "David",
    age: "15",
    hobby: "Making Games",
    Dream_location: "Japan and UK"
}

button = document.getElementById("btn");
nameField = document.getElementById("name");
quoteField = document.getElementById("quote");

button.addEventListener("click", getInfo);

function getInfo(e) {
    e.preventDefault()
	let name = nameField.value;
	let quote = quoteField.value;

	let user = {
		name: name,
		quote: quote,
	};

	return user;
}

db.collection("user_info").add(user)
.then(function(data){
    console.log("Data Sent.")
})
.catch(function(err){
    console.log("Error", err)
})
