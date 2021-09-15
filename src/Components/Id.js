import React, {Component} from "react";

class Id extends Component {
    componentWillMount() {
        alert('Yuk, bisa yuk')
    }

    state = {
        idPembelian: '',
        noKasir: ''
    }

    handleIdPembelian = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }

    handleNoKasir = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }

    render() {
        return (
            <>
                <label for="idPembelian">Id Pembelian:</label><br/>
                <input onChange={this.handleIdPembelian} name='idPembelian' value={this.state.idPembelian} style={{ color:'#6e0234'}} />
                <br/>
                <label for="noKasir">No Kasir:</label><br/>
                <input type="number" onChange={this.handleNoKasir} name='noKasir' value={this.state.noKasir} style={{ color:'#6e0234'}} />
                <br/><br/>
                <label for="Kode Transaksi:">Kode Transaksi:</label><br/>             
                <span style={{ color:'#6e0234'}}>{this.state.idPembelian}{this.state.noKasir}</span>
            </>
        )
    }
}

export default Id;