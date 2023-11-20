/** Làm việc với chuỗi */

// keyword: JavaScript string methods
var fullName = "   Trần Hậu Nguyên Đạt    ";

// 1. length: đo độ dài của một chuỗi
console.log("Độ dài của chuỗi là: ", fullName.length);

// 2. Find index: tìm vị trí của một ký tự nằm trong một chuỗi
// - index chỉ trả về vị trí muốn tìm mà nó tìm thấy đầu tiên trong chuỗi
// nếu trong một chuỗi có nhiều ký tự giống nhau thì nó không tìm được hết
// - có thể sử dụng dấu ',' sau đó nhập giá trị mà muốn nó bát đầu tìm kiếm từ đó
// - cũng có thể sử dụng 'search' để tìm kiếm
console.log("vị trí của ký tự muốn tìm kiếm là:", fullName.search("Đạ"));
// if (fullName) {
//   console.log(fullName.indexOf("abc"));
// } else {
//   console.log("Không tìm thấy ký tự!");
// }

// 3. Cut string: cắt chuỗi
console.log(fullName.slice(-4));
// sử dụng slice để cắt chuỗi slice(vị trí bắt đầu cắt, vị trí dừng cắt)
// nếu muốn cắt đến hết thì chỉ cần nhập mỗi giá trị ban đầu
// muốn cắt từ phải sang trái thì nhập vào vị trí bắt đầu là số âm

// 4. Replace: Ghi đè
console.log(fullName.replace("Hậu ", ""));
// thay đổi chuỗi bạn muốn thay: sử dụng replace(chuỗi muốn thay, chuỗi thay vào)
// nếu muốn thay nhiều chuỗi giống nhau thì sử dụng biểu thức chính quy:
//- replace(/chuỗi muốn thay/g, 'nhập chuỗi muốn thay vào')
// nếu giá trị muốn thay vào là trống thì có giống với cắt chuỗi

// 5. Convert to upper case: chuyển đổi chuỗi thành chữ hoa
console.log(fullName.toUpperCase());

// 6. Convert to lower case: chuyển đổi chuỗi thành chữ thường
console.log(fullName.toLowerCase());

// 7. Trim: giúp loại bỏ các ký tự khoảng trắng ở hai đầu
console.log(fullName.trim());

// 8. Split: giúp cắt một chuỗi thành một array
var languages = "JavaScript, PHP, Ruby, Python, C#, C++";
console.log(languages.split(""));
// - muốn chuyển chuỗi thành array thì các đoạn chuỗi bạn muốn cắt phải có điểm chung giữa các ký tự
// - nếu trong split('') để trống như vậy thì nó sẽ cắt từng ký tự ra riêng biệt kể cả khoảng trắng

// 9. Get a character by index: lấy ký tự bởi 1 index cho trước
const myString = "tran hau nguyen dat";
console.log("Ký tự được lấy ra là:", myString.charAt(5));
// cách 2
console.log(myString[5])
