const products = [
    {
        id:'1',
        name:'Raton de juguetes para gatos',
        price: 500,
        category:'Juguetes',
        img:'https://iili.io/2z3SdfS.jpg',
        stock:500,
        description:'Ratón de juguete con cola de cuerda para gatos, diseñado para simular los movimientos de una presa.'
    },
    {
        id:'2',
        name:'Pelota interactiva para perros',
        price: 1000,
        category:'Juguetes',
        img:'https://iili.io/2z38QUX.jpg',
        stock:500,
        description:'Pelota resistente para perros, con diseño de goma que bota en diferentes direcciones, manteniéndolos entretenidos.'
    },
    {
        id:'3',
        name:'Antipulgas y garrapaticida para perros (pipeta)',
        price: 2000,
        category:'Medicamentos',
        img:'https://iili.io/2z388Hg.jpg',
        stock:500,
        description:' Pipeta mensual antipulgas y garrapaticida para perros, eficaz durante 30 días. Apto para perros medianos y grandes.'
    },
    {
        id:'4',
        name:'Alimento lata 400g',
        price: 10000,
        category:'Alimento',
        img:'https://iili.io/2z3S6mb.webp',
        stock:500,
        description:'Lata de comida húmeda para perros, rica en carne y sin colorantes ni conservantes.'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}