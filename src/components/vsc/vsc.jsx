import React, { Component } from "react"
import './vsc.css'
import swift from '../../utils//image/swift.png'
import Cpp from '../../utils//image/cpp2.png'
import { render } from "react-dom"

export default class vsc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "VIsual Studio Code",
            autor: "Editing mobile.swift",
            autor2: "Editing manager.c++",
            album: "Workspace: App-Mobile",
            album2: "Workspace: IA",
            icon: swift,
            icon2: Cpp,
            link: "https://open.vsc.com/track/1hgBf6VgEBLWrG9wLsacjb?si=6eb18067f33b43fe"
        }
     }
    render() {
        return(
            <div>
                <div className="vsc-position">
                        <p className="vsc-play">ENTRAIN DEV</p>
                        <div className="vsc-pnl">
                        <p className="vsc-title">{this.state.title}</p>
                        <div className="vsc-all">
                             <p className="vsc-dsc">{this.state.autor}</p>
                             <p className="vsc-dsc-title">{this.state.album}</p>
                             <p className="vsc-time">08 h 52min 10s écoulées</p>
                              <a href="https://github.com/AdemoDEV/Portfolio">
                                  <div className="reposite"></div>
                                  <p className="reposite-text">View Repository</p>
                              </a>
                        </div>
                        <a href={this.state.link}>
                            <img className="vsc-pnl-logo" src={this.state.icon}></img>
                        </a>
                      </div>
                </div>

                <div className="vsc-position2">
                        <p className="vsc-play">ENTRAIN DEV</p>
                        <div className="vsc-pnl">
                        <p className="vsc-title">{this.state.title}</p>
                        <div className="vsc-all">
                             <p className="vsc-dsc">{this.state.autor2}</p>
                             <p className="vsc-dsc-title">{this.state.album2}</p>
                             <p className="vsc-time">08 h 52min 10s écoulées</p>
                              <a href="https://github.com/AdemoDEV/Portfolio">
                                  <div className="reposite"></div>
                                  <p className="reposite-text">View Repository</p>
                              </a>
                        </div>
                        <a href={this.state.link}>
                            <img className="vsc-pnl-logo" src={this.state.icon2}></img>
                        </a>
                      </div>
                </div>



            </div>
        )
    }
}