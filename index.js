// alert("helo")

// let num=prompt("Enter any number");

// console.log(num)

// let choice=confirm("Do you Love me!!")

// if(choice)
// console.log("She LOves you !!")
// else
// console.log("She does not Loves You !!")

// console.log("hii")

var num=prompt("Enter Number till then you want to print Prime Numbers")

var num1=parseInt(num)
// var count=0


for(let i=1; i<=num1; i++){

    var count=0

    for(let j=1; j<=i; j++){
        if(i%j==0)
        count++
    
        
    }
    if(count==2)
    console.log(i)
}
