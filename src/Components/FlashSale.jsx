import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2
    };
    return (
      <div>
        <br/>
        <h5 className="bumiabdi-fontfam-primary font-weight-bold bumiabdi-fontfam-primary"> <center>Up To 70% Off</center></h5>
        <h5 className="bumiabdi-fontfam-primary font-weight-bold bumiabdi-fontfam-primary"> <center>24-Hour</center></h5>
        <h1 className="bumiabdi-fontfam-primary font-weight-bold bumiabdi-fontfam-secondary"> <center>Flash Sale</center></h1>
        <br/>
        <br/>
        <br/>
        <Slider {...settings}>

          <div className="d-flex justify-content-center row font-weight-bold bumiabdi-fontfam-secondary">
            <img src="https://images.crateandbarrel.com/is/image/Crate/item_717_155_1970_2297/a/s9JyonuEG5OxnLH9FYNw/item_717_155_1970_2297.jpg?$web_zoom_furn_colormap$&wid=1008&hei=567" style={{width:"20vw"}}/>
                <div className="text-center">
                <p>Grey Sofa</p>
                <p><strike>IDR 5.000.000</strike> IDR 3.500.000</p>
                </div>
          </div>

          <div className="d-flex justify-content-center row font-weight-bold bumiabdi-fontfam-secondary">
            <img src="https://cdn-m2.fabelio.com/catalog/product/s/i/Simo_Dining_Chair_2.jpg?auto=format&h=640&ixlib=react-9.0.3" style={{width:"20vw"}}/>
                <div className="text-center">
                <p>Dining Chair</p>
                <p><strike>IDR 1.000.000</strike> IDR 500.000</p>
                </div>
          </div>

          <div className="d-flex justify-content-center row font-weight-bold bumiabdi-fontfam-secondary">
            <img src="https://images.crateandbarrel.com/is/image/Crate/AidanAptSofaComoOlive3QF17/?$web_pdp_main_carousel_med$&210301212615&wid=1008&hei=567" style={{width:"20vw"}}/>
                <div className="text-center">
                <p>Brown Sofa</p>
                <p><strike>IDR 6.000.000</strike> IDR 4.000.000</p>
                </div>
          </div>

          <div className="d-flex justify-content-center row font-weight-bold bumiabdi-fontfam-secondary">
            <img src="https://cdn-m2.fabelio.com/catalog/product/k/u/kursi-makan-kojo-light-khaki-3_1.jpg?auto=format&h=640&ixlib=react-9.0.3" style={{width:"20vw"}}/>
                <div className="text-center">
                <p>Grey Dining Chair</p>
                <p><strike>IDR 2.000.000</strike> IDR 700.000</p>
                </div>
          </div>
          
        </Slider>
        <br/>
      </div>
    );
  }
}