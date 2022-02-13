import React, { Component } from "react"
import './project.scss'
import Autor from '../../utils//image/auto.png'
import Autor2 from '../../utils//image/auto2.png'
import Autor3 from '../../utils//image/store.png'
import Autor4 from '../../utils//image/home.png'
import Autor5 from '../../utils//image/mafiad.png'
import Ademo from "../../function/function"
import Redirected from '../../utils//image/connect.png'

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.project = [
            {name: "Imperial City", link: "https://discord.gg/bsrTp68jBU", dsc: "Serveur Fivem", etat: "Ouvert", etat_function: Ademo.Styled.Open, logo: Autor},
            {name: "ClassX Legends", link: "https://discord.gg/HkpCMbB4tW", dsc: "Serveur Fivem", etat: "Ouvert", etat_function: Ademo.Styled.Open, logo: Autor},
            {name: "VMLife", link: "https://discord.gg/TkS6ygF5pr", dsc: "Serveur Fivem", etat: "Fermer", etat_function: Ademo.Styled.Fermer, logo: Autor2},
            {name: "ADX", link: "https://discord.gg/TkS6ygF5pr", dsc: "Boutique", etat: "Ouvert", etat_function: Ademo.Styled.Open, logo: Autor3},
            {name: "SocialHome", link: "https://discord.gg/mbPnhpt7Bf", dsc: "Jeux Vidéo", etat: "Pause", etat_function: Ademo.Styled.Attente, logo: Autor4},
            {name: "MafiaServer", link: "https://discord.gg/mtBY8XVTrz", dsc: "Serveur Fivem", etat: "DEV", etat_function: Ademo.Styled.Dev, logo: Autor5},
        ]
        
     }

    ProjectStyle() {
        return this.project.map((v,k) => {
            if (k <= 5) {
                return <div className="parcoure-principal">     
                <section className="parcoure-positions">

                        <div className="parcoure-interface">
                            <img src={v.logo} className="parcoure-img"></img>
                            <p className="parcoure-text">{v.name}</p>
                            <p className="parcoure-dsc">{v.dsc}</p>
                            <a href={v.link}>
                                <img className="parcoure-redirected" src={Redirected}></img>
                            </a>
                            {/* <h1 className="parcoure-etat">Etat:</h1>
                            <p className="parcoure-etat-style">{Ademo.ChangeColor(v.etat_function, v.etat)}</p> */}
                         </div>
                </section>
            </div>
            }
        })
    }

    render() {
        return(
            <div className="parcoure">   
                 {this.ProjectStyle()}
            </div>
        )
    }
}