let sub = document.getElementById('sub');
let paragraph = document.getElementById('paragraph');
let letter = document.getElementById('letter');
sub.addEventListener('keyup', function () {
    document.getElementById('headline').innerText = sub.value
    
});
document.getElementById('paragraph').addEventListener('keyup', function () {
    document.getElementById('main_line').innerText = document.getElementById('paragraph').value

});
document.getElementById('per').addEventListener('keyup', function () {
    document.getElementById('letter').innerText = document.getElementById('per').value

});








// let sub = document.getElementById("sub");
// sub.addEventListener("keyup", function () {
//     document.getElementById("main_img").src = sub.value;
// });

// document.addEventListener("mousemove", function (e) {
//     document.getElementById("main_hadeline").style.fontSize = e.clientX + "px";
// });



























