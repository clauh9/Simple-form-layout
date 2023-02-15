const passwd = document.querySelector("#passwd");
const confirm_passwd = document.querySelector("#comfirm_passwd");

const passwd_no_match = document.querySelector("#passwd_no_match");

const inputs = Array.from(document.querySelectorAll("input[type='password']"));

confirm_passwd.addEventListener("input", confirmation);

function confirmation() {
	passwd_no_match.innerHTML = "*Passwords do not match";

	inputs[0].style.border = "1px solid red";
	inputs[1].style.border = "1px solid red";

	if (passwd.value === confirm_passwd.value) {
		passwd_no_match.innerHTML = "";
		inputs[0].style.border = "1px solid blue";
		inputs[1].style.border = "1px solid blue";
	}
}
