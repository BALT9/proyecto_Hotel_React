import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import apariencia from './dashapariencia.module.css';

function DashApariencia() {
    const {
        register,
        handleSubmit,
        // getValues,
        setValue,
        // trigger,
        formState: { errors },
    } = useForm();

    const [data, setData] = useState({});
    const [selectedImages, setSelectedImages] = useState([]);

    function isSubmit(formData) {
        // Convierte FileList a array de URLs y actualiza el estado
        // const imageUrls = Array.from(formData.fotos).map(file => URL.createObjectURL(file));
        const dataFinal = { ...formData, fotos: selectedImages};
        console.log(dataFinal);
        setData(dataFinal);
        const dataString = JSON.stringify(data)
        localStorage.setItem("datos2", dataString);
    }
    // recupera del localStorage
    useEffect(() => {
        const storedData = localStorage.getItem('datos2');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log(parsedData)
            // Establece el valor del input utilizando setValue
            setValue('colorPrimario', parsedData.colorPrimario || ''); // Ajusta según el nombre del campo
            setValue('colorSecundario', parsedData.colorSecundario || '');
        }
        else {
            // Si no hay datos, establecer colores predeterminados
            setValue('colorPrimario', '#ff0000'); // Rojo
            setValue('colorSecundario', '#0000ff'); // Azul
        }
    }, [setValue]);
    // validacion de formulario
    // const validate = async () => {
    //     const result = await trigger(); // Valida todos los campos
    //     onValidationChange(result); // Envía el resultado de la validación al padre
    // };

    function enviarInput() {
        document.getElementById('fileInput').click();
    }

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        // setSelectedImages(imageUrls); // Actualiza las imágenes seleccionadas
        setSelectedImages(prevImages => [...prevImages, ...imageUrls]);
    };

    return (
        <>
            
            <h1 className={apariencia.titulo}>Personaliza tu Hotel</h1>
            {JSON.stringify(data)}
            <div className={apariencia.container}>
                <div className={apariencia.container_apa}>
                    <form onSubmit={handleSubmit(isSubmit)} >
                        <label className={apariencia.label}>Selecciona tus colores</label>
                        <div className={apariencia.colores}>
                            <div className={apariencia.item_color}>
                                <label>Color Primario</label>
                                <input
                                    type="color"
                                    {...register('colorPrimario', { required: 'Color primario es obligatorio' })}
                                    className={apariencia.color}
                                    onBlur={handleSubmit(isSubmit)}
                                />
                                {errors.colorPrimario && <p className={apariencia.error}>{errors.colorPrimario.message}</p>}
                            </div>
                            <div className={apariencia.item_color}>
                                <label>Color Secundario</label>
                                <input
                                    type="color"
                                    {...register('colorSecundario', { required: 'Color secundario es obligatorio' })}
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
                                        <img src={image} alt={`Vista previa ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    );
}

export default DashApariencia;
