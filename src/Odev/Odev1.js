
/*
1- JavaScript ile istenilen kadar sayi gonderme ve bu sayilarin asal olup olmadigi
*/
function PrimeNumbers(...x){
    let prime=true;
    for(let j = 0;j < x.length; j++){
        for(let i = 2;i < x[j]; i++){
            if(x[j] % i === 0){
                prime=false; 
                break;
            } 
        }
        if(prime == true){
            if(x[j] < 0){
                console.log(x[j]+" sıfırdan küçüktür ve asal değildir."); 
            }
            else{
                let newArray = [];
                let newX = x[j];
                newArray.push(newX);
                console.log(newArray + " Sayısı Asal Sayıdır.");
            } 
        } 
        else{
            let newArray = [];
            let newX = x[j];
            newArray.push(newX);
            console.log(newArray + " Sayısı Asal Sayı Değildir.");
        }
        
    }
}
PrimeNumbers(112,256,102,99);




//2- Parametre olarak girilen sayilarin arkadaş sayilar olup olmadigi
function FriendsNumber(x,y){
    let sum=0,sum1=0;
    for(let i=1;i<x;i++){
        if(x%i==0){
            sum += i;
        }
    }
    for(let j=1;j<y;j++){
        if(y%j==0){
            sum1 += j;
        }
    }
    if(sum == y && sum1 == x) console.log(x+" ve "+y+" sayıları arkadaş sayılardır.");
    else console.log(x+" ve "+y+" sayıları arkadaş sayılar değildir.");
   
   
}
FriendsNumber(284,220);




//3- 1000'e kadar mükemmel sayılar
function PerfectNumber(N){
    let sum=0;
    for(let i=1;i<N;i++){
        sum=0;
        for(let j=1;j<i;j++){
            if(i%j==0){
                sum += j;
            }
        }
        if(sum == i){
            console.log(i+" mükemmel sayıdır.");
        } 

    }
}
PerfectNumber(1000);





//4- 1000'e kadar asal sayılar
function PrimeNumber(i){
    let control=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            control=false;
            break;
        }  
    }
    if(control == true && i != 1) return true;
    else return false;
    
}
function PrimeNumberList(){
    let pList=[];
    for(let i=1;i<1000;i++){
        if(PrimeNumber(i)) pList.push(i);
    }
    console.log(pList);
}
PrimeNumberList();
