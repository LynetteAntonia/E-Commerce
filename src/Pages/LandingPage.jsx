import React from 'react';
import FlashSale from "./../Components/FlashSale"
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component{
    render(){
        return(
            <div>
                {/* JUMBOTRON */}
                <div className='container.fluid d-none d-md-flex justify-content-end jumbotron-landing-page'>
                    <div className="text-center m-5 p-5" style={{width:"100vh"}}>
                        <h1 className='bumiabdi-fontfam-primary bumiabdi-font-light'>
                            <br/>
                            <b>Grand Opening Sale Up To 50%</b>
                        </h1>
                        <Link to='/detail'><input type='button' className='btn btn-warning bumiabdi-fontfam-primary' value='Shop Now!' /></Link>
                    </div>
                </div>

                {/* MOBILE VIEW */}
                <div className='container.fluid d-flex jumbotron-landing-page d-md-none d-flex '>
                    <div className="text-center m-5 p-5 bg-light" style={{width:"80vw", height:"40vh"}}>
                        <h1 className='bumiabdi-fontfam-primary bumiabdi-font-primary m-2 p-2'>
                            <b>Grand Opening Sale Up To 50%</b>
                        </h1>
                        <Link to='/detail'><input type='button' className='btn btn-warning bumiabdi-fontfam-primary' value='Shop Now!' /></Link>
                    </div>
                </div>
            <div>
            <FlashSale/>
            </div>
            </div>
        )
    }
}
