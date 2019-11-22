firebase.initializeApp(config);
var maintext= document.getElementById("maintxt");
//var sub_btn=document.getElementById("sub_btn");
//var firehead=document.getElementById("firehead");
//var abctxt=document.getElementById("abctxt");
var get_btn=document.getElementById("get_btn");
//var passtext=document.getElementById("passtext");*/

/*var abctxtref = firebase.database().ref().child("heading");
abctxtref.on('value',function(emailsnap){
  abctxt.innerText = emailsnap.val();

});*/

function getclick(){
  var maintxtRef = firebase.database().ref('vs');
  maintxtRef.on('value',function(datasnapshot){
   var TextName = datasnapshot.val();
   console.log(TextName);
   maintext.value=TextName;



  } );

}

/*function submitclick(){
  var database = firebase.database().ref();
  var messagetext = maintxt.value;
  database.child("text").set(messagetext);
  maintxt.value=messagetext;
}*/
/*function getclick(){
  var emailgetRef=firebase.database().ref().child('email');
  emailgetRef.on('value',function(email){
    emailget.innerText= email.val();
  });
}*/
