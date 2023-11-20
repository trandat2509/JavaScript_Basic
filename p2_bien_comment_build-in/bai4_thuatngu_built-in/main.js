/**
 * Một số thuật ngữ built-in
 * 1. alert: bật lên cửa sổ hộp thoại (nhưng chỉ có thông báo)
 * 2. Console: 
 * 3. Confirm: bật lên cửa sổ hộp thoại (có hỏi là hủy or OK)
 * 4. Prompt: bật lên của sổ thông báo (kết hợp cả alert và confirm và có thêm một hộp input để chúng ta nhập vào giá trị )
 * 5. Set timeout: chạy đoạn code một lần sau một khoảng thời gian
 * 6. Set interval: chạy đoạn code nhiều lần sau một khoảng thời gian
 */

// 1. console
// var fullName = "Trần Hậu Nguyên Đạt";

// console.log("Đây là 1 dòng log");
// console.log(fullName);
// console.error(fullName); // in ra một dòng báo lỗi

// 2. confirm
// confirm("Xác nhận bạn đủ tuổi");

// 3.prompt
// prompt("Xác nhận bạn đủ tuổi");

// 4. setTimeout: cách một thời gian chạy một lần
// setTimeout(
//   /**truyền vào một function */ function () {
//     alert("Thông báo xác nhận đủ tuổi");
//   },
//   5000
// );

// 5. setInterval: thực thi liên tục sau một khoảng thời gian
setInterval(function () {
  console.log("Đây là một dòng log" + Math.random());
}, 1000);
