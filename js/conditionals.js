let numOne = 1;

let stringOne = '1';

console.log('double ==', numOne == stringOne);
console.log('triple ===', numOne === stringOne);

const day = new Date().getDay();
//  0 = Sunday 1 = Monday ....  6 = Saturday
if (day==0) {
    console.log('Today is Sunday');
} else if (day==1) {
    console.log('Today is Monday');
} else if (day==2) {
    console.log('Today is Tuesday');
} else if (day==3) {
    console.log('Today is Wednesday');
} else if (day==4) {
    console.log('Today is Thursday');
} else if (day==5) {
    console.log('Today is Monday');
} else if (day==6) {
    console.log('Today is Monday');
}
