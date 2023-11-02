const readline = require('readline');

const delay = 2000; // Tiempo en milisegundos para contar las pulsaciones de teclado
let count = 0;

const resetCount = () => {
  if (count > 0) {
    console.log(`En el período de retraso, se realizaron ${count} pulsaciones de teclado.`);
  }
  count = 0;
};

const trackAction = () => {
  count++;
};

const startCLI = () => {
  const interval = setInterval(() => {
    resetCount();
  }, delay);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Presiona Enter para realizar una pulsación de teclado (o Ctrl+C para salir): ', () => {
    trackAction();
    rl.close();
    if (interval._repeat === delay) {
      clearInterval(interval);
      resetCount();
      interval._repeat = delay;
    }
    startCLI(); // Volver a mostrar el prompt después de cada pulsación
  });

  process.on('SIGINT', () => {
    if (interval._repeat === delay) {
      clearInterval(interval);
      resetCount();
    }
    console.log('Saliendo del programa.');
    process.exit();
  });
};

// Utiliza import() para cargar el módulo inquirer de manera dinámica
import("inquirer").then((inquirer) => {
  startCLI(); // Llama a startCLI una vez que inquirer esté disponible
});


