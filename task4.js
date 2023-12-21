const credits = 23580;
const pricePerDroid = 3000;
let message;

const droidsToBuy = prompt("Скільки дроїдів ви хочете купити?");

if (droidsToBuy === null) {
  message = "Скасовано користувачем!";
} else {

  const totalPrice = Number(droidsToBuy) * pricePerDroid;

  if (totalPrice > credits) {
    message = "Недостатньо коштів на рахунку!";
  } else {

    const remainingCredits = credits - totalPrice;
    message = `Ви купили ${droidsToBuy} дроїдів, на рахунку залишилося ${remainingCredits} кредитів.`;
  }
}

console.log(message);