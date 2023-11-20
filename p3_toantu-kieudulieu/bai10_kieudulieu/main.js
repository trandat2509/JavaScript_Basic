/** 1. Kiểu dữ liệu trong JavaScript
 * Kiểu dữ liệu nguyên thủy - Primitive Data
 * - number
 * - string
 * - boolean
 * - undefined
 * - null
 * - symbol
 */

/** 2. Kiểu dữ liệu phức tạp - Complex Data
 * - function
 * - object
 */

// var a = 1; // là một kiểu dữ liệu nguyên thủy

// number type
var a = 1;
var b = 2;
var c = 3;
// console.log(typeof isNull);

// string type
var fullName = 'trần " sigma đạt';
console.log(fullName);

// boolean type
var isSuccess = true;

// undefined type: là một biến mà khi khai báo chúng ta không gán giá trị cho nó
var age;
console.log(age);

// null type
var isNull = null; // nothing: không có gì
console.log(isNull);

// symbol type
var id = Symbol("id"); // unique: tính duy nhất
var id2 = Symbol("id"); // unique: tính duy nhất

console.log(id == id2);

/** kiểu dữ liệu phức tạp */
// var myFunction = function () {
//   // function tự định nghĩa
//   alert("Hi. Xin chào các bạn!");
// };

// đoạn code trên sẽ thực hiện khi được gọi đến
// myFunction();

// object type: sử dụng dấu ngoặc nhọn
var myObject = {
  // dùng cực nhiều: lưu hầu hết các dạng dữ liệu mà chúng ta tương tác trong JS
  name /**key */: "Trần Đạt" /**value */, // giữa 1 cặp key:value thì cách nhau bằng dấy phẩy
  age: 18,
  address: "Hà Nội",
  // object có thể chứa được rất nhiều kiểu dữ liệu
  // có thể gọi function trong này cũng được
  myFunction: function () {},
};

console.log("myOject", myObject);

// Array: sử dụng dấu ngoặc vuông và nó không cần định nghĩa key
var myArray = ["JavaScript", "PHP", "Ruby"];
console.log(myArray);

/** Cách để biết kiểu dữ liệu mà mình đang dùng */
console.log(typeof myArray);
