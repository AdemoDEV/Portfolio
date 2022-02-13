import React, {Component} from "react";
import Config from "../../config.json"
import Logo from "../../utils//image/pnl-ademo.gif"
import Verifie from '../../utils//image/verifier.png'
import Spotify from '../spotify-rish/spotify-rish'
import Language from '../language/language'
import Projects from "..//project/project";
import ChangeColor from "./changeColor";
import './navbar.css'

 var color = document.querySelector("#colorid")
// color.addEventListener("change", updateAll, false);

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'A.D.E.M.O',
        }
     }

     ChangeUser() {
        var args = document.getElementById("values_input").value;
        if (args.length > 20) {
            console.log("trop")
        } else {
          this.setState({
              user: args,
          })
        }
     }

     

    render() {
        return(
            <div>
                 <div>
                     <div className="pos_profil">
                            <div className="profil">
                                <ChangeColor/>
                                <div className="banner_radius">
                                    <div className="banner_profil"></div>
                                </div>
                                <div className="banne_user">{this.state.user}<a className="banner_user_2">#8180</a></div>
                                <input className="banner_input" type="text" id="values_input" name="name" placeholder="   Changer d'utilisateur.."></input>
                                <button className="banner_button"><img className="button_img" onClick={() => this.ChangeUser()} src={Verifie}></img></button>
                                <div className="banner_separe"></div>
                                <Spotify/>
                                <Language/>
                                <Projects/>
                                <div className="logo_contour"></div>
                                <img className="logo_profil" src={Logo} alt="Avatar"/>
                            </div>
                     </div>
                 </div>
            </div>  
        )
    }
}
