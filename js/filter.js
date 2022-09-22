function filterView() {

	let tableRows = document.getElementsByTagName("tr");
	for (let row = 0; row < tableRows.length; row++) {
		tableRows[row].style.display = 'block';
		switch (document.getElementById("animalType").value) {
			case "all":
				if (document.getElementById("femaleRadio").checked) {
					if (tableRows[row].classList.contains("male")) {
						tableRows[row].style.display = 'none';
					}
				}
				if (document.getElementById("maleRadio").checked) {
					if (tableRows[row].classList.contains("female")) {
						tableRows[row].style.display = 'none';
					}
				}
				break;
			case "cat":
				if (tableRows[row].classList.contains("dog")) {
					tableRows[row].style.display = 'none';
				} else if (document.getElementById("femaleRadio").checked) {
					if (tableRows[row].classList.contains("male")) {
						tableRows[row].style.display = 'none';
					}

				} else if (document.getElementById("maleRadio").checked) {
					if (tableRows[row].classList.contains("female")) {
						tableRows[row].style.display = 'none';
					}
				}
				break;
			case "dog":
				if (tableRows[row].classList.contains("cat")) {
					tableRows[row].style.display = 'none';
				} else if (document.getElementById("femaleRadio").checked) {
					if (tableRows[row].classList.contains("male")) {
						tableRows[row].style.display = 'none';
					}

				} else if (document.getElementById("maleRadio").checked) {
					if (tableRows[row].classList.contains("female")) {
						tableRows[row].style.display = 'none';
					}
				}
				break;
		}
	}
}

function test() {
	//	for (let i = 1; i <= 6; i++) {
	if (document.getElementById("animalType").value == 'all') {
		document.getElementById("tr" + i).style.display = 'block';
		if (document.getElementById("femaleRadio").checked) {
			if (document.getElementById("tr" + i).classList.contains("male")) {
				document.getElementById("tr" + i).style.display = 'none';
			}
		}
		if (document.getElementById("maleRadio").checked) {
			if (document.getElementById("tr" + i).classList.contains("female")) {
				document.getElementById("tr" + i).style.display = 'none';
			}
		}
	}
	if (document.getElementById("animalType").value == 'cat') {
		document.getElementById("tr" + i).style.display = 'block';
		if (document.getElementById("tr" + i).classList.contains("dog")) {
			document.getElementById("tr" + i).style.display = 'none';
		} else if (document.getElementById("femaleRadio").checked) {
			if (document.getElementById("tr" + i).classList.contains("male")) {
				document.getElementById("tr" + i).style.display = 'none';
			}

		} else if (document.getElementById("maleRadio").checked) {
			if (document.getElementById("tr" + i).classList.contains("female")) {
				document.getElementById("tr" + i).style.display = 'none';
			}
		}
	}
	if (document.getElementById("animalType").value == 'dog') {
		document.getElementById("tr" + i).style.display = 'block';
		if (document.getElementById("tr" + i).classList.contains("cat")) {
			document.getElementById("tr" + i).style.display = 'none';
		} else if (document.getElementById("femaleRadio").checked) {
			if (document.getElementById("tr" + i).classList.contains("male")) {
				document.getElementById("tr" + i).style.display = 'none';
			}

		} else if (document.getElementById("maleRadio").checked) {
			if (document.getElementById("tr" + i).classList.contains("female")) {
				document.getElementById("tr" + i).style.display = 'none';
			}
		}
	}
}



