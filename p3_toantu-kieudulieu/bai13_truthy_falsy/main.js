/** Truthy - to bool is true
 * - Bất cứ giá trị nào trong JavaScript 
 * khi chuyển đổi sang dữ liệu 'boolean' mà có giá trị 'true'
 * thì người ta gọi đó là Truthy
 */
// VD
console.log(Boolean(1)); // true
console.log(Boolean(["BMW"])); // true
console.log(Boolean({ name: "Miu" })); // true

console.log(!!"hi"); // true
/** !!: là 2 lần phủ định, mà hai lần phủ định thì sẽ trở thành khẳng định.
 * - Trong JS thì đây là một 'tip' để chuyển đổi mọi kiểu dữ liệu khác sang boolean.
 */

// VD
console.log(!!1); // true
console.log(!!"f8"); // true
console.log(!!["Mercedes"]); // true

/** Falsy - to bool is false
 * - Bất cứ giá trị nào trong JS
 * khi chuyển đổi sang kiểu dữ liệu 'boolean'
 * mà có giá trị 'false' thì ta gọi đây là falsy
 * - Trong JS có 6 giá trị falsy:
 * 1.false
 * 2.0 (số không)
 * 3.ngoặc đơn: '' hoặc ngoặc kép: "" (chuỗi rỗng)
 * 4.null
 * 5.undefined
 * 6.NaN
 *
 * - Ngoài 6 giá trị đã đề cập ở phần falsy
 * thì toàn bộ các giá trị khác đều là truthy,
 * kể cả những giá trị sau:
'0' (một chuỗi chứa số không)
' ' (một chuỗi chứa dấu cách)
'false' (một chuỗi chứa từ khóa false)
[] (một array trống)
{} (một object trống)
function(){} (một hàm "trống")
 */
// VD:
console.log(!!false); // false
console.log(!!0); // false
console.log(!!""); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

/** Ngoại lệ? - document.all
 * - Trong JS sẽ có sẵn một đối tường 'document',
 * và khi bạn thử '!!document.all' sẽ trả về false.
 *
 * - 'document.all' là một ngoại lệ chính thức duy nhất theo các đặc tả ECMA.
 * Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là 'true'.
 * Tuy nhiên, 'document.all' là một ngoại lệ.
 * - Cụ thể như sau:
 * 'document.all' chuyển sang boolean sẽ là 'false'
 * 'document.all' khi là toán hạng của toán tử so sánh '==' hoặc '!=' sẽ là 'undefined'
 * Khi 'typeof document.all' sẽ trả về "undefined"
 */
