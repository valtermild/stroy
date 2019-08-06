import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderOne from './components/HeroSliderOne';
import ServiceGridSlider from './components/ServiceGridSlider';
import VideoCta from './components/VideoCta';
/* import ProjectSlider from './components/ProjectSlider';
import TestimonialSlider from './components/TestimonialSlider'; */
import BrandLogoSlider from './components/BrandLogoSlider';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class HomeOne extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderOne/>
                
                {/* Service grid slider */}
                <ServiceGridSlider/>     
                
                {/* Video CTA */}
                <VideoCta/>
                
                {/* Project Slider */}
                {/* <ProjectSlider/> */}                
                
                {/* Testimonial Slider */}
                {/* <TestimonialSlider/>  */}               

                {/* Brand logo */}
                <BrandLogoSlider background = "" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default HomeOne;