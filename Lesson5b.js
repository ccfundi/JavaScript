// Arrow functions with parameters
const sayHello=(name)=>{

    console.log(`Hello`,name);    

}
sayHello("Joe")
sayHello("Chris")

// Favourite Counties
const favourite_counties=(counties)=>{

    console.log('My favourite county is',counties);
    
}
favourite_counties("Nairobi")
favourite_counties("Mombasa")
favourite_counties("Nakuru")

// Addition
const add=(num1,num2)=>{

    let sum=num1+num2
    console.log(`The sum is ${sum}`);
    

}
add(num1=60,num2=20)

// Subtraction
const subtract=(num1,num2)=>{

    let difference=num1-num2
    console.log(`The difference is ${difference}`);
    
}
subtract(num1=70,num2=20)

// Division
const divide=(num1,num2)=>{

    let division=num1/num2
    console.log(`The division is ${division}`);
    
}
divide(num1=80,num2=4)

// modulus
const modulus=(num1,num2)=>{

    let modulus=num1%num2
    console.log(`The modulus is ${modulus}`);
    
}
modulus(num1=19,num2=5)

// Simple Interest
const simple_interest=(principle,rate,years)=>{

    let interest=principle*rate*years/100
    console.log(`The simple interest is ${interest}`);
    
}
simple_interest(principle=1000,rate=20,years=3)

// BMI
const BMI=(weight,height)=>{

    let BMI=weight/height**2
    console.log(`The Body Mass Index is ${BMI}`);
    
}
BMI(weight=100,height=1.5)

// Area of a triangle
const Triangle_Area=(base,height)=>{

    let area=base*height/2
    console.log(`The area of the triangle is ${area}`);
    
}
Triangle_Area(base=4,height=10)