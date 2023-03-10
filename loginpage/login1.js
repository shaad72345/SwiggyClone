let createBtn=document.querySelector("#create")
let alreadyBtn=document.querySelector("#already")
let signupDiv=document.querySelector(".signup-div")
let signupForm=document.getElementById("signup-form")
let loginDiv=document.querySelector(".login-div")
let loginForm=document.getElementById("login-form")
let signinNav=document.querySelector(".signin-nav")
let profileNav=document.querySelector(".UserName")
let profileName=document.getElementById("Profile")
let logout=document.getElementById("logout")
let toast_body=document.querySelector(".toast-body")


// loginpage to signup page
document.querySelector("body").onload=()=>{
    console.log(profileNav)
    let data=JSON.parse(localStorage.getItem("loginUser")) || []
    if(data.length==1){
        profileNav.style.display="block"
        signinNav.style.display="none";
        console.log( data)
        profileName.innerText=data[0].name.slice(0,7)+"..";
    }else{
        profileNav.style.display="none"
    }


    //last search address  when onload 
    let address=JSON.parse(localStorage.getItem("lastAddress"))
    var other=document.querySelector(".other")
    other.innerText=address.delivaryLocation
    var town=document.getElementById("town")
    town.innerText=`${address.city},${address.state},${address.country}`
    console.log(other,town)


    let recentSearch=JSON.parse(localStorage.getItem("recentSearch")) || []
    displayRecentSearch(recentSearch)
    
}

createBtn.addEventListener("click",()=>{
    document.getElementById("mobile").value=""
    signupDiv.style.display="block"
    signupForm.style.display="block"
    loginDiv.style.display="none"
    loginForm.style.display="none"
})

// signup page to loginpage
alreadyBtn.addEventListener("click",()=>{
  document.querySelector(".mobile").value=""
document.getElementById("email").value=""
document.getElementById("name").value=""
    signupDiv.style.display="none"
    signupForm.style.display="none"
    loginDiv.style.display="block"
    loginForm.style.display="block"

})

// sighuppage submit
signupForm.onsubmit=()=>{
    event.preventDefault()

let mobile=document.querySelector(".mobile").value
let email=document.getElementById("email").value
let name=document.getElementById("name").value
let users=JSON.parse(localStorage.getItem("usersData")) || [];
let array=users.filter((element)=>{
    return mobile==element.mobile || email==element.email
})
console.log(array)
if(array.length==1){
    Alert("User Already Register!",signupForm,"warning")

}else if(mobile.length!=10 || email=="" || name==""){
    Alert("Please Enter Correct Details!",signupForm,"warning")
}else{
    var obj={
        mobile:mobile,
        name:name,
        email:email,
    }
    document.querySelector(".mobile").value=""
    document.getElementById("email").value=""
    document.getElementById("name").value=""
    users.push(obj)
    localStorage.setItem("usersData",JSON.stringify(users));
    signupDiv.style.display="none"
    signupForm.style.display="none"
    loginDiv.style.display="block"
    loginForm.style.display="block"
    Alert("Sign up Successfully",signupForm,"sucess")
}
}


// loginpage submit

loginForm.onsubmit=()=>{
    event.preventDefault()
    let mobile=document.getElementById("mobile").value
    let users=JSON.parse(localStorage.getItem("usersData")) || [];
    if(mobile.length!=10){
        Alert("Please Enter Valid Mobile Number!",loginForm,"warning")
    }else{
        let obj=users.filter((element)=>{
            return mobile==element.mobile
        })
        console.log(obj)
        if(obj.length==0){
            Alert("User Not Register!",loginForm,"warning")
        }else{
            let log=document.getElementById("log")
            log.setAttribute("data-bs-dismiss","offcanvas")
            log.setAttribute("aria-label","Close")
            console.log(log)
                localStorage.setItem("loginUser",JSON.stringify(obj));
                signinNav.style.display="none";
                profileNav.style.display="block"
                console.log(obj)
                profileName.innerText=obj[0].name.slice(0,7)+"..";
                document.getElementById("mobile").value=""
                Alert("Congratulations! Login Successfully",loginForm,"sucess")
                // data-bs-dismiss="offcanvas" aria-label="Close"

           
            
        }
    }
}
  



//logout

logout.onclick=()=>{
    let arr=[];
    localStorage.setItem("loginUser",JSON.stringify(arr))
    signinNav.style.display="block";
    profileNav.style.display="none"
    Alert("logout Successfully!",loginForm,"sucess")
}



