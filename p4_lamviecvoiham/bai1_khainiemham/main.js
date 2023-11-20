/**
 1. Hàm
 - Một khối mã
 - Làm 1 việc cụ thể

 2. Loại hàm
 - built-in
 - tự định nghĩa

 3. Tính chất
 - không thực thi khi định nghĩa
 - sẽ thực thi khi được gọi
 - có thể nhận tham số
 - có thể trả về một giá trị

 4. Tạo hàm đầu tiên
 */

/** Quy tắc đặt tên hàm
- có thể chứa chữ cái thường và in hoa từ a - z, 0 - 9, dấu '_', dấu '$'
- không được đặt tên hàm có số đầu tiên
  */

// alert("Hello World!"); // nó chỉ là một dòng code bình thường

function showDialog() { // hàm tự định nghĩa
  // code thực thi của hàm showDialog
  alert("Hello World!"); // nó được gọi là một khối mã
}

// toán tử call: dùng để gọi hàm
showDialog(); // thực thi khi được gọi
