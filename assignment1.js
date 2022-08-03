function avg(a,b,c,d,e) {
    let result = (a + b + c + d + e)/5
    console.log("Avg of 5 numbers",result)
    return result
}
avg(2,5,6,7,8)

let sum = (k,l,m,n,o) => {
    let result = k + l + m + n + o
    console.log("Sum of 5 numbers",result)
    return result
}
sum(10,20,30,40,50)

let concatString = (first_name, last_name) => {
    let result = first_name + ' ' + last_name
    console.log("combine the two string:",result);
}
concatString("Aswin", "Kumar")

let emi_calc = (p,r,t) => {
    let emi;
    r = r / (12 * 100); // one month interest
    t = t * 12; // one month period
    emi = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);
    return (emi + 0.000414);
}
let principal, rate, time, emi;
principal = 100000;
rate = 10;
time = 2;
 
emi = emi_calc(principal, rate, time);
console.log(("Monthly EMI is = " + emi.toFixed(2)));

let evenOdd = (num) => {
    let result = (num %2) == 0
    if(result == true)
    {
        console.log(num,"is a even number");
    }
    else
    {
        console.log(num,"is a odd number");
    }
}
evenOdd(98)
let avgArr = [1,11,111,222,555]
let total = 0
for(let i in avgArr){
    total += avgArr[i]
}
console.log("Avg of numbers from array:",total/avgArr.length);

let student = {
    name: "Aswin",
    collegeName: "SRM", 
    location: "Chennai",
    pincode: "600066",
    teachers: {
        teacherName: "Prema",
        teacherPhone: 0987654321,
        teacherSubject: "Maths"
    }
}
console.log(student.name); 
console.log(student.teachers.teacherName);


