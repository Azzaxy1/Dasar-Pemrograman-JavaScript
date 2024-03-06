const date = new Date();

const timeInJakarta = date.toLocaleString("id-ID", {
  timeZone: "Asia/Jakarta",
});

const timeInTokyo = date.toLocaleString("ja-JP", {
  timeZone: "Asia/Tokyo",
});

const timeInMakassar = date.toLocaleString("id-ID", {
  timeZone: "Asia/Makassar",
});

console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakassar);

/**
 * Output:
 * 22/12/2022 10.37.14
 * 2022/12/22 12:37:14
 * 22/12/2022 11.37.14
 */
