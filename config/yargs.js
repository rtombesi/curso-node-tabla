const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Esta es la base de la multiplicación",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: "false",
    describe: "Muestra la tabla en la consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Limita el numero hasta donde quieres la tabla",
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La Base debe ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
