/** Kiểu số trong JavaScript
 * 1. Tạo các giá trị Number
 * - Các cách tạo
 * - Dùng cách nào? Tại sao?
 * - Kiểm tra data type
 *
 * 2. Làm việc với number
 * - to string
 * - to Fixed
 */

// cách 1 tạo ra số
var age = 18;
var PI = 3.14;

// cách 2 tạo ra số: ít dùng cách số 2
// var otherNumber = new Number(19);

// VD
var result = 20 / 5;

// console.log(result); // kết quả ra NaN: đại diện cho một kiểu số không hợp lệ
// console.log(typeof result);

// cách kiểm tra số không hợp lệ
console.log(isNaN(result));

// Làm việc với Number
console.log(typeof age.toString()); // chuyển đổi kiểu number thành kiểu string

// To fixed: muốn làm tròn số thập phân
console.log(PI.toFixed()); // mặc định khong truyền tham số thì nó là số không, nếu điền số váo thì nó là số sau só thập phân VD nếu điền 3 vào thì nó là 4.145
// khi một số thập phân có phần thậm phân < 0.5 thì nó sẽ giảm về về nguyên của nó
// nếu phần thập phân > 0.5 thì nó sẽ tăng thêm một đon vị cho số nguyên của nó
