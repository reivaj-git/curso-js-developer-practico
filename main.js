// constantes para eventos
const navEmail = document.querySelector('.navbar-email');
const bottonHamMenu = document.querySelector('.menu');
const carrito = document.querySelector('.navbar-shopping-cart');

// constantes para selectores
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


//eventos
navEmail.addEventListener('click', toggleMenuDesktop);
bottonHamMenu.addEventListener('click', toggleMenuMobile);
carrito.addEventListener('click', toggleMenuCarrito);



//funciones
function toggleMenuDesktop() {
    mobileMenu.classList.add('.inactive')
    carritoMenu.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')

    // const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    // !isCarritoMenuClosed ? carritoMenu.classList.add('inactive') : desktopMenu.classList.toggle('inactive');

    // if (!isCarritoMenuClosed && !isDesktopMenu) {
    //     carritoMenu.classList.add('inactive')
    //     desktopMenu.classList.add('inactive')
    // }

}

function toggleMenuMobile() {
    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive')
    !isCarritoMenuClosed ? carritoMenu.classList.add('inactive') : false;
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito() {
    const isMobileClosed = mobileMenu.classList.contains('inactive');
    !isMobileClosed ? mobileMenu.classList.add('inactive') : false;

    carritoMenu.classList.toggle('inactive')
}

const listProducts = [];

listProducts.push({
    name: 'bicileta',
    price: 200,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'moto',
    price: 8700,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'Patin Electrico',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'Patin Electrico',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'Patin Electrico mod Rojo',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'Bicicleta Azul',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'Patin Electrico',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'Patin Electrico',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'Patin Electrico',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
listProducts.push({
    name: 'Patin Electrico',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'Patin Electrico',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listProducts.push({
    name: 'Patin Electrico',
    price: 4600,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        // en img se utiliza setAtribute para modificar el el SRC
        // product viene del iterador e imagen del arreglo
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrecio = document.createElement('p');
        productPrecio.innerText = `$${product.price}`;
        const productNombre = document.createElement('p');
        productNombre.innerText = product.name;

        productInfoDiv.append(productPrecio, productNombre);
   
        const figureInfo = document.createElement('figure');
        const figureImgCart = document.createElement('img');
        figureImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        //! apend puede incluir varios argumentos porque acepta varios nodos
        //!appenChild Solo acepta un nodo
        figureInfo.appendChild(figureImgCart);

        productInfo.append(productInfoDiv, figureInfo);
      
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(listProducts)
