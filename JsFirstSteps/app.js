//1. a b və c ədədləri verilir. a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.
// let a=-11
// let b=-22
// let c=13

// if(c-a>c-b){
//     console.log("b ededi c ededine daha yaxindir")
// }
// else if(c-a<c-b){
//     console.log("a ededi c ededine daha yaxindir")
// }


// //2. x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil
// //  edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır. (Nümunə: Daxil etdiyini dəyər rəqəmdir)
// let x
// x=5
// if(typeof(x)=="number"){
//     console.log("daxil edilen deyer reqemdir")
// }
// else if(typeof(x)=="string"){
//     console.log("daxil edilen deyer metndir")
// }
// else if(typeof(x)=="boolean"){
//     console.log("daxil edilen deyer booleandir")
// }
// else if(typeof(x)=="undefined"){
//     console.log("daxil edilen deyer bosdur")
// }


// 3. verilən x ədədinin rəqəmlərini ekrana çap edən proqram yazın
// let x
// let a
// x=8348134
// a=x.toString()
// for(let i=0;i<a.length;i++){
//     b=a[i]
//     console.log(b)

// }



//4. verilən 4 ədədi böyükdən kiçiyə doğru ekrana çap edən program yazın


// let a=12
// let b=50
// let c=15
// let d=21
// let x

// x=[a,b,c,d]
// console.log(x.sort(function(a,b){return a-b}).reverse())




//5. verilən kəsirli ədədin (nümumə: 4.234) tam hissəsi ilə kəsirli hissəsini ayrı ayrı ekrana çap edən program yazın

//1ci metod
// let a=4.2345
// b=a.toString()
// c=b.split('.')
// console.log(c[0])
// console.log(c[1])



// 2 ci metod

// let a=4.2345
// b=Math.trunc(a)
// console.log(b)

// 6. x = 10, y = 55 “and”-dən istifadə edərək x və y müqayisə edərək boolen dəyərləri çapa verin.

// let x=10
// let y=55
// if(x>10 && y<60){
//     console.log(true)
// }else{
//     console.log(false)
// }


// 7.3 nöqtənin koordinatları verilir.Bu verilən koordinatlara görə a nöqtəsinə ən yaxın nöqtəni tapan proqram yazın
// a_x=120,a_y=200
// b_x=230,b_y=400
// c_x=210,c_y=345




let a_x=120;
let a_y=200;
let b_x=230;
let b_y=400;
let c_x=610;
let c_y=445;
if(b_x-a_x>c_x-a_x && b_y-a_y>c_y-a_y){
    console.log("koordinatlara gore a noqtesine en yaxin olan c noqtesidir")
}else{
    console.log("koordinatlara gore a noqtesine en yaxin olan b noqtesidir")
}




