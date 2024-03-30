let total=0;
const product = [
    {
        id: 0,
        image: './images/forShop/bottle4.jpg',
        title: 'Reusable metal Water Bottle',
        price: 120
    },
    {
        id: 1,
        image: './images/forShop/bag.jpg',
        title: 'Reusable Bag',
        price: 60,
    },
    {
        id: 2,
        image: './images/forShop/art.jpg',
        title: 'Ocean themed arts',
        price: 78,
    },
    {
        id: 3,
        image: './images/forShop/cream.jpg',
        title: 'Eco friendly Sun cream',
        price: 100,
    },
    {
        id: 4,
        image: './images/forShop/clean.webp',
        title: 'Eco friendly cleaning product',
        price: 260,
    },
    {
        id: 5,
        image: './images/forShop/cup.webp',
        title: 'Reusable coffee cup',
        price: 30,
    },
    {
        id: 6,
        image: './images/forShop/filter.jpg',
        title: 'Water filter',
        price: 300,
    },
    {
        id: 7,
        image: './images/forShop/book.webp',
        title: 'Books',
        price: 20,
    },
    {
        id: 8,
        image: './images/forShop/clean.jpg',
        title: 'Beach cleaning Machine',
        price: 500,
    }
];

const categories = [...product];

document.getElementById('root').innerHTML = categories.map((item, i) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$${price}.00</h2>
                <button onclick='addtocart(${i})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    const index = cart.findIndex(item => item.id === product[a].id);
    if (index !== -1) {
        cart[index].quantity++;
    } else {
        cart.push({ ...product[a], quantity: 1 });
    }
    displayCart();
}


function delElement(a) {
    cart.splice(a, 1);
    displayCart();
}

function displayCart() {
    total = 0;
    const cartContainer = document.getElementById("cartItem");
    cartContainer.innerHTML = "";
     
    if (cart.length === 0) {
        document.getElementById("count").innerHTML = 0;
        cartContainer.innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$0.00";
         
    } else {
        cart.forEach((item, index) => {
            const { image, title, price, quantity } = item;
            total += parseFloat(price) * quantity;

            const cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");

            const rowImgDiv = document.createElement("div");
            rowImgDiv.classList.add("row-img");

            const img = document.createElement("img");
            img.classList.add("rowimg");
            img.src = image;

            rowImgDiv.appendChild(img);
            cartItemDiv.appendChild(rowImgDiv);

            const titleParagraph = document.createElement("p");
            titleParagraph.style.fontSize = "12px";
            titleParagraph.textContent = title;
            cartItemDiv.appendChild(titleParagraph);

            const priceHeader = document.createElement("h2");
            priceHeader.style.fontSize = "15px";
            priceHeader.textContent = `$${(parseFloat(price) * quantity).toFixed(2)}`;
            cartItemDiv.appendChild(priceHeader);

            const quantityInput = document.createElement("input");
            quantityInput.type = "number";
            quantityInput.min = "1";
            quantityInput.value = quantity;
            quantityInput.style.width = "50px";
            quantityInput.addEventListener("input", (event) => updateQuantity(event, index));
            cartItemDiv.appendChild(quantityInput);

            const deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fa-solid", "fa-trash");
            deleteIcon.onclick = () => delElement(index);
            cartItemDiv.appendChild(deleteIcon);

            cartContainer.appendChild(cartItemDiv);
        });

        document.getElementById("count").innerHTML = cart.length;
        document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
        document.getElementById("sum").innerHTML = `Total $${total.toFixed(2)}`;
    }
}
function updateQuantity(event, index) {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
        cart[index].quantity = newQuantity;
        displayCart();
    }
}

function clearCart() {
    cart = [];  
    displayCart();  
}
function emptycart(){
    if (total==0){
        alert("your cart is empty")
    }
}
document.getElementById("checkout").addEventListener("click",function(){
    emptycart();
})
