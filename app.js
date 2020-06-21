// Chapter 21-25
//     Task-01
// Ans

// var firstname = prompt("Enter Your First Name","First Name");
// var lastname = prompt("Enter Your Last Name","Lasst Name");
// var fullname = firstname + " " +lastname;
// alert("Welcome to Our Website\n" + fullname);


// Chapter 21-25
//     Task-02
// Ans

// var fvrmob = prompt("Enter Your Favorite Mobile Phone");
// var leng = fvrmob.length;
// document.write("My Favorite Mobile Phone is: " + fvrmob + "<br>" + "Length of String: " + leng);


// Chapter 21-25
//     Task-03
// Ans

// var p = "Pakistani"
// var i = p.indexOf("n");
// document.write("String: " + p + "<br>" + "Index of 'n': " + i);


// Chapter 21-25
//     Task-04
// Ans

// var greet = "Hello World"
// var li = greet.lastIndexOf("l");
// document.write("String: " + greet + "<br>" + "Last Index of 'l': " +li);


// Chapter 21-25
//     Task-05
// Ans

// var p = "Pakistani"
// var i3 = p.charAt(3);
// document.write("String: " + p + "<br>" + "Character at index '3': " + i3);


// Chapter 21-25
//     Task-06
// Ans

// var firstname = prompt("Enter Your First Name","First Name");
// var lastname = prompt("Enter Your Last Name","Lasst Name");
// var fullname = firstname.concat(" ",lastname);
// alert("Welcome to Our Website\n" + fullname);


// Chapter 21-25
//     Task-07
// Ans

// var city = "Hyderabad";
// var rep = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>" + "After replacement: " + rep);


// Chapter 21-25
//     Task-08
// Ans

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep_and = message.replace(/and/g, "&");
// document.write("Old Messgae: " + message + "<br>" + "New Messgae: " + rep_and);


// Chapter 21-25
//     Task-09
// Ans

// var s = "472";
// var n = parseInt(s);
// document.write("Value: " + s + "<br>" + "Type: " + typeof(s) + "<br>" + "Value: " + n + "<br>" + "Type: " + typeof(n));


// Chapter 21-25
//     Task-10
// Ans

// var user = prompt("Enter Your Name","Name");
// var cap = user.toUpperCase();
// document.write("User Input: " + user + "<br>" + "Upper Case: " + cap);


// Chapter 21-25
//     Task-11
// Ans

// var user = prompt("Enter Your Name","Name");
// var fc = user.charAt(0).toUpperCase();
// var ac = user.slice(1).toLowerCase();
// document.write("User Input: " + user + "<br>" + "Title Case: " + fc + ac);


// Chapter 21-25
//     Task-12
// Ans

// var n = 35.36;
// var s = n.toString();
// var s = s.replace(".","");
// document.write("Number: " + n + "<br>" + "Result: " + s);


// Chapter 21-25
//     Task-13
// Ans

// var username = prompt("Enter a Username","Username");
// var sc = ["@", "," ,".","!"];
// if(username.charCodeAt(sc)){
//     alert("please enter valid username")
// }
// document.write(username);


// Chapter 21-25
//     Task-14
// Ans

// var shopitem = ["cake","apple pie" ,"cookie" ,"chips" ,"patties"];
// var find = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var lc = find.toLowerCase();

// if(shopitem.indexOf(lc) !== -1){
//     document.write(lc.bold() + " " + "is" +" <strong>available</strong>" + " at index " + shopitem.indexOf(lc) + " in our bakery");
// }else{
//     document.write("We are Sorry. " + lc.bold() + " " + "is" +" <strong>not available</strong>"  + " in our bakery");
// }


// Chapter 21-25
//     Task-16
// Ans

// var uni = "University of Karachi";

// var split = uni.split("");

// for(var i = 0; i< split.length; i++){
//     document.write(split[i] + "<br>");
// }


// Chapter 21-25
//     Task-17
// Ans


// var c = "Pakistan";
// var lc = c.charAt(c.length-1);
// document.write("User Input: " + c + "<br>" + "Last Character of input: " + lc);


