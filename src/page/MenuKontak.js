import React, { Component } from 'react'

export default class MenuKontak extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alamat: "Jln Swadaya IV Pd Rangon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13800",
            kontak: "081312345678"
        }
    }

    render() {
        return (
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak Kami: {this.state.kontak}</h4>
                </center>
            </div>
        )
    }
}
