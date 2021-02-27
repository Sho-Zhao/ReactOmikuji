import React, { Component } from 'react';
import './NavMenu.css';

let fortune = ["Daikichi", "Chukichi", "Kichi", "Shokichi", "Suekichi", "Kyo", "Daikyo"];      //運勢リスト

export class Home extends Component {
    static index = 0;   //運勢インデックス
    constructor(props) {
        super(props);       //propsを継承
        this.state = {      // this.state
            message: "Please draw Omikuji !!",   //初期メッセージ
            displayName:"",     //引いた人の名前
    }
        this.drawOmikuji = this.drawOmikuji.bind(this);  //メソッドをクラスにバインド
        this.changeName = this.changeName.bind(this);   //メソッドをクラスにバインド
    }

    drawOmikuji(e) {    //おみくじを引くメソッド
        this.index = Math.floor(Math.random() * fortune.length);   //ランダムで運勢インデックスを作成
        this.setState(state => ({       //stateの変更
            message: this.state.displayName + "'s fortune is " + fortune[this.index]//メッセージを変更
        }));
}

    changeName(e) { //名前入力したら名前を取得
        this.setState({ displayName: e.target.value }); //名前入力されたらstateのdisplayNameに名前を入れる
    }

  render () {
    return (
      <div>
            <h1>Hello, Omikuji!</h1>
                <div className="omikujiPadding row">
                    <input type="text" className="form-control col-6" placeholder="Your name" onChange={this.changeName} />
                    <input type="submit" className="btn btn-primary col-3" value="Draw Omikuji" onClick={this.drawOmikuji} />
                </div>
            <h2 className="messageStyle">{this.state.message}</h2>
        </div>
    );
  }
}
