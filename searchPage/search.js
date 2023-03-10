var lc = JSON.parse(localStorage.getItem("swiggyData")) || [];
var data = [
    { "id": 1, "name": "Bodypower Cafe", "type": "Indian, Pizzas", "rating": 4.7, "time": 34, "forTwo": 450, "offer": "FLAT150 off | Use FLATDEAL", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/67c62ba8e806d8bb120afe24181227e2" },
    { "id": 2, "name": "Meghana Foods", "type": "Biryani, Andhra, South Indian, North Indian, Chinese, Seafood", "rating": 4.6, "time": 25, "forTwo": 500, "offer": "FREE DELIVARY", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e0vvulfbahjxjz6k4uwi" },
    { "id": 3, "name": "Anjappar", "type": "Chettinad, Thalis, Biryani, Chinese, Tandoor, South Indian, North Indian", "rating": 4.1, "time": 28, "forTwo": 400, "offer": "40% off | Use TRYNEW", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fa25f646f0f18e7b1d854e3e8b4a8f1b" },
    { "id": 4, "name": "Kannur Food Point", "type": "Kerala, Chinese", "rating": 3.8, "time": 37, "forTwo": 300, "offer": "50% off on all orders", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bmwn4n4bn6n1tcpc8x2h" },
    { "id": 5, "name": "Rahhams", "type": "Biryani, Mughlai, North Indian, Kebabs, Chinese, Seafood, Beverages", "rating": 4.4, "time": 42, "forTwo": 700, "offer": "FREE DELIVERY", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/edkut9gmhjqq6urnnmwv" },
    { "id": 6, "name": "Nandhini Deluxe", "type": "Andhra, Biryani, Chinese, North Indian", "rating": 4.2, "time": 34, "forTwo": 500, "offer": "FLAT100 off | Use FLATDEAL", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dlt4ml0id5wei4yi840b" },
    { "id": 7, "name": "Aahar Cafe", "type": "Indian, Pizzas", "rating": 4.7, "time": 34, "forTwo": 450, "offer": "FLAT150 off | Use FLATDEAL", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/67c62ba8e806d8bb120afe24181227e2" },
    { "id": 8, "name": "Dauji Foods", "type": "Biryani, Andhra, South Indian, North Indian, Chinese, Seafood", "rating": 4.6, "time": 25, "forTwo": 500, "offer": "FREE DELIVARY", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e0vvulfbahjxjz6k4uwi" },
    { "id": 9, "name": "Haldiram", "type": "Chettinad, Thalis, Biryani, Chinese, Tandoor, South Indian, North Indian", "rating": 4.1, "time": 28, "forTwo": 400, "offer": "40% off | Use TRYNEW", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fa25f646f0f18e7b1d854e3e8b4a8f1b" },
    { "id": 10, "name": "Bikaner", "type": "Kerala, Chinese", "rating": 3.8, "time": 37, "forTwo": 300, "offer": "50% off on all orders", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bmwn4n4bn6n1tcpc8x2h" },
    { "id": 11, "name": "Temptation", "type": "Biryani, Mughlai, North Indian, Kebabs, Chinese, Seafood, Beverages", "rating": 4.4, "time": 42, "forTwo": 700, "offer": "FREE DELIVERY", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/edkut9gmhjqq6urnnmwv" },
    { "id": 12, "name": "Parklane", "type": "Andhra, Biryani, Chinese, North Indian", "rating": 4.2, "time": 34, "forTwo": 500, "offer": "FLAT100 off | Use FLATDEAL", "img": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dlt4ml0id5wei4yi840b" },

]
document.getElementById("searchText").addEventListener("keydown", function (e) { KeyCheck });
document.getElementById("showClose").addEventListener("click", removeAll);

document.getElementById("pop").style.display = "block";
document.getElementById("showSearch").style.display = "block";
document.getElementById("showClose").style.display = "none";
showProducts(data);
function removeAll() {
    document.getElementById("showSearch").style.display = "block";
    document.getElementById("showClose").style.display = "none";
    document.getElementById("searchText").value = "";
    document.getElementById("showRestaurants").innerHTML = "";
    document.getElementById("pop").style.display = "block";
    showProducts(data);

}
function KeyCheck(event) {

    var KeyID = event.keyCode;

    if (KeyID == 8) {
        searchBtn();
    }

}


function searchBtn() {
    event.preventDefault();
    var search = document.getElementById("searchText").value;
    document.getElementById("displayRestaurants").innerHTML = "";
    document.getElementById("pop").style.display = "none";
    document.getElementById("showSearch").style.display = "none";
    document.getElementById("showClose").style.display = "block";

    if (search == "" || search == null) {
        document.getElementById("showSearch").style.display = "block";
        document.getElementById("showClose").style.display = "none";
        document.getElementById("showRestaurants").innerHTML = "";
        document.getElementById("pop").style.display = "block";
        showProducts(data);

    }
    else {
        var filteredProduct = data.filter(function (el) {
            if (el.name.toLowerCase().includes(search.toLowerCase())) return el;

        });
        if (filteredProduct.length != 0) {
            displayProducts(filteredProduct);
        }
        else {
            document.getElementById("showRestaurants").innerHTML = "";
            var divBox = document.createElement("div");
            divBox.setAttribute("class", "box");
            divBox.innerHTML = ` <html><body><span class="newIcon"><i class="fas fa-search"></i></span> See all results for '${search}'</body></html>`;
            document.getElementById("showRestaurants").append(divBox);
        }
    }
}

function displayProducts(products) {
    document.getElementById("showRestaurants").innerHTML = "";
    products.map(function (elem) {
        var divBox = document.createElement("div");
        divBox.setAttribute("class", "box");

        var img = document.createElement("img");
        img.setAttribute("src", elem.img);
        img.setAttribute("class", "imageClass");
        var item = document.createElement("div");
        item.setAttribute("class", "item");
        var name = document.createElement("span");
        name.setAttribute("class", "nameClass");
        name.textContent = elem.name;
        var rest = document.createElement("p");
        rest.setAttribute("class", "rest");
        rest.textContent = "Restaurant";
        item.append(name, rest);
        divBox.append(img, item);
        document.getElementById("showRestaurants").append(divBox);


    })
}

function showProducts(products) {


    products.map(function (elem) {
        if (elem.id <= 7) {
            var divB = document.createElement("div");
            divB.setAttribute("class", "divB");
            var img = document.createElement("img");
            img.setAttribute("src", elem.img);
            img.setAttribute("class", "imageClass");
            var divB1 = document.createElement("div");
            divB1.setAttribute("class", "divB1");
            var name = document.createElement("span");
            name.setAttribute("class", "nameCls");
            name.textContent = elem.name;
            divB1.append(name);
            divB.append(img, divB1);
            document.getElementById("displayRestaurants").append(divB);
        }

    })

}