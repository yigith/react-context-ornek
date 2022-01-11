import UyelikContext from './UyelikContext'
import { useState, useContext } from "react";

function Uyelik() {
    const ctx = useContext(UyelikContext);
    const [ad, setAd] = useState(ctx.uyeAdi);

    const teslimEdildi = function(e) {
        e.preventDefault();
        ctx.setUyeAdi(ad);  
    };

    return (
        <div>
            <h2>Üyelik</h2>
            <form onSubmit={teslimEdildi}>
                <label>Üye Adı:</label>&nbsp;
                <input type="text" value={ad} onChange={(e) => setAd(e.target.value)} required />&nbsp;
                <button>Kaydet</button>
            </form>
        </div>
    );
}

export default Uyelik;
