// FizzBuzz
{
    for(let x = 1; x <= 100; x++){
        if(x % (3 * 5) == 0){
            console.log("FizzBuzz")
        }
        else if(x % 3 == 0){
            console.log("Fizz")
        }
        else if(x % 5 == 0){
            console.log("Buzz")
        }
        else{
            console.log(x)
        }
    }
}
// pokusavao sam da uradim ovaj zadatak pomocu arraya (zbog linka koji ste nam ostavili ispod zadatka),
// ali nikako nisam uspeo da se snadjem