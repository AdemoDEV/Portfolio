import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';
import Logo from "../../../../utils//image/dlav.png"
import Github from '../../../../utils//image/github.svg'
import Autor from '../../../../utils//image/autor.png'
import Redirected from '../../../../utils//image/connect.png'
import Spotiy from '../../../../utils//image/spotify2.png'
import './dlav.css'



export default class Dlav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Dlav',
            ApplicationIcon: Github,
            ApplicationTexte: "VladimirUE4",
            ApplicationLink: "https://github.com/VladimirUE4",
            //////////////////////////////////////////////
            Application2Icon: Spotiy,
            Application2Texte: "VladimirUE4",
            Application2Link: "https://open.spotify.com/user/2xe5uj1u6nmbty1xljs2gcqqw",
        }
     }

    render() {
        return(
            <div>
                <div className="pos_profil-dlav">
                            <div className="profil-dlav">
                                <div className="banner_profil-dlav"></div>
                                <div className="banner_radius-dlav"></div>
                                <div className="banne_user-dlav">{this.state.user}<a className="banner_user_2-dlav">##7440</a></div>
                                <input className="banner_input-dlav" type="text" id="values_input" name="name" placeholder="   Mon Meilleur Partenaire.."></input>
                                <div className="banner_separe-dlav"></div>
                                <div className="logo_contour-dlav"></div>
                                <img className="logo_profil-dlav" src={Logo} alt="Avatar"/>


                                <div className="position-vsc-spo">
                                    <div>
                                        <div className="github-fond"></div>
                                        <img className="github-icon" src={this.state.ApplicationIcon}></img>
                                        <p className="github-user">{this.state.ApplicationTexte}</p>
                                        <img className="github-icon-verife-2" src={Autor}></img>
                                        <a href={this.state.ApplicationLink}>
                                            <img className="github-icon-redirect" src={Redirected}></img>
                                        </a>
                                    </div>

                                    <div className="position-dlav-spotify">
                                        <div className="github-fond"></div>
                                        <img className="github-icon" src={this.state.Application2Icon}></img>
                                        <p className="github-user">{this.state.Application2Texte}</p>
                                        <img className="github-icon-verife-2" src={Autor}></img>
                                        <a href={this.state.Application2Link}>
                                            <img className="github-icon-redirect" src={Redirected}></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                     </div>
            </div>
        )
    }
}