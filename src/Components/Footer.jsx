import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends React.Component{
    render(){
        return(
            
            <div className="container.fluid" style={{bottom: 0}}>
                <div className="bumiabdi-bg-third bumiabdi-fontfam-primary bumiabdi-font-size-14" style={{paddingBottom:"50px", paddingTop:"50px", paddingLeft:"80px", paddingRight:"80px"}}>
                    <h6>
                        <b>Toko Furniture Online, Solusi Untuk Kebutuhan Furniture Minimalis & Modernmu</b>
                    </h6>
                    <p><justify>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi accusamus iure autem delectus, corporis, magni cumque fugit omnis minus provident unde libero hic soluta veniam, repellendus animi tempore velit at!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium similique libero ducimus quibusdam quam optio facere ipsum accusamus. Quam et doloribus mollitia porro iste reiciendis, culpa vel assumenda in.</justify></p>
                </div>
            <div>
                <div className="d-md-flex d-none justify-content-center bumiabdi-bg-fourth bumiabdi-fontfam-primary" style={{paddingBottom:"50px"}}>
                    <div className="mx-5 mt-5">
                        <h5><b>__bumiabdi</b></h5>
                        <div className="mt-5">Tentang Kami</div>
                        <div>Bumiabdi Project</div>
                        <div>Promo Bumiabdi Project</div>
                        <div>Blog</div>
                        <div>Filosofi Bumiabdi</div>
                        <div>Karir</div>
                     </div>
                     <div className="mx-5 mt-5 bumiabdi-fontfam-primary">
                         <h5><b>Layanan Pelanggan</b></h5>
                         <div className="mt-5">FAQ</div>
                         <div>Kebijakan Privasi</div>
                         <div>Syarat dan Ketentuan</div>
                         <div>Kebijakan Pengiriman</div>
                         <div>Kebijakan Pengembalian</div>
                         <div>Lokasi Kota Pengirim</div>
                    </div>
                    <div className="mx-5 mt-5 bumiabdi-fontfam-primary">
                         <h5><b>Layanan Pelanggan</b></h5>
                         <div className="mt-5"><FontAwesomeIcon icon={faPhone} color="black" size="sm" className="mx-3"/>+628748974843</div>
                         <div><FontAwesomeIcon icon={faBuilding} color="black" size="sm" className="mx-3"/>(0361)873984</div>
                         <div><FontAwesomeIcon icon={faEnvelope} color="black" size="sm" className="mx-3"/>Hello@bumiabdi</div>
                         <div><FontAwesomeIcon icon={faClock} color="black" size="sm" className="mx-3"/>Senin-Minggu/10:00-20:00</div>
                         <div className="mx-5">(Termasuk Hari Libur)</div>
                    </div>
                    <div className="mt-5 bumiabdi-fontfam-primary">
                         <div className="mt-5 d-flex">
                         <input type="email" className="form-control bumiabdi-fontfam-primary" placeholder="alamat email anda" />
                         <button className="btn btn-outline-light" type="button" style={{marginLeft:"15px"}}>Send</button>
                         </div> 
                    </div>        
                </div> 
            
            </div>
                    <div>
                       <h3 className="text-center bumiabdi-bg-primary bumiabdi-font-light bumiabdi-fontfam-primary bumiabdi-font-size-16 p-1 m-0">&copy; Website ini hanya diperuntukkan untuk portfolio</h3> 
                    </div>  
            </div>
        
            
        )
    }
}