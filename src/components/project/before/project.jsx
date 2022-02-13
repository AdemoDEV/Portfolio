import React, { Component } from "react"
import numero from '../../utils//image/1.png'
import Autor from '../../utils//image/auto.png'
import Autor2 from '../../utils//image/auto2.png'
import Autor3 from '../../utils//image/store.png'
import Autor4 from '../../utils//image/home.png'
import Autor5 from '../../utils//image/mafiad.png'
import Ademo from "../../function/function"
import './project.scss'
import Redirected from '../../utils//image/connect.png'


// rgb(165, 21, 21)

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //////////////////////////////////////////////
            ApplicationTexte: "Imperial City",
            ApplicationLink: "https://discord.gg/bsrTp68jBU",
            ApplicationDCS: "Serveur Fivem",
            //////////////////////////////////////////////
            ApplicationTexte2: "ClassX",
            ApplicationLink2: "https://discord.gg/HkpCMbB4tW",
            ApplicationDCS2: "Serveur Fivem",
            //////////////////////////////////////////////
            ApplicationTexte3: "VMLife",
            ApplicationLink3: "https://discord.gg/fermer",
            ApplicationDCS3: "Serveur Fivem",
            //////////////////////////////////////////////
            ApplicationTexte4: "ADX",
            ApplicationLink4: "https://discord.gg/TkS6ygF5pr",
            ApplicationDCS4: "Boutique ADX",
            //////////////////////////////////////////////
            ApplicationTexte5: "SocialHome",
            ApplicationLink5: "https://discord.gg/mbPnhpt7Bf",
            ApplicationDCS5: "Jeux Video",
            //////////////////////////////////////////////
            ApplicationTexte6: "MafiaServer",
            ApplicationLink6: "https://discord.gg/mtBY8XVTrz",
            ApplicationDCS6: "Serveur Fivem",
            //////////////////////////////////////////////
        }
     }

    render() {
        return(
            <div>   
                <div className="hover-pos1">
                    <div className="hover-1"></div>
                    <a href={this.state.ApplicationLink}>
                        <div className="position-imperial">
                            <div className="position-postion">
                                <p className="project-user">{this.state.ApplicationTexte}</p>
                                <img className="project-verife" src={Autor}></img>
                                <p className="project-user-dsc">{this.state.ApplicationDCS} ({Ademo.ChangeColor(Ademo.Styled.Open, "Ouvert")})</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="hover-pos2">
                    <div className="hover-2"></div>
                    <a href={this.state.ApplicationLink2}>
                        <div className="position-imperial2">
                            <div className="position-postion">
                                <p className="project-user">{this.state.ApplicationTexte2}</p>
                                <img className="project-verife" src={Autor}></img>
                                <p className="project-user-dsc">{this.state.ApplicationDCS2} ({Ademo.ChangeColor(Ademo.Styled.Open, "Ouvert")})</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="hover-pos3">
                    <div className="hover-3"></div>
                    <a href={this.state.ApplicationLink3}>
                        <div className="position-imperial3">
                            <div className="position-postion">
                                <p className="project-user">{this.state.ApplicationTexte3}</p>
                                <img className="project-verife" src={Autor2}></img>
                                <p className="project-user-dsc" >{this.state.ApplicationDCS3} ({Ademo.ChangeColor(Ademo.Styled.Fermer, "Fermer")})</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="hover-pos4">
                    <div className="hover-4"></div>
                    <a href={this.state.ApplicationLink4}>
                        <div className="position-imperial4">
                            <div className="position-postion">
                                <p className="project-user">{this.state.ApplicationTexte4}</p>
                                <img className="project-verife" src={Autor3}></img>
                                <p className="project-user-dsc">{this.state.ApplicationDCS4}</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="hover-pos5">
                    <div className="hover-5"></div>
                    <a href={this.state.ApplicationLink5}>
                        <div className="position-imperial5">
                            <div className="position-postion">
                                <p className="project-user">{this.state.ApplicationTexte5}</p>
                                <img className="project-verife" src={Autor4}></img>
                                <p className="project-user-dsc">{this.state.ApplicationDCS5} ({Ademo.ChangeColor(Ademo.Styled.Attente, "Pause")})</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="hover-pos6">
                    <div className="hover-6"></div>
                    <a href={this.state.ApplicationLink6}>
                        <div className="position-imperial6">
                            <div className="position-postion">
                                <p className="project-user">{this.state.ApplicationTexte6}</p>
                                <img className="project-verife" src={Autor5}></img>
                                <p className="project-user-dsc">{this.state.ApplicationDCS6} ({Ademo.ChangeColor(Ademo.Styled.Dev, "DEV")}..)</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}