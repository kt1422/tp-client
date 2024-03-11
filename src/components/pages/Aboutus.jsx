import React, {useEffect} from "react";
import Nav from "../partials/Nav";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { setTitle } from '../../assets/js/script.js';

const Aboutus = () => {
    const page = "about";
    setTitle('Timeplus - About Us');
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className=''>
            <Nav page={page}></Nav>
            <div className='aboutus'>
                <div className='col-6 aboutus-herotxt'>
                    <p className='fs-2 text-black'>The company (Timeplus Corporation) is part of the DBH group of
                    companies, which has 3 main industries - the wholesale and
                    retail arm, communications arm, and real estate development.</p>
                </div>
            </div>
            <div className='aboutus-second d-flex flex-column align-items-center justify-content-center'>
                <div className='aboutus-margins'
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                    <p className='text-white fs-2 aboutus-txt'>Timeplus Corporation, focuses on the wholesale and retail of prestigious global brands. We
                    emphasize on communicating the brands’ history and growing each product. We have also
                    established business relationships with all the prominent shopping malls, with more than
                    500 point of sales, in the Philippines. In addition, we have developed a regional network in
                    Southeast Asia to develop further our current and future global brands.</p>
                </div>
            </div>
            <div className="bg-dark d-flex justify-content-center align-items-center" style={{minHeight:250}}>
                <p className="text-white fs-2 aboutus-txt">TIMEPLUS has been the Philippine exclusive distributor of
                Seiko timepieces for over five decades.</p>
            </div>
            <div className='aboutus-third d-flex justify-content-center  align-items-center'>
                <div className='txtbg rounded-4 p-5'
                data-aos="fade-up"
                data-aos-duration="2000">
                    <p className='fs-2 text-white aboutus-txt'>Our real estate group has various projects that range from the Manila Metro Rail
                    Transit System projects, Anvaya Golf and country club, and the Renaissance towers.
                    We also have future development plans for our upscale commercial and residential
                    properties across key major cities in the Philippines.</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus