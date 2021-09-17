import React, { Component } from "react";

class Id extends Component {
  componentWillMount() {
    alert("Isi data dengan benar");
  }

  state = {
    idPembelian: "",
    noKasir: "",
  };

  handleIdPembelian = (event) => {
    const { name, value } = event.target;
    this.setState((state) => {
      return {
        [name]: value,
      };
    });
  };

  handleNoKasir = (event) => {
    const { name, value } = event.target;
    this.setState((state) => {
      return {
        [name]: value,
      };
    });
  };

  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px" }}>
            <label for="idPembelian">Masukkan ID</label>
            <br />
            <input
              onChange={this.handleIdPembelian}
              name="idPembelian"
              value={this.state.idPembelian}
              style={{ color: "#6e0234", padding: "5px" }}
            />
          </div>
          <br />
          <div style={{ margin: "10px" }}>
            <label for="noKasir">No Kasir</label>
            <br />
            <input
              type="number"
              onChange={this.handleNoKasir}
              name="noKasir"
              value={this.state.noKasir}
              style={{ color: "#6e0234", padding: "5px" }}
            />
          </div>
        </div>
        <br />
        <br />
        <div style={{ marginLeft:"80px" }}>
        <label for="Kode Transaksi:">Kode Transaksi:</label>
        <br />
        <span style={{ color: "#6e0234" }}>
          {this.state.idPembelian}
          {this.state.noKasir}
        </span></div>
      </>
    );
  }
}

export default Id;
