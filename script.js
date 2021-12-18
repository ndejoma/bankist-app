'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/**Deleted all the projects before in the script for array methods */

//1. Displaying the movements inside the movements Conatiner

const displayMovements = ( movements )=>  {
  //reset the containerMovements
  containerMovements.innerHTML = '';
  movements.forEach((mov, idx) => {
    // console.log( mov, idx );
    //set the movement type to depoit or withdrawal
    const movType = mov > 0 ? 'deposit' : 'withdrawal';
    //create the movemet ro
    const movementRowHTML = `
      <div class="movements__row">
            <div class="movements__type movements__type--${movType}">${idx + 1} ${movType}</div>
            <div class="movements__value">${Math.abs(mov)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", movementRowHTML);
  });
};

//Use the function on the first account
displayMovements( account1.movements );

/***
 * Coding challENEG ONE"
 * 
 */

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogsAge = (juliasArr, katesArr ) => {
  //step 1
  const juliasArrCorrcted = [ ...juliasArr ];
  juliasArrCorrcted.pop(); //removes the last
  juliasArrCorrcted.shift();//removes the first arr element
  //step 2
  const allDogsData = [ ...juliasArrCorrcted, ...katesArr ];
  //step 3
  //loop over the collective dogs data
  allDogsData.forEach( ( dogAge ) => {
    const isAdult = dogAge > 3 ? 'Is Adult' : 'Is a Puppy';
    console.log(isAdult);
  })

};

// checkDogsAge( [ 3, 5, 2, 12, 7 ], [ 4, 1, 15, 8, 3 ] );
// console.log( '***********data set 2 **********' );
// checkDogsAge([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])


// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ( juliasArr, katesArr ) => {
   //step 1
   const juliasArrCorrcted = [ ...juliasArr ];
   juliasArrCorrcted.pop(); //removes the last
   juliasArrCorrcted.shift();//removes the first arr element
   //step 2
  const allDogsData = [ ...juliasArrCorrcted, ...katesArr ];
  const dogsAgeHumanAge = allDogsData.map( age => {
    if ( age <= 2 ) {
      // console.log(age);
      return age * 2;
    } else {
      // console.log(age);
      return age * 4;
    }
  } );
  //filter all the dogs less than 18
  const dogGreterThan18 = dogsAgeHumanAge.filter( dogAge => dogAge >= 18 );
  // console.log(dogGreterThan18);

  const averageAdultsDogsAge = dogGreterThan18.reduce( ( acc, currAge ) => acc + currAge ) / dogGreterThan18.length;
  // console.log(averageAdultsDogsAge);
  return averageAdultsDogsAge;
};

//call the function
console.log(calcAverageHumanAge( [ 3, 5, 2, 12, 7 ], [ 4, 1, 15, 8, 3 ] ));
