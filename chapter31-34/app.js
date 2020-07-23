//Task 1:

// var a = new Date();
// alert(a);

//Task 2:

// function show_now(){
//     var my_month=new Date()
//  var month_name= ["january","february","March","April","May","june","july","august","September","October","November","December"];
// alert ("Current Month : " + month_name[my_month.getMonth()]);
//}
// show_now();

//Task 3:

// var a = new Date();
// var b =a.toString();
// var c =b.slice(0,3);
// alert(c);

//Task 4:
// function weekend(){
// var m = new Date();
// var w = a.getDay();
// if (w === 5 || w ===6)
// {
// alert("It's Funday");
// }
// }
// weekend();



//  TASK 5:

// var a = new Date();
// var b = a.getDate();
//  if (b <= 16){
//  alert("First fifteen days of the mont");
//  } 
//  else {
//  alert("Last days of the Month");
//  }

//Task 6:


// var a = new Date();
// var b = new Date("Jan 1,1970");
// var c = b.getTime();
// var d = (c/6000)*1000;
// console.log("Current Date : " + a);
// console.log("Elapsed Millisecond : " + c);
// console.log("Elapsed Minutes : " + d);



//TASK 7

// var a = new Date();
// var hour = a.getHours();
// if(hour <= 12){
//     alert("its AM")
// }
// else{
//     alert("its PM")
// }


// TASK 9:
// var a = new Date("june 18,2015");
// var b = new Date();
// var c =b.getTime() - a.getTime();
// var d =Math.round( c/(1000 * 3600 * 24));
// alert(d + " days have passed since 1st ramandan,2015");



// task 11:

// var birthday = new Date();
//  var b = birthday.getHours();
// var c =b-1;
// birthday.setHours(c);
// alert(birthday);

//task 13:
// 
// var a = new Date();
// var b = a.getFullYear();
//var c =16;
// var d = b - c;
// alert(d);

//Task 14:

// function calcCircumference(radius){
//     var pie = 3.142;
//     var a = 2 ;
// alert( "The Circumference is "+pie*a*radius);
// }
// calcCircumference(5);


// function calcArea(radius){
//  var pie = 3.142;
//  alert(" Area of Circle " +pie*(radius*radius));

// }
// calcArea(5);