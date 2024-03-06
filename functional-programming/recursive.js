//* Teknik pada sebuah function yang memanggil dirinya sendiri.
// without recurive
const countDown = (start) => {
  do {
    console.log(start);
    start -= 1;
  } while (start > 0);
};

countDown(10);

//! with Recursive
const countsDown = (start) => {
  console.log(start);
  if (start > 0) countsDown(start - 1);
};

countsDown(10);
