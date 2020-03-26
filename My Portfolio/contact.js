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
            
