// Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyC71IIksBjm4A_rGh4QT-UQZBiG07VFtME",
     authDomain: "my-portfolio-13fbf.firebaseapp.com",
     databaseURL: "https://my-portfolio-13fbf.firebaseio.com",
     projectId: "my-portfolio-13fbf",
     storageBucket: "my-portfolio-13fbf.appspot.com",
     messagingSenderId: "1015063904934",
     appId: "1:1015063904934:web:7784aa0872606a91a7ea67",
     measurementId: "G-C4R2X2MR1C"
   };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   //Reference messages collection
           var messagesRef = firebase.database().ref("messages"); 
 
// Listen for submit 
document.getElementById('Contact').addEventListener('submit', submitForm);
 
//Submit 
          function submitForm(e){
               e.preventDefault();
               
//Get values
           var name = getInputVal('fullname');
           var email = getInputVal('email');
           var phone = getInputVal('phone');
           var message = getInputVal('message');
           
// Save  	
           saveMessage(name, email, phone, message);
           
//show alert
document.querySelector('.alert').style.display = 'block';

//hide alert after 3 seconds
            setTimeout(function(){ 

                 document.querySelector('.alert'). getElementByClassName.display ="none";

            },3000);

            //clear form           
            document.getElementById('Contact').reset();
 
 //Function to get form values
           function getInputVal(id){
                return document.getElementById(id).value;
 
      }
 
         
//clear form           
           document.getElementById('Contact').reset();

//Function to get form values
          function getInputVal(id){
               return document.getElementById(id).value;
          }
        }
        // Save message to firebase
        function saveMessage(name, email, phone, message){
          var newMessageRef = messagesRef.push();
          newMessageRef.set({
               name: name,
               email: email,
               phone: phone,
               message:message

          });
      }

   

  
            
 