console.log("======== Soal No 1 =========");
const reverseStringWithNumber = (str) => {
  const letters = str.match(/[a-zA-Z]+/g); // Mengambil semua karakter huruf dalam string
  const numbers = str.match(/\d+/g); // Mengambil semua angka dalam string

  if (!letters || !numbers) {
    return str;
  }

  const reverseLetters = letters[0].split("").reverse().join("");
  const result = reverseLetters + numbers[0]; // Menggabungkan huruf yang sudah dibalikkan dengan angka

  return result;
};

const inputString = "NEGIE1";
const reverseString = reverseStringWithNumber(inputString);
console.log(`Outut => ${reverseString}`);

// ================== Soal No 2 ==================
console.log("======== Soal No 2 =========");

const sentence = "Saya senang mempelajari teknologi React JS";

// Memisahkan kalimat menjadi array kata
const words = sentence.split(" ");

let longWord = "";
// Iterasi setiap kata dalam array
for (const word of words) {
  // Jika panjang kata saat ini lebih panjang dari yang telah disimpan
  if (word.length > longWord.length) {
    longWord = word;
  }
}
console.log(`Kata terpanjang dalam kalimat adalah:, ${longWord}`);

// ========= Soal No 3 ==========
console.log("======== Soal No 3 =========");
const countWordArray = (inputArray, queryArray) => {
  const wordCount = {}; // Objek untuk menyimpan jumlah kata dalam array INPUT

  inputArray.forEach((word) => {
    // Mengonversi kata menjadi huruf/case-sensitive
    const lowercaseWord = word.toLowerCase();

    // cek kondisi apakah kata sudah ada dalam objek wordCount
    if (wordCount[lowercaseWord]) {
      wordCount[lowercaseWord]++;
    } else {
      wordCount[lowercaseWord] = 1;
    }
  });

  let totalOccurrences = 0;

  // Menghitung berapa kali kata dalam array QUERY muncul dalam array INPUT
  queryArray.forEach((queryWord) => {
    const lowercaseQueryWord = queryWord.toLowerCase();

    // Mengambil jumlah kata dalam array INPUT yang sesuai dengan kata dalam array QUERY
    const count = wordCount[lowercaseQueryWord] || 0;
    totalOccurrences += count;
  });
  return totalOccurrences;
};

const inputArray = ["apel", "pisang", "melon", "apel", "salak", "mangis"];
const queryArray = ["apel", "pisang", "jeruk", "durian"];

const resultQuery = countWordArray(inputArray, queryArray);
console.log(
  `Kata dalam QUERY muncul sebanyak ${resultQuery} kali dalam INPUT.`
);

// ========== No 4 ===========
console.log("============  No 4 ============");
function calculateDiagonalDifference(matrix) {
  let diagonal1Sum = 0;
  let diagonal2Sum = 0;
  const n = matrix.length; // Ukuran matriks NxN

  // Menghitung jumlah elemen diagonal pertama
  for (let i = 0; i < n; i++) {
    diagonal1Sum += matrix[i][i];
  }

  // Menghitung jumlah elemen diagonal kedua
  for (let i = 0; i < n; i++) {
    diagonal2Sum += matrix[i][n - 1 - i];
  }

  const difference = Math.abs(diagonal1Sum - diagonal2Sum);
  return difference;
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
const resultMatrix = calculateDiagonalDifference(matrix);
console.log(`Hasil pengurangan diagonal matriks adalah: ${resultMatrix}`);

// membuat view detail menggunakan News Api di react js berdasarakan publishedAt
