//add 2 numbers
let add = (a,b) => {
    let result = a + b
    console.log(result);
    return result 
}
add(5,6)

//subtract 2 numbers
let sub = (a,b) => {
    let result = a - b
    console.log(result);
    return result 
}
sub(5,6)

//display student results
let studentResult = (num) => {
    if(num>50){
        console.log("Result is PASS");
    }
    else{
        console.log("Result is FAIL");
    }
}
studentResult(50)

//display student results based on the numbers along with ranks
let studentGrade = (number) => {
    if(number > 90){
        console.log("Grade A");
    }
    else if(number > 70 && number <= 90){
        console.log("Grade B");
    }
    else if(number > 50 && number <= 70){
        console.log("Grade C");
    }
    else{
        console.log("fail")
    }
}
studentGrade(91)

//takes 3 numbers as arguments and perform multiplication
let mul = (a,b,c) => {
    let result = a * b * c;
    console.log(result);
    return result
}
mul(4,5,20)
