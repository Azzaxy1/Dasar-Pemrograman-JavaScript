const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getEvenNumber = (arr) => {
  if (typeof arr !== "object") {
    throw Error("Isi tersebut bukan berupa object(array)");
  }

  if (Array.isArray(arr)) {
    throw Error("Isi tersebut haruslah berupa array");
  }

  const filteredArr = arr.filter((item) => {
    return item % 2 === 0;
  });

  return filteredArr;
};

console.log(getEvenNumber(arr));
