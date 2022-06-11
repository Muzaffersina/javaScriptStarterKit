
//JS type safe degildir
let dolarDun = 9.20
let dolarBugun = 9.30 

{   
    // var tipleri global olarak algilanir.
    // let tipiyle tanimlanan degiskenler tanimlandigi araliklarda kullanilir   
    let dolarDun = 9.10
}


//console.log(dolarDun)

const euroDun = 11.2
//console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut kredisi","Kamu Konut Kredisi"]

// console.log("<ul>")
// for (let index = 0; index < konutKredileri.length; index++) {
//     const element = konutKredileri[index];
//     console.log("<li>"+element+"</li") 
    
// }
//console.log("</ul>")
//console.log(konutKredileri)


////rest    Javada--> varArgs
// let showProducts = function(id,...products){
//     console.log(id)
//     console.log(products)
// }
// console.log(typeof showProducts)
// showProducts(10,["Elma","Armut","Karpuz"])


// // spread    arrayleri ayirma.
// let points = [1,2,3,4,55,67,23,111]
// console.log(...points)
// console.log(Math.max(...points))
// console.log(..."ABC", "D", ..."EFG","H")


//Destructuring 
let populations = [10000,20000,30000,[40000,50000]]
let [small , medium , high,[veryHigh,maximum]] =populations
console.log(small)
console.log(high)
console.log(veryHigh)
console.log(maximum)


function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations)


let category = {id : 1, name : "İçecek"}

console.log(category.id)
console.log(category["name"]) 

let{id, name} = category
console.log(id)
console.log(name)