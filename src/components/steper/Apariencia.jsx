import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import apariencia from './apariencia.module.css';

function Apariencia({onValidationChange}) {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        trigger,
        formState: { errors },
    } = useForm();

    const [data, setData] = useState({});
    const [selectedImages, setSelectedImages] = useState([]);

    function isSubmit(formData) {
        const dataFinal = { ...formData, fotos: selectedImages};
        console.log(dataFinal);
        setData(dataFinal);
        const color1 = getValues('colorPrimario')
        const color2 = getValues('colorSecundario')
        color(color1,color2)
        const dataString = JSON.stringify(data)
        localStorage.setItem("datos2", dataString);
    }

    // Recupera datos del localStorage
    useEffect(() => {
        const storedData = localStorage.getItem('datos2');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log(parsedData)
            setValue('colorPrimario', parsedData.colorPrimario);
            setValue('colorSecundario', parsedData.colorSecundario);
        }
    }, [setValue]);

    // Validación del formulario
    const validate = async () => {
        const result = await trigger(); // Valida todos los campos
        onValidationChange(result); // Envía el resultado de la validación al padre
    };

    function enviarInput() {
        document.getElementById('fileInput').click();
    }

    // Maneja el cambio de imagen
    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setSelectedImages(prevImages => [...prevImages, ...imageUrls]);
    };

    // Eliminar una imagen
    const handleRemoveImage = (index) => {
        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    // mostrar y ocultar mapa
    const [mostrarDiseno,setMostrarDiseno] = useState('cerrarpag')
    function verColor(){
        setMostrarDiseno(mostrarDiseno === 'cerrarpag' ? 'pag' : 'cerrarpag');
    }

    
    function color(c1,c2){
        
        document.documentElement.style.setProperty('--color1', c1);
        document.documentElement.style.setProperty('--color2', c2);
    }
    return (
        <>
            <h1 className={apariencia.titulo}>Personaliza tu Hotel</h1>
            {/* {JSON.stringify(data)} */}
            <div className={apariencia.container}>
                <div className={apariencia.container_apa}>
                    <form onSubmit={handleSubmit(isSubmit)} onBlur={validate}>
                        <label className={apariencia.label}>Selecciona tus colores</label>
                        <div className={apariencia.colores}>
                            <div className={apariencia.item_color}>
                                <label>Color Primario</label>
                                <input
                                    type="color"
                                    {...register('colorPrimario')}
                                    className={apariencia.color}
                                    
                                    onBlur={handleSubmit(isSubmit)}
                                />
                                {errors.colorPrimario && <p className={apariencia.error}>{errors.colorPrimario.message}</p>}
                            </div>
                            <div className={apariencia.item_color}>
                                <label>Color Secundario</label>
                                <input
                                    type="color"
                                    {...register('colorSecundario')}
                                    className={apariencia.color}
                                    onBlur={handleSubmit(isSubmit)}
                                />
                                {errors.colorSecundario && <p className={apariencia.error}>{errors.colorSecundario.message}</p>}
                            </div>
                        </div>

                        <label className={apariencia.label}>Selecciona tus fotos de portada <p>(opcional)</p></label>
                        <div className={apariencia.group}>
                            <input
                                type="file"
                                accept="image/*"
                                className={apariencia.pedirLogo}
                                id="fileInput"
                                multiple
                                {...register('fotos', {})}
                                onChange={handleImageChange}
                                onBlur={handleSubmit(isSubmit)}
                            />
                            {errors.fotos && <p className={apariencia.error}>{errors.fotos.message}</p>}
                            <button
                                type="button"
                                onClick={enviarInput}
                                className={apariencia.botonSubir}
                                onBlur={handleSubmit(isSubmit)}
                            >
                                <i className='bx bx-image-add'></i> Subir Imagen
                            </button>
                            <div className={apariencia.cont_portada}>
                                {selectedImages.map((image, index) => (
                                    <div className={apariencia.portadas} key={index}>
                                        {/* Icono de eliminar */}
                                        <i className='bx bx-x' onClick={() => handleRemoveImage(index)}></i>
                                        <img src={image} alt={`Vista previa ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className={apariencia.vistapag} onClick={verColor}>
                <button onBlur={handleSubmit(isSubmit)}>ver prueba</button>
            </div>
            <div className={`${apariencia.pag} ${apariencia[mostrarDiseno]}`}>
                <div className={apariencia.contPag}>
                    <div className={apariencia.nav}>
                        <div className={apariencia.logo}>

                        </div>
                        <div className={apariencia.link}>
                            Reservar Ahora
                        </div>
                    </div>
                    <div className={apariencia.contImg}>
                        <img src={selectedImages[0]} className={apariencia.prevImg} />
                    </div>
                </div>
            </div>
            

        </>
    );
}

export default Apariencia;
