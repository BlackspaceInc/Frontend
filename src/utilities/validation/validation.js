// export a global handler check for empty ness across numerous types
export var isEmpty =  value => value == null || false || (typeof value === "object" && Object.keys(value).length === 0) ||  (typeof value === "string" && value.trim().length === 0);
export var containsInteger =  value => value.match(/\d+/g);
export var isValidSignupCredentials = (firstname,lastname, email, username, password, password2) => {
	if (password !== password2) {
		return 'Passwords do not match, danger';
	}

	if(password.length <= 10){
		return {
			"msg" : "Password must contain more than 10 characters",
			"isValid" : false
		};
	}

	if(!containsInteger(password)){
		return {
			"msg" : "Password must contain an integers",
			"isValid" : false
		};
	}

	if(isEmpty(username)){
		return {
			"msg" : "Username cannot be null",
			"isValid" : false
		};
	}

	if(isEmpty(email)){
		return {
			"msg" : "Email cannot be null",
			"isValid" : false
		};
	}

	if(isEmpty(firstname) || isEmpty(lastname)){
		return {
			"msg" : "Firstname or Lastname cannot be null",
			"isValid" : false
		};
	}

	return {
		"msg": null,
		"isValid": true
	}
}
