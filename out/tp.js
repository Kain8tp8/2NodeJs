"use strict";
// function klon (a:number, b:number, c:number):void{
//      console.log((a+b)**c);
// }
// klon(5,5,2)
//katta son kaytaradi
// function max ( a:number , b:number):number {
//     if(a<b){
//         return b
//     }else{
//         return a
//     }
// }
// let x=max(10,5)
// console.log(x);
//toq son kaytaradi
// function is0dd(a:number):boolean{
//      if(a % 2 == 1){
//         return true
//     }else{
//         return false
//     }
// }
// let t:boolean=is0dd(4)
// console.log(t);
//isim familiya kaytaradi
function fullName(names, surname) {
    // console.log();
    return names + surname;
}
let tim = fullName('Timan ', "Pulatov");
//fullName+Welcome===
function Welcome(name) {
    return "Welcome " + name;
}
let ti = Welcome(tim);
console.log(ti);
