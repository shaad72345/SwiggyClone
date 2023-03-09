//import { navbar } from "../component/navbar.js";
//document.getElementById("nbar").innerHTML = navbar()


let restoData = [
    { "id": 1, "name": "Bodypower Cafe", "type": "Indian, Pizzas", "rating":4.7, "time":34, "forTwo":450, "offer":"FLAT150 off | Use FLATDEAL", "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/67c62ba8e806d8bb120afe24181227e2"},
    { "id": 2, "name": "Meghana Foods", "type": "Biryani, Andhra, South Indian, North Indian, Chinese, Seafood", "rating":4.6, "time":25, "forTwo":500, "offer":"FREE DELIVARY", "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e0vvulfbahjxjz6k4uwi"},
    { "id": 3, "name": "Anjappar", "type": "Chettinad, Thalis, Biryani, Chinese, Tandoor, South Indian, North Indian", "rating":4.1, "time":28, "forTwo":400, "offer":"40% off | Use TRYNEW", "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fa25f646f0f18e7b1d854e3e8b4a8f1b"},
    { "id": 4, "name": "Kannur Food Point", "type": "Kerala, Chinese", "rating":3.8, "time":37, "forTwo":300, "offer":"50% off on all orders", "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bmwn4n4bn6n1tcpc8x2h"},
    { "id": 5, "name": "Rahhams", "type": "Biryani, Mughlai, North Indian, Kebabs, Chinese, Seafood, Beverages", "rating":4.4, "time":42, "forTwo":700, "offer":"FREE DELIVERY", "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/edkut9gmhjqq6urnnmwv"},
    { "id": 6, "name": "Nandhini Deluxe", "type": "Andhra, Biryani, Chinese, North Indian", "rating":4.2, "time":34, "forTwo":500, "offer":"FLAT100 off | Use FLATDEAL", "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dlt4ml0id5wei4yi840b"},
  ]

showData(restoData)
console.log(restoData)
function showData(d){
    document.getElementById("restos").textContent = ""
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
        document.getElementById("restos").append(card)
    })
}

// Carousel
const carousel = document.querySelector('.carousel');
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const leftButton = document.querySelector('.carousel-button-left');
const rightButton = document.querySelector('.carousel-button-right');

let currentIndex = 0;
const itemWidth = carouselItems[0].offsetWidth + 20; // 20px margin-right
const visibleItems = 4; // show 4 items at a time

leftButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});

rightButton.addEventListener('click', () => {
  if (currentIndex < carouselItems.length - visibleItems) {
    currentIndex++;
    carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});
