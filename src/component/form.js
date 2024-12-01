import React,{useState} from "react";

const Form = () => {
    const [nazwa, setNazwa] = useState("");
    const [cena, setCena] = useState("");
    const [ulotka, setUlotka] = useState("");
    const [ilosc, setIlosc] = useState("");
    const [ilosc_tabletek, setIlosc_tabletek] = useState("");
    const [kod_produktu, setKod_produktu] = useState("");
    const [dawka, setDawka] = useState("");
    const [data_waznosci, setData_waznosci] = useState("");
    const [loading, setLoading] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        const newLek={
            nazwa,
            cena,
            ulotka,
            ilosc,
            ilosc_tabletek,
            kod_produktu,
            dawka,
            data_waznosci
        }
        setLoading(true);
        fetch("http://localhost:3001/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({newLek})
        }).then((res)=>{
            res.status === 200 ? console.log("Dodano lek") : console.log("Błąd dodawania leku");
        }).then(() => {
            setLoading(false);
        }).catch(error => console.log(error));
    }
    return (
        <div>
            <h1>Dodaj lek</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nazwa" value={nazwa} onChange={(e)=>setNazwa(e.target.value)}/>
                <input type="text" placeholder="Cena" value={cena} onChange={(e)=>setCena(e.target.value)}/>
                <input type="text" placeholder="Ulotka" value={ulotka} onChange={(e)=>setUlotka(e.target.value)}/>
                <input type="text" placeholder="Ilość" value={ilosc} onChange={(e)=>setIlosc(e.target.value)}/>
                <input type="text" placeholder="Ilość tabletek" value={ilosc_tabletek} onChange={(e)=>setIlosc_tabletek(e.target.value)}/>
                <input type="text" placeholder="Kod produktu" value={kod_produktu} onChange={(e)=>setKod_produktu(e.target.value)}/>
                <input type="text" placeholder="Dawka" value={dawka} onChange={(e)=>setDawka(e.target.value)}/>
                <input type="date" placeholder="Data ważności" value={data_waznosci} onChange={(e)=>setData_waznosci(e.target.value)}/>
                <button type="submit" disabled={loading}>Dodaj</button>
            </form>
        </div>
    );
}