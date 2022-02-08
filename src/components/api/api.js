
const products = [
    {
        id: 1,
        title: 'Opalo de fuego',
        price: 6000,
        pictureUrl: './images/opalo_de_fuego.jpg'
    },
    {
        id: 2,
        title: 'Amatista',
        price: 6000,
        pictureUrl: './images/amatista.jpg'
    },
    {
        id: 3,
        title: 'Jade',
        price: 6000,
        pictureUrl: './images/jade.jpg'
    },
    {
        id: 4,
        title: 'Nacar',
        price: 6000,
        pictureUrl: './images/nacar.jpg'
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