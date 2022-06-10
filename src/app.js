console.log("Hello word!!")

//JS type safe degildir
let dolarDun = 9.20
let dolarBugun = 9.30 

{   
    // var tipleri global olarak algilanir.
    // let tipiyle tanimlanan degiskenler tanimlandigi araliklarda kullanilir   
    let dolarDun = 9.10
}


console.log(dolarDun)

const euroDun = 11.2
console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    const element = konutKredileri[index];
    console.log("<li>"+element+"</li") 
    
}
console.log("</ul>")

console.log(konutKredileri)
