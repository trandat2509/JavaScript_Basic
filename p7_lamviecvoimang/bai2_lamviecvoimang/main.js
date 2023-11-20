/**
 * Làm việc với Array
 *
 * 1. To String
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */

var languages = ["JavaScript", "PHP", "Ruby"];

// chuyển một mảng sang chuỗi
console.log("Kết quả khi chuyển từ mảng sang chuỗi: ", languages.toString());

// chuyển một mảng sang Join
console.log("Kết quả khi chuyển một mảng sang join: ", languages.join(" - "));

// pop: xóa đi phần tử cuối mảng của array và trả lại phần tử đã xóa
console.log("Phần tử xóa được sử dụng pop: ", languages.pop());
// nếu xóa hết tất các các giá trị của mảng thì kết quả trả về là undefined
console.log("mảng gốc sau khi xóa: ", languages);

// push: thêm một hoặc nhiều phần ở cuối mảng và kết quả trả về là độ dài của mảng
console.log(languages.push("C#", "Python", "Java"));
console.log("kết quả trả về sau khi push: ", languages);

// shift: xóa đi một phần tử ở đầu mảng và trả về phần tử đã xóa
console.log(languages.shift());
// khi xóa hết các giá trị trong mảng thì giá trị trả về cũng là undefined
console.log("Kết quả trả về sau khi shift: ", languages);

// unshift: thêm một hoặc nhiều giá trị ở đầu mảng và trả về kết quả là độ dài của mảng sau khi thêm
console.log(languages.unshift("CSS", "C++", "SASS"));
console.log("Kết quả trả về sau khi thêm phần tử sử dụng unshift: ", languages);

/** splicing: xóa, cắt, chèn phần tử mới vào mảng */
// 1. xóa
languages.splice(1, 2); /**  truyền số chỉ mục vào splice: 
số đầu tiên là vị trí đặt con trỏ để bắt đầu xóa, 
vị trí còn lại là số lượng phần tử muốn xóa, 
nếu chỉ truyền vào số 0 thì sẽ xóa hết tất cả các giá trị nằm trong mảng*/
console.log("kết quả trả về sau khi xóa phần tử sử dụng splicing: ", languages); // kết quả trả về là những phần tử còn lại
// 2. chèn
languages.splice(
  1,
  1,
  "Jupyter NoteBook",
  "Spider",
  "Anaconda"
); /** Ở đây, giá trị đầu tiên là vị trí đặt con trỏ để bắt đầu chèn,
giá trị thứ 2 ở đây cũng là số lượng phần tử muốn xóa (nếu giá trị là 0 thì không xóa phần tử nào), 
còn những giá trị cuối cùng là những giá trị t muốn chèn vào */
// chức năng này giống như là thay thế phần tử
console.log("Kết quả trả về sau khi chèn sử dụng splicing: ", languages);

// concat: sử dụng để nói các array
languages2 = ["Pycharm", "R", "R Studio"];
console.log(
  "Kết quả sau khi nối array sử dụng concat: ",
  languages.concat(languages2)
); // mảng nào được gọi đầu tiên thì gọi là mảng gốc, mảng còn lại gọi là mảng nối

// slicing: dùng để cắt một vài element của mảng hoặc có thể cắt toàn bộ (* chỉ cắt chứ không xóa giống với copy)
console.log(languages.slice(1, 3)); /** truyền các tham số vào slice: 
vị trí đầu tiền là vị trí bắt đầu cắt, 
vị trí thứ 2 là vị trí kết thúc cắt 
và kết quả in ra là các giá trị mà nó cắt được*/
// nếu chỉ nhập một giá trị thì nó sẽ cắt từ vị trí nhập đó đến hết mảng
console.log("kết quả của mảng sau khi cắt sử dụng slice: ", languages);
// có thể sử dụng slice để copy mảng bằng cách nhập giá trị 0 vào trong slice
console.log("kết quả sau khi copy mảng: ", languages.slice(0));
