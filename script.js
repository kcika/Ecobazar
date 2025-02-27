import products from "./products.js";

// toggle Navlinks
const menuBars = document.querySelector(".menuBars");
const menuCancel = document.querySelector(".menuCancel");
const menu = document.querySelector(".navlinks");

const toggleMenu = () => {
    menu.classList.toggle("active");
};

menuBars.addEventListener("click", toggleMenu);
menuCancel.addEventListener("click", toggleMenu);

// toggle Cart
const cartIcons = document.querySelectorAll(".cartIcon");
let cartCancel = document.querySelector(".cartCancel");
let cartTab = document.querySelector(".cartTab");
let closeBtn = document.querySelector(".closeBtn");

const toggleCart = () => {
    cartTab.classList.toggle("active");
}

cartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        toggleCart();
    })
})
cartCancel.addEventListener('click', toggleCart);
closeBtn.addEventListener('click', toggleCart);

// // shop page js
let productCont = document.querySelector("#productCont");

// generate dynamic ratings
function generateRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += `<i class="star fa-solid fa-star text-xs pe-1 ${i < rating ? 'filled' : ''}"></i>`
    }
    return stars;
}

let displayProducts = () => {
    return (productCont.innerHTML = products.map((product) => {
        return `
        <div
            class="productCard col-span-1 lg:col-span-1 bg-white border overflow-hidden hover:border-green-500 duration-300" data-category="${product.category}" data-ratings=${product.ratings}>
            <div class="productImg relative">
                <div class="absolute top-0 left-0 z-10">
                    <span
                        class="inline-flex items-center bg-blue-500 text-white px-2 py-1 text-sm font-medium">${product.disPercent} %
                        OFF</span>
                </div>
                <a href="/detail.html?id=${product.id}">
                    <img src=${product.img} class="duration-300" width="100%" alt="Product Image">
                </a>
            </div>
            <div class="productDesc p-4 pt-1 pb-4">
                <p class="text-lg font-semibold h-10">${product.name}</p>
                <p class="text-gray-500 text-md">${product.quantity}</p>
                <div class="flex justify-between items-center">
                    <p class="text-lg m-0"><span class="font-semibold">&#8377;${product.disPrice}</span> <span
                            class="text-gray-500 line-through">&#8377;${product.ogPrice}</span></p>
                    <button class="addCart px-6 py-2 bg-gray-100 rounded-lg hover:bg-green-600 hover:text-white duration-300 font-medium" data-id="${product.id}">
                        Add
                    </button>
                </div>
                <div class="ratings">
                   ${generateRating(product.ratings)}
                </div>
            </div>
        </div>
        `
    }).join(""));
}
// display products only whent he product container is present
if (productCont) {
    displayProducts();
}

let cart = [];

