// let average =Number (0);
// let days =Number(prompt('How many days did you count?'));
// let count =Number (prompt('Enter 1 day count'));
// while (count + count < 20 || count + count > 20) {
//   answer = prompt('Add to average count?\n1.for yes\n2.for no');
//   if (answer == 1) {
//     alert(average+count);
//   }else{alert(average);

//   }
// }
----------------------------------------
let msg='Hello World';
let char='o';
let i;
for(let i=0;i<msg.length;i++){
    if (char==msg[i]){
      console.log(i);                   //finds a letter in the string and print iths location. 
      break;
    }
}
if (i==msg.length){
    console.log(-1);
}
----------------------------------------

// let num=39, msg;
// if (num>0){
//     msg='posative';
// }    
// else if (num<0){
//     msg='negative';                     //finds if num>0 print posative, if num<0 print negative else print 0.
// }
// else{
//     msg='0';
// }
// console.log(msg);

//מקוצר
let num=(-5), msg;
msg=(num>0) ? 'posative' : (num<0) ? 'negative' : '0';             //same thing but short/
console.log(msg);
-----------------------------------------------------------

let kids=['ravid','hadar','yuval','nadav'];


kids.pop //מסיר את התא האחרון בסטרינג ומציג אותו.
kids.shift //מסיר את התא הראשון ומציג אותו.
kids.unshift // מוסיף תא חדש בהתחלה ופולט כמה תאים יש.
kids.push // מוסיף תא חדש בסוף הסטרינג ופולט כמה תאים יש עכשיו.
kids.concat // מאחד 2 סטרינגים ביחד.
kids.reverse // הופך את הסדר של התאים מהסוף להתחלה.
kids.slice // חותך החל מהתא שמבקשים לפי מיקום, פולט מה נשאר אבל לא משנה את ה ערך.
kids.splice// מוסיף תא לפי מיקום שבוחרים.
kids.sort // מסדר את התאים לפי הסדר לפי תבלת האסקי.


let ary=[0,1,2,3,4,5,6,7,8,9];
1. console.log(ary.unshift(-1));
2. console.log(ary.push(10));
3. let ary2=[4,7,2];
   console.log(ary.concat(ary2));
4. let num=Number(prompt('Enter number'));
   console.log(ary.includes(num));
5. let num=prompt('Enter number');
   let loc=prompt('Enter location');
   console.log(ary.splice(loc,1,num));

6. let ary = [0,1,2,3,4,5,6,7,8,9];
   let delCount=ary.slice(0,5);
   let start=delCount.concat(5,'##','$$');
   console.log(start+','+ary.slice(7,10));
// let ary=[0,1,2,3,4,5,6,7,8,9];
// let start=3,delCount=4;
// for (let i=0; i>=ary.length;i++){
//     if (i==start[3]){
        
//     }
// }
// console.log(ary);


// let ary=[0,1,2,3,4,5,6,7,8,9];
// let start=3,delCount=4;
// if (ary.includes(3)){
//      ary=[0,1,2,3,4,5,start,7,delCount,9];
// }
// console.log(ary);

--------------------------------------------------
let names = ['avi', 'eli', 'moshe', 'liron'];
for (let i = 0; i < names.length; i++) {
    if (names[i].includes('i')) {               //finds the words that have 'i' and print them.
        console.log(names[i]);
    }
}
// for מקוצר
let names = ['avi', 'eli', 'moshe', 'liron'];
for (i in names) {
    if (names[i].includes('i')) {             //same thing but short.
        console.log(names[i]);
    }
}


let names = ['avi', 'eli', 'moshe', 'liron'];
for (n of names.slice(1,3)) {                   //cut from 1-3 ant print them.

    console.log([n]);
}

// homework
indexOf
----------------------------------
let msg='Hello World';
let char='W';
let i;
for(let i=0;i<msg.length;i++){
    if (char==msg[i]){
      console.log(i);
      break;
    }
}
----------------------------------
includs
----------------------------------
let msg='Hello World';
let x='e';
for (let i=0;i<msg.length;i++){
    if (x==msg[i]){
      console.log(true);
    }
    }
---------------------------------
push
---------------------------------
let kids = ["ravid", "hadar", "yuval", "nadav"];
kids[4]='latte';
console.log(kids.length);
---------------------------------------------------
unshift
---------------------------------------------------
let kids = ["ravid", "hadar", "yuval", "nadav"];
let ary= ['latte,']+[kids];
console.log([ary]);
-----------------------------------------------------
shift
------------------------------------------------------
let kids = ["ravid", "hadar", "yuval", "nadav"];
let ary=kids[0];
console.log(ary);
------------------------------------------------------
let myStr='    Hello World    ';
let newStr='';
s=-1;
e=myStr.length;
while (myStr[++s]==' '){
}
while (myStr[--e]==' '){
}
for (i=s; i<=e; i++){
    newStr+=myStr[1];
}
console.log(newStr);