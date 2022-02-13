import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';
import "./language.css"
import lua from '../../utils//image/lua.png'
import cpp from '../../utils//image/cpp.png'
import css from '../../utils//image/css.png'
import git from '../../utils//image/git.png'
import html from '../../utils//image/html.png'
import js from '../../utils//image/js.png'
import mysql from '../../utils//image/mysql.png'
import react from '../../utils//image/react.png'
import vue from '../../utils//image/vue.png'
import code from '../../utils//image/code.png'
import linux from '../../utils//image/linux.png'
import nodejs from '../../utils//image/nodejs.png'
import sass from '../../utils//image/sass.png'


export default class Language extends React.Component {
    constructor(props) {
        super(props);
        this.Language = [
            {Logo: lua},
            {Logo: cpp},
            {Logo: css},
            {Logo: git},
            {Logo: html},
            {Logo: js},
            {Logo: mysql},
            {Logo: react},
            {Logo: vue},
            {Logo: sass},
            {Logo: code},
            {Logo: linux},
            {Logo: nodejs},
        ]

     }
    
     LanguageImage() {
         return this.Language.map((v,k) => {
             if (k <= 15 ) {
                return <div className="content">
                    <article>   
                        <div className="language-home">
                            <img className="language-firt" src={v.Logo}></img>
                        </div>
                    </article>
              </div>
             }
        })
     }


    render() {
      return <div>
            <h3 className="language-text">Parcours</h3>
            <h3 className="language-text3">Personalisation</h3>
            {this.LanguageImage()}
      </div>
    }
  }