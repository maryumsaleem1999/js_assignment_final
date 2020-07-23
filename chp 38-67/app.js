//Task 1"
// function accept(){
// 	alert("your name is added");
// }
//Task 2:
// function purchased(){
// 	alert("Thanks for purchasing a phone from us");
// }

//Task 3:
// function del(){
// var del=document.getElementById('first').remove();
// }
// function one(){
// 	var a=document.getElementById('second').remove();
// }
// function two(){
// 	var b=document.getElementById('third').remove();
// }
// function three(){
// 	var c=document.getElementById('fourth').remove();
// }


//Task 4:
// function change(){
// var mobile=document.getElementById('image')
// 	mobile.src="mobile3.jpg"
// }
// function set(){
// 	var change=document.getElementById('image')
// 	change.src="mobile1.jpg"
// }

//Task 5:
// function add(){
// 	var increase=document.getElementById('inc').innerHTML;
// 	increase++;
// 	document.getElementById('inc').innerHTML =increase;
// }
// function sub(){
// 	var decrease=document.getElementById('inc').innerHTML;
// 	decrease--;
// 	document.getElementById('inc').innerHTML =decrease;
// }

//chp 9 to 52
//Task 1:
// function add(){
// 	var firstname=document.getElementById('name');
// 	var second name=document.getElementById('secname');
// 	var password=document.getElementById('pass');
// 	var formfirstname=document.getElementById('secname');
// 	var formsecond name=document.getElementById('sname');
// 	var formpassword=document.getElementById('secpass');
// 	formfirstname.innerHTML=firstname.innerHTML

// }


//Task 2:
// function read(){
// 	var text="Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on Read more button full detail of that particular item will be displayed.In previous assignment you have created a tabular data using javascript. Let modify that. Create a form which takes student details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button a hidden form will appear with the values of that row."
// 	var more =document.getElementById('para');
// 	 more.innerHTML=text  

// 	}

//Task 3:
// function del(){
// var del=document.getElementById('first').remove();
// }
// function one(){
// 	var a=document.getElementById('second').remove();
// }
// function two(){
// 	var b=document.getElementById('third').remove();
// }
// function three(){
// 	var c=document.getElementById('fourth').remove();
// }
// function edit(){
// 	var d=document.getElementById('first')

// }


// Chapter 38 to 42:
// Task 1:
// function one(a,b){
//   var c = a +++ b;
//   alert(c)
// }
// one(5,6)

// Task 2:
 

// function two(){
// var year;
// year = prompt("Enter any Year");
//  if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
// 		{
// 			alert(year+" is a leap year");  
// 		}
// 		else
// 		{
// 			alert(year+" is not a leap year");  
// 		}
// }
// two()


// Task 3:

// JavaScript program to find the area of a triangle

// let a = +prompt('Enter side1: ');
// let b = +prompt('Enter side2: ');
// let c = +prompt('Enter side3: ');

// var M;
// function three(){
// M = (a + b + c)/2;
// }
// three()
// function three2(){
// var area =  Math.sqrt(M*((M-a)*(M-b)*(M-c)));
// alert("Area of Triangle is " + area);
// }
// three2()

// Task 4:

//  var a= +prompt("Enter 1st Subject Marks");
//  var b= +prompt("Enter 2nd Subject Marks");
//  var c= +prompt("Enter 3rd Subject Marks");
//  var X;
// function avg(){
//      X = (a + b + c)/3;
//      alert("Average Marks is " +X)
//     }

// function perc(){
//     var Y = a + b + c;
//     var full = 300;
//     var percent = ((Y/full)*100)
//     alert("Percantage is "+percent +"%")
// }
// function main(){
// avg()
// perc()
// }
// main();


// Task 5:
// function find_index(collection, item) {
//     for (var i = 0; i < collection.length; i++) {
//         if (collection[i] === item) {
//             return i;
//         }
//     }
//  };
//  find_index([5,4,3,2,1], 5)

// Task 6:

// function vowels(){
// var vol = prompt("Enter Any String");
// vol = vol.replace( /[aeiou]/g, '' );
// alert(vol);
// }
// vowels()


// Task 7:

// function findOccurrences() {
//     var str = prompt("enter any String")
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//   var C = str.charAt(count)
//     return C
//   }
  
//   console.log(findOccurrences());


// Task # 08

// var a = prompt("Enter distance between two cities");
// function Meter(){
// var meter = a * 1000;
// alert("Distance between two cities in meter is " +meter)
// }
// Meter()

// function centimeter(){
//     var cent = a * 1000 * 100;
//     alert("Distance between two cities is centimeter is " +cent)
// }
//  centimeter()

//  function feet(){
//     var feet = a * 3280.84;
//     alert("Distance between two cities in feet is " +feet)
// }
// feet()

// function inches(){
//     var inches = a *39370.08;
//     alert("Distance between two cities in inches is " +inches)
// }
// inches()

// Task # 09

// var a = prompt("enter Working Hour");
// if(a>40){
//     var time = a-40;
//     var pay = time*12
//     alert("Overtime Pay is " + pay);
// }
// else{
//     alert("You have to work more than 40 hours to get overtime pay")
// }


// Task # 10

function current(){
    var a = prompt("Enter Your Amount");
    var b = (Math.floor(a/100))
   var c = Math.floor((a%100)/50)
   var d=(Math.floor(((a%100)%50)/10))
   var e = Math.floor((a%100)%50)%10
   alert("you will have "+b +" hundred notes " +c +" fifty notes "+d+" ten notes and " +e +" rupees ")
}
current()






