
let selectedProducts = [];

function add() {

    let productSelect = document.getElementById("product");
    let productPrice = parseInt(productSelect.value);
    let quantity = parseInt(document.getElementById("quantity").value);


    if (!productPrice || !quantity) {
        alert("Por favor, seleccione un producto y una cantidad válidos.");
        return;
    }


    let product = {
        name: productSelect.options[productSelect.selectedIndex].text,
        price: productPrice,
        quantity: quantity,
        total: productPrice * quantity
    };
    selectedProducts.push(product);


    updateProductList();
}

function updateProductList() {
    let list = document.getElementById("product_list");
    list.innerHTML = "";

    selectedProducts.forEach(product => {
        let item = document.createElement("li");
        item.textContent = `${product.name} - Cantidad: ${product.quantity} - Precio total: yenes${product.total}`;
        list.appendChild(item);
    });
}

function calc() {
    let totalPrice = selectedProducts.reduce((acc, product) => acc + product.total, 0);
    
    let shippingFee;
    if (totalPrice < 2000) {
        shippingFee = 500;
    } else if (totalPrice < 3000) {
        shippingFee = 250;
    } else {
        shippingFee = 0;
    }
    
    let finalPrice = totalPrice + shippingFee;

    let productDetails = selectedProducts.map(product => 
        `${product.name} - Cantidad: ${product.quantity} - Precio total: ${product.total} yenes`
    ).join('\n');

    alert(`Productos seleccionados:\n${productDetails}\n\nPrecio total de productos: ${totalPrice} yenes\nTarifa de envío: ${shippingFee} yenes\n\nPrecio final: ${finalPrice} yenes`);
}
