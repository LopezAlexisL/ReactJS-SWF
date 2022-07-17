const items = [
    {
        id:"1",
        name: "Darth Vader",
        price: "2500$",
        side: "Dark Side",
        img:"https://http2.mlstatic.com/D_NQ_NP_867813-MLA44133071954_112020-O.jpg",
        stock: 7,
    },
    {
        id:"2",
        name: "Clon Wars General Obi-Wan Kenobi",
        price: "2400$",
        side: "Bright Side",
        img:"https://http2.mlstatic.com/D_NQ_NP_630516-MLA44807069877_022021-O.jpg",
        stock: 7,
    },
    {
        id:"3",
        name: "Luke Skywalker",
        price: "2000$",
        side: "Bright Side",
        img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/298/731/products/compra_funko_pop_movies_star_wars_luke_skywalker_501_61011_1200x1-3fc0f64d0d51b9755d16513528093192-640-0.jpg",   
        stock: 7,
    },
    {
        id:"4",
        name: "Darth Maul",
        price: "2300$",
        side: "Dark Side",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/841/670/products/darth-maul1-ae50027fb2c1fd550e16460660479633-1024-1024.jpg",
        stock: 7,
    },
    {
        id:"5",
        name: "Darth Sidius",
        price: "2300$",
        side: "Dark Side",
        img:"https://http2.mlstatic.com/D_NQ_NP_768604-MLA44819503030_022021-O.jpg",
        stock: 7,
    },
    {
        id:"6",
        name: "Imperial Trooper",
        price: "2000$",
        side: "Troopers",
        img:"https://m.media-amazon.com/images/I/618MfrdXqML._AC_SL1000_.jpg",
        stock: 7,
    },
    {
        id:"7",
        name: "Chewbacca",
        price: "2400$",
        side: "Bright Side",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxJ9M834MfnPyshZhNQ3CfdZp7dBnFYqa0d_A1otU04ZWc0WibTvpqdR-bQ20lL5N5nc&usqp=CAU",
        stock: 7,
    },
    {
        id:"8",
        name: "Jango Fett",
        price: "2200$",
        side: "Neutral",
        img: "https://http2.mlstatic.com/D_NQ_NP_867416-MLM45030548884_022021-O.jpg",
        stock: 7,

    },
    {
        id:"9",
        name: "Jabba the Hut",
        price: "1900$",
        side: "Neutral",
        img:"https://http2.mlstatic.com/D_NQ_NP_643340-MLA41882143158_052020-O.jpg",
        stock: 7,
    }
]

export const getProducts = ()=> {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000)
    })
}

export const getProductsBySide = (side)=> {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items.filter(prod => prod.side === side))
        }, 2000)
    })
}

export const getProductsById = (id)=>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(prod => prod.id === id))
        }, 2000)
    })
}