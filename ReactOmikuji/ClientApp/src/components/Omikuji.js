import React, { Component } from 'react';

export class Omikuji extends Component {

    render() {
        return (
            <div>
                <label>あなたのお名前：</label>
                <input type="text" />
                <input type="submit" value="おみくじを引く" />
            </div>
            );
    }
}