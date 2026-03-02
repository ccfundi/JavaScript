const add=function (num1,num2){

    sum=num1+num2
    console.log(`The sum is ${sum}`);    

}
add(num1=20,num2=70);

const subtract=function (num1,num2){

    difference=num1-num2
    console.log(`The difference is ${difference}`);
    
}
subtract(num1=80,num2=20)

const divide=function (num1,num2){

    division=num1/num2
    console.log(`The division is ${division}`);
    
}
divide(num1=80,num2=4)

const modulus=function (num1,num2){

    let modulus=num1%num2
    console.log(`The modulus is ${modulus}`);
    
}
modulus(num1=7,num2=2)

const simple_interest=function (principle,rate,years){

    let interest=principle*rate*years/100
    console.log(`The simple interest is ${interest}`);
    
}
simple_interest(principle=1000,rate=20,years=3)

const BMI=function (weight,height){

    let BMI=weight/height**2
    console.log(`The Body Mass Index is ${BMI}`);
    
}
BMI(weight=100,height=1.5)

const AreaOfSquare=function (width,height){

    let area=width*height
    console.log(`The area of the square is ${area}`);
    
}
AreaOfSquare(width=4,height=4)

const AreaOfTriangle=function (base,height){

    let area=base*height/2
    console.log(`The area of the triangle is ${area}`);
    
}
AreaOfTriangle(base=4,height=10)

const AreaOfCircle=function (radius){

    let area=22/7*radius**2
    console.log(`The area of the circle is ${area}`);
    

}
AreaOfCircle(radius=14)

const PerimeterOfCircle=function (radius){

    let perimeter=22/7*radius*2
    console.log(`The perimeter of the circle is ${perimeter}`);
    
}
PerimeterOfCircle(radius=14)