function addToCard(quantity,productName = "Elma") {
    console.log("Sepete Eklendi! : " + productName +" adet : " + quantity)
}

// addToCard("Elma")
addToCard( 10 , "Yumurta")
// addToCard(10)

let sayHello = () =>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function(){
    console.log("Hello World 2")
}

sayHello2()


function addToCard2(productName , quantity , unitPrice){

}

addToCard2("Elma",5,10)
addToCard2("Armut",3,20)
addToCard2("Limon",4,15)

let product1 = {productName : "Elma" , unitPrice:"10" , quantity:"5"}

function addToCard3(product){
    console.log("Ürün: "+product.productName)
    console.log("Adet: "+product.quantity)
    console.log("Fiyat: "+product.unitPrice)
}
addToCard3(product1)

let product2 = {productName : "Elma" , unitPrice:"10" , quantity:"5"}
let product3 = {productName : "Elma" , unitPrice:"10" , quantity:"5"}
//ref type
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)



function addToCard4(products){
    console.log(products)
}

let products = [
    {productName : "Elma" , unitPrice:"10" , quantity:"5"},
    {productName : "Elma" , unitPrice:"10" , quantity:"5"},
    {productName : "Elma" , unitPrice:"10" , quantity:"5"}
]

addToCard4(products)


function add(bisey, ...numbers) { // Rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(bisey)
    console.log(total)
    
}
add(20,30)


let numbers = [10,20,30,40,50]   // Spread
// console.log(...numbers)
// console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz ,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name : "İç Anadolu" , population : "20M"}, 
    {name :"Marmara" , population : "30M"},
    {name : "Karadeniz" , population : "15M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul" ,"Bursa"],
        ["Sinop", "Trabzon"]
    ]
]

// console.log(icAnadolu.population)
// console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice ,newQuantity
({productName:newProductName, unitPrice:newUnitPrice,quantity:newQuantity} 
    = {productName : "Elma" , unitPrice:"10" , quantity:"5"})

console.log(newProductName)
