// 1. Create an arrow function that accepts a number n and prints all even numbers from 1 to n

const EvenNumbers=(n)=>{
    
    for (let num=1;num<=n;num++){

        if (num % 2==0){
            console.log(num);
            }

        }

}
EvenNumbers(n=20)

// 2. Create an arrow function that prints all odd numbers from 1 to n using a while loop

const OddNumbers=(n)=>{

    let number=1

    while (number<=n){
        if (number%2==1){
            console.log(number);}
    number++
    }

}
OddNumbers(n=20)
console.log("................");


// 3. Create an arrow function that prints numbers from n down to 1

const numbers=(n)=>{

    for (num=n;num>=1;num--){
        console.log(num);
        
    }
}
numbers(n=20)
console.log("...................");


// 4. Write an arrow function square that takes a number as a parameter and log its square

const square=(number)=>{

    let square=number**2
    console.log(square);
    

}
square(number=10)
console.log(".................");


// 5. Print numbers from 1 to n and

// If divisible by 3 - Fizz

// If divisible by 5 - Buzz

// If divisible by 3 and 5 - FizzBuzz

const divide=(number)=>{
    if (number%3==0 && number%5==0){
        console.log("FizzBuzz");
        }

    else if (number%3==0){
        console.log("Fizz");
        }

    else if (number%5==0){
        console.log("Buzz");
        }

    else{"Invalid number"}

}
divide(number=15)
divide(number=18)
divide(number=10)




    