//loast alert
function Alert(word,btn,type){
    let toastBody=document.querySelector(".toast-body")
    if(type=="sucess"){
        toastBody.style.backgroundColor="#dff0d8";
    }else{
        toastBody.style.backgroundColor="#f2dede";
    }
const toastLiveExample = document.getElementById('liveToast')
console.log(word,toast_body)
    toast_body.innerText=word
    btn.addEventListener('submit', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}


///get current location
let currentLocBtn=document.querySelector(".gps")

currentLocBtn.onclick=()=>{
    function getCoordintes(){
        const options = {
          enableHighAccuracy: true,
          timeout: 700,
          maximumAge: 0,
        };
        function success(pos) {
          const crd = pos.coords;
          let coordinates=[crd.latitude,crd.longitude]
          getCity(coordinates)
        }
        
        function error(err) {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        
        navigator.geolocation.getCurrentPosition(success, error, options);
        }
        // Step 2: Get city name
        function getCity(coordinates) {
            var xhr = new XMLHttpRequest();
            var lat = coordinates[0];
            var lng = coordinates[1];
        
            // Paste your LocationIQ token below.
            xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.6d4f0aab378ea9b394e88add2fe0490c&lat=" +
            lat + "&lon=" + lng + "&format=json", true);
            xhr.send();
            xhr.onreadystatechange = processRequest;
            xhr.addEventListener("readystatechange", processRequest, false);
        
            function processRequest(e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    city = response.address.city || response.address.county;
			        state=response.address.state
			        country=response.address.country
			        delivaryLocation=response.address.county
                    var other=document.querySelector(".other")
                    other.innerText=delivaryLocation
                    var town=document.getElementById("town")
                    town.innerText=`${city},${state},${country}`
                    console.log(other,town)
                    var obj={
                        city:city,
                        state:state,
                        country:country,
                        delivaryLocation:delivaryLocation,
                        lat:lat,
                        lon:lng
                    }
                    localStorage.setItem("lastAddress",JSON.stringify(obj))

                    return;
                }
            }
        }
        getCoordintes();

}


// location by input search


 let inputSearch=document.getElementById("location-input")
 inputSearch.onkeypress=()=>{
    if(event.key=="Enter" && inputSearch.value!=""){
        var other=document.querySelector(".other")
        var town=document.getElementById("town")
        other.innerText="Other"
        town.innerText=`${toTitleCase(inputSearch.value)},India`

        let obj={
            city:inputSearch.value,
            country:"India",
        }
        let recentSearch=JSON.parse(localStorage.getItem("recentSearch")) || []
        recentSearch.push(obj)
        displayRecentSearch(recentSearch)
        localStorage.setItem("recentSearch",JSON.stringify(recentSearch))
        inputSearch.value=""

    }
 }

 //diplaying reccent search

 function displayRecentSearch(data){
    let recentSearchContainer=document.getElementById("recent-search-container")
    recentSearchContainer.innerText=""
    console.log("hii")
    data.map (element => {
        console.log("hii")

        let areaContainer=document.createElement("div")
        areaContainer.setAttribute("id","area-container")
        // class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"
        // areaContainer.setAttribute("class","btn-close")
        areaContainer.setAttribute("data-bs-dismiss","offcanvas")
        areaContainer.setAttribute("aria-label","Close")
        let area=document.createElement("div")
        area.setAttribute("id","area")
        let city=document.createElement("div")
        city.setAttribute("id","search-city-name")
        city.innerText=element.city.toUpperCase()
        let state=document.createElement("div")
        state.setAttribute("id","search-city-state")
        state.innerText="India"
        area.append(city,state)
        areaContainer.append(area)
        recentSearchContainer.append(areaContainer)
        areaContainer.onclick=()=>{
            var other=document.querySelector(".other")
            var town=document.getElementById("town")
            other.innerText="Other"
            let c=toTitleCase(element.city)
            town.innerText=`${c},India` 
        }
        


    });

 }

 //function to convert titlecase/running letter

 function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }



























// use all this link for navbar and login and signup
// css

/* <script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="navbar.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"> */
/* <link rel="stylesheet" href="../pages/login.css"> */


// scripts
// <script src="../pages/login.js" type="module"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

//     <script src="https://kit.fontawesome.com/977289aa03.js" crossorigin="anonymous"></script>



