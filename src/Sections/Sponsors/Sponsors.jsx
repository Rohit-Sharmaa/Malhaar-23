import React from 'react'
import "./Sponsors.css"
import pw from "../../assests/pw.png"
import unnamed from "../../assests/unnamed.png"
import dominos from "../../assests/dominos.png"
export default function Sponsors() {
    return (
        <div className="sponsors">
            <div className="sponsor">
                SPONSORS
            </div>
            <div className='container'>
            <div className="card">
            {/*  */}
                    <h4 className='name'><b>Title Sponsor</b></h4>
                {/* </div> */}
                <img src={pw} alt="Avatar" style={{ width: "100%" }} /> 
               
            </div>
            <div className="card">
            
                    <h4 className='name'><b>Power Sponsor</b></h4>
                
                <img src={unnamed} alt="Avatar" style={{ width: "100%" }} /> 
                
            </div>
            <div className="card">
            
                    <h4 className='name'><b>Associate Sponsor</b></h4>
                
                <img src={dominos} alt="Avatar" style={{ width: "100%" }} /> 
                
            </div>
            <div className="card">
            
                    <h4 className='name'><b>Gold Sponsor</b></h4>
                
                <img src={unnamed} alt="Avatar" style={{ width: "100%" }} /> 
               
            </div>
            <div className="card">
            
                    <h4 className='name'><b>Beverage Partner</b></h4>
                
                <img src={unnamed} alt="Avatar" style={{ width: "100%" }} /> 
               
            </div>
            <div className="card">
            
                    <h4 className='name'><b>Food Partner</b></h4>
                
                <img src={unnamed} alt="Avatar" style={{ width: "100%" }} /> 
                
            </div>
            </div>
        </div>

    )
}
