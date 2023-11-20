/** Câu điều kiện if
 *
 */

/** giá trị boolean có 6 kiểu điều kiện sai:
 * - Nếu 1 trong 6 điều kiện dưới đây nằm trong kiều kiện 
 * của cầu điều kiện if thì nó sẽ in ra giá trị thuộc điều kiện sai
 * - ngoài 6 giá trị dưới ra thì khi nhập vào giá trị nào 
 * thì sẽ trả về giá trị thuộc điều kiện đúng (tùy từng trườn hợp)
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */


// var isSuccess = 1 > 2;
var fullName = null;

if (fullName) {
  console.log("Điều kiện đúng");
} else {
  console.log("Điều kiện sai");
}
