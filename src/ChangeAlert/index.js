import React from 'react';
import { withStorageListener } from './withStorageAlert';

function ChangeAlert({ show, toggleShow }) {
    if(show) {
        return <div>
            <p>Hubo cambios change alert</p>
            <button onClick={() => toggleShow()}>Volver a cargar</button>
        </div>
    }
    return null
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };