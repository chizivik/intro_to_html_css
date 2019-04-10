// Ex on variable declaration
// let userName = "I am Js"; 
// alert(userName)

//Ex on incrementation using unary operator
// let a = 1, b = 1; 
// alert(++a)
// alert(b++)
// alert(b)

//Ex on binary operator
// let a = 2; 
// let x = 1 + (a *= 2)
// alert(x)

// //Ex on interaction using prompt  
// let age = prompt("please input your age");
// alert(`you are ${age} years old` );

//Ex on interaction using confirm
// let isBoss = confirm("Are you the Boss?");
// alert(isBoss);

//Ex on conditional operator 
// let year = prompt('what year was javascript created?');
// if  (year == 2015) {
//      alert("you are smart");
//  }
// else{
//     alert('you so wrong');
//  }

//Ex on else if condition
// let year = prompt('what year was javascript created?');
// if  (year < 2015){
//      alert("too early");
// }else if (year > 2015){
//     alert('too late');
// }else {  
//     alert("exactly");
// }  

// if (age < 3){
// let message = 'hi baby!';
// }else if (age < 18){
// message = 'hello!';
// }else if (age < 100){
// message = 'greetings';
// }else {
//     message = 'what an usual age!'
// }

//Ex on non-traditional use of "?"
// let company = prompt('Which company created JavaScript?', '');

// (company == 'Netscape') ?
//    alert('Right!') : alert('Wrong.');

// Ex on how to rewrite if statement to ternary
// if (a + b < 4){
//    result = 'below';
//     }    
// else {
//     result = 'over';
//     }
// alert (result)

//Ex on AND operator
// let hour = 12
// let minutes = 30
// if(hour == 12 && minutes == 30)
// alert(hour + ":" +  minutes)

//Ex on OR operator
// alert( alert(1) || 2 || alert(3) );

// let userName = prompt('who are you');
// if (userName == 'Admin'){
//     alert('success');
// let pass = prompt('password', '');
// if (pass == 'Themaster'){
//     alert('welcome to our world!');
// }else if (pass == "" || pass == null){
//     alert ('canceled')
// }else alert  ('wrong'); 
// }else if (userName =="" || userName == null){
//     alert ('canceled');
// }else {
//     alert('i dont know you');
// }

//Ex on While loop
// let j = 0;
// while (j < 5){
// alert (j);
// j++
// }
// for (let i =0; i < 20; i += 5){
//     alert(i)
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Power ${n} is not supported,
//       use an integer greater than 0`);
//   } else {
//     alert( pow(x, n) );
//   }
// function BigUser() {

//   this.name = "John";

//   return { name: "Nnayelugo" };

// alert( new BigUser().name );
// }
// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
//  let num = 1.23456;

//  alert( Math.floor(num * 100) / 100 );
//  alert(num.toFixed(3))
//  alert("World");

// setTimeout(()=>alert("Hello"));
// let i = 0;

// let start = Date.now();

// function count() {

//   // do a heavy job
//   for (let j = 0; j < 1e9; j++) {
//     i++;
//   }

//   alert("Done in " + (Date.now() - start) + 'ms');
// }

// count();
{/* <div id="progress"></div>


  let i = 0;

  function count() {
    for (let j = 0; j < 1e6; j++) {
      i++;
      // put the current i into the <div>
      // (we'll talk more about innerHTML in the specific chapter, should be obvious here)
      progress.innerHTML = i;
    }
  }

  count(); */}
