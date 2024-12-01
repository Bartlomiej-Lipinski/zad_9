import React from "react";

const LekDescription = ({lek}) => {
    return(
        <div>
            <h1>{lek.nazwa}</h1>
            <p>Cena: {lek.cena}</p>
            <p>Opis: {lek.ulotka}</p>
            <p>Ilość: {lek.ilosc}</p>
            <p>Ilość Tabletek: {lek.ilosc_tabletek}</p>
            <p>Ulotka: {lek.ulotka}</p>
            <p>Kod prouktu: {lek.kod_produktu}</p>
            <p>Dawka: {lek.dawka}mg</p>
            <p>Data ważności: {new Date(lek.data_waznosci).toLocaleDateString()}</p>
        </div>
    )
}