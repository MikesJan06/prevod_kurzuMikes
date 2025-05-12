
import { useEffect, useState } from 'react'

export const Prevod = () => {
    const [cislo, setCislo] = useState(0);
    const [Kurzy, setKurzy] = useState([]);


    const getKurzy = async () => {

    };


    useEffect(() => {

    }, []);

    return(
        <div>
        <h1>
           Prevod EUR do jine meny
            </h1>
            <div>
           <input type="number"
           value={cislo}
           onChange={(e) => setCislo(e.target.value)} 
           style={{ padding: '5px'}}
           />
            
            <select></select>
            <button>Převeď</button>
            </div>
    </div>
    
    )
}