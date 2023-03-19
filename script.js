function calculateGrade() {
	let marks = document.getElementById("marks").value;

	if (marks >= 79 && marks < 101) {
		document.getElementById("result").innerHTML = "A";
	} else if (marks >= 60 && marks < 80) {
		document.getElementById("result").innerHTML = "B";
	} else if (marks > 49 && marks <=61) {
		document.getElementById("result").innerHTML = "C";
	} else if (marks >= 40 && marks <=50) {
		document.getElementById("result").innerHTML = "D";
	} else if (marks < 40 && marks > 0) {
		document.getElementById("result").innerHTML = "E";
	} else {
		document.getElementById("result").innerHTML = "Unspecified";
	}
}
