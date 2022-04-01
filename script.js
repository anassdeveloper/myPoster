const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const sendData = document.getElementById("sendData");
const users = document.querySelector(".users");
const nano = document.querySelector(".nano");
const myFileInput = document.getElementById("myFileInput");
const post = document.querySelector(".post");
const createPost = document.getElementById("create-post");
const icon_x = document.querySelector(".icon-x");
const lower = document.getElementById("lower");
const right = document.querySelector(".right");

const nanoDeg = [
    {name: "anassch99", url:"image/anas10.jpg", post:"23", flower:"12k", sending:"0"},
    {name: "fatimazahrae890", url:"image/fati.jpg", post:"2133", flower:"567k", sending:"33"},
    {name: "mahachentouf", url:"image/midoo.jpg", post:"453", flower:"1M", sending:"12"},
]

//=======================================//
var dataBase;
if(localStorage.posts != null){
    dataBase = JSON.parse(localStorage.posts);
}else{
    dataBase = [];
}
//?????????????????????????????????????????//
lower.onclick = () => {
    users.innerHTML = "";
    innerUsers()
    //follower();
}
icon_x.onclick = () => {
    post.classList.remove("visi");
    innerUsers();
}
// image  
createPost.onclick = () => {
    users.innerHTML = "";
    post.classList.add("visi");
    /*
    nano.innerHTML = `
    <div class="post">
      <h2 class="heading">Create Your Post</h2>
      <textarea id="fName" placeholder="Enter your text Here please" rows="4"></textarea>
      <label for="myFileInput">choose photo <ion-icon name="image-outline"></ion-icon> </label>
      <input type="file" name="" id="myFileInput">
       <button id="sendData" class="btn">Send</button>
     </div>
    `;
    */
}
sendData.onclick = () => {
    post.classList.remove("visi");
    innerUsers();
    
}

//======================BTN ================//

myFileInput.addEventListener("change", function(){
        const reader = new FileReader();
        let date = new Date();
        let time = new Date();
        let myTime = time.toLocaleTimeString()
        //
        reader.addEventListener("load", () => {
            console.log(reader.result);
            begin(fName.value,date.toLocaleDateString(), myTime ,reader.result);
        })
        reader.readAsDataURL(this.files[0]);
        
    })   

//------------------------------------------//
function begin(fname, date, myTime, url){
    if(fname !== "" && url !== null){
        let obj = {
            name:fname,
            city:date,
            myTime: myTime,
            url: url
        }
        dataBase.push(obj);
        localStorage.setItem('posts', JSON.stringify(dataBase));
        
    }else{
        alert("Please Enter Data")
    }
    
    console.log(dataBase);
    clearData();
    //innerUsers();
    
}







function clearData(){
    fName.value = "";
    lName.value = "";
}

function innerUsers(){
   for(let i = 0; i < dataBase.length; i++)
   {
    users.innerHTML += `
    <div class="user">
       <div class="bx">
       <h2 class="hed">${dataBase[i].name}</h2>
       <span class="sp">${dataBase[i].myTime} <ion-icon class="icon" name="time-outline"></ion-icon></span>
       </div>
       <img src="${dataBase[i].url}"/>
       <span class="spp">${dataBase[i].city}<ion-icon class="icon" name="calendar-outline"></ion-icon>
       </span>
       <div class="react">
          <span>12k<ion-icon name="heart-outline"></ion-icon></span>
          <span>292<ion-icon name="chatbubbles-outline"></ion-icon></span>
       </div>
    </div>
  `
   }
    follower()
}

//localStorage.clear();


function follower(){
    for(let i = 0; i < nanoDeg.length; i++){
    right.innerHTML += `
                  <div class="box">
                 <div class="use1">
                     <img src=" ${nanoDeg[i].url}" height="50" alt="logo">
                     <span class="us11">${nanoDeg[i].name}
                     <ion-icon class="fc" name="radio-button-on-outline"></ion-icon>
                     </span>
                     
                 </div>
                 <div class="des">
                     <span class="mn">${nanoDeg[i].post} Posts</span>
                     <span class="mn"> ${nanoDeg[i].flower} aboone</span>
                     <span class="mn">${nanoDeg[i].sending} abonner</span> 
                 </div>
                 <div class="botoon">
                     <button class="lp1">follow</button>
                     <button class="lp2">message</button>
                 </div>
             </div>
    `
}
}
