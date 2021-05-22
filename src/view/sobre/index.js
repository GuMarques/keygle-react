import React from 'react';
import Navbar from '../components/navbar'
import './sobre.css';
import logo from '../../img/logo.png';
import v1 from '../../videos/v1.mp4';
import v2 from '../../videos/v2.mp4';
import v3 from '../../videos/v3.mp4';

function Sobre(){    
    return(
        <>
        <Navbar/>
        <div id="sobreCont" className="">
            <img src={logo} alt="logo" className="center mb-5"/>

            <video src={v1} width="640" height="360" controls="controls" autoplay="true" loop="true"/>
            <video src={v2} width="640" height="360" controls="controls" autoplay="true" loop="true"/>
            <video src={v3} width="640" height="360" controls="controls" autoplay="true" loop="true"/>
        
            <h6 className="footer">
                Site desenvolvido por <a href="https://www.facebook.com/yohan.duarte.10/">Yohan Duarte Pessanha</a> para a disciplina de programação Web!
            </h6>
        </div>
        </>
    );
}

export default Sobre;