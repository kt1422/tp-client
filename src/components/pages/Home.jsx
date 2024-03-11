import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Nav from "../partials/Nav";
import bg1 from "../../assets/img/bg1.jpg";
import bg2 from "../../assets/img/bg2.jpg";
import bg3 from "../../assets/img/bg3.jpg";
import Img1 from "../../assets/img/img1.jpg";
import Img2 from "../../assets/img/img2.jpg";
import Img3 from "../../assets/img/img3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { setTitle } from '../../assets/js/script.js';

const Home = () => {
    setTitle('Timeplus - Home');
    const page = "home";
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div>
            <Nav page={page}></Nav>
            <div className="banner bg-white">
                <div id="carousel-banner" className="carousel slide carousel-dark h-100" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel-banner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel-banner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel-banner" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner h-100">
                        <div className="carousel-item active h-100" data-bs-interval="5000">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <img src={bg3} className="d-block banner-pic" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <img src={bg2} className="d-block banner-pic" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <img src={bg1} className="d-block banner-pic" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel-banner" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel-banner" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="banner2 d-flex justify-content-center p-3">
                <div className="d-flex justify-content-center align-items-center me-5">
                📌 IMPORTANT
                </div>
                <div className="d-flex flex-column justify-content-center gap-2 ms-5">
                    <div>• Important Notice regarding Counterfeit SEIKO watches</div>
                    <div>• Important notice regarding the timing of new product launches.</div>
                    <div>• Important Notice regarding Counterfeit SEIKO watches</div>
                </div>
            </div>
            <div className="container bg-white d-flex flex-column py-5" style={{minHeight: 500}}>
                <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="d-flex gap-4 pjs">
                    <Link to={"/"}>
                        <div style={{width:300, height:180, position:"relative"}}>
                            <img className="h-100 w-100 d-block img-thumbnail" src={Img1} alt=""/>
                        </div>
                    </Link>
                    <div style={{width: 270}}>
                        <Link className="fs-5" target="_blank" to={"https://attokyo.com.ph/"}>@TOKYO 1</Link>
                        <div className="d-flex my-1 flex-wrap gap-2">
                            <span className="badge text-bg-info">Seiko</span>
                            <span className="badge text-bg-success">Alba</span>
                            <span className="badge text-bg-primary">Grand Seiko</span>
                        </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem officiis veritatis veniam sapiente aliquam? Unde quo enim quia, cum quam itaque! Excepturi enim deleniti cum voluptatibus illo recusandae, nesciunt iusto beatae aperiam reprehenderit impedit atque quas veritatis odio maxime fugiat.</p>
                    </div>
                </div>
                <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="d-flex gap-4 pje pjm">
                    <Link to={"/"}>
                        <div style={{width:300, height:180, position:"relative"}}>
                            <img className="h-100 w-100 d-block img-thumbnail" src={Img2} alt=""/>
                        </div>
                    </Link>
                    <div style={{width: 270}}>
                        <Link className="fs-5" target="_blank" to={"https://attokyo.com.ph/"}>@TOKYO 2</Link>
                        <div className="d-flex my-1 flex-wrap gap-2">
                            <span className="badge text-bg-info">Seiko</span>
                            <span className="badge text-bg-success">Alba</span>
                            <span className="badge text-bg-primary">Grand Seiko</span>
                        </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem officiis veritatis veniam sapiente aliquam? Unde quo enim quia, cum quam itaque! Excepturi enim deleniti cum voluptatibus illo recusandae, nesciunt iusto beatae aperiam reprehenderit impedit atque quas veritatis odio maxime fugiat.</p>
                    </div>
                </div>
                <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="d-flex gap-4 pjs pjm">
                    <Link to={"/"}>
                        <div style={{width:300, height:180, position:"relative"}}>
                            <img className="h-100 w-100 d-block img-thumbnail" src={Img3} alt=""/>
                        </div>
                    </Link>
                    <div style={{width: 270}}>
                        <Link className="fs-5" target="_blank" to={"https://attokyo.com.ph/"}>@TOKYO 3</Link>
                        <div className="d-flex my-1 flex-wrap gap-2">
                            <span className="badge text-bg-info">Seiko</span>
                            <span className="badge text-bg-success">Alba</span>
                            <span className="badge text-bg-primary">Grand Seiko</span>
                        </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem officiis veritatis veniam sapiente aliquam? Unde quo enim quia, cum quam itaque! Excepturi enim deleniti cum voluptatibus illo recusandae, nesciunt iusto beatae aperiam reprehenderit impedit atque quas veritatis odio maxime fugiat.</p>
                    </div>
                </div>
            </div>
            <div className="parallax1 d-flex pje">
                <div className="text-white col-6 d-flex flex-column justify-content-center align-items-center gap-2 p-5">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, modi.</h1>
                    <p className="fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, sunt debitis accusamus, quis alias deserunt aliquid doloribus vitae aliquam facere voluptas distinctio porro quidem, laborum incidunt! Totam quia ipsam repellat nihil sed, itaque placeat, vitae veniam magni aspernatur iste doloremque consectetur temporibus at corrupti molestiae? Laborum et sed voluptas iusto.</p>
                </div>
            </div>
            <div className="bg-dark d-flex justify-content-center align-items-center p-5" style={{minHeight: 180}}>
                <div>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus quo blanditiis, sequi assumenda magnam maxime aliquam eius id quidem, quos rerum! Quibusdam amet consequuntur non officia delectus incidunt harum?</p>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus quo blanditiis, sequi assumenda magnam maxime aliquam eius id quidem, quos rerum! Quibusdam amet consequuntur non officia delectus incidunt harum?</p>
                </div>
            </div>
            <div className="parallax2 d-flex justify-content-center align-items-center">
                <div className="bg-danger rounded-pill d-flex justify-content-center align-items-center" style={{width:300, height:100}}>
                    <p className="fs-3 text-white">Thank You</p>
                </div>
            </div>
        </div>
    )
}

export default Home;