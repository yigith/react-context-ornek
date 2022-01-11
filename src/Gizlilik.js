import React, { Component } from 'react';
import UyelikContext from './UyelikContext';

class Gizlilik extends Component {

    static contextType = UyelikContext;
    render() {
        return (
            <div>
                <h2>Gizlilik</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat suscipit, hic eos, quod voluptas minima soluta consequatur officiis provident maiores dolorem quibusdam nemo quaerat perferendis facere quidem, qui dicta! - {this.context.uyeAdi}</p>
            </div>
        )
    }
}

export default Gizlilik;