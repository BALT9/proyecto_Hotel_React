import { useState } from "react";
import { useForm } from 'react-hook-form';
import gestorCss from "./gestorHabitaciones.module.css"

function GestorHabitaciones(){

    const [clase,setClase] = useState('uno');
    function modal(){
        setClase(clase === 'uno' ? 'dos' : 'uno');
    }
    
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        trigger,
        formState: { errors },
    } = useForm();

    
    // crea el objeto con los datos del registro
    const [data, setData] = useState({});
    function isSubmit(data) {
        const dataFinal = {...data,fotos: selectedImages}
        console.log(dataFinal);
        setData(dataFinal);
        // const dataString = JSON.stringify(data)
        // localStorage.setItem("datos", dataString);
        // // const valor = localStorage.getItem('datos');
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        // // onValidationChange(true); // El formulario es válido
    }

    function enviarInput() {
        document.getElementById('fileInput').click();
    }
    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        // setSelectedImages(imageUrls); // Actualiza las imágenes seleccionadas
        setSelectedImages(prevImages => [...prevImages, ...imageUrls]);
    };
    return(
        <>
        <div className={gestorCss.containerMax}>
        {JSON.stringify(data)}
            
            <div className={gestorCss.container_card}>
                <div className={gestorCss.card}>
                    <div className={gestorCss.info}>
                        <h2>{data.NombreHotel}</h2>
                    </div>
                    <div className={gestorCss.info}>
                        <h2>{data.precio}</h2>
                    </div>
                    <div className={gestorCss.info}>
                        <button className={gestorCss.botonGreen} >
                            Editar
                        </button>
                        <button className={gestorCss.botonRed}>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>

            <button onClick={modal} className={gestorCss.botonAnadir}>Añadir</button>

            <div className={`${gestorCss.container} ${gestorCss[clase]}`}>
                
                <div className={gestorCss.container_modal}>
                    <i className={`bx bx-x ${gestorCss.x}`} onClick={modal}></i>
                    <form action="" onSubmit={handleSubmit(isSubmit)} >
                        <div className={gestorCss.cont1}>
                            <label htmlFor="" className={gestorCss.label}>Nombre de su Habitacion</label>
                            <input
                            type="text"
                            placeholder='Habitacion simple'
                            autoComplete="off"
                            className={gestorCss.inputText}
                            
                            {...register("NombreHotel", {
                                required: { value: true, message: "El nombre es obligatorio" },
                                maxLength: { value: 30, message: "Nombre muy largo" },
                                minLength: { value: 5, message: "Nombre muy corto" }
                            })}
                            // onBlur={handleSubmit(isSubmit)}
                            />
                            {errors.NombreHotel && (<span className={gestorCss.error}>{errors.NombreHotel.message}</span>)}

                            <label htmlFor="" className={gestorCss.label}>Descripción de su Habitacion</label>
                            <textarea
                                rows={2}
                                cols={4}
                                placeholder='Esta habitacion es muy comoda'
                                className={gestorCss.inputText}
                                {...register("DescripcionHotel", {
                                    maxLength: { value: 300, message: "Descripción muy larga" },
                                    minLength: { value: 5, message: "Descripción muy corta" }
                                })}
                                // onBlur={handleSubmit(isSubmit)}
                            />
                            {errors.DescripcionHotel && (<span className={gestorCss.error}>{errors.DescripcionHotel.message}</span>)}

                            <div className={gestorCss.minContainer}>
                                <div className={gestorCss.minContainer1}>
                                    <label htmlFor="" className={gestorCss.label}>Numero de Habitacion </label>
                                    <input
                                        type="number"
                                        placeholder='0'
                                        className={gestorCss.inputText}
                                        autoComplete="off"
                                        min="0" 
                                        
                                        {...register("nroHabitacion", {
                                            pattern: {
                                                value: /^(0|[1-9][0-9]*)$/,
                                                message: "Por favor, ingresa un número."
                                            }
                                        })}
                                        // onBlur={handleSubmit(isSubmit)}
                                    />
                                    {errors.Ubicacion && (<span className={admin.error}>{errors.Ubicacion.message}</span>)}

                                </div>
                                <div className={gestorCss.minContainer1}>
                                    <label htmlFor="" className={gestorCss.label}>Capacidad</label>
                                    <input
                                        type="number"
                                        placeholder='1'
                                        className={gestorCss.inputText}
                                        autoComplete="off"
                                        min="0" 
                                        
                                        {...register("capacidad", {
                                            pattern: {
                                                value: /^(0|[1-9][0-9]*)$/,
                                                message: "Por favor, ingresa un número."
                                            }
                                        })}
                                        // onBlur={handleSubmit(isSubmit)}
                                    />
                                    {errors.Ubicacion && (<span className={gestorCss.error}>{errors.Ubicacion.message}</span>)}
                                </div>
                                
                            </div>
                            <label htmlFor="" className={gestorCss.label}>Caracteristicas de la Habitacion<span></span></label>
                                    <input
                                        type="text"
                                        placeholder='Camas'
                                        className={gestorCss.inputText}
                                        autoComplete="off"
                                        // {...register("Ubicacion", {
                                        //     required: { value: true, message: "La direccion es obligatoria" },
                                        //     maxLength: { value: 90, message: "texto muy largo" },
                                        //     minLength: { value: 5, message: "texto demasiado corto" },
                                        //     pattern: {
                                        //         // value: /^https?:\/\/(www\.)?(maps\.google\.com|goo\.gl|g\.co)\/.*$/,
                                        //         message: ""
                                        //     }
                                        // })}
                                        // onBlur={handleSubmit(isSubmit)}
                                    />
                                    {/* {errors.Ubicacion && (<span className={admin.error}>{errors.Ubicacion.message}</span>)} */}
                                    <div className={gestorCss.minContainer}>
                                        <div className={gestorCss.minContainer1}>
                                            <label htmlFor="" className={gestorCss.label}>Precio<span></span></label>
                                            <input
                                                type="number"
                                                placeholder='100'
                                                className={gestorCss.inputText}
                                                autoComplete="off"
                                                min="0" 
                                        
                                                {...register("precio", {
                                                    pattern: {
                                                        value: /^(0|[1-9][0-9]*)$/,
                                                        message: "Por favor, ingresa un número."
                                                    }
                                                })}
                                                // onBlur={handleSubmit(isSubmit)}
                                            />
                                            {errors.Ubicacion && (<span className={admin.error}>{errors.Ubicacion.message}</span>)}

                                        </div>
                                        <div className={gestorCss.minContainer1}>
                                            <label htmlFor="" className={gestorCss.label}>Tipo de moneda<span></span></label>
                                            <select name="" id="" className={gestorCss.inputText} 
                                                {...register("moneda", { required: "Selecciona una moneda" })}
                                            >
                                                
                                                <option value="dolares" className={gestorCss.inputText}>$ Dolares</option>
                                                <option value="Bolivianos">Bs Bolivianos</option>
                                            </select>
                                            {/* <input
                                                type="number"
                                                placeholder='1'
                                                className={gestorCss.inputText}
                                                autoComplete="off"
                                                // {...register("Ubicacion", {
                                                //     required: { value: true, message: "La direccion es obligatoria" },
                                                //     maxLength: { value: 90, message: "texto muy largo" },
                                                //     minLength: { value: 5, message: "texto demasiado corto" },
                                                //     pattern: {
                                                //         // value: /^https?:\/\/(www\.)?(maps\.google\.com|goo\.gl|g\.co)\/.*$/,
                                                //         message: ""
                                                //     }
                                                // })}
                                                // onBlur={handleSubmit(isSubmit)}
                                            /> */}

                                            {/* {errors.Ubicacion && (<span className={admin.error}>{errors.Ubicacion.message}</span>)} */}
                                        
                                        </div>
                                        <div className={gestorCss.minContainer1}>
                                            <label htmlFor="" className={gestorCss.label}>Mostrar precio</label>
                                            <select name="" id="" className={gestorCss.inputText}
                                                {...register("mostrarPrecio", { required: "Selecciona una moneda" })}
                                            >
                                                <option value={true}>Si</option>
                                                <option value={false}>No</option>
                                            </select>

                                            {/* {errors.Ubicacion && (<span className={admin.error}>{errors.Ubicacion.message}</span>)} */}
                                        
                                        </div>
                                        
                                        
                                
                            </div>
                            
                        </div>
                        <div className={gestorCss.cont1}>
                            <label className={gestorCss.label}>Fotos de la Habitacion</label>
                            <div className={gestorCss.group}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className={gestorCss.pedirLogo}
                                    id="fileInput"
                                    multiple
                                    {...register('fotos', {})}
                                    onChange={handleImageChange}
                                    // onBlur={handleSubmit(isSubmit)}
                                />
                                {/* {errors.fotos && <p className={apariencia.error}>{errors.fotos.message}</p>} */}
                                <button
                                    type="button"
                                    onClick={enviarInput}
                                    className={gestorCss.botonSubir}
                                    // onBlur={handleSubmit(isSubmit)}
                                >
                                    <i className={`bx bx-image-add`}></i> Subir Imagen
                                </button>
                                <div className={gestorCss.cont_portada}>
                                    {selectedImages.map((image, index) => (
                                        <div className={gestorCss.portadas} key={index}>
                                            <img src={image} alt={`Vista previa ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <label className={gestorCss.label}>Servicios de la Habitacion</label>

                            <div className={gestorCss.boton}>
                                <input type="submit" value="Enviar" onClick={modal}/>
                            </div>
                        </div>
                        
                    </form>
                    
                    
                </div>
            </div>
        </div>
        
        </>
    )
}
export default GestorHabitaciones;