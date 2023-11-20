/** Chuỗi trong JS
 *
 * 1. Tạo chuỗi
 * - cách tạo các chuỗi
 * - nên dùng cách nào? lý do?
 * - kiểm tra data type
 * 2. Một số case sử dụng backslash (\). Tìm kiếm từ khóa backslash in JS
 * 3. Xêm độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template string ES6.
 */

// các cách để tạo chuỗi: 2 cách
var fullName = 'trần đạt là \n"Thần" '; // nên dùng cách 1
console.log(fullName);
/**
 * - cách 1 nhanh hơn cách 2
 * - cách 2 dài dòng hơn
 */
var fullName2 = new String("đạt trần là \\tôi");
console.log(fullName2);

console.log(typeof fullName);
console.log(typeof fullName2);

// kiểm tra độ dài chuỗi
console.log(fullName.length);

// chú ý độ dài khi viết code: nếu code quá dài thì có thể sử dụng nối chuỗi để xuống dòng

// template string
var firstName = "Trần";
var lastName = "Đạt";

// viết thành chữ đạt trần nối nhau
//cách 1
console.log("Tôi là: " + firstName + " " + lastName);

// cách 2: sử dụng template
console.log(`Tôi là: ${firstName} ${lastName}`);
