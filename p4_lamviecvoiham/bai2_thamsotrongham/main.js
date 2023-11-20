/**
1. Tham số? 
- định nghĩa
- kiểu dữ liệu
- tính private: tính riêng tư
- 1 tham số
- nhiều tham số

2. Truyền tham số
- 1 tham số
- nhiều tham số

3. Argument
- đối tượng argument
- giới thiệu vòng for of
 */

function writeLog(message) {
  // message được gọi là tham số
  console.log(typeof message); // tham số message chỉ sử dụng được trong function
}

writeLog("Text message"); // khi gọi tới nó thì được gọi là đối số
// tham số không giới hạn kiểu dữ liệu

// nhiều tham số
function fullName(name, name2) {
  console.log(name);
  if (name2) {
    console.log(name2);
  }
}
fullName("Trần Hậu Nguyên Đạt", "Trần Hậu Nguyên Thành");

/** Đối tượng Argument */
function fullName() {
  // trong trường hợp mà không định nghĩa tham số ở hàm function
  //thì hàm console.log() sẽ sử dụng đối tượng arguments và đối tượng này chỉ xuất hiện trong một function
  console.log(arguments);
}
fullName("Tôi là ai trên thế giới này", "Tôi là Đạt", "Tôi chẳng là ai cả");

/** Sử dụng dòng for of (vòng lặp for) */
function writelog() {
  var myString = "";
  for (var param of arguments) {
    // console.log(param);
    myString += `${param} - `;
    /** cách hoạt động cảu vòng for
     * - chạy vào dòng lệnh lấy giá trị arguments gán cho biến param
     * - chạy xuống dấu ngoặc nhọn sau đó quay lại và tiếp tự lấy giá trị argument thứ 2
     * - vòng for sẽ tiếp tục chạy cho đến khi argument không còn giá trị nào
     */
  }
  console.log(myString);
}
writelog("trần", "hậu", "nguyên", "đạt", 4, 5, 6, 7);
