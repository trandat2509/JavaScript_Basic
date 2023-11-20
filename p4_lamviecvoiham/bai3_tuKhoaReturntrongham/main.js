/** Return
 * - trả về
 */

// var isConfirm = confirm("Message?");
/**
 * - trước khi chạy console.log() thì đoạn mã isConfirm chạy và hiện ra hộp thoại
 * nếu muốn để đoạn mã bến dưới chạy thì phải tắt hộp thoại đi
 * click vào cancel
 */
// console.log(isConfirm);

function cong(a, b) {
  //   return [a, b];
  return a.toString() + b.toString(); // phép nối chuỗi
  // từ khóa return sẽ trả về phép cộng a + b (những biến nằm bên phải return)
  // nếu không return thì giá trị sẽ trả về undefined
  // khi dùng return thì các dòng lệnh bên dưới return sẽ không được thực thi nữa
}

var result = cong(2, 10);
console.log(result);
