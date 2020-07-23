//task 1 (A):

// var a;
// a=10;
// document.write("the value of a is :" + "10");
//task 1 (B):

// var a=10;

// document.write("the value of ++a is:", ++a)
// document.write("now the value of a is:",  a )

//task 1 (C):
// var a=11;
// document.write("the value of a++ is:", a++)
//  document.write("now the value of a is:",  a )

//task 1 (D):
// var a=12;
// document.write("the value of --a is:", --a)
// document.write("now the value of a is:",  a )

// //task1 (E):
// var a=11;
// document.write("the value of a-- is:", a--)
// document.write("now the value of a is:",  a )


//task 2:
// var a = 2,b=1;
// var result = --a - --b + ++b + b--;
// document.write(a)
// document.write(b)
// document.write(--a - --b + ++b + b--)

//task 3:

// var a=prompt("Enter your name","your name is:");
// var b= "welcome to my web";
// alert(b+a);
 
//task 4:
// var a=+prompt("Enter a table number");
// var b =+prompt("Enter length of table");
// var c = +(a+b);

// for(var i = 1; i <=b ; i++){
         
// if(a+b === c){

//     document.write(a + "X" + i + "=" + a*i + "<br>");

// }
     
// else{
//     document.write(5 + "X" + i + "=" + 5*i + "<br>");
//      }
//     }

//task 5:

// var a=prompt("Enter Subject name 1");
// var b=prompt("Enter Subject name 2");
// var c=prompt("Enter Subject name 3");
// var total = 100;
//  var total1 = total*3;


// var d=+prompt("Enter Subject 1 Marks");
// var e=+prompt("Enter Subject 2 Marks");
// var f=+prompt("Enter Subject 3 Marks");

// var obt = d+e+f;

// var per1 = (d/total)*100 ;
// var per2 = (e/total)*100 ;
// var per3 = (f/total)*100 ;

// var per4 = (obt/total1)*100 ;

// document.write("<table border = '3'>  <tr> <th > " + "Subject" +"</th> <th>" + "Total Marks" +"<th>"+"Obtained Marks" +"<th>"+"Percentage" +"</tr> </table>" );
// document.write("<table border = '3'>  <tr> <td > " + a +"</td> <td>" + total +"<td>"+ d +"<td>"+ per1 + "%"+"</tr> </table>" );
// document.write("<table border = '3'>  <tr> <td > " + b +"</td> <td>" + total +"<td>"+ e +"<td>"+ per2 +"%"+"</tr> </table>" );
// document.write("<table border = '3'>  <tr> <td > " + c +"</td> <td>" + total +"<td>"+ f +"<td>"+ per3 +"%"+"</tr> </table>" );


// document.write("<table border = '3'>  <tr> <td > " + total1 +"</td> <td>" + obt  +"<td>"+ per4 +"</tr> </table>" );