// Chapter 21-25
//     Task-18
// Ans

// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
// document.write("Text: The quick brown fox jumps over the lazy dog " + "<br>" +"There are " + count("The quick brown fox jumps over the lazy dog", 'the') + " occurrence(s) of word 'the'");


// Chapter 26-30
//     Task-01
// Ans

// var pn = +prompt("Enter your Number");
// var r  =  Math.round(pn);
// var f = Math.floor(pn);
// var c = Math.ceil(pn);
// document.write("number: " + pn + "<br>" + "round off value: " + r + "<br>"+ "floor value: " + f + "<br>"+ "ceil value: " + c);


// Chapter 26-30
//     Task-02
// Ans

// var nn = -prompt("Enter your Number");
// var r  =  Math.round(nn);
// var f = Math.floor(nn);
// var c = Math.ceil(nn);
// document.write("number: " + nn + "<br>" + "round off value: " + r + "<br>"+ "floor value: " + f + "<br>"+ "ceil value: " + c);


// Chapter 26-30
//     Task-03
// Ans

// var n = +prompt("Enter your Number");
// var an = Math.abs(n);
// document.write("The absolute value of " + n + " is " + an);


// Chapter 26-30
//     Task-04
// Ans

// var dice1 = Math.random() * 6+1;
// var dice2 = Math.random() * 6+1;
// var floor1 = Math.floor(dice1);
// var floor2= Math.floor(dice2);
// var total = floor1 + floor2
// document.write("Random dice value: " + floor1 + "<br>" + "Random dice value: " + floor2 + "<br>" + "Total dice value: " + total);

// Chapter 26-30
//     Task-05
// Ans

// var heads = prompt("Heads or Tails");
// var toss = Math.random() * 2+1;
// var floor = Math.floor(toss);
// if (floor === 2) {
//     document.write(floor + "<br>" +"Random coin value: Heads");
// }else {
//     document.write(floor + "<br>" +"Random coin value: Tails");
// }


// Chapter 26-30
//     Task-06
// Ans

// var n1to100 = Math.random() * 100+1;
// var floor = Math.round(n1to100);
// document.write("Random number between 1 and 100: " + floor);


// Chapter 26-30
//     Task-07
// Ans

// var weight = prompt("Enter Your Weight in Kilograms");
// var int = parseFloat(weight);
// document.write("The weight of user is " + int + " Kilograms");


// Chapter 26-30
//     Task-08
// Ans

// var gn = +prompt("Guess the Number between 1 and 10");
// var sn = Math.random() * 10+1;
// var floor = Math.floor(sn);
// if (gn === floor){
//     alert("Congratulation \nYou Choose the Right Number\n" + "it is "+ floor)
// }else {
//     alert("Try Again \nYou Choose the Wrong Number\n" + "Correct No is "+ floor);
// }


// Chapter 31-34
//     Task-01
// Ans

// var cdt = new Date();
// document.write(cdt);


// Chapter 31-34
//     Task-02
// Ans

// var month = ["January","February","March","April",
//             "May","June","July","August","September",
//             "October","November","December"];

// var cdt = new Date();
// var cm = cdt.getMonth();
// var nom = month[cm];
// alert("Current Month: " + nom);


// Chapter 31-34
//     Task-03
// Ans

// var cdt = new Date();
// var str = cdt.toString();
// var d = str.slice(0,3);
// alert("Today is " + d);


// Chapter 31-34
//     Task-04
// Ans

// var cdt = new Date();
// var day = cdt.getDay();
// if (day === 0 || day === 6){
//     document.write("It's Fun day");
// }else {
//     document.write("It's Working day");
// }


// Chapter 31-34
//     Task-05
// Ans

// var cdt = new Date();
// var date = cdt.getDate();
// if (date < 16){
//     document.write("First fifteen days of the month");
// }else {
//     document.write("Last days of the month");
// }


// Chapter 31-34
//     Task-06
// Ans

// var cdt = new Date();
// var todaymili = cdt.getTime();
// var todaymins = todaymili/(1000*60);

// document.write("Current Date: " + cdt + "<br>" + 
//                 "Elapsed milliseconds since January 1, 1970: " + todaymili + "<br>" 
//                 + "Elapsed minutes since January 1, 1970: " + todaymins);


// Chapter 31-34
//     Task-07
// Ans

// var cdt = new Date();
// var hour = cdt.getHours();
// if (hour < 12){
//     alert("It's  AM");
// }else{
//     alert("It's  PM");
// }


// Chapter 31-34
//     Task-08
// Ans

// var laterdate = new Date("December 31, 2020");
// document.write("Later Date: " + laterdate);


// Chapter 31-34
//     Task-09
// Ans

// var ramzan1st = new Date("April 25, 2020");
// var ramzanmili = ramzan1st.getTime();
// var cdt = new Date();
// var todaymili = cdt.getTime();
// var diff = todaymili - ramzanmili;
// var diffday = diff/(1000*60*60*24);
// var floor = Math.floor(diffday)
// document.write(floor + " days have passed since 1st Ramzan, 2020");


// Chapter 31-34
//     Task-10
// Ans

// var referdate = new Date("Dec 05, 2015 22:50:16");
// var refermili = referdate.getTime();
// var startdate = new Date("Jan 01, 2015 00:00:00");
// var startmili = startdate.getTime();
// var diff = refermili - startmili;
// var esecond = diff/(1000);
// document.write(referdate + "," + "<br>" + esecond + " Elapsed seconds had passed since beginning of 2015");


// Chapter 31-34
//     Task-11
// Ans

// var cdt = new Date();
// var m1 = new Date();
// m1.setHours(m1.getHours() -1);
// document.write("Current Date: " + cdt + "<br>" + "1 Hour ago, it was: " + m1);


// Chapter 31-34
//     Task-12
// Ans
// var cdt = new Date();
// var b100 = new Date();
// b100.setFullYear(b100.getFullYear() -100);
// alert("Current Date: \n" + cdt + "\n" + "100 years back, it was: \n" + b100);


// Chapter 31-34
//     Task-13
// Ans

// var age = prompt("Enter Your Age");
// var cdt = new Date();
// var currentYear= cdt.getFullYear();
// var birthYear = currentYear - age;

// document.write("Your Age is: " + age + "<br>" + "Your Birth Year is: " + birthYear );


// Chapter 31-34
//     Task-14
// Ans

// document.write("<h1>K-Electric Bill </h1>")

// var customerName = prompt("Enter Your Name");
// var month = prompt("Enter Your Month");
// var NumberofUnits = prompt("Enter No of Units Consumed");
// var ChargesperUnit = "16";
// var NetAmount = NumberofUnits * ChargesperUnit;
// var Net = NetAmount.toFixed(2);
// var surcharge = NetAmount * 0.05;
// var sur = surcharge.toFixed(2);
// var gross = NetAmount + surcharge;
// var gr = gross.toFixed(2);

// document.write("Customer Name: " + customerName.bold() + "<br>" + 
//                 "Billing Month: " + month.bold() + "<br>" +
//                 "Number of Units Consumed: " + NumberofUnits.bold() + "<br>" +
//                 "Charges per Unit: " + ChargesperUnit.bold() + "<br> <br>" +
//                 "Net Amount Payable(within Due Date): " + Net.bold() + "<br>" +
//                 "Late payment surcharge: " + sur.bold() + "<br>" +
//                 "Gross Amount Payable(after Due Date): " + gr.bold());


// Chapter 35-38
//     Task-01
// Ans

// function currentdatetime(){
//     var cdt = new Date();
//     document.write(cdt);
// }
// currentdatetime();


// Chapter 35-38
//     Task-02
// Ans

// function greetingUser(fname,lname){
//         fullname = fname + " " + lname;
//         alert("Welcome" + " " + fullname);
// }

// greetingUser("Usama","Azhar");


// Chapter 35-38
//     Task-03
// Ans

function add(num1,num2){
    num1 = +prompt("Enter First Number");
    num2 = +prompt("Enter Second Number");
    sum = num1 + num2;
    return sum
}
var sum = add();
document.write(sum);