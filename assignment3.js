
class courses{

    constructor(CourseName, price, validity, TrainerName, PhoneNumber){
        this.CourseName = CourseName;
        this.price = price;
        this.validity = validity;
        this.TrainerName = TrainerName;
        this.PhoneNumber = PhoneNumber;
    }

    showDetails(){
        
        console.log(`Thank you for showing interest in ${this.CourseName} - Current Price is  ${this.price} and 
        validity of course is till  ${this.validity} If you have any query then reach out to ${this.TrainerName} 
        mobile - ${this.PhoneNumber}`);
    }
}
let cou = new courses("Javascript", 100, "2 years", "Mukesh", "0987654321")
//cou.showDetails()
let abc = new courses("cypress", 1000, "lifetime", "Naveen", "0987654321");
//abc.showDetails();
let s = new courses("selenium", 3000, "1 year", "Navin", "0987654341");
//s.showDetails()

export {cou, abc, s}
/*
class courses{

    constructor(CourseName, price, validity, TrainerName, PhoneNumber){
        this.CourseName = CourseName;
        this.price = price;
        this.validity = validity;
        this.TrainerName = TrainerName;
        this.PhoneNumber = PhoneNumber;
    }

    get showDetails(){
        
        return `Thank you for showing interest in ${this.CourseName} - Current Price is  ${this.price} and 
        validity of course is till  ${this.validity} If you have any query then reach out to ${this.TrainerName} 
        mobile - ${this.PhoneNumber}`;
    }

    set courseInfo(CourseName){
        this.CourseName = CourseName;
    }
}
let cou = new courses("Javascript", 100, "2 years", "Mukesh", "0987654321")
cou.courseInfo = "Python"
console.log(cou.showDetails)

export {courses};
*/