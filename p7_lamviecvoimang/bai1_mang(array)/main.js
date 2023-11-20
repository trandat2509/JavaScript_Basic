/**
 * 1. cách tại mảng
 * - cách tạo
 * - sử dụng cách nào? tại sao?
 * - kiểm tra data type?
 *
 * 2. truy xuất mảng
 * - độ dài mảng
 * - lấy phần tử theo index
 */

// var language = "JavaScript";
// var language2 = "PHP";
// var language3 = "ruby";
// tạo nhiều biến sẽ rất phiền phức

// tạo một mảng bằng một biến: các giá trị của mảng được đặt trong ngoặc vuông
var language = [
  "JavaScript",
  "PHP",
  "ruby",
  "dart",
  null,
  undefined,
  function () {},
  123,
];
console.log("mảng language có giá trị là: ", language);
// mảng có thể chứa được tất cả các kiểu dữ liệu

// cách 2: tạo một array
var language2 = new Array(
  "JavaScript",
  "PHP",
  "ruby",
  "dart",
  null,
  undefined,
  function () {},
  123
);
console.log(language2);

// kiểm tra kiểu dữ liệu
console.log(
  Array.isArray(language)
); /**  sử dụng cách này để kiểm tra vì có một kiểu dữ là object
và khi kiểm tra thì nó cũng trả về kiểu object như array.
- dùng cách này thì khi kiểu dữ liệu là array thì kết quả trả về là true
- còn nếu kiểu dữ liệu là object thì kết quả trả về nghĩa là false */
console.log(typeof language2);
console.log(typeof { language2 });

/** truy xuất mảng để: */
// 1. đếm độ dài của mảng
console.log(language.length);
// 2. lấy phần tử theo index: nghĩa là phần tử của mảng theo độ dài thì sẽ đi từ 1, nhưng theo index thì nó sẽ đi từ 0
console.log(language[0]); // kết quả sẽ là JavaScript
console.log(language[4]); // kết quả ở đây sẽ là null
