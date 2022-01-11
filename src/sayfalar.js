import UyelikContext from './UyelikContext';
import { useContext } from 'react';

export default function Anasayfa() {
    return (
        <div>
            <h2>Anasayfa</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat suscipit, hic eos, quod voluptas minima soluta consequatur officiis provident maiores dolorem quibusdam nemo quaerat perferendis facere quidem, qui dicta!</p>
        </div>
    );
}

export function Hakkinda() {
    const ctx = useContext(UyelikContext);
    return (
        <div>
            <h2>Hakkında</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat suscipit, hic eos, quod voluptas minima soluta consequatur officiis provident maiores dolorem quibusdam nemo quaerat perferendis facere quidem, qui dicta! -{ctx.uyeAdi}</p>
        </div>
    );
}

export function Iletisim() {
    return (
        <div>
            <h2>İletişim</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat suscipit, hic eos, quod voluptas minima soluta consequatur officiis provident maiores dolorem quibusdam nemo quaerat perferendis facere quidem, qui dicta!</p>
        </div>
    );
}

export function Hizmetler() {
    return (
        <div>
            <h2>Hizmetler</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat suscipit, hic eos, quod voluptas minima soluta consequatur officiis provident maiores dolorem quibusdam nemo quaerat perferendis facere quidem, qui dicta!</p>
        </div>
    );
}