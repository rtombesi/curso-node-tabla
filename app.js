const { crearArchivo } = require("./multiplicar/multiplicar");
require("colors");
const argv = require("./config/yargs");

console.clear();

/*let argv = process.argv;
let parametro = argv[2];
let base = parametro.split("=")[1];*/

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
