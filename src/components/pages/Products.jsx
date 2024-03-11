import React from 'react';
import { Link } from "react-router-dom";
import Nav from "../partials/Nav";
import s5 from "../../assets/img/s5.jpg";
import { setTitle } from '../../assets/js/script.js';

const Services = () => {
    setTitle('Timeplus - Products');
    const page = "products";
    var rows = [], i = 0, len = 6;
    while (++i <= len) rows.push(i);
    return (
        <div>
            <Nav page={page}></Nav>
            <div className='container-lg'>
                <div className='row d-flex my-5 m-0 p-0'>
                    {
                        rows.map((data)=>(
                            <div className='p-2 col-3'>
                                <div className="card m-0 p-0">
                                    <img src={s5} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to={"/"} className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Services