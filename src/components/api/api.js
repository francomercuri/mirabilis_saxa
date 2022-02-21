
const products = [
    {
        id: 1,
        title: 'Opalo de fuego',
        price: 6000,
        pictureUrl: './images/opalo_de_fuego.png',
        detail: '',
        stock: 15,
        category: 'piedras'
    },
    {
        id: 2,
        title: 'Amatista',
        price: 6000,
        pictureUrl: './images/amatista.png',
        detail: '',
        stock: 15,
        category: 'piedras'
    },
    {
        id: 3,
        title: 'Jade',
        price: 10000,
        pictureUrl: './images/jade.png',
        detail: '',
        stock: 10,
        category: 'piedras'
    },
    {
        id: 4,
        title: 'Nacar',
        price: 8000,
        pictureUrl: './images/nacar.png',
        detail: '',
        stock: 8,
        category: 'piedras'
    },
    {
        id: 5,
        title: 'Buda',
        price: 2500,
        pictureUrl: './images/buda.png',
        detail: '',
        stock: 6,
        category: 'decoracion'
    }

]



const ItemPromise = new Promise (function (resolve, reject){
    
    setTimeout( function (){
        resolve(products);
    },2000)
});

function getProducts(){
    return ItemPromise;
};

export {getProducts};