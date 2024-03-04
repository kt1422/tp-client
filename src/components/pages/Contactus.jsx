import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Nav from "../partials/Nav";

const Contactus = () => {
  return (
    <div>
        <Nav></Nav>
        <div className="contact d-flex justify-content-center align-items-center">
            <div className="container-lg px-4 text-black">
                <div className="d-flex flex-column flex-md-row gap-5 my-5">
                    <div className="col-auto">
                        <h1 className="sub-title">Contact Us</h1>
                        <p><i className="fas fa-paper-plane"></i> timeplus@gmail.com</p>
                        <p><i className="fas fa-phone-square-alt"></i> +63 997 000 1234</p>
                        <div className="social-icons">
                            <Link href="https://www.facebook.com/profile.php?id=100081726632586"><i className="fab fa-facebook"></i></Link>
                            <Link href="https://twitter.com/Kenneth70660603"><i className="fab fa-twitter-square"></i></Link>
                            <Link href="https://github.com/kt1422"><i className="fab fa-github"></i></Link>
                            <Link href="https://www.linkedin.com/in/kenneth-tan-a0a8a214a/"><i className="fab fa-linkedin"></i></Link>
                        </div>
                    </div>
                    <div className="col">
                        <form className="mb-3" name="submit-to-google-sheet">
                            <input type="text" name="name" placeholder="Your Name" required/>
                            <input type="email" name="email" placeholder="Your email" required/>
                            <textarea name="message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn-primary btn3 float-end">Submit</button>
                        </form>
                        <span className="text-warning" id="msg"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactus