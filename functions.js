//soccer simulation continuation

//So recently we talked about a soccer match between the Emerald Eagles and the Draconian Dragons. We used conditional logic to determine soccer match scenarios, and used arrays to manage Mahalia’s backpack. But, there are more than one match in a season. Do we really want to rewrite the same blocks of code over and over again?

//This is where functions come in. Functions allow us to perform the same block of code many times, without having to rewrite the entire block of code. They even allow us to take in parameters to slightly modify the data that the function uses.

//First, let’s practice with data types and string methods. Then we’ll get into writing functions.

//Create a variable that tracks the Eagles’ morale.
let eaglesMorale = 100;
let eaglesMoraleTwo = eaglesMorale + '';
// console.log(eaglesMorale , eaglesMoraleTwo);

//Let’s create a string that declares a winner. The winner should be the Dragons.

//Then let’s replace the Dragons with the Eagles.
let theWinnerIs = 'The Dragons are the winner.';
let newWinner = theWinnerIs.replace('Dragons' , 'Eagles');
// console.log(newWinner);

//Now lets confirm that our string contains 'the eagles'
// console.log(newWinner.includes('Eagles'));

// now we have to convert our string to kebab case (all lowercase spearate by hyphens)
// The Eagles are the winners. -> the-eagles-are-the-winners.

// Pia's suggestion ~~~ 
// console.log(newWinner.toLowerCase().split('').join('-'));

// let newWinnerLower = newWinner.toLowerCase();
// let newWinnerSplit = newWinnerLower.split(' ');
// let newWinnerKebab = newWinnerSplit.join('-');
// console.log(newWinnerKebab);

//daniels suggestion
// let newWinnerKebab = newWinner.toLowerCase();
//                               .split(' ');
//                               .join('-');

// now lets create a simple function to see if the emerald eagles still have morale left, and then console.log the result. 
function doEaglesHaveMorale(eaglesMorale) {
    if (eaglesMorale > 0) {
        console.log('yup');
    } else {
        console.log('nope');
    }
}
// function doEaglesHaveMorale() {
//     console.log(Boolean(eaglesMorale))
// }


//So we have written this function, but you might notice, it has not actually run yet. This is because functions do not run until they are called. Let’s call the above function.

// doEaglesHaveMorale()

// now lets create a function that can be used everytime the eagles lose a match.
// const reduceMorale = (amount) => {
//     eaglesMorale -= amount;
// }
// console.log(eaglesMorale);

// lets have the emerald eagles lose an important match. a match worth 20 morale. 
// reduceMorale(20);
// console.log(eaglesMorale);

//With our function, we can call our block of code over and over again. Call the function again, because the Eagles just lost another match worth 12 morale.
// reduceMorale(12);
// console.log(eaglesMorale);

// if that wasn’t all, the Eagles lost a third match. However, they were already expecting to lose, so this match is only 6 morale.
// reduceMorale(6);

//At this point the Emerald Eagles have lost a few times. It would probably be a good time to check and make sure they are still up for matches. Call your doEaglesHaveMorale function.
doEaglesHaveMorale(eaglesMorale);

//Thinking about it further, shouldn’t we check to see if the Eagles still have morale after each time they lose a match? We could call the doEaglesHaveMorale function after each time they lose. But, there is an easier way to do that. Modify your reduceMorale function to call doEaglesHaveMorale after it has run all its other code.
const reduceMorale = (amount) => {
    eaglesMorale -= amount;
    doEaglesHaveMorale(eaglesMorale);
}

reduceMorale(20);
reduceMorale(11);

// Yes, you can call functions from almost anywhere, including from inside another function.

// It is important to know that functions can be set up to have as many parameters as you would like. In this next function, we will use two.

// Let’s create another function that allows 2 teams to shake hands with each other.

const shakeHands = function(team1 , team2) {
    console.log(`The ${team1} and the ${team2} shake hands`);
};
shakeHands('eagles' , 'dragons');