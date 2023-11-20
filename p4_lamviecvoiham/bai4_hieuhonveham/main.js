/** Một số điều cần biết về function
 *
 * 1. khi function đặt trùng tên?
 * 2. khai báo biến trong hàm
 * 3. định nghĩa hàm trong hàm
 */

// đặt function cùng tên
function showMassage() {
  console.log("Message 1");
}
function showMassage() {
  console.log("Message 2");
}
// showMassage();
/** Nếu hai function đặt trùng tên thì:
 * - function phía sau sẽ đè lên function phía trước và function phía trước mất tác dụng
 */
function showMassage() {
  console.log("Message 3");
}

showMassage();

// khai báo biến trong hàm
function massage() {
  var fullName = "Trần Đạt"; // biến fullName chỉ nằm trong phạm vi hoạt động của function message
  console.log(fullName);
}

massage();

// định nghĩa hàm trong hàm
function ShowMassage() {
  function show_massage() {
    // hàm nằm trong hàm thì nó sẽ chỉ hoạt động trong hàm cha của nó
    // nếu gọi hàm đó ra bên ngoài thì nó sẽ không được thực thi
    console.log("Định nghĩa hàm lồng hàm");
  }
  show_massage();
  console.log("Thoát định nghĩa hàm lồng hàm");
  
}

ShowMassage();
