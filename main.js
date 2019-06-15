//The Number Guessing Game
var i = Math.floor(Math.random() * 100) + 1; //Generates random numbers and stores it in i

var j=i%2; //gets the modulus of the random number and stores the result in a variable j
if (j==0) //checks if j returns a zero or not
    alert (i +" Number is Even"); // if result is zero then j = even
else
    alert (i +" Number is odd"); // if result is not zero then j= odd

for(var count=1;count<=10;count++) // loop to counter the number of captured inputs
{
        let num = prompt ("Please enter a number:"); //Captures user input
    if (num==i){																// condition checks if auto gen. number is equal to captured number it terminates
        alert("You WIN!", +"Clapp for yourself" );
        break;
    }
    if (num<i){																											//condition checks if auto gen. number is les than captured number
        alert("Number is lower, make another guess");
    }
    if (num>i){																									// condition checks if auto gen. number is greater than captured number
                alert("Number is higher,make another guess");
            }
    if (count==10){    // if condition iterates 10 times with invalid gueses
            alert("You LOSE!");}
}