const setProductInCart = (idProduct, quantity, position) => {
    if (quantity > 0) {
        if (position < 0) {
            cart.push({
                product_id: idProduct,
                quantity: quantity
            });
        } else {
            cart[position].quantity = quantity;
        }
    } else {
        cart.splice(position, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    refreshCartHTML();
}

const refreshCartHTML = () => {
    let listHtml = document.querySelector('.cartList');
    let totalHtmls = document.querySelectorAll('.cartIcon span');
    let totalQuantity = 0;
    let totalPrice = 0;
    listHtml.innerHTML = null;
    cart.forEach(item => {
        totalQuantity = totalQuantity + item.quantity;
        let position = products.findIndex((value) => value.id == item.product_id);
        let info = products[position];
        totalPrice += info.disPrice * item.quantity;
        let newItem = document.createElement('div');
        newItem.classList.add('item', 'grid', 'grid-cols-5', 'gap-4', 'items-center', 'my-2');
        newItem.innerHTML =
            `
                <div class="image">
                    <img src='${info.img}'/>
                </div>
                <div class="name col-span-2 font-semibold">${info.name}</div>
                <div class="totalprice font-semibold">&#8377; ${info.disPrice * item.quantity}</div>
                <div class="quantity flex">
                    <span class="minus inline-block w-6 h-6 bg-gray-200 text-center cursor-pointer" data-id="${info.id}">-</span>
                    <span class="font-semibold mx-2">${item.quantity}</span>
                    <span class="plus inline-block w-6 h-6 bg-gray-200 text-center cursor-pointer" data-id="${info.id}">+</span>
                </div>
            `;
        listHtml.appendChild(newItem);
    });
    totalHtmls.forEach(span => {
        span.innerHTML = totalQuantity;
    });
    // Store cart details for checkout
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", totalPrice);
}

// event click
document.body.addEventListener('click', (event) => {
    const button = event.target;
    const idProduct = button.dataset.id;

    if (idProduct) {
        let position = cart.findIndex((item) => item.product_id == idProduct);
        let quantity = position < 0 ? 0 : cart[position].quantity;

        if (button.classList.contains('addCart') || button.classList.contains('plus')) {
            setProductInCart(idProduct, ++quantity, position);
        } else if (button.classList.contains('minus')) {
            setProductInCart(idProduct, --quantity, position);
        }
    }
});

// Filter logic
let filterButtons = document.querySelectorAll(".categories button");
let productCards = document.querySelectorAll("#productCont .productCard");
const filterCards = (e) => {
    // Remove previous active class & set new one
    document.querySelector(".categories .active")?.classList.remove("active");
    e.target.classList.add("active");

    let filterValue = e.target.dataset.filter;

    productCards.forEach(card => {
        if (filterValue === "all" || card.dataset.category === filterValue) {
            card.classList.remove("hidden");  // Show matching products
        } else {
            card.classList.add("hidden");  // Hide non-matching products
        }
    });
};

// Attach event listeners
filterButtons.forEach(button => button.addEventListener('click', filterCards));

// checkout page
const loadCheckoutPage = () => {
    let checkoutCartList = document.querySelector("#checkoutCartList");
    let checkoutTotal = document.querySelector("#checkoutTotal");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));

    checkoutCartList.innerHTML = "" //clear checkout cart list

    cart.forEach((item) => {
        let product = products.find(p => p.id == item.product_id);
        let newItem = document.createElement("div");
        newItem.classList.add("grid", "grid-cols-4", "items-center", "gap-4", "my-3");
        newItem.innerHTML = `
            <div class="image w-24"><img src="${product.img}"/></div>
            <p class="name text-lg font-semibold">${product.name}</p>
            <p class="quantity text-lg font-semibold">${item.quantity}</p>
            <p class="price text-lg font-semibold">&#8377; ${product.disPrice * item.quantity}</p>
        `;
        checkoutCartList.appendChild(newItem);
    });

    checkoutTotal.innerText = totalPrice;

    // Handle order submission
    document.getElementById("checkoutForm").addEventListener("submit", (event) => {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;

        if (name && email && address) {
            alert(`Thank you, ${name}! Your order has been placed.`);
            localStorage.removeItem("cart");
            localStorage.removeItem("totalPrice");
            window.location.href = "index.html"; // Redirect to home
        } else {
            alert("Please fill out all details.");
        }
    });
}


const initApp = () => {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    refreshCartHTML();
    // Only run checkout logic if the page contains the checkout section
    if (document.querySelector("#checkoutCartList")) {
        loadCheckoutPage();
    }
}
initApp();


// detail page
const initAppTwo = () => {
    let idProduct = new URLSearchParams(window.location.search).get('id');
    let info = products.filter((value) => value.id == idProduct)[0];

    let detail = document.querySelector(".detail");
    detail.querySelector(".image img").src = info.img;
    detail.querySelector(".productName").innerHTML = info.name;
    detail.querySelector(".name").innerHTML = info.name;
    detail.querySelector(".quantity").innerHTML = info.quantity;
    detail.querySelector(".rating").innerHTML = generateRating(info.ratings);
    detail.querySelector(".disPrice").innerHTML = "&#8377;" + info.disPrice;
    detail.querySelector(".ogPrice").innerHTML = "&#8377;" + info.ogPrice;
    detail.querySelector(".percent").innerHTML = info.disPercent + "%" + "OFF";
    detail.querySelector(".addCart").dataset.id = idProduct;

}
initAppTwo();

