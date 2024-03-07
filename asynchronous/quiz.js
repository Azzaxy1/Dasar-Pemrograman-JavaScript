/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

// const { resolve } = require("path");

const { promisify } = require("util");

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === "id") {
      callback(null, [
        { id: "id-jk", name: "Jakarta" },
        { id: "id-bt", name: "Banten" },
        { id: "id-jr", name: "Jawa Barat" },
      ]);
      return;
    }

    callback(new Error("Country not found"), null);
  }, 1000);
}

const getProvincesPromise = promisify(getProvinces);
getProvincesPromise("id")
  .then((countryId) => console.log(countryId))
  .catch((err) => console.log(err.message));

module.exports = { getProvincesPromise: getProvincesPromise };

// const getProvinces = (countryId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (countryId === "id") {
//         reject(null, [
//           { id: "id-jk", name: "Jakarta" },
//           { id: "id-bt", name: "Banten" },
//           { id: "id-jr", name: "Jawa Barat" },
//         ]);
//         return;
//       }

//       resolve(countryId);
//     }, 1000);
//   });
// };

// getProvinces(true)
//   .then((countryId) => console.log(countryId))
//   .catch((err) => console.log(err.message));
