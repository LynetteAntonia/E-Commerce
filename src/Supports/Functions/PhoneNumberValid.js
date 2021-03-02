function PhoneNumberValid(inputPhoneNumb){
    if(inputPhoneNumb[0] !== "0"){
        return "Nomor harus diawali dengan 0!"
    }

    if(inputPhoneNumb.length >= 9 && inputPhoneNumb.length <=12){
        for(let i=0; i<inputPhoneNumb.length; i++){
            if(!(inputPhoneNumb[i] >=0)){                       // if(isNaN(inputPhoneNumb)) 
                return "Nomor harus berupa angka!"
            }else if(inputPhoneNumb[i] == " "){
                return "Nomor tidak boleh berisikan spasi!"
            }
        }
    }else{
        return "Nomor harus 9-12 digit!"
    }

    return true

}

export default PhoneNumberValid