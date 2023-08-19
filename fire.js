
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
//   import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
//   import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
//   import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword, signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  
//   const firebaseConfig = {
//     apiKey: "AIzaSyA2Awsq_J7TMFSWkIeJpZ3JpkWEl38YUV0",
//     authDomain: "hackathone-aa2c9.firebaseapp.com",
//     databaseURL: "https://hackathone-aa2c9-default-rtdb.firebaseio.com",
//     projectId: "hackathone-aa2c9",
//     storageBucket: "hackathone-aa2c9.appspot.com",
//     messagingSenderId: "429478671722",
//     appId: "1:429478671722:web:67bf8ecf21711f9fc3e113",
//     measurementId: "G-GNNPQDQETC"
//   };

//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const auth = getAuth(app);

      
//      var signUp = document.getElementById('signUp')
//      signUp.addEventListener("click", ()=>{
     
     
//          var username = document.getElementById('username').value
//          var email = document.getElementById('email').value
//          var password = document.getElementById('password').value
     
//      createUserWithEmailAndPassword(auth, email, password)
//        .then((userCredential) => {
//          // Signed in 
//          sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // Email verification sent!
//     // ...
//     alert("link send")
//     window.location.href='./mcq%20web/index.html'
//   });
//          const user = userCredential.user;
//          alert('user created!')
//          // ...
//        })
//        .catch((error) => {
//          const errorCode = error.code;
//          const errorMessage = error.message;
//          alert(errorMessage)
//          // ..
//        });
//      })
     
     let mytxt1 = document.getElementById('mytxt1')
let mytxt2 = document.getElementById('mytxt2')
// let mytxt3 = document.getElementById('mytxt3')
let btn = document.getElementById('add')
let box = document.getElementById('box')



btn.addEventListener('click', ()=>{
    console.log(mytxt1.value)
    let notes = document.createElement('div');
    notes.style.boxShadow = '1px 1px 7px -1px black' 
    notes.style.display= 'inline-block' 
    notes.style.margin = '10px 0px 0px 10px'
    notes.style.padding = '0rem 1rem '
    notes.style.borderRadius = '4px'
    notes.style.width = '15rem'
    notes.style.overflowWrap = 'break-word'


    box.appendChild(notes)
    let heading = document.createElement('h1');
    notes.appendChild(heading)
   heading.innerHTML = mytxt1.value
    let para = document.createElement('p');
    notes.appendChild(para)
   para.innerHTML = mytxt2.value

    let edit = document.createElement('button');
    edit.innerHTML = 'Edit'
    edit.addEventListener('click', ()=>{
     mytxt1.value = heading.innerHTML;
     mytxt2.value = para.innerHTML;
     notes.style.display = 'none'
    })
    notes.appendChild(edit)
    let dlt = document.createElement('button');
    dlt.innerHTML = 'Delete'
    dlt.addEventListener('click', ()=>{
        notes.style.display = 'none'
    })
    notes.appendChild(dlt)
    // localStorage.setItem("tod", JSON.stringify([mytxt1,mytxt2]))
    mytxt1.value = "";
    mytxt2.value = "";

})