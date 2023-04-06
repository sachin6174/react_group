console.log(process.argv)
// zeroth argv -> is location of node engine
// first argv ->  is location of file executing
// then -> other arguments
let input_array= process.argv.slice(2)
console.log(input_array)