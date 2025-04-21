let userDetails = [];
let userData = {};
let userName = "";
let userId = 0;
let userEmail = "";
let addUserbtn = document.getElementById("addUser");
let showUserbtn=document.getElementById('showUser')
let clearUserbtn=document.getElementById('clearUser')
var userIdnum=document.getElementsByClassName('userIdnum')
var userNametext=document.getElementsByClassName('userNametxt')
var userEmailtext=document.getElementsByClassName('userEmailtxt')
addUserbtn.addEventListener("click", () => {
  userId = prompt("Enter User Id :");
  userName = prompt("Enter User Name :");
  userEmail = prompt("Enter User Email :");
  userData.userId = userId;
  userData.userName = userName;
  userData.userEmail = userEmail;
  userDetails.push(userData);
  if (userDetails.length > 0) {
    alert("User Details Added successfully");
  }
});
showUserbtn.addEventListener('click',()=>
{
    userDetails.map((ele,index)=>
    {
        
        userIdnum[0].textContent='userId : '+ele.userId
        userNametext[0].textContent='userName : '+ele.userName
        userEmailtext[0].textContent='userEmail : '+ele.userEmail
    })
    console.log(userDetails)
})
clearUserbtn.addEventListener('click',()=>{
userDetails.pop(userData)
userIdnum[0].textContent='userId : '+' '
        userNametext[0].textContent='userName : '+' '
        userEmailtext[0].textContent='userEmail : '+' '
console.log(userDetails)
})