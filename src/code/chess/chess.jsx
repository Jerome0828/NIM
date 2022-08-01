import React, { Component } from 'react';
import Button from './btn.jsx';
import 'animate.css';
import './chess.css';


class Chess extends Component {
    state = {
        btn: [
            { id: '1', isChecked: true, value: 0}, { id: '2', isChecked: true, value: 1}, { id: '3', isChecked: true, value: 2},
            { id: '4', isChecked: true, value: 3}, { id: '5', isChecked: true, value: 4}, { id: '6', isChecked: true, value: 5},
            { id: '7', isChecked: true, value: 6}, { id: '8', isChecked: true, value: 7}, { id: '9', isChecked: true, value: 8},
            { id: '10',isChecked: true, value: 9}, { id: '11',isChecked: true, value: 10},{ id: '12',isChecked: true, value: 11},
            { id: '13',isChecked: true, value: 12},{ id: '14',isChecked: true, value: 13},{ id: '15',isChecked: true, value: 14}],
        dateA: ['0','1','2','3','4','5','0','6','7','8','9','0','10','11','12','0','13','14','0','15','0'],
        dateB: ['0','1','6','10','13','15','0','2','7','11','14','0','3','8','12','0','4','9','0','5','0'],
        dateC: ['0','5','9','12','14','15','0','4','8','11','13','0','3','7','10','0','2','6','0','1','0'],
        style: ['translate(-110%, 0)', 'rgba(177, 180, 121, 1)', false]
    }
// doNumberPass 是否checked
    doNumberPass = (value, x) => {
        let newBtn1 = this.state.btn[value]
        newBtn1.isChecked = x
        this.setState({newBtn1})
        //回傳Button是否按下
    }
// doBtnDisabled 按鈕控制(數量)
    doBtnDis = () => {  
        let aid = [];
        for (var x= 0; x<15; x++) { var a = this.state.btn[x] ; if ( a.isChecked === true) {aid.push(a)} }
        if (aid.length < 13) {
            for (var y= 0; y < aid.length; y++) {
                var x = {...this.state.btn[aid[y].value], disabled:"disabled", border: ""};
                this.state.btn.splice(aid[y].value, 1, x);
            }
        }
        // 控制(disabled)可選按鈕小於等於3
        else {
            for (var z= 0; z < aid.length; z++) {
                var x = {...this.state.btn[aid[z].value], border: ""};
                delete x.disabled;
                this.state.btn.splice(aid[z].value, 1, x);
            }
        }
        // 恢復按鈕可選
    }
// doBtnL 按鈕控制(直線)
    doBtnL =(x) => {
        let da = [...this.state.dateA]; let db = [...this.state.dateB]; let dc = [...this.state.dateC];
        let ans = [];
        let al = [
            da[da.indexOf(x.id)-1], da[da.indexOf(x.id)+1],
            db[db.indexOf(x.id)-1], db[db.indexOf(x.id)+1],
            dc[dc.indexOf(x.id)-1], dc[dc.indexOf(x.id)+1]]
        al.map( (a) => { if ( a != undefined && a !=0) {ans.push(a)} })
        // ----------
        let bor2 = "blue solid 5px"
        let bor3 = "green solid 5px"
        // ----------
        
        let g = []
        for (var s= 0; s<15; s++) 
            { var a = this.state.btn[s]; if ( a.isChecked === false ) {g.push(a)}}
        // 當有0個按鈕被選取時
        if ( g.length === 0 ) {
            for (var y= 0; y < ans.length; y++) {
                var z = {...this.state.btn[ans[y]-1], border: ""};
                this.state.btn.splice(ans[y]-1, 1, z);              
            }
        }
        // 當有1個按鈕被選取時
        if ( g.length === 1 ) {
            if ( g[0].id == x.id ) {
                for (var y= 0; y < ans.length; y++) {
                    var z = {...this.state.btn[ans[y]-1], border: bor2};
                    this.state.btn.splice(ans[y]-1, 1, z);
                }
            }
            else {
                let ans2 = []
                let al = [
                    da[da.indexOf(g[0].id)-1], da[da.indexOf(g[0].id)+1],
                    db[db.indexOf(g[0].id)-1], db[db.indexOf(g[0].id)+1],
                    dc[dc.indexOf(g[0].id)-1], dc[dc.indexOf(g[0].id)+1]]
                al.map( (a) => { if ( a != undefined && a !=0) {ans2.push(a)} })
                for (var y= 0; y < ans2.length; y++) {
                    var z = {...this.state.btn[ans2[y]-1], border: bor2}
                    this.state.btn.splice(ans2[y]-1 , 1, z);
                }
            }
            this.state.style[2] = false;
            this.setState({})
        }
        // 當有2個按鈕被選取時
        if ( g.length === 2 ) {
            for (var y= 0; y < 15; y++) {
                var k = {...this.state.btn[y], border: ""};
                this.state.btn.splice([y], 1, k);
            }
            // A------
            let befA = da[da.indexOf(g[0].id)-1] ; let aftA = da[da.indexOf(g[1].id)+1] 
            if( da[da.indexOf(g[0].id)+1] === g[1].id ) {
                if ( befA != 0 ) {
                    var z = {...this.state.btn[befA-1], border: bor3}; 
                    this.state.btn.splice(befA-1, 1, z);
                }
                if ( aftA != 0 ) {
                    var z = {...this.state.btn[aftA-1], border: bor3};
                    this.state.btn.splice(aftA-1, 1, z);
                }
            }
            if( da[da.indexOf(g[0].id)+2] === g[1].id ) {
                if ( da[da.indexOf(g[0].id)+2] != 15 && da[da.indexOf(g[0].id)+2] != 13 ) {
                    var z = {...this.state.btn[da[da.indexOf(g[0].id)+1]-1], border: bor2}; 
                    this.state.btn.splice(da[da.indexOf(g[0].id)+1]-1, 1, z);
                }
            }
            // B------
            let befB = db[db.indexOf(g[0].id)-1] ; let aftB = db[db.indexOf(g[1].id)+1];
            if( db[db.indexOf(g[0].id)+1] === g[1].id ) {
                if ( befB != 0 ) {
                    var z = {...this.state.btn[befB-1], border: bor3};
                    this.state.btn.splice(befB-1, 1, z);
                }
                if ( aftB != 0 ) {
                    var z = {...this.state.btn[aftB-1], border: bor3};
                    this.state.btn.splice(aftB-1, 1, z);
                }
            }
            if( db[db.indexOf(g[0].id)+2] === g[1].id ) {
                var z = {...this.state.btn[db[db.indexOf(g[0].id)+1]-1], border: bor2}; 
                this.state.btn.splice(db[db.indexOf(g[0].id)+1]-1, 1, z);
            }
            // C------
            let befC = dc[dc.indexOf(g[0].id)-1] ; let aftC = dc[dc.indexOf(g[1].id)+1];
            if( dc[dc.indexOf(g[0].id)+1] === g[1].id ) {
                if ( befC != 0 ) {
                    var z = {...this.state.btn[befC-1], border:bor3};
                    this.state.btn.splice(befC-1, 1, z); 
                }
                if ( aftC != 0 ) {
                    var z = {...this.state.btn[aftC-1], border: bor3};
                    this.state.btn.splice(aftC-1, 1, z); 
                }
            }
            if( dc[dc.indexOf(g[0].id)+2] === g[1].id ) {
                var z = {...this.state.btn[dc[dc.indexOf(g[0].id)+1]-1], border: bor2}; 
                this.state.btn.splice(dc[dc.indexOf(g[0].id)+1]-1, 1, z);
            }

            if( da[da.indexOf(g[0].id)+1] != g[1].id && da[da.indexOf(g[0].id)+2] != g[1].id && db[db.indexOf(g[0].id)+1] != g[1].id && db[db.indexOf(g[0].id)+2] != g[1].id && dc[dc.indexOf(g[0].id)+1] != g[1].id && dc[dc.indexOf(g[0].id)+2] != g[1].id) {
                var z = {...this.state.btn[x.value], border: "red solid 5px"};
                this.state.btn.splice(x.value, 1, z);
                this.state.style[2] = true;
                this.setState({});
                alert("棋子必須是相連成一直線");
            }
            else {
                this.state.style[2] = false;
                this.setState({})
            }
        }
        // 當有3個按鈕被選取時
        if ( g.length === 3 ) {
            if( g[0].id === da[da.indexOf(g[1].id)-1] && g[1].id === da[da.indexOf(g[1].id)] && g[2].id === da[da.indexOf(g[1].id)+1]||
                g[0].id === db[db.indexOf(g[1].id)-1] && g[1].id === db[db.indexOf(g[1].id)] && g[2].id === db[db.indexOf(g[1].id)+1]||
                g[0].id === dc[dc.indexOf(g[1].id)-1] && g[1].id === dc[dc.indexOf(g[1].id)] && g[2].id === dc[dc.indexOf(g[1].id)+1]){
                for ( var z=0; z < 3; z++) {
                    var s = {...this.state.btn[g[z].value], border: ""}
                    this.state.btn.splice(g[z].value, 1, s);
                }
            }
            else { 
                var z = {...this.state.btn[x.value], border: "red solid 5px"};
                this.state.btn.splice(x.value, 1, z);
                this.state.style[2] = true;
                this.setState({});
                alert("棋子必須是相連成一直線");
            }
        }
    }
// btnDelete 按鈕控制(隱藏按鈕)
    btnDelete = () => {
        let g = []
        for (var s= 0; s<15; s++) { var a = this.state.btn[s]; if ( a.isChecked === false ) {g.push(a)}}
        // 使用者未選取按鈕
        if ( g.length === 0) {
            alert("拿取棋盤上的棋子 (1~3顆)")
        }
        // 使用者選取按鈕 (1~3)
        else {
            var newBtn = this.state.btn
            newBtn.map( (a) => {
                if ( a.isChecked === false) {
                    var x = {...this.state.btn[a.value], isChecked: true, visibility: "hidden", border: "", disabled: ""}
                    newBtn.splice(a.value, 1, x);
                    this.setState(newBtn);
                }
            })
            for (var x= 0; x<15; x++) { 
                if ( newBtn[x].visibility != 'hidden')  {
                    let z = {...this.state.btn[newBtn[x].value], isChecked: true, disabled: false, border: ""}
                    newBtn.splice(x, 1, z);
                    this.setState(newBtn);
                }       
            }
            if ( this.state.style[0] === 'translate(40%, 0)' ) {
                this.state.style[0] ='translate(-110%, 0)'
                this.state.style[1] = 'rgba(177, 180, 121, 1)'
                this.setState({})
            }
            else { 
                this.state.style[0] = 'translate(40%, 0)';
                this.state.style[1] = 'rgba(180, 121, 177, 1)'
                this.setState({}) 
            }  
        }
        // OK鍵滑動
        let f = []
        for (var s= 0; s<15; s++) { var a = this.state.btn[s]; if ( a.visibility != 'hidden' ) {f.push(a)}}
        if ( f.length === 1) {
            if ( this.state.style[0] === "translate(40%, 0)") 
                {alert(`${localStorage.getItem('player1')} WIN !!`); window.location.reload()}
            else {window.alert(`${localStorage.getItem('player2')} WIN !!`); window.location.reload()}
        }
    }


// render
    render() { 
        return (
            <React.Fragment>
                <div id="box1">
                    <h3 id="h31" style={{fontSize: '5rem'}} 
                        className="animate__animated animate__fadeInDown">{localStorage.getItem('player1')}</h3>
                    <h3 id="h32" style={{fontSize: '5rem'}} 
                        className="animate__animated animate__fadeInDown">{localStorage.getItem('player2')}</h3>
                </div>

                <div>
                    <div id="btnA">
                        {this.state.btn.slice(0,5).map((a, index) => (<Button 
                        id ={a.id} key={a.id} checked={a.isChecked} value={a.value} idx={index}
                        numberPass={this.doNumberPass} btnDis={this.doBtnDis} btnL={this.doBtnL}
                        visibility={a.visibility} disabled={a.disabled} border={a.border}/>))}</div>
                    
                    <div id="btnB">
                        {this.state.btn.slice(5,9).map( (b, index) => (<Button 
                        id ={b.id} key={b.id} checked={b.isChecked} value={b.value} idx={index}
                        numberPass={this.doNumberPass} btnDis={this.doBtnDis} btnL={this.doBtnL}
                        visibility={b.visibility} disabled={b.disabled} border={b.border}/>))}</div>
                    
                    <div id="btnC">
                        {this.state.btn.slice(9,12).map( (c, index) => (<Button 
                        id ={c.id} key={c.id} checked={c.isChecked} value={c.value} idx={index}
                        numberPass={this.doNumberPass} btnDis={this.doBtnDis} btnL={this.doBtnL}
                        visibility={c.visibility} disabled={c.disabled} border={c.border}/>))}</div>
                    
                    <div id="btnD">
                        {this.state.btn.slice(12,14).map( (d, index) => (<Button 
                        id ={d.id} key={d.id} checked={d.isChecked} value={d.value} idx={index}
                        numberPass={this.doNumberPass} btnDis={this.doBtnDis} btnL={this.doBtnL}
                        visibility={d.visibility} disabled={d.disabled} border={d.border}/>))}</div>

                    <div id="btnE">
                        {this.state.btn.slice(14).map( (e, index) => (<Button 
                        id ={e.id} key={e.id} checked={e.isChecked} value={e.value} idx={index}
                        numberPass={this.doNumberPass} btnDis={this.doBtnDis} btnL={this.doBtnL}
                        visibility={e.visibility} disabled={e.disabled} border={e.border}/>))}</div>
                </div>

                <div className="button animate__animated animate__bounceInUp">
                    <input type="checkbox" id="b" onClick={ () => { this.btnDelete() }} disabled={this.state.style[2]}/>
                    <label id="label" style={{transform: this.state.style[0], backgroundColor:this.state.style[1] }} 
                        htmlFor="b" >Ok</label>
                </div>
            </React.Fragment>
        );
    }
}
export default Chess;   