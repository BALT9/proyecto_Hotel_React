import React, { useState, useEffect } from 'react';
import Admin from './steper/Admin';
import Apariencia from './steper/Apariencia';
import Redes from './steper/Redes';
import RegistroCompletado from './steper/RegistroCompletado';

import styleStep from './steper.module.css';

function Steper() {
    // Leemos el progreso guardado en localStorage al montar el componente, o 0 por defecto
    const savedProgresoStep = parseInt(localStorage.getItem('progresoStep')) || 0;
    
    const [progresoStep, setProgresoStep] = useState(savedProgresoStep);
    const [isFormValid, setIsFormValid] = useState(false);

    // Guardar el progreso en localStorage cada vez que se actualiza progresoStep
    useEffect(() => {
        // Guardamos solo si el valor de progresoStep cambia
        localStorage.setItem('progresoStep', progresoStep);
    }, [progresoStep]);

    const handleValidation = (isValid) => {
        setIsFormValid(isValid); // Actualiza el estado de validez    
    };

    const progreso = () => {
        switch (progresoStep) {
            case 0:
                return <Admin onValidationChange={handleValidation} />;
            case 1:
                return <Apariencia onValidationChange={handleValidation} />;
            case 2:
                return <Redes onValidationChange={handleValidation} />;
            case 3:
                return <RegistroCompletado />;
            default:
                return null;
        }
    };

    const nextStep = () => {
        if (isFormValid && progresoStep < 3) {
            setProgresoStep(progresoStep + 1);
        } else {
            alert("Por favor, complete los campos requeridos.");
        }
    };

    const prevStep = () => {
        if (progresoStep > 0) {
            setProgresoStep(progresoStep - 1);
        }
    };

    return (
        <div>
            <div className={styleStep.container}>
                <div className={styleStep.barra_container}>
                    <div className={styleStep.barraProgreso}>
                        <div
                            className={styleStep.progress}
                            style={{ width: `${(progresoStep + 0) * (100 / 3)}%` }} // Calcula el ancho basado en el paso actual
                        ></div>
                        {Array.from({ length: 4 }, (_, index) => (
                            <div
                                key={index}
                                className={`${styleStep.step} ${index <= progresoStep ? styleStep.active : ''}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {progreso()}

            <div className={styleStep.botones}>
                <button onClick={prevStep} disabled={progresoStep === 0} className={styleStep.boton}>
                    Anterior
                </button>
                <input
                    type="submit"
                    value="Siguiente"
                    onClick={nextStep}
                    disabled={isFormValid && progresoStep === 3}
                    className={styleStep.boton}
                />
            </div>
        </div>
    );
}

export default Steper;
