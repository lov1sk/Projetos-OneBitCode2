function spreadEntrance(entrance) {
  return new Promise((resolve, reject) => {
    if (typeof entrance !== "string") {
      reject("arguments must be a string");
    } else {
      resolve([...entrance]);
    }
  });
}

function calculator(type, ...numbers) {
  return new Promise((resolve, reject) => {
    switch (type) {
      case "sum":
        resolve(
          numbers.reduce((acc, number) => {
            return (acc += number);
          })
        );
        break;
      case "sub":
        resolve(
          `the ${type} calculation was did´t, the result is: ${numbers.reduce(
            (acc, number) => {
              return (acc -= number);
            }
          )} `
        );
        break;
      case "mul":
        resolve(
          numbers.reduce((acc, number) => {
            return (acc *= number);
          })
        );
        break;
      case "div":
        resolve(
          `the ${type} of calculation was did´t ` +
            numbers.reduce((acc, number) => {
              return (acc /= number);
            })
        );
        break;

      default:
        reject("Please, enter the type of calc");
        break;
    }
  });
}

const newSpread = spreadEntrance("LUCASRIBEIRO");
const newCalc = calculator("sub", 1, 1, 1, 1);

Promise.all([newSpread, newCalc])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
