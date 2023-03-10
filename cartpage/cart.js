
=======
document.getElementById("navbar").innerHTML = navbar;
document.getElementById("footer").innerHTML = footer;

var cartitem = JSON.parse(localStorage.getItem("user_log_session")) || [];
// console.log(cartitem.user_cart);
var addressArr = JSON.parse(localStorage.getItem("address")) || [];
var id = 1;
let SelectedREs=JSON.parse(localStorage.getItem("selected-resto"))

if (addressArr.length != 0) {
  document.getElementById("address").innerHTML = "";
  displayAddress(addressArr);
}
const map = () => {
    let value = "kanpur";
    let div = `    <div class="mapouter"><div class="gmap_canvas"><iframe width="349" height="310" id="gmap_canvas" src="https://maps.google.com/maps?q=${value}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a><br><style>.mapouter{position:relative;text-align:right;height:310px;width:349px;}</style><a href="https://www.embedgooglemap.net">embed google map location</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:310px;width:349px;}</style></div></div>
      `;
    document.getElementById("map").innerHTML = div;
  };
  map();
  let getAddress = () => {
    w3_close();
    let flat = document.getElementById("door").value;
    let landmark = document.getElementById("landmark").value;
    homevalue;
    let obj = {
      id: id,
      name: "name",
      flat: flat,
      landmark: landmark,
      home: homevalue,
      time: "36 MINS",
    };
    addressArr.push(obj);
    id++;
    localStorage.setItem("address", JSON.stringify(addressArr));
  
    displayAddress(addressArr);
  };



  
  function displayAddress(data) {
    document.getElementById("addnew").innerHTML = "";
    document.getElementById("confirmAdd").innerHTML = "";
    data.map(function (el,id) {
      var div1 = document.createElement("div");
      div1.setAttribute("class", "newone");
      var div2 = document.createElement("div");
      div2.setAttribute("class", icon);
      var div3 = document.createElement("div");
      div3.setAttribute("class", "addressBox");
      var div4 = document.createElement("div");
      div4.innerText = el.home;
      var div5 = document.createElement("p");
      div5.innerText = el.flat;
      var div6 = document.createElement("p");
      div6.innerText = el.landmark;
      var div7 = document.createElement("div");
      div7.setAttribute("class", "time");
      div7.innerText = "36 MINS";
      var div8 = document.createElement("div");
      div8.append(div5, div6);
      let btn = document.createElement("button");
      btn.innerText = "DELIVER HERE";
      btn.addEventListener("click", function () {
        displayPayment();
        displayConfirmAddress(el,id);
      });
      var div9 = document.createElement("div");
      div9.append(div4, div8, div7, btn);
      div3.append(div9);
      div1.append(div2, div3);
  
      document.getElementById(
        "address"
      ).innerHTML = `<div class="flex"><div>Select Address</div>
      <div><button onclick="w3_open()" id="addbtn">ADD NEW</button></div></div>
      `;
      document.getElementById("addnew").append(div1);
    });
  }
  
  function displayConfirmAddress(el,id) {
  
    console.log(el,id);
  
    document.getElementById("addnew").innerHTML = "";
    document.getElementById("confirmAdd").innerHTML = "";
    document.getElementById("address").innerHTML = "";
    var div1 = document.createElement("div");
    div1.setAttribute("class", "cnfrm");
    var div2 = document.createElement("div");
    div2.innerText = "DELIVERY ADDRESS";
    var i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-circle-check");
    div2.append(i);
    var div3 = document.createElement("div");
    div3.innerText = "CHANGE";
    div3.addEventListener("click", displayAddress);
    div1.append(div2, div3);
    document.getElementById("confirmAdd").append(div1);
    let div = `
                      
                      <div>
                          <div>${el.home}</div>
                          <div>
                              <p>${el.flat}</p>
                              <p>${el.landmark}</p>
                          </div>
                          <div>${el.time}</div>
                      </div>
      `;
      console.log(div)
    document.getElementById("confirmAdd").innerHTML += div;
  }






























  
  
  document.getElementById("bottom").addEventListener("click", getAddress);
  var homevalue;
  var icon;
  function check() {
    homevalue = event.target.id;
    if (homevalue == "Home") {
      icon = "fa-solid fa-house";
      document.getElementById("Home").style.color = "black";
      document.getElementById("Work").style.color = "#93959f";
      document.getElementById("other").style.color = "#93959f";
    }
    if (homevalue == "Work") {
      icon = "fa-solid fa-briefcase";
      document.getElementById("Work").style.color = "black";
      document.getElementById("Home").style.color = "#93959f";
      document.getElementById("other").style.color = "#93959f";
    }
    if (homevalue == "other") {
      icon = "fa-solid fa-location-dot";
      document.getElementById("other").style.color = "black";
      document.getElementById("Work").style.color = "#93959f";
      document.getElementById("Home").style.color = "#93959f";
    }
  }
  document.getElementById("icons").addEventListener("click", check);
  
  function displayPayment() {
    document.getElementById("removeafter").innerText = "";
    document.getElementById("hide").setAttribute("class", "unhide");
  }
  
  // payment
  
  var form = document.querySelector("form").innerHTML;
  var placeOrderBtn = document.querySelector(
    ".payNowAjax-base-actionButton"
  ).innerHTML;
  document.getElementById("card").addEventListener("click", showCard);
  document.getElementById("card").addEventListener("click", showCard);
  function showCard() {
    var x = document.querySelector("form");
    document.querySelector("#card").style.color = "#282c3f";
    document.querySelector("#cod").style.color = "#686b78";
    document.querySelector("#cod").style.backgroundColor = "#edf1f7";
    document.querySelector("#card").style.backgroundColor = "white";
    x.innerHTML = form;
    var btn = document.querySelector(".payNowAjax-base-actionButton");
    btn.setAttribute("id", "cart_items_button2");
    // btn.addEventListener("click", gotoDashBoard);
  }
  document.getElementById("cod").addEventListener("click", showCod);
  function showCod() {
    var form = document.querySelector("form");
    form.innerHTML = "";
  
    document.querySelector("#card").style.color = "#686b78";
    document.querySelector("#cod").style.color = "#282c3f";
    document.querySelector("#card").style.backgroundColor = "#edf1f7";
    document.querySelector("#cod").style.backgroundColor = "white";
  
    var div = document.createElement("div");
    var headingDiv = document.createElement("div");
    headingDiv.innerText = "Pay on delivery (Cash/Card/UPI)";
    headingDiv.setAttribute("class", "card-base-heading");
  
    var inputDiv = document.createElement("div");
    inputDiv.innerText =
      "You can pay via Cash/Card or UPI enabled app at the time of delivery. Ask your delivery executive for these options.";
    inputDiv.setAttribute("class", "codCardUI-base-helpText");
    div.append(headingDiv, inputDiv);
  
    var btn = document.createElement("button");
    btn.setAttribute("class", "payNowAjax-base-actionButton");
    btn.setAttribute("id", "cart_items_button");
    btn.innerHTML = placeOrderBtn;
    btn.addEventListener("click", gotoDashBoard);
    form.append(div, btn);
  }
  
  // document.getElementsById("placeOrderBtn").addEventListener("click", () => {
  //   // event.preventDefault();
  //   alert("Order Placed Successfully!");
  //   location.href = "../dashboard.html";
  // });
  // displayright
  
  function displayright() {
    var totalamt = 0;
    const data = cartitem.user_cart;
    // data.map(function (el) {
    //   totalamt += el.price;
    //   let div = `
    //   <div class="row mb-4 d-flex justify-content-between align-items-center dish">
    //                       <div class="col-md-2 col-lg-2 col-xl-2">
    //                         <img height="20px" width="20px"
    //                           src="./img/800px-Indian-vegetarian-mark.svg.png"
    //                           class="img-fluid rounded-3" alt="Cotton T-shirt">
    //                       </div>
    //                       <div class="col-md-3 col-lg-3 col-xl-3">
    //                         <h6 class="text-muted">${el.item_name}</h6>
    //                       </div>
    //                       <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
    //                         <button class="btn btn-link px-2"
    //                           onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
    //                           <i class="fas fa-minus"></i>
    //                         </button>
=======
    const data = cartitem.user_cart || [];
    data.map(function (el) {
      totalamt += el.price;
      let div = `
      <div class="row mb-4 d-flex justify-content-between align-items-center dish">
                          <div class="col-md-2 col-lg-2 col-xl-2">
                            <img height="20px" width="20px"
                              src="./img/800px-Indian-vegetarian-mark.svg.png"
                              class="img-fluid rounded-3" alt="Cotton T-shirt">
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <h6 class="text-muted">${el.item_name}</h6>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button class="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                              <i class="fas fa-minus"></i>
                            </button>
      
    //                         <input id="${el.id}" min="0" name="quantity" value="1" type="number"
    //                           class="form-control form-control-sm" />
      
    //                         <button class="btn btn-link px-2"
    //                           onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
    //                           <i class="fas fa-plus"></i>
    //                         </button>
    //                       </div>
    //                       <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
    //                         <h6 class="mb-0">₹${el.price} </h6>
    //                       </div>
    //                       <div class="col-md-1 col-lg-1 col-xl-1 text-end">
    //                         <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
    //                       </div>
    //                     </div>
      
    //                     <hr class="my-4">
    //   `;
    //   document.getElementById("items").innerHTML += div;
    // });
    var div1 = `
   <div>
                  
        
                      </div>
   `;
    document.getElementById("toPay").innerHTML = div1;
  }
  displayright();
  // document .getElementById("cart_items_button2").addEventListener("click", gotoDashBoard);
  // document.getElementById("cart_items_button").addEventListener("click", gotoDashBoard);
=======
//   document.getElementById("cart_items_button2").addEventListener("click", gotoDashBoard);
//   document.getElementById("cart_items_button").addEventListener("click", gotoDashBoard);
  function gotoDashBoard(e) {
    e.preventDefault();
    alert("Order Placed Successfully!");
    window.location.href = "./dashboard.html#";
  }