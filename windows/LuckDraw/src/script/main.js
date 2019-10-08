import React,{Component} from 'react';
//import ReactDom from 'react-dom';
var ReactDom = require('react-dom');
import Styles from '!style-loader!css-loader!../style/main.css';
import NewApp from './app';
class App extends Component
{
    render(){
        return (
            <div className = "mainRoot"> 
                说这些话是不是有点欠揍！
                <NewApp />
            </div>
        );
    }
}

ReactDom.render(<App />,document.getElementById("root"));