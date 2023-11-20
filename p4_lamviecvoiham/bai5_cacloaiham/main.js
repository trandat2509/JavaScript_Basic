/** Các loại hàm
 *
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function (giới thiệu)
 */

// Declaration function
showMassage(); // hosting: giúp cho declaration function có thể gọi trước khi nó được định nghĩa

function showMassage() {
  /** - định nghĩa function đầu tiên */
  console.log("Declaration function");
}

// Expression function
var showMassage2 = function () {
  /** function được gán cho một biến */
  console.log("Expression function");
};

showMassage2();

// setTimeout(function testName() {});

// var myObject = {
//   myFunction: function testName() {}, // đặt tên cho Expression chỉ có một mục đích là cho dễ hiểu
// };
/** 3 function trên đều thuộc Expression function */
