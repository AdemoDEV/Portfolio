import React, {Component} from "react";
import './home.css';
import User from './navbar/navbar'
import Partner from "../components/partner/partner";
import Github from '.././utils//image/github.svg'
import Autor from '.././utils//image/autor.png'
import Redirected from '.././utils//image/connect.png'
import Spotiy from '.././utils//image/spotify2.png'
import discorde from '.././utils//image/discorde.png'
import Ademo from "../function/function"
import Presentation from "./presentation/presentation";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ApplicationIcon: Github,
      ApplicationTexte: "AdemoDEV",
      ApplicationLink: "https://github.com/AdemoDEV",
      //////////////////////////////////////////////
      Application2Icon: discorde,
      Application2Texte: "A.D.E.M.O",
      Application2Link: "https://discord.gg/TkS6ygF5pr",
    }
  }

  TransformColor(text, styled) {
    return <span style={styled}>{text}</span>
  }

  Biographie() {
    return <p className="paragraphe-salutation">
        Yo , c'est Ademo Bienvenue sur mon Portfolio .<br/> 
        Je vous partage ce que je fait et dans quelle et ancien .<br/>
        projet j'ai déja travaillé.<br/>
        Je suis un jeune développeur agé de 17 ans et je travaille<br/>
        avec deux personnes nommés dlav et Doublox .
    </p>
  }

  Portfolio() {
    return <p className="paragraphe-salutation2">
        C'est un portefolio réalisé en {Ademo.ChangeColor(Ademo.Styled.ReactJs, "ReactJs")} un framework<br/> 
        javascript libre crée par facebook.
    </p>
  }

  // {this.TransformColor("ReactJs", StyleObject.ReactJs)}

  render() {
    return (
      <div>
        <User/>
        <Presentation
           ApplicationIcon = {Github}
           ApplicationTexte = "AdemoDEV"
           ApplicationLink = "https://github.com/AdemoDEV"
           Application2Icon = {discorde}
           Application2Texte = "A.D.E.M.O"
           Application2Link= "https://discord.gg/TkS6ygF5pr"
        />
        {/* <h1 className="title-salutation">Biographie</h1>
        <h1 className="title-salutation2">Portfolio</h1>
        {this.Biographie()}
        {this.Portfolio()}
        {/* <h1 className="text4-salutation">Parcours</h1> */}
        
        {/* <div className="positions-myInfo">
            <div className="postion-fond"></div>
            <img className="github-icon" src={this.state.ApplicationIcon}></img>
            <p className="github-user">{this.state.ApplicationTexte}</p>
            <img className="github-icon-verife-3" src={Autor}></img>
            <a href={this.state.ApplicationLink}>
                <img className="github-icon-redirect" src={Redirected}></img>
            </a>
        </div>

        <div className="positions-myInfo2">
            <div className="postion-fond"></div>
            <img className="github-icon" src={this.state.Application2Icon}></img>
            <p className="github-user">{this.state.Application2Texte}</p>
            <img className="github-icon-verife-4" src={Autor}></img>
            <a href={this.state.Application2Link}>
                <img className="github-icon-redirect" src={Redirected}></img>
            </a>
        </div> */}
        <Partner/>
      </div>
    );
  }
}

