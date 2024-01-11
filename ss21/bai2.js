let answer = +prompt("nhập số bất kì");
Number(answer);
let result;
if (answer % 2 == 0){
    result = "Chẵn";
} else if (answer % 2 != 0){
    result = "lẻ";
} else {
    result = "giá trị ko hợp lệ";
}
document.write(result);