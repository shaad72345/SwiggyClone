let resto=JSON.parse(localStorage.getItem("selected-resto"))
let foodItems=JSON.parse(localStorage.getItem("CartItems")) || []
let userData=JSON.parse(localStorage.getItem("loginUser")) || []
let userName=document.getElementById("cart-UserName")
let number=document.getElementById("number")
console.log(userData)
if(userData.length!=0){
userName.textContent=userData[0].name
number.textContent=userData[0].mobile
document.querySelector(".address-enter").style.display="block"
}else{
    userName.textContent="Please Logi In"
number.textContent="Sign Up for Proceed"
}
showItems(resto);

function showItems(resto){
      let img=document.createElement("img")
      img.setAttribute("src",resto.img)
      img.setAttribute("class","res-img")

      let restoName=document.createElement("p")
      restoName.textContent=resto.name;
      let div1=document.createElement("div")
      div1.setAttribute("class","div1")
      let div2=document.createElement("div")
      div2.setAttribute("class","div2")
      var total=0;

      div1.append(img,restoName)
      foodItems.forEach(element => {
          let item=document.createElement("div")
          item.setAttribute("class","cartItem")
          // let icon=document.createElement("img")
          // icon.setAttribute("src",element.TypeIcon)
          let div3=document.createElement("div")
          div3.setAttribute("class","div3")
          let itemName=document.createElement("p")
          itemName.textContent=element.Item
          let quantity=document.createElement("p")
          quantity.textContent="Qty:"+element.Qty;
          let price=document.createElement("p")
          price.textContent="Total:"+element.Qty*element.Price
          total+=element.Qty*element.Price
          div3.append(quantity,price)
          item.append(itemName,div3)
          div2.append(item)
      });
      let div4=document.createElement("div")
      let bill=document.createElement("h3")
      bill.textContent="Bill Details"
      let hr=document.createElement("hr")
      let div5=document.createElement("div")
      let p1=document.createElement("p")
      let p2=document.createElement("p")
      p1.textContent="TO PAY"
      p2.textContent="Rs."+total
      div5.append(p1,p2)
      div4.append(bill,hr,div5)
      div5.setAttribute("class","div5")


      document.querySelector(".right").append(div1,div2,div4)


}

let addressSubmit=document.getElementById("address-submit")
addressSubmit.onsubmit=()=>{
    event.preventDefault();
   let  flat=document.getElementById("flat-no").value
   let door=document.getElementById("door-no").value
   let address=document.getElementById("address").value
   let type=document.getElementById("type").value
   console.log(flat,door,address,type)
   if(address!="" && type!=""){
   document.querySelector(".address-enter").style.display="none"
    let fN=document.getElementById("f-n").innerText=flat
    let dN=document.getElementById("d-n").innerText=door
    let ad=document.getElementById("ad").innerText=address.toUpperCase()
    document.getElementById("typ").innerText=type.toUpperCase()
    document.querySelector(".final-address").style.display="block"
    document.querySelector(".three").style.display="block"

   }else{
    alert("Something went wrong!")
   }

}

document.getElementById("payment-method").onchange=()=>{
    if(document.getElementById("payment-method").value=="cod"){
       document.getElementById("card").style.display="none"

    }else{
        document.getElementById("card").style.display="block"

    }
}

document.getElementById("payment-submit").onsubmit=()=>{
    event.preventDefault()
    location.href="./thanking.html"
}



