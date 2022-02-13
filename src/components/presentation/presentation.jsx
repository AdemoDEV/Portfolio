import React from "react";
import Autor from '../../utils//image/autor.png'
import Redirected from '../../utils//image/connect.png'
import './presentation.scss'

function Presentation(props) {
    return(
        <div>
            <div>
                   <div className="position-all-presentation"></div>
                    <div className="banner_profil-pres"></div>
                    <p className="title-pres">Biographie</p>
                    <p className="para-pres">
                          Yo C'est Ademo, Bienvenue sur mon portfolio. C'est un portfolio réalisé en <br/>
                          ReactJs, un framework javascript libre crée par l'équipe facebook <br/>
                          Sinon j'ai 17 ans je suis un jeune développeur qui est passionné par <br/>
                          l'ingénierie logicielle et autre . Je travaile avec deux partenaires Doublox<br/>
                          et dlav les seuls partenaires de confiance .
                    </p>
                    <div className="reseau-pos2">
                        <div>
                            <div className="github-fond"></div>
                            <img className="github-icon" src={props.ApplicationIcon}></img>
                            <p className="github-user">{props.ApplicationTexte}</p>
                            <img className="github-icon-verife3" src={Autor}></img>
                            <a href={props.ApplicationLink}>
                                <img className="github-icon-redirect" src={Redirected}></img>
                            </a>
                        </div>

                        <div className="positions-presen-spotify">
                            <div className="github-fond"></div>
                            <img className="github-icon" src={props.Application2Icon}></img>
                            <p className="github-user">{props.Application2Texte}</p>
                            <img className="github-icon-verife2" src={Autor}></img>
                            <a href={props.Application2Link}>
                                <img className="github-icon-redirect" src={Redirected}></img>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Presentation