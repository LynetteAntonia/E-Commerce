import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RegisterPage from './Pages/RegisterPage'
import LandingPage from './Pages/LandingPage'
import DetailProduct from './Pages/DetailProduct'

// CSS
import './Supports/Stylesheets/Utils.css'
import './Supports/Stylesheets/LandingPage.css'

export default class App extends React.Component{
  render(){
    return(
      <>
       <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/detail' component={DetailProduct} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    )
  }
}

