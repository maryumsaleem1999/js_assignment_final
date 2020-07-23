// TASK # 01

//  function current(){
//  var a = new Date();
//   document.write(a);
// }
//  current();

//Task 2:
// function greet(a){
// alert("Congratulations "+a);
// }
// greet("Maryum Saleem");

//Task 3:

// var a = +prompt("Enter num1");
// var b = +prompt("Enter num2");
// function calc (num1,num2){
// alert(a+b);
// }
// calc(a,b);

//Task 4:


 //function calc (num1,opr,num2){
  //  if(opr === "+"){
//         return num1 + num2   
//     }
//   else if(opr === "-"){
//         return num1 - num2
//     }
//  else if(opr === "*"){
//         return num1 * num2
//     }
//     else if(opr === "/"){
//         return num1 / num2
//     }
// else{
//     return "Incorrect operator "
// }
// }
// var result  = calc(5,"+",5);
// alert(result);

//Task 5:

// function root (squar){
//     alert(squar*squar);
// }
// root(5);

//Task 6:

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);
  

  //Task 7:

  // var b = prompt("Enter starting number");
// var n = prompt("Enter Ending");
// for(a=b;a<=n;a++){
//     document.write("<br>" + a);
// }

//Task 9:
// Pass by value
// function rect (10,5){
// var A = width* height;
// alert(A);
// }
// rect();
// Pass by variables
// function rect (width,height){
//     var A = width* height;
//     alert(A);
//     }
// rect(10,5);



//task 10
// var word =prompt("enter your word");
// var check ="";

// for (var i = word.length -1; i>= 0; i--){  
//     check += word[i]   
// }

// if(word === check){
// 	alert(word + "is palindrome");
// }
// else{
// 	alert("not a palindrome");
// }


//Task 11:
// function capital_letter(str) 
// {
//     str = str.split(" ");
//     for (let i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }
//     return str.join(" ");
// }

// console.log(capital_letter("the quick brown fox"));

// function cou(a = hamza,b=o){
// var c = a.count(b);
// alert(c);
// }
// cou();

//task 12:
// function findlongestword(str)
// {
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var result = arr[0];
//   for(var x = 1 ; x < arr.length ; x++)
//   {
//     if(result.length < arr[x].length)
//     {
//     result = arr[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'))

