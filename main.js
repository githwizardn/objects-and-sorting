//1

function getGrade(number) {
  if (number < 0 || number > 100) {
    return "Error";
  } else if (number >= 91) {
    return "A";
  } else if (number >= 81) {
    return "B";
  } else if (number >= 71) {
    return "C";
  } else if (number >= 61) {
    return "D";
  } else if (number >= 51) {
    return "E";
  } else if (number >= 41) {
    return "Fx";
  } else {
    return "F";
  }
}

console.log(getGrade(95));

//2

const country = {
  name: "Georgia",
  capital: "Tbilisi",
  population: 3720400,
  areaKm2: 69700,
  currency: "Georgian Lari",
  officialLanguage: "Georgian",
  continent: "Europe",
  callingCode: "+995",
  GDP: "15.95 billion USD",
  nationalDay: "May 26",
};

console.log(country);

//3

const person = {
  firstName: "Nodari",
  lastName: "Mamukelashvili",
  age: 28,
  nationality: "Georgian",
  profession: "Developer",
  hobby: "Reading",
  languagesSpoken: ["Georgian", "English", "Russian"],
  heightCm: 170,
  favoriteColor: "Blue",
  hasDrivingLicense: true,
};

console.log(person);

//bonusi

function sortObjects(array, key) {
  let len = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (array[i][key] > array[i + 1][key]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const drinks = [
  { name: "cola", price: 25, tax: 0.3 },
  { name: "pepsi", price: 20, tax: 0.1 },
  { name: "fanta", price: 30, tax: 0.2 },
];

sortObjects(drinks, "price");
console.log(drinks);

sortObjects(drinks, "tax");
console.log(drinks);
sortObjects(drinks, "name");
console.log(drinks);
