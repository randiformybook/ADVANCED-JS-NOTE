//Callback Functions

const isEven = (n) => {
	return n % 2 == 0;
	//nilai return disini berbentuk boolean,
	if (n%2 ==0);
	//tu adalah nilai true nya
  }
//isEven ialah Function Pertama,yaitu function boolean
 
let printMsg1 = (evenFunc, num) => {
	//evenFunc akan dijadikan wadah yang berisi function isEven
	//masukan ke dalam variable baru dengan bentuk dengan num sebagai argument (n) nya
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`);
  }

// Pass in isEven as the callback function
printMsg1(isEven, 4);
//maksud dari running function printMsg ialah : 
printMsg(boolean, 4);
// Prints: The number 4 is an even number: True.

//—--------------------------------------------
//Bentuk ketika di running seakan menjadi:
/*
let printMsg = (isEven(4), 4) => {
	const isNumEven = evenFunc(4);
	console.log(`The number ${4} is an even number: ${isEven(4%2 == 0)}`);
	}
*/
//Functions Assigned to Variables
let plusFive = (number) => {
  return number + 5;  
};
// f is assigned the value of plusFive
let f = plusFive;


plusFive(3); // 8
// Since f has a function value, it can be invoked.
f(9); // 14

