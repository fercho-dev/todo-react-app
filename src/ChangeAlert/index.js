import React from 'react';
import { useStorageListener } from './useStorageAlert';

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);
    if(show) {
        return <div>
            <p>Hubo cambios change alert</p>
            <button onClick={() => toggleShow()}>Volver a cargar</button>
        </div>
    }
    return null
}

export { ChangeAlert };