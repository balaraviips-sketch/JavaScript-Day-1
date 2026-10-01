//1
// console.log(10>5 && 20>15);

//2
// console.log(10>15 && 15>20)

//3
// console.log(10>20||15>10);

//4
// console.log(5>10||20<15);

//5
// console.log(!(10>5));

//6
// console.log(!(10<5));

//7
// var a=10
// var b =5
// // console.log(a<b && b<=a);
// // console.log(a>b || b<=a);
// console.log(a<b && b>=a || a<=b)

//8
// let a = 10
// let b = 24
// console.log(!(10>24 && 10<24 || 24>=10))

//9

// var age=18
// age>=18?console.log("Eligible"):console.log("Not Eligible")


// //10
// var Marks=34
// Marks>=35 ? console.log("Pass"):console.log("Fail")

//11

// var number=10
// number>=10 ? console.log("Number is greater than  to 10") : console.log("Number is less than 10")

// //12
// let number =10
// number % 2 == 0 ? console.log("Even Number") : console.log("Odd Number")

//13
// let Salary = 2000

// Salary >= 30000 ? console.log("Good Salary"):console.log("Low Salary")

//Concetenation & Template Strings

//14
// let  name1="Ravi"
// let name2="Kumar"
// let name3="B.K"
// console.log(name1+name2+" "+name3)

//15

// let  name1="Sarath"
// let age=29
// console.log(name1+" : "+age)

//16

// var Product= "car"
// var Price= 200000
// var Brand= "Tata"

// console.log(Product+ " : " + Price + " : " + Brand)

//17-template Strings
// var name="Ravi"
// var qualificarion="BSc-Cs"
// var company="Stackly"
// console.log(`${name} : ${qualificarion} : ${company}`)


//18
// let name="Ravi"
// let age=32
// let city="Madurai"

// console.log(`${name} : ${age} : ${city}`)


//Typcasting-Implicit

//19
// console.log("Ravi" + 32)
// console.log(typeof("Ravi" + 32))

//20
//  console.log(32 + 68)
// console.log(typeof(32 + 68))

//21
// console.log( 32 + true)
// console.log(typeof(32 + true))

//22
//  console.log( 32 + null)
// console.log(typeof( 32 + null))

//23
//  console.log("Ravi" + true)
// console.log(typeof("Ravi" + true))

// 24
// console.log("Ravi" + [1])
// console.log(typeof("Ravi" + [1]))

// 25
// console.log("Ravi" +{R : 3})
// console.log(typeof("Ravi" +{R : 3}))

//26
//  console.log(10 + "20", typeof(10 + "20"));

// console.log(10 + true, typeof(10 + true));

// console.log("Hello" + [1, 2, 3], typeof("Hello" + [1, 2, 3]));

//TypeCasting = Explicit

//27
// let num="100"

// console.log(Number(num),typeof(Number(num)))

//28
//  let convert="25"

// console.log(Number(convert),typeof(Number(convert)))

// 29
// let val=true

// console.log(Number(val),typeof(Number(val)))

// 30
// var value=false
// console.log(Number(value),typeof(Number(value)))

// 31
// const Val=""
// console.log(Number(Val),typeof(Number(Val)))

// 32
// const worth = null
// console.log(Number(worth),typeof(Number(null)))

// 33
// let R=undefined
// console.log(Number(R),typeof(Number(R)))

// //Boolean Conversion

// 34
// let z="Hello"
// console.log(Boolean(z),typeof(Boolean(z)))

// 35
// let y= " "
// console.log(Boolean(" "),typeof(Boolean(" ")))

// 36
// var a=0
// var b=1
// var c=-1
// console.log(Boolean(a),typeof(Boolean(a)))
// console.log(Boolean(b),typeof(Boolean(b)))
// console.log(Boolean(c),typeof(Boolean(c)))

//37

// var d=[1,2,3]

// console.log(Boolean(d),typeof(Boolean(d)))

//38

// var profile={
//     name:"Ravi",
//     age:32,
//     city:"Madurai"  
// }

// console.log(Boolean(profile),typeof(Boolean(profile)))

//Conditional Statements
//39
// let age = 20
// if(age>=18){
//     console.log("Eligible ")
// }

//40

// let age1=17

// if(age1>=18){
//     console.log("Eligible")

// }else{
//     console.log("Not Eligible")
// }

//41

// let Marks=35

// if(Marks>=35){
//     console.log("Pass")
// }else{
//     console.log("Fail")
// }

//42
// let time=23.30

// if(time>=1 && time<=6){
//     console.log("Early Morning")
// }else if(time>=7 && time<=12){
//     console.log("Morning")
// }else if(time>=13 && time<=17){
//     console.log("Evening")
// }else if(time>=18 && time<=19){
//     console.log("Night")
// }else if(time>=20 && time<=24){
//     console.log("Night")
// }else{
//     console.log("Invalid Time")
// }

//43

// let Temp=25

// if(Temp>=35){
//     console.log("Hot")
// }else if(Temp>=20 && Temp<=35){
//     console.log("Normal")
// }else if(Temp<=20){
//     console.log("Cold")
// }

//44

//  let Age=19
//  let Height=170
//  let Weight=60

//  if(Age>=18){
//     if(Height>=170){
//         if(Weight>=60){
//             console.log("Your are Eligible")

//         }else{
//             console.log("Your are Under Weight")
//         }
//     }
//     else{
//         console.log("Your are Under Height")
//     }
//  }
//  else{
//     console.log("You are Under Age")
//  }

//Switch Statement
//45

// let TrafficLight=" "

// switch(TrafficLight){
//     case "Red" : console.log("Vechicle Stop"); break;
//     case "Yellow" : console.log("Vechicle Start"); break;
//     case "Green" :console.log("Vechicle Go"); break;
//     default : console.log("Have a Nice Day");break;
// }

//46

// let day = "Monday"

// switch(day){
//     case "Monday" : console.log("Happy Mondy"); break;
//     case "Tuesday" : console.log("Happy Tuesday"); break;
//     case "Wednesday" : console.log("Happy Wednesday"); break;
//     case "Thursday" : console.log("Happy Thursday"); break;
//     case "Friday" : console.log("Happy Friday"); break;
//     case "Saturday" : console.log("Happy Saturday"); break;
//     case "Sunday" : console.log("Happy Sunday"); break;
//     default : console.log("Invalid Day");break; 
// }

//47
// let Choice=1
// switch(Choice){
//     case 1 : console.log("Start"); break;
//     case 2 : console.log("Setting"); break;
//     case 3 : console.log("Exit"); break;
//     default : console.log("Invalid Choice");break;
// }

//48
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//49

// let count=10
// while(count>=1){
//     console.log(count);
//     count--;
// }

//50

// let Fruits=["Apple","Banana","Orange","Mango","Grapes"]
// for(let a of Fruits){
//     console.log(a);
// }

// let profile={
//     Name:"Ravi",
//     Role:"Full Stack Developer",
//     Expiriance:"Fresher"
// }
// for(let c in profile){
//     console.log(c,profile[c]);
// }