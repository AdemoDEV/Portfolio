import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';
import Logo from "../../../../utils//image/doublox.gif"
import Github from '../../../../utils//image/github.svg'
import Autor from '../../../../utils//image/autor.png'
import Redirected from '../../../../utils//image/connect.png'

import Spotiy from '../../../../utils//image/spotify2.png'
import './doublox.css'

export default class Doublox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Doublox',
            ApplicationIcon: Github,
            ApplicationTexte: "Doublox",
            ApplicationLink: "https://github.com/Doublox",
            //////////////////////////////////////////////
            Application2Icon: Spotiy,
            Application2Texte: "Doublox",
            Application2Link: "https://open.spotify.com/user/2xe5uj1u6nmbty1xljs2gcqqw",
        }
     }

    render() {
        return(
            <div>
                <div className="pos_profil-doublox">
                            <div className="profil-doublox">
                                <div className="banner_profil-doublox"></div>
                                <div className="banner_radius-doublox"></div>
                                <div className="banne_user-doublox">{this.state.user}<a className="banner_user_2-doublox">#9803</a></div>
                                <input className="banner_input-doublox" type="text" id="values_input" name="name" placeholder="   Mon Meilleur Partenaire.."></input>
                                <div className="banner_separe-doublox"></div>
                                <div className="logo_contour-doublox"></div>
                                <div className="reseau-pos">
                                    <div>
                                        <div className="github-fond"></div>
                                        <img className="github-icon" src={this.state.ApplicationIcon}></img>
                                        <p className="github-user">{this.state.ApplicationTexte}</p>
                                        <img className="github-icon-verife" src={Autor}></img>
                                        <a href={this.state.ApplicationLink}>
                                            <img className="github-icon-redirect" src={Redirected}></img>
                                        </a>
                                    </div>

                                    <div className="positions-spotify">
                                        <div className="github-fond"></div>
                                        <img className="github-icon" src={this.state.Application2Icon}></img>
                                        <p className="github-user">{this.state.Application2Texte}</p>
                                        <img className="github-icon-verife" src={Autor}></img>
                                        <a href={this.state.Application2Link}>
                                            <img className="github-icon-redirect" src={Redirected}></img>
                                        </a>
                                    </div>
                                </div>
                               
                                <img className="logo_profil-doublox" src={Logo} alt="Avatar"/>
                            </div>
                     </div>
            </div>
        )
    }
}