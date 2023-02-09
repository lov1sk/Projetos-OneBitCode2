function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

const numeros = [4, 5, 9, 13, 77];

//Mapear um novo array com a potencia de 2 de cada numero original
async function execute() {
  const potencia = await Promise.all(
    numeros.map(async (numero) => {
      await waitFor(2);
      return numero * numero;
    })
  );
  console.log(`Os quadrados de ${numeros}, são:
  ${potencia}
  `);
}

execute();
