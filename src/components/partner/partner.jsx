import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';
import './partner.css'
import Dlav from './user/dlav/dlav'
import Doublox from './user/doublox/doublox'
import VSC from '../vsc/vsc'

export default class Partner extends React.Component {
    render() {
        return(
        <div className="positions-partner">
            {/* <h1 className="text3-salutation">Mes partenaires</h1> */}
            <Doublox/>
            <Dlav/>
            <VSC/>
            {/* <p className="texte-partner">
                Doublox et Dlav ce sont mes deux Partenaires de confiance . <br/>
                Je fait mes projets Avec c'est deux personnes . 
            </p> */}
        </div>
        )
    }
}