function init() {
  const name = "Obi Wan"; // Variabel lokal di dalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure lexical scope.
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();

function init() {
  const name = "Obi Wan";

  function greet() {
    console.log(`Halo, ${name}`);
  }

  return greet;
}

const myFunction = init();
myFunction();

/* output
Halo, Obi Wan
 */
