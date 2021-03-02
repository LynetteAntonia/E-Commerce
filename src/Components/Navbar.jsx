import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faHeart, faUser, faSearchLocation, faBars } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{
    render(){
        return(
            <>
            {/* Navbar pertama */}
            <div className="fixed-top">
            <div className='bumiabdi-bg-secondary'>
                    <div className="container">
                        <div className="row align-items-center" style={{height: '45px'}}>
                            <div className='col-12 col-md-6'>
                                <span className="bumiabdi-font-light">
                                    <FontAwesomeIcon icon={faSearchLocation} /> Lokasi Terdekat Dengan Anda
                                </span>
                            </div>
                            <div className='col-md-6 d-none d-md-block text-right'>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search your item" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-light" type="button" style={{marginLeft:"15px"}}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


            {/* Navbar kedua */}

            <div className='bumiabdi-bg-primary py-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-2 col-6 bumiabdi-fontfam-logo bumiabdi-font-size-25'>
                        <Link to='/' style={{textDecoration: "none"}}><span className="bumiabdi-font-light">_bumiabdi</span></Link>
                        </div>
                        <div className='col-6 d-none d-md-flex col-md-7 bumiabdi-font-light bumiabdi-fontfam-primary bumiabdi-font-size-16'>
                            <span className="mx-3">Ruang Tamu</span>
                            <span className="mx-3">Kamar Tidur</span>
                            <span className="mx-3">Ruang Makan</span>
                            <span className="mx-3">Ruang Kerja</span>
                            <span className="mx-3">Dekorasi</span>
                        </div>
                    
                            <div className='col-6 col-md-3 d-flex align-items-center justify-content-center'>
                                <span >
                                <FontAwesomeIcon icon={faShoppingCart} color="white" size="lg" className="mx-3"/>
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faHeart} color="white" size="lg" className="mx-3"/>
                                </span>
                                <span>
                                <Link to='/register'><FontAwesomeIcon icon={faUser} color="white" size="lg" className="mx-3"/></Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Mobile View */}

                    <div className='d-flex container-fluid d-block d-md-none'>
                        <input type="email" className="form-control bumiabdi-fontfam-primary" placeholder="cari produk..." />
                        <Button variant="light">Search</Button>
                    </div>
                </div>
        </>
        )
    }
}