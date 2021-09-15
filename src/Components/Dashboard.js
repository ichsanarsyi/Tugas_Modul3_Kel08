import { Component } from "react";
import React from "react";
import Id from "./Id";
import Misc from "./Misc";
import Logo from "./logoKel8-trans.svg";

class Dashboard extends Component {
    componentDidMount() {
        alert('Selamat data di program kasir! Harap input data dengan teliti.')
    }

    state = {
        id: false,
        misc: false
    };

    showComponentId = () => {
        this.setState(() => {
            return {
                id: !this.state.id
            }
        })
    };

    showComponentMisc = () => {
        this.setState(() => {
            return {
                misc: !this.state.misc
            }
        })
    };

    render() {
        return (
            <div style={{ textAlign:'center', display:'flex' }}>                
                <div style={{ width: '20%', margin:'5%' }}>
                    <img src={Logo} alt="Logo Kelompok 8"/>
                    <h1 style={{ color:'#6e0234' }}>Kasir IF8 Store</h1>
                </div>
                <div style={{ width: '20%', margin:'5%' }}>
                    <button style={{ backgroundColor:'#6e0234', color:'#f4f6f9' }} onClick={this.showComponentId}>
                        {this.state.id ? 'Hapus data kasir' : 'Isi data kasir'}
                    </button>
                    <br/><br/>
                    {this.state.id && <Id />}
                </div>
                <div style={{ width: '60%', margin:'5%' }}>                   
                    <button style={{ backgroundColor:'#6e0234', color:'#f4f6f9' }} onClick={this.showComponentMisc}>
                        {this.state.misc ? 'Hapus data belanjaan' : 'Isi data belanjaan'}
                    </button>
                    <br/>
                    {this.state.misc && <Misc />}
                </div>
            </div>
        )
    };
};

export default Dashboard;