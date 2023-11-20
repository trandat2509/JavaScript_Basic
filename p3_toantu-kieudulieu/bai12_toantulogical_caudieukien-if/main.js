// hiểu hơn về câu lệnh điều kiện và phép so sánh

var a = 1;
var b = 2;

// var result = a < b && a > 0; // toán tử logic không trả về giá tri boolean
// // còn về toán tử logic trên khi trả về giá trị false là kết quả của một trong hai phép so sánh trên
// console.log("result: ", result);

// 6 giá trị false
/**
 * 0
 * '' hoặc ""
 * NaN
 * null
 * false
 * undefined
 */

var result = "A" && "B" && "C";
console.log("result ", result);
/** Toán tử AND
- đọc tử vế trái qua vế phải, 
 nếu gặp giá trị khác với 6 giá trị của false 
thì nó sẽ đọc hết vế phải và lấy kết quả cuối 
gán ngược lại cho result
- trường hợp còn lại nếu đang đọc từ vế trái qua vế phải
mà gặp 6 giá trị của false 
thì nó sẽ lấy giá trị false được phát hiện đầu tiên đó
và gán cho result*/
var result = "A" && "B" && "C" && null && NaN;
console.log("result ", result);

/** Toán tử OR
- nó là ngược lại với toán tử AND nếu nó đọc giá trị mà phát hiện 
các giá trị khác với 6 giá trị false thì nó sẽ lấy giá trị phát hiện đầu tiên
và gán cho result 
 */
var result = "A" || "B" || "C";
console.log("result ", result);
/**
 - nếu các giá trị mà thuộc 6 giá trị đó thì nó cũng sẽ bỏ qua
 và lấy giá trị đầu tiên khác 6 giá trị false đó
 - trường hợp cuối cùng là nếu tất các các giá trị đều thuộc 6 giá trị false đó
 thì nó sẽ đọc hết từ trái qua phải và lấy giá trị false cuối cùng
 đưa nó gán cho result
 */
var result = NaN || 0 || undefined;
console.log("result ", result);

// if (result) {
//   console.log("Điều kiện đúng");
// } else {
//   console.log("Điều kiện sai");
// }
