import React from "react";
import { Link } from 'react-router-dom';

export default class DetailProduct extends React.Component{
    render(){
        return(
            <div>
            
            <div className="container d-md-flex d-none border border-danger justify-content-between" style={{width: "40vw", height:"80vh", marginTop:"8%"}}>
               <div className="d-flex row justify-content-center" style={{width: "20vw", height:"40vh", marginTop:"8%"}}>
                    <div className="border border-info" style={{width: "15vw", height:"25vh", marginLeft: "8%", marginTop:"8%", marginRight: "8%"}}> </div>
                        <div className="d-flex justify-content-evenly">
                            <div className="border border-success" style={{width: "2vw", height:"4vh"}}></div>
                            
                            <div className="border border-success" style={{width: "2vw", height:"4vh"}}></div>
                        
                            <div className="border border-success" style={{width: "2vw", height:"4vh"}}></div>
                        </div>
                            
                </div>

                <div className="d-md-flex d-none row justify-content-center" style={{width: "20vw", height:"50vh", marginTop:"8%"}}>
                        <div className="column" style={{width: "100vw", height:"10vh"}}>
                            <p className="bumiabdi-font-size-16" style={{margin:"0px"}}>Nama Product</p>
                            <p className="bumiabdi-font-size-12" style={{margin:"0px"}}> Sold: 1 Products</p>
                            <p className="bumiabdi-font-size-14"style={{margin:"0px"}}>IDR 3.000.000</p>                    
                        </div>
                        <div className="column" style={{width: "100vw", height:"10vh"}}>
                            <p className="bumiabdi-font-size-14 m-0 pt-2" >Stock: 1</p>
                            <p className="bumiabdi-font-size-16 m-0">Weight: 10000gr</p>  
                        </div>
                        <div className="column" style={{width: "100vw", height:"10vh"}}>
                            <p className="bumiabdi-font-size-14" style={{margin:"0px"}}>Description:</p>
                            <p className="bumiabdi-font-size-12" style={{margin:"0px"}}>Product ini merupakan product terbaik yang ada di e-commerce kamu</p>
                        </div>
                        <div className="column" style={{width: "100vw", height:"5vh"}}>
                        <input style={{width:"100%"}} type='button' className='btn btn-warning bumiabdi-fontfam-primary' value='Add to cart' />
                        </div>
                </div>
            
            </div>

                {/* Mobile View */}


            <div className="container d-md-none d-column border border-danger justify-content-between" style={{width: "60vw", height:"80vh", marginTop:"30%"}}>
               <div className="d-flex row justify-content-center">
                    <div className="border border-info" style={{width: "40vw", height:"25vh", marginLeft: "8%", marginTop:"8%", marginRight: "8%"}}> </div>
                        <div className="d-flex justify-content-evenly">
                            <div className="border border-success mt-3 mb-4" style={{width: "5vw", height:"4vh"}}></div>
                            
                            <div className="border border-success mt-3 mb-4" style={{width: "5vw", height:"4vh"}}></div>
                        
                            <div className="border border-success mt-3 mb-4" style={{width: "5vw", height:"4vh"}}></div>
                        </div>
                            
                </div>

                <div className="d-md-none d-flex row justify-content-center" style={{width: "60vw", height:"50vh"}}>
                        <div className="column" style={{width: "100vw"}}>
                            <p className="bumiabdi-font-size-16" style={{margin:"0px"}}>Nama Product</p>
                            <p className="bumiabdi-font-size-12" style={{margin:"0px"}}> Sold: 1 Products</p>
                            <p className="bumiabdi-font-size-14"style={{margin:"0px"}}>IDR 3.000.000</p>                    
                        </div>
                        <div className="column" style={{width: "100vw", height:"10vh"}}>
                            <p className="bumiabdi-font-size-14 m-0 pt-2" >Stock: 1</p>
                            <p className="bumiabdi-font-size-16 m-0">Weight: 10000gr</p>  
                        </div>
                        <div className="column" style={{width: "100vw", height:"10vh"}}>
                            <p className="bumiabdi-font-size-14" style={{margin:"0px"}}>Description:</p>
                            <p className="bumiabdi-font-size-12" style={{margin:"0px"}}>Product ini merupakan product terbaik yang ada di e-commerce kamu</p>
                        </div>
                        <div className="column" style={{width: "100vw", height:"15vh"}}>
                        <input style={{width:"100%"}} type='button' className='btn btn-warning bumiabdi-fontfam-primary' value='Add to cart' />
                        </div>
                </div>
            
            </div>

        </div>
        )
    }
}
