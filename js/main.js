function CheckForm(el) {
	var email = el.email.value;
	var firstName = el.firstName.value;
	var error = el.error;

	var fail = "";

	if (email == "" || firstName == "" ){
		fail = "Please enter form";
	}
	else if(email.split("@").length != 2){
		fail = "Email is incorrect";
	}else if(firstName.length <=1 || firstName.length >=50){
		fail = "First Name is incorrect"
	}




	if (fail != ""){
		document.getElementById('error').innerHTML = fail;


	}else{
		alert("You joined the GAF family!")
		document.getElementById('error').style.display = "none"
		return true
	}



	return false;
}

function CheckForm2(el) {
	let email = el.email.value;
	let fullName = el.fullName.value;
	let number = el.number.value;

	let fail = "";

	if(email == "" || fullName == "" || number == ""){
		fail = "Please enter form";
	}else if(email.split("@").length != 2){
		fail = "Email is incorrect";
	}else if(fullName.length<=1 || fullName.length>=50){
		fail = "Full Name is incorrect";
	}



	if (fail != "") {
		document.getElementById('error2').innerHTML = fail;
	}else{
		alert("Will call you back shortly");
		return true;
	}



	return false;
}