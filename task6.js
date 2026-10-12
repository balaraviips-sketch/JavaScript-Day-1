// // let array=[1,2,3,4,5]
// // array.forEach((c,i,t)=> {
// //     console.log(c)
// // });

// // let studentnames = ["Ravi", "Reka", "Sarath", "Sundar"]
// // studentnames.forEach((a)=>{
// //     console.log("Hello", (a));
// // });

// // let prices = [100, 200, 300, 400, 500]
// // let newprice=prices.map(function(finalprice){
// //     return finalprice*2
// // })
// // console.log(newprice)


// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // const evenNumbers = numbers.filter((num) => num % 2 === 0);

// // console.log(evenNumbers);

// // let age=[18,23,45,12,8,16]
// // let adult=age.filter((c)=>{
// //     return c>=18
// // })
// // console.log(adult)

// // let number=[20,30,80,100,50,60]
// // let greater=number.find((n)=>{
// //     return n>50
// // })
// // console.log(greater)

// // let student=[
// //     {name:"Ravi", Mark:75},
// //     {name:"Sarath", Mark:80},
// //     {name:"Sundar", Mark:100}]
// // let Marks=student.find((s)=>{
// //  return s.Mark>80
// // })
// // console.log(Marks)

// let no = [1,5,90,4,5,6]
// let newno =no.reduce((a,b)=>{
//     return a + b
// },0)
// console.log("Total sum :", newno);

// let price = [12,556,78,90,345]
// let newprice = price.reduce((acc,i)=>{
//     return acc+i;
// },0)
// console.log("Total Price :", newprice);

// let somearray = [120, 90, 234, 67,89, 111]
// let newsome = somearray.some((a)=>{
//     return a > 100;
// })
// console.log("At least one number greater than 100 :", newsome);

// let every = [12,45,23,67,45,35]
// let newevery = every.every((e)=>{
//     return e > 35
// })
// console.log("All students scored above 35 :", newevery);

// // Sort /Join / Array Conversion

// console.log("Sort /Join / Array Conversion");

// let asc = [90,45,2,67,1,89,46,34]
// let newasc = asc.sort((a,b)=>{
//     return a-b
// })
// console.log("Ascending Order:", newasc);

// let des = [1,6,745,90,23,0,32,67,59]
// let newdesc = des.sort((a,b)=>{
//     return b-a
// })
// console.log("Descending Order:", newdesc);

// let str = ["Ram", "sita", "Reena", "Sam", "Rocky"]
// let newstr = str.toString();
// console.log("Array into String :", newstr);

// let join = ["Welcome", "To", "My", "World"]
// let newjoin = join.join(" - ")
// console.log("Join - :", newjoin);

// let join1 = ["Laptop", "Mobile", "TV", "Washing Machine"]
// let newjoin1 = join1.join(",")
// console.log("Join ,:", newjoin1);

// // String Methods

// console.log("String Methods");

// let str2 = "JavaScript";
// let newstr2 = str2.charAt(4)
// console.log("CharAt Method index of 4:", newstr2);

// let str3 = "Hello"
// let newstr3 = str3.charCodeAt(2)
// console.log("CharCodeAt 1st Character :", newstr3);

// let str4 = "Hello JavaScript"
// let newstr4 = str4.length;
// console.log("Length of the string:", newstr4);

// let str5 = "JavaScript Developer"
// let newstr5 = str5.slice(0,10)
// console.log("Using slice Extract JavaScript :", newstr5);

// let str6 = "FullStack Developer"
// let newstr6 = str6.toUpperCase()
// console.log("Uppercase :", newstr6);

// let str7 = "String METHODS"
// let newstr7 = str7.toLowerCase()
// console.log("Lowercase:", newstr7);

// let str8 = " I'm a Developer "
// let newstr8 = str8.trim()
// console.log("Trim :", newstr8);

// let user = prompt("Enter a sentence:");
// let newuser = user.includes("JavaScript");
// console.log("Includes :", newuser);

// let newindex = user.indexOf("JavaScript");
// console.log("Index of :", newindex);

// let startwith = user.startsWith("Hello");
// console.log("Starts with Hello :", startwith);

// let endswith = user.endsWith("JavaScript");
// console.log("Ends with JavaScript :", endswith);

// // Date Methods

// let date = new Date()
// console.log("Current Year:", date.getFullYear());
// console.log("Current Month :", date.getMonth()+1);
// console.log("Current Date :", date.getDate());
// console.log("Current Day :", date.getDay());

// let date1 = new Date()
// console.log("Current Hours:", date1.getHours());
// console.log("Current Minutes:", date1.getMinutes());
// console.log("Current Seconds:", date1.getSeconds());

// let date2 = new Date()
// console.log("Change Year :", date2.setFullYear(2003));

// let date3 =new Date()
// date3.setMonth(9)
// date3.setDate(28)
// console.log("Change Month and date :",date3)

// let users = prompt("Enter your date of birth (YYYY-MM-DD):");
// let dob = new Date(users);
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let day = dob.getDay();
// console.log("You were born on :", days[day]);