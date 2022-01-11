import { useState } from "react";
import App from "./App";
import UyelikContext from "./UyelikContext";


function AppWithContext() {
    const [uyeAdi, setUyeAdi] = useState("$@nZ1m@n06")

    return (
        <UyelikContext.Provider value={{ uyeAdi, setUyeAdi }}>
            <App />
        </UyelikContext.Provider>
    );
}

export default AppWithContext;
