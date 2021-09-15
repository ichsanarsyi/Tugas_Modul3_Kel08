import React, {Fragment} from "react";
import './Misc.css';

class Misc extends React.Component {    
    componentWillUnmount() {
        alert('Lanjut ke antrean berikutnya')
    };

    constructor(props) {
        super(props)
        this.handleChangeStuff = this.handleChangeStuff.bind(this)
        this.state = {
            stuff: [
                ['Java Coffee', 20],
                ['Fresh Milk', 15],
                ['Fench Fries', 20],
                ['Cheese Toast', 10],
                ['Beff Quiche', 50],
            ],
            menu: {
                menu1: 0,
                menu2: 0,
                menu3: 0
            },
            totalTagihan: 0,
        }
    }

    handleCalculation = () => {
        const {
            menu1,
            menu2,
            menu3
        } = this.state.menu
        var total = menu1 + menu2 + menu3
        this.setState ({
            ...this.state.menu,
            totalTagihan: total
        })
    }

    handleChangeStuff(e) {
        e.preventDefault()
        const { menu } = this.state
        const { name } = e.target
        var index = e.nativeEvent.target.selectedIndex;
        const { value } = e.nativeEvent.target[index];
        this.setState({
            menu : {
                ...menu,
                [name]: Number(value)
            }
        }, this.handleCalculation);
    }

    render() {
        const {
            stuff,
            totalTagihan
        } = this.state
        return (
            <>
            <div>
                <div style={{ height: '75%' }}>
                    <div className='cashier-calculator'>
                        <div className='sarapan'>
                            <h2>Daftar Pesanan</h2><br/>
                            <select onChange={this.handleChangeStuff} name='menu1'>
                            <option value='0'>Barang 1</option>
                            <Fragment>
                            {
                                stuff.map(makanan => {
                                    return (
                                        <option value={makanan[1]}>{makanan[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select><br/>
                            <select onChange={this.handleChangeStuff} name='menu2'>
                            <option value='0'>Barang 2</option>
                            <Fragment>
                            {
                                stuff.map(makanan => {
                                    return (
                                        <option value={makanan[1]}>{makanan[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select><br/>
                            <select onChange={this.handleChangeStuff} name='menu3'>
                            <option value='0'>Barang 3</option>
                            <Fragment>
                            {
                                stuff.map(makanan => {
                                    return (
                                        <option value={makanan[1]}>{makanan[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select>
                            <h5>Total Belanjaan: Rp {totalTagihan} K</h5>
                        </div>
                        <h2 style={{ color: '#6e0234', textAlign: 'center', flex: '1 0 100%', margin: '10px 0' }}>
                            Silakan Bayar: Rp {totalTagihan} K
                        </h2>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Misc;