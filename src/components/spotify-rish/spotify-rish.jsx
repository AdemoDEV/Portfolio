import React, { Component } from "react"
import './spotify-rish.css'
import SpotifyIcon from '../../utils//image/spotify.png'
import PnlIcon from '../../utils//image/pnl.PNG'
import { render } from "react-dom"

export default class Spotify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Tempéte",
            autor: "de PNL",
            album: "sur l'album Le Monde Chico",
            icon: PnlIcon,
            link: "https://open.spotify.com/track/1hgBf6VgEBLWrG9wLsacjb?si=6eb18067f33b43fe"
        }
     }
    render() {
        return(
            <div>
                <div className="spotify-text">
                        <p className="spotify-play">ÉCOUTE SPOTIFY</p>
                        <img className="spotify-icon" src={SpotifyIcon}></img>
                        <div className="spotify-pnl">
                        <div >
                             <p className="spotify-title">{this.state.title}</p>
                             <p className="spotify-dsc">{this.state.autor}</p>
                             <p className="spotify-dsc-title">{this.state.album}</p>
                        </div>
                        <div className="spotify-play-pause"></div>
                        <div className="spotify-play-pause-1"></div>
                        <div className="spotify-hourse">1:01</div>
                        <div className="spotify-hourse-1">2:01</div>
                        <a href={this.state.link}>
                            <img className="spotify-pnl-logo" src={this.state.icon}></img>
                        </a>
                      </div>
                </div>
            </div>
        )
    }
}