var a = 6;

// a--;

// việc 1: + 1 cho a, a = a + 1 => a = 7
// việc 2: trả về a sau khi +1
console.log(a++);
console.log(a);

// việc 1: a copy,  a copy = 6
// việc 2: trừ 1 của a, a = a - 1 ==> a = 5
// việc 3: tra về a copy
// var outPut = a--;
console.log(a--);
console.log("a của hiên tại là: ", a);
console.log(a++);
console.log(a);

// VD1
var number = 6;

var output = number++ + --number;
/**Giải thích bài toán:
 * number++ : copy biến number và sau đó trả về kết quả ban đầu của number, bây giờ giá trị của number vẫn là 6
 * + : thực hiện phép toán. Lúc này number++ đã được thực hiện xong và giá trị của number hiện tại là 7
 * --number : thực hiện trừ 1 giá trị của number và trả về kết quả sau khi trừ, giá trị hiện tại của number là 5
 * kết quả của bài toán là: 0
 */
console.log("Kết quả của phép toán output: ", output);

//  Vd 2:
var Output = ++number * 2 - number-- * 2;
// console.log(number);
console.log("Output: ", Output);
