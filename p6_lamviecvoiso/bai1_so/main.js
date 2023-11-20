/** Đối tượng number
 * 1. Number.isFinite() : Xác định xem các giá trị đã cho có phải là số hựu hạn hay không. trả về boolean
 * 2. Number.isInteger() : Xác định xem giá trị đã cho có phải là số nguyên hay không. trả về boolean
 * 3. Number.parseFloat() : Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
 * 4. Number.parseInt() : Chuyển đổi chuỗi đã cho thành một số nguyên
 * 5. Number.prototype.toFixed() : Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
 * 6. Number.prototype.toString() : Chuyển đổi và trả về số đã cho dưới dạng chuỗi 
 */
// VD:
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'
