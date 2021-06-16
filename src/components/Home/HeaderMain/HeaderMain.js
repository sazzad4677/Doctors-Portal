import React from 'react';
import chair from '../../../images/chair-1.png';

const HeaderMain = () => {
    return (
        <main style={{height:'700px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3a4256'}}>Your new smile <br/> starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, doloremque exercitationem nemo quo aliquid quae inventore labore, veritatis ullam distinctio nulla in obcaecati dignissimos.</p>
                <button className="btn btn-primary">Get Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;