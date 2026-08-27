let cart = [];

function addToCart(product) {
    cart.push(product);

    document.getElementById("cartMessage").innerHTML =
        "Added to cart: " + product +
        "<br>Total items: " + cart.length;
}
