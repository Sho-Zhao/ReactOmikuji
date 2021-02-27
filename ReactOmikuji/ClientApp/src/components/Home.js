import React, { Component } from 'react';
import './NavMenu.css';

let fortune = ["Daikichi", "Chukichi", "Kichi", "Shokichi", "Suekichi", "Kyo", "Daikyo"];      //�^�����X�g

export class Home extends Component {
    static index = 0;   //�^���C���f�b�N�X
    constructor(props) {
        super(props);       //props���p��
        this.state = {      // this.state
            message: "Please draw Omikuji !!",   //�������b�Z�[�W
            displayName:"",     //�������l�̖��O
    }
        this.drawOmikuji = this.drawOmikuji.bind(this);  //���\�b�h���N���X�Ƀo�C���h
        this.changeName = this.changeName.bind(this);   //���\�b�h���N���X�Ƀo�C���h
    }

    drawOmikuji(e) {    //���݂������������\�b�h
        this.index = Math.floor(Math.random() * fortune.length);   //�����_���ŉ^���C���f�b�N�X���쐬
        this.setState(state => ({       //state�̕ύX
            message: this.state.displayName + "'s fortune is " + fortune[this.index]//���b�Z�[�W��ύX
        }));
}

    changeName(e) { //���O���͂����疼�O���擾
        this.setState({ displayName: e.target.value }); //���O���͂��ꂽ��state��displayName�ɖ��O������
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
