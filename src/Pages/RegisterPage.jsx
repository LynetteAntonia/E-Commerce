import React from 'react';
import PhoneNumberValid from "./../Supports/Functions/PhoneNumberValid"
import EmailValid from "./../Supports/Functions/EmailValid"
import ShowPassword from "./../Supports/Functions/ShowPassword"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RegisterPage extends React.Component{

    state = {
        error: null
    }




    registerForm = () => {
        let inputUser = this.refs.inputUser.value

        if(inputUser[0] == 0){
            let resultPhoneValidator = PhoneNumberValid(inputUser)
            console.log(resultPhoneValidator)
        

        if(resultPhoneValidator !== true){
            this.setState({error: resultPhoneValidator})

        }

        }else{
            let resultEmailValidator = EmailValid(inputUser)
            console.log(resultEmailValidator)

            if(resultEmailValidator !== true){
                this.setState({error: 'Email tidak valid!'})
            }
        }

    }


    render(){
        return(
    <div className="container border bumiabdi-bg-third shadow-lg rounded" style={{marginTop:"150px", marginBottom:"150px", height:"70vh", width:"50vw", borderRadius:"10px"}}>
        <div className="text-left mt-4 bumiabdi-fontfam-primary bumiabdi-font-dark" style={{height: "60vh"}}>
            <h2>
                <b><center>Register</center></b>
            </h2>
            <br>
            </br>
            <p style={{color:"red"}}>
                        {
                            this.state.error?
                                this.state.error
                            :
                                null
                        }
            </p>
            <p style={{marginBottom:"0px"}}>
            E-mail or Phone Number       
            </p>
            <input type="text" ref="inputUser" placeholder="Enter your phone number/email" className="form form-control mb-4"/>
            <p style={{marginBottom:"0px"}}>
            Password          
            </p>
            <input type="password" ref="inputPassword" placeholder="Enter your password" className="form form-control mb-4"/>
            <p style={{marginBottom:"0px"}}>
            Confirm Password
            </p>
            <input type="password" ref="confirmPassword" placeholder="Confirm your password" className="form form-control"/>
            <br/>
            <div className="text-center">
            <input type='button' className='btn bumiabdi-bg-secondary bumiabdi-font-light bumiabdi-fontfam-primary' value='Register' onClick={this.registerForm}/>
            </div>
                </div>
            </div>
        )
    }
}