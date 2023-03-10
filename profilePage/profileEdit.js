let mob=document.getElementById("mobile-edit")
let em=document.getElementById("email-edit")
let profile_name=document.getElementById("profile-name")
let profile_emial=document.getElementById("profile-emial")

let LoginData=JSON.parse(localStorage.getItem("loginUser")) || []
let users=JSON.parse(localStorage.getItem("usersData")) || []
let update=document.getElementById("update")

let a;
let b;
if(LoginData.length!=0){
    mob.value=LoginData[0].mobile
    em.value=LoginData[0].email
    profile_name.innerText=LoginData[0].name
    profile_emial.innerText=LoginData[0].mobile+", "+LoginData[0].email
    a=LoginData[0].mobile
    b=LoginData[0].email
}
update.onclick=()=>{
    event.preventDefault()
        let newMob=mob.value
    let newmail=em.value
    LoginData[0].mobile=newMob
    LoginData[0].email=newmail
    users.map(ele=>{
        console.log(ele)
        if(a===ele.mobile){
            ele.mobile=newMob
            ele.email=newmail
        }
    })
    localStorage.setItem("usersData",JSON.stringify(users))
   
}

let profile_container=document.querySelector(".rightChildSec")



let ordersBtn=document.getElementById("one")
let swiggyOneBtn=document.getElementById("two")
let favBtn=document.getElementById("three")
let payBtn=document.getElementById("four")
let adsBtn=document.getElementById("five")
let settingBtn=document.getElementById("six")

ordersBtn.onclick=()=>{
    document.getElementById("swiggy_one").style.display="none"
    document.querySelector(".payment-method").style.display="none"
    document.querySelector(".profile-address").style.display="none"
    document.querySelector(".profile-setting").style.display="none"
    document.querySelector("._1stFr").style.display="block"
    document.querySelector(".favRes-container").style.display="none"

}
swiggyOneBtn.onclick=()=>{
    document.getElementById("swiggy_one").style.display="flex"

    document.querySelector(".payment-method").style.display="none"
    document.querySelector(".profile-address").style.display="none"
    document.querySelector(".profile-setting").style.display="none"
    document.querySelector("._1stFr").style.display="none"
    document.querySelector(".favRes-container").style.display="none"

}
favBtn.onclick=()=>{
    document.getElementById("swiggy_one").style.display="none"

    document.querySelector(".payment-method").style.display="none"
    document.querySelector(".profile-address").style.display="none"
    document.querySelector(".profile-setting").style.display="none"
    document.querySelector("._1stFr").style.display="none"

    document.querySelector(".favRes-container").style.display="grid"

}

payBtn.onclick=()=>{
    document.querySelector(".payment-method").style.display="block"

    document.getElementById("swiggy_one").style.display="none"
    document.querySelector(".profile-address").style.display="none"
    document.querySelector(".profile-setting").style.display="none"
    document.querySelector("._1stFr").style.display="none"
document.querySelector(".favRes-container").style.display="none"
}
adsBtn.onclick=()=>{
    document.querySelector(".profile-address").style.display="grid"

    document.getElementById("swiggy_one").style.display="none"
    document.querySelector(".payment-method").style.display="none"
    document.querySelector(".profile-setting").style.display="none"
    document.querySelector("._1stFr").style.display="none"
    document.querySelector(".favRes-container").style.display="none"

}

settingBtn.onclick=()=>{
    document.querySelector(".profile-setting").style.display="block"

    document.getElementById("swiggy_one").style.display="none"
    document.querySelector(".payment-method").style.display="none"
    document.querySelector(".profile-address").style.display="none"
    document.querySelector("._1stFr").style.display="none"
    document.querySelector(".favRes-container").style.display="none"

}

let favData= JSON.parse(localStorage.getItem("FavRest")) || []

showData(favData)
function showData(d){
    document.querySelector(".favRes-container").innerHTML=""
    d.forEach(function(elem){
        let card = document.createElement("div")
        card.setAttribute("class","card")

        let img = document.createElement("img")
        img.src = elem.img

        let p = document.createElement("p")
        p.textContent = elem.name
        p.setAttribute("class","cname")

        let type = document.createElement("p")
        type.textContent = elem.type
        type.setAttribute("class","ctype")

        let rdiv = document.createElement("div")
        let rating = document.createElement("p")
        rating.textContent = "★"+elem.rating
        let time = document.createElement("p")
        time.textContent = elem.time + " MINS"
        let forTwo = document.createElement("p")
        forTwo.textContent = "₹"+ elem.forTwo + " FOR TWO"
        rdiv.setAttribute("class","crdiv")
        rdiv.append(rating,"•",time,"•",forTwo)


        let offer = document.createElement("p")
        offer.innerHTML = '<i class="fa-solid fa-certificate"></i>'+elem.offer
        
        offer.setAttribute("class","coffer")


        let qv = document.createElement("p")
        qv.textContent = "QUICK VIEW"
        qv.setAttribute("class","cqv")

        card.append(img,p,type,rdiv,offer,qv)
        document.querySelector(".favRes-container").append(card)
    })
}





























