// functions with parameters

function greet(name){

    console.log("Hello",name);
    
}

greet("Joe")
greet("Chris")

function favourite_county(county){

    console.log(`My favourite county is ${county}`);
    
}

favourite_county("Nairobi")
favourite_county("Mombasa")
favourite_county("Nakuru")

// function to add two numbers

function add(num1,num2){

    sum=num1+num2
    console.log(`The sum is ${sum}`);
    
}

add(num1=2,num2=8)
add(num1=50,num2=60)
add(num1=40,num2=30)

// function to calculate simple interest

function simple_interest(principle,rate,years){

    let interest=principle*rate*years/100
    console.log(`The simple interest is ${interest}`);
    
}

simple_interest(principle=1000,rate=10,years=4)

// function to calculate BMI

function BMI(weight,height){

    let BMI=weight/height**2
    console.log(`The Body Mass Index is ${BMI}`);
    
}

BMI(weight=100,height=1.5)
BMI(weight=70,height=1.4)
