import React, { Component } from 'react';
import { BrowserRouter as useLocation, Link  } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './start.css'


class Start extends Component {
    state = {
        val1: ["Player1"], val2: ["Player2"]
    } 

    input1 = (e) => {
        localStorage.setItem('player1', `${e.target.value}`)
        this.setState({val1: `${e.target.value}`})
    }
    input2 = (e) => {
        localStorage.setItem('player2', `${e.target.value}`)
        this.setState({val2: `${e.target.value}`})
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            localStorage.setItem('player1', "Player1");
            localStorage.setItem('player2', "Player2");
        });
    }
    

    render() {        
        return (
            <div id="box" className='container bg-info animate__animated animate__bounceInDown'>
                <h1 className="text-center p-3 mb-3">葡萄棋</h1>
                <div className='container row '>
                    <div className="form-floating col m-2 mb-3">
                        <input type="text" className="form-control" onChange={this.input1} value={this.state.val1}/>
                        <label htmlFor="floatingInput" >Player 1</label>
                    </div>
                    <div className="form-floating col m-2 mb-3">
                        <input type="text" className="form-control" onChange={this.input2} value={this.state.val2}/>
                        <label htmlFor="floatingPassword" >Player 2</label>
                    </div>
                </div>
                <div id="text" >
                    <h1 className='text-center'>遊戲規則</h1>
                    <h4 className='text-center'>
                        輪流拿取棋盤上的棋子(如吃葡萄一般)，每次可拿取1~3顆，且這些棋子必須是相連成一直線 -- (直線、橫線或斜線)</h4>
                    <h4 className='text-center'>
                        直到一方拿取最後一顆棋子(吃到最後一顆葡萄)，就是輸家。</h4>
                </div>
                <div id="button"><Link to="/chess"><button id="b1">Start</button></Link></div>
            </div>
        );
    }
}
 
export default Start;