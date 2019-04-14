import React, { Component } from 'react';
import OptionSelect from './OptionSelect';
class Formulario extends Component {
    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <label>Moneda:</label>
                    <select className="form-control">
                        <option value="" disabled defaultValue>Elige tu moneda</option>
                        <option value="ARS">Peso Argentino</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Criptomoneda</label>
                    <select className="form-control">
                        {Object.keys(this.props.monedas).map(key => (
                            <OptionSelect 
                                moneda={this.props.monedas[key]}
                            />
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="cotizar" /> 
                </div>
            </form>
         )
    }
}
 
export default Formulario;