import React, { Component } from 'react'

export default class MenuTentangKami extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tentang: "Warung Nusantara Adalah Restoran yang Bernuansa Nusantara, Kami Ada Untuk Membuat Anda Menikamati Nusantara"
        }
    }

    render() {
        return (
            <div>
                <center>
                    <p>Tentang Kami</p>
                    {this.state.tentang}
                </center>
            </div>
        )
    }
}
