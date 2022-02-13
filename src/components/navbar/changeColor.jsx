import React, { useState, useEffect } from 'react';
import Ademo from '../../function/function'
import Verifie from '../../utils//image/verifier.png'
import './changeColor.scss'

const styled = "type-logo"
function ChangeColor() { 
      React.useEffect(() => {
        Ademo.ChangeColorBannner('#colorid', '#8D0A26', ".banner_profil")
         Ademo.ChangeColorBannner('#colorid_doublox', '#6B4259', ".banner_profil-doublox")
         Ademo.ChangeColorBannner('#colorid_dlav', '#370F30', ".banner_profil-dlav")
        return () => {
           // window.removeEventListener('#colorid');
        };
      }, []);
    
    return(<div className='changecolor-pos'>
            <div className="position-color">
                <p className='pos-text-user1'>Couleur de Profil Principal</p>
                <button className='button-color'>
                    <input className="input-color" type="color" id="colorid" value="#8D0A26" />
                </button>

                <button onClick={() => Ademo.Banner(".banner_profil", "#5472ae")}>
                    <div className="input-color2"/>
                </button>
                <img src={Verifie} className={styled}></img>
                <p className='input-text'>Par défaut</p>
                <p className='button-text'>Personaliser</p>
            </div>

            <div className="position-color2">
                <p className='pos-text-user1'>Couleur partenaire</p>
                <button className='button-color'>
                    <input className="input-color" type="color" id="colorid_doublox" value="#6B4259" />
                </button>

                <button onClick={() => Ademo.Banner(".banner_profil-doublox", "#5472ae")}>
                    <div className="input-color2"/>
                </button>
                <img src={Verifie} className={styled}></img>
                <p className='input-text'>Par défaut</p>
                <p className='button-text'>Personaliser</p>
            </div>

            <div className="position-color3">
                <p className='pos-text-user1'>Couleur partenaire</p>
                <button className='button-color'>
                    <input className="input-color" type="color" id="colorid_dlav" value="#370F30" />
                </button>

                <button onClick={() => Ademo.Banner(".banner_profil-dlav", "#5472ae")}>
                    <div className="input-color2"/>
                </button>
                <img src={Verifie} className={styled}></img>
                <p className='input-text'>Par défaut</p>
                <p className='button-text'>Personaliser</p>
            </div>
    </div>)
}

export default ChangeColor