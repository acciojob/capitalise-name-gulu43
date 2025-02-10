//your JS code here. If required.

// function upperCase(str) {
// 	let txt = fname.getElementById();
// 	return txt.toUpperCase();
// }
document.getElementById("fname").addEventListener("blur", function() {
    this.value = this.value.toUpperCase();
});
