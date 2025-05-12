import { useState, useEffect } from 'react';

export const Prevod = () => {
    // States for input, exchange rates, result, and selected currency
    const [cislo, setCislo] = useState(0);
    const [kurzy, setKurzy] = useState(undefined);
    const [vysledek, setVysledek] = useState(0);
    const [vybrany, setVybrany] = useState('USD'); // Default to USD (or any preferred currency)

    // Fetch exchange rates from the API
    const getKurzy = async () => {
        try {
            const response = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR");
            const data = await response.json();
            setKurzy(data.rates); // Store exchange rates in state
        } catch (error) {
            console.error('Error fetching exchange rates:', error); // Log any errors
        }
    };

    // Fetch the exchange rates on component mount
    useEffect(() => {
        getKurzy();
    }, []);

    // Calculate the conversion result
    const vypocitej = () => {
        // Ensure the selected currency and cislo are valid before calculating
        if (kurzy && cislo > 0 && vybrany && kurzy[vybrany]) {
            setVysledek(kurzy[vybrany] * cislo);
        } else {
            setVysledek(0); // Set result to 0 if there's an issue
        }
    };

    return (
        <div>
            <h1>Převod EUR do jiné měny</h1>
            <div>
                {/* Input for the amount in EUR */}
                <input
                    type="number"
                    value={cislo}
                    onChange={(e) => setCislo(parseFloat(e.target.value) || 0)} // Ensure valid number input, fallback to 0 if invalid
                    style={{ padding: '5px', marginBottom: '10px' }}
                    placeholder="Zadejte částku v EUR"
                />
                <br />
                {/* Dropdown for selecting the target currency */}
                <select onChange={(e) => setVybrany(e.target.value)} value={vybrany} style={{ padding: '5px', marginBottom: '10px' }}>
                    {kurzy && 
                        Object.entries(kurzy).map(([key, value]) => (
                            <option value={key} key={key}>{key}</option> // Display currency code (e.g., USD, GBP)
                        ))
                    }
                </select>
                <br />
                {/* Button to trigger the conversion */}
                <button onClick={vypocitej} style={{ padding: '5px' }}>Převeď</button>
            </div>
            {/* Display the conversion result with 2 decimal places */}
            <h3>Výsledek: {vysledek > 0 ? vysledek.toFixed(2) : 'Zadejte částku a vyberte měnu'}</h3>
        </div>
    );
};
