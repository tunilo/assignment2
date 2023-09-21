//1
for (let i=5; i<100; i++){
    console.log(i);
}
//2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i=0; i<array1.length; i++){

if(array1[i]>0 && array1[i]<10) console.log(array1[i]);
}

//3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i=0; i<array2.length; i++){
if (array2[i]==5){
 console.log("YES");
 break;
}
}
//4
let array3= [1, 2, 3, 4, 5];
let sum = 0;
for (let i=0; i<array3.length; i++){
sum+=array3[i];
}
 console.log(sum);

//5

let array4 = [1, 2, 3, 7, 6, 9];
let sum1 = 0;
for (let i=0; i<array4.length; i++){
sum1+=array4[i];

}
 console.log(sum1/array4.length);

 //6
 let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
 ]

for (let i=0; i<users.length; i++){
  if (users[i].status == true) console.log(users[i]);
}