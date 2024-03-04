import React from 'react';
import Nav from "../partials/Nav";
import S5 from "../../assets/img/s5.jpg";

const Aboutus = () => {
  return (
    <div>
        <Nav></Nav>
        <div className='container-lg p-5 d-flex gap-3' style={{height: "88vh"}}>
            <div className='col-6 d-flex justify-content-center align-items-center h-100 border rounded-3 shadow'>
                <img className='w-100' src={S5} alt="" />
            </div>
            <div className='col-6 d-flex flex-column justify-content-center align-items-center h-100 border rounded-3 shadow p-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam amet vitae autem itaque eligendi voluptate quaerat! Cum minima debitis reprehenderit maiores cupiditate voluptates suscipit temporibus nemo, quo obcaecati molestiae!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam amet vitae autem itaque eligendi voluptate quaerat! Cum minima debitis reprehenderit maiores cupiditate voluptates suscipit temporibus nemo, quo obcaecati molestiae!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam amet vitae autem itaque eligendi voluptate quaerat! Cum minima debitis reprehenderit maiores cupiditate voluptates suscipit temporibus nemo, quo obcaecati molestiae!</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutus