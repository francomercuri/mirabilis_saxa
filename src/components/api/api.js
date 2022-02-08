
const products = [
    {
        id: 1,
        title: 'Opalo de fuego',
        price: 6000,
        pictureUrl: './images/opalo_de_fuego.png'
    },
    {
        id: 2,
        title: 'Amatista',
        price: 6000,
        pictureUrl: './images/amatista.png'
    },
    {
        id: 3,
        title: 'Jade',
        price: 6000,
        pictureUrl: './images/jade.png'
    },
    {
        id: 4,
        title: 'Nacar',
        price: 6000,
        pictureUrl: './images/nacar.png'
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