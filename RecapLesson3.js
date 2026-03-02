// Creating a function to print my balance is 500

function balance(){

    console.log("My balance is 500");
    
}
balance()

// Creating a function to calculate simple interest

function simpleinterest(){
    let principle=1000
    let rate=10
    let years=2

    let interest=principle*rate*years/100
    console.log(`The simple interest is ${interest}`);    

}

simpleinterest()

// A function to calculate BMI

function BMI(){
    let weight=100
    let height=1.5

    let BMI=weight/height**2
    console.log(`The Body Mass Index is ${BMI}`);
    
}

BMI()

// A function to calculate the area of a triangle

function Triangle_Area(){
    let base=4
    let height=10

    let area=base*height/2
    console.log(`The area of the triangle is ${area}`);
    
}

Triangle_Area()

// A function to calculate the perimeter of a circle

function circumference(){
    let radius=14

    let circumference=22/7*radius*2
    console.log(`The perimeter of the circle is ${circumference}`);
    
}

circumference()