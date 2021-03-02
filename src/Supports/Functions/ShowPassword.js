function ShowPassword(inputPassword) {
    let pass = inputPassword
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  } 

export default ShowPassword