import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import admin from './dashadmin.module.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


// google maps
const containerStyle = {
    width: '90%',
    height: '300px',
};

const center = {
    lat: -16.611701,
    lng: -68.166638,
};

// Definición de ubicaciones
const locations = [
    { name: 'Lugar 1', lat: -16.500000, lng: -68.100000 },
    { name: 'Lugar 2', lat: -16.600000, lng: -68.200000 },
    { name: 'Lugar 3', lat: -16.700000, lng: -68.300000 },
];

function DashAdmin() {
    
    // verificacion de formularios
    // const[completado,setCompletado]=useState(false)

    // validacion de datos
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
        const dataFinal = {...data, ...coordenadas, ...logo}
        console.log(dataFinal);
        setData(dataFinal);
        const dataString = JSON.stringify(data)
        localStorage.setItem("datos", dataString);
        // const valor = localStorage.getItem('datos');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        // onValidationChange(true); // El formulario es válido
    }
    
    // Recuperar datos del localStorage al montar el componente
    useEffect(() => {
        const storedData = localStorage.getItem('datos');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log(parsedData)
            // Establece el valor del input utilizando setValue
            setValue('NombreHotel', parsedData.NombreHotel || ''); // Ajusta según el nombre del campo
            setValue('Ubicacion', parsedData.Ubicacion || '');
            setValue('DescripcionHotel', parsedData.DescripcionHotel || '');
        }
    }, [setValue]);
    
    
    // envia la imagen al input
    function enviarInput(){
        document.getElementById('fileInput').click();
    }
    // seleciona y muestra la imagen
    const [selectedImage, setSelectedImage] = useState(null);
    const logo = {"logo": selectedImage}
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result)
                setSelectedImage(reader.result); // Guarda la URL de la imagen
            };
            reader.readAsDataURL(file);
        }
    };
    // mostrar y ocultar mapa
    const [mapa,setMapa] = useState('container_ubi2')
    function mostrarMapa(){
        setMapa(mapa === 'container_ubi2' ? 'container_ubi' : 'container_ubi2');
    }
    // google maps--------------------------------------------------------------------------------------
    const [markerPosition, setMarkerPosition] = useState(center); // Estado para la posición del marcador
    const [coordenadas,setCoordenadas] = useState({})
    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setMarkerPosition({ lat, lng }); // Actualiza la posición del marcador
        console.log(`Latitud: ${lat}, Longitud: ${lng}`); // Muestra la latitud y longitud en la consola
        setCoordenadas({"coordenadas": {"latitud":lat, "longitud":lng}})
    };

    const handleSelectChange = (event) => {
        const selected = locations.find(loc => loc.name === event.target.value);
        if (selected) {
            setMarkerPosition({ lat: selected.lat, lng: selected.lng }); // Actualiza la posición del marcador
        }
    };

    return (
        <>
            
            {/* <h1 className={admin.titulo}>Tu perfil</h1> */}
            {/* {JSON.stringify(data)} */}
            <div className={admin.container}>
                <div className={`${admin.form} `}>
                    <form className={admin.formulario} onSubmit={handleSubmit(isSubmit)} >
                        
                        <label htmlFor="" className={admin.label}>Nombre de su Hotel</label>
                        <input
                            type="text"
                            placeholder='Hotel Bella Vista'
                            autoComplete="off"
                            className={admin.inputText}
                            
                            {...register("NombreHotel", {
                                required: { value: true, message: "El nombre es obligatorio" },
                                maxLength: { value: 30, message: "Nombre muy largo" },
                                minLength: { value: 5, message: "Nombre muy corto" }
                            })}
                            onBlur={handleSubmit(isSubmit)}
                        />
                        {errors.NombreHotel && (<span className={admin.error}>{errors.NombreHotel.message}</span>)}

                        <label htmlFor="" className={admin.label}>Dirección de su Hotel <span>opcional</span></label>
                        <input
                            type="text"
                            placeholder='Av. siempre viva'
                            className={admin.inputText}
                            autoComplete="off"
                            {...register("Ubicacion", {
                                required: { value: true, message: "La direccion es obligatoria" },
                                maxLength: { value: 90, message: "texto muy largo" },
                                minLength: { value: 5, message: "texto demasiado corto" },
                                pattern: {
                                    // value: /^https?:\/\/(www\.)?(maps\.google\.com|goo\.gl|g\.co)\/.*$/,
                                    message: ""
                                }
                            })}
                            onBlur={handleSubmit(isSubmit)}
                        />
                        {errors.Ubicacion && (<span className={admin.error}>{errors.Ubicacion.message}</span>)}

                        <label htmlFor="" className={admin.label}>Logo (opcional)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className={admin.pedirLogo}
                            id="fileInput"
                            onBlur={handleSubmit(isSubmit)}
                            // {...register("logo", {
                            //     required: { value: true, message: "El logo es obligatorio" },
                            // })}
                            
                        /> 
                        <div className={admin.cont}>
                            <button 
                                type="button" 
                                onClick={enviarInput} 
                                className={admin.botonSubir}
                            ><i className='bx bx-image-add'></i>Seleccionar logo</button>
                            {selectedImage && (
                                <div className={admin.cargarImagen}>
                                    <p>Vista Previa:</p>
                                    <img src={selectedImage} alt="Vista previa" />
                                </div>
                            )}
                        </div>
                        {/* {errors.logo && (<span className={admin.error}>{errors.logo.message}</span>)} */}

                        
                        
                        <label htmlFor="" className={admin.label}>Nombre de su Hotel</label>
                        <input
                            type="text"
                            placeholder='Hotel Bella Vista'
                            autoComplete="off"
                            className={admin.inputText}
                            
                            // {...register("NombreHotel", {
                            //     required: { value: true, message: "El nombre es obligatorio" },
                            //     maxLength: { value: 30, message: "Nombre muy largo" },
                            //     minLength: { value: 5, message: "Nombre muy corto" }
                            // })}
                            // onBlur={handleSubmit(isSubmit)}
                        />
                        {errors.NombreHotel && (<span className={admin.error}>{errors.NombreHotel.message}</span>)}

                        <label htmlFor="" className={admin.label}>Dirección de su Hotel <span>opcional</span></label>
                        <input
                            type="text"
                            placeholder='Av. siempre viva'
                            className={admin.inputText}
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
                        {errors.Ubicacion && (<span className={admin.error}>{errors.Ubicacion.message}</span>)}
                        
                        <label htmlFor="" className={admin.label}>Nombre de su Hotel</label>
                        <input
                            type="text"
                            placeholder='Hotel Bella Vista'
                            autoComplete="off"
                            className={admin.inputText}
                            
                            // {...register("NombreHotel", {
                            //     required: { value: true, message: "El nombre es obligatorio" },
                            //     maxLength: { value: 30, message: "Nombre muy largo" },
                            //     minLength: { value: 5, message: "Nombre muy corto" }
                            // })}
                            // onBlur={handleSubmit(isSubmit)}
                        />
                        {errors.NombreHotel && (<span className={admin.error}>{errors.NombreHotel.message}</span>)}

                        <label htmlFor="" className={admin.label}>Dirección de su Hotel <span>opcional</span></label>
                        <input
                            type="text"
                            placeholder='Av. siempre viva'
                            className={admin.inputText}
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
                        {errors.Ubicacion && (<span className={admin.error}>{errors.Ubicacion.message}</span>)}

{/* 
                        <label htmlFor="" className={admin.label}>Descripción de su Hotel</label>
                        <textarea
                            rows={2}
                            cols={4}
                            placeholder='Bienvenido al hotel Bella luna'
                            className={admin.inputText}
                            {...register("DescripcionHotel", {
                                maxLength: { value: 300, message: "Descripción muy larga" },
                                minLength: { value: 5, message: "Descripción muy corta" }
                            })}
                            onBlur={handleSubmit(isSubmit)}
                        />
                        {errors.DescripcionHotel && (<span className={admin.error}>{errors.DescripcionHotel.message}</span>)} */}
                        

                        <label htmlFor="" className={admin.label}>Mapa (opcional)</label>
                        <button className={admin.mostrarMapa} onClick={mostrarMapa}>Mapa</button>
                        {/* <select onChange={handleSelectChange} style={{ margin: '10px' }}>
                            <option value="">Seleccione un lugar</option>
                            {locations.map((loc) => (
                                <option key={loc.name} value={loc.name}>
                                    {loc.name}
                                </option>
                            ))}
                        </select> */}
                        <div className={`${admin[mapa]}`} onBlur={handleSubmit(isSubmit)}>
                            <LoadScript googleMapsApiKey="AIzaSyC5Jl7QLg29bpg9O384Xeaw3iy2bqo_jOQ">
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={markerPosition}
                                    zoom={10}
                                    onClick={handleMapClick} // Manejador de clics en el mapa
                                >
                                    <Marker position={markerPosition} /> {/* Marcador en la posición actual */}
                                </GoogleMap>
                            </LoadScript>
                        </div>
                        {/* <input type="submit" value="Guardar" className={admin.boton} /> */}
                    </form>
                </div>
            </div>
            {/* {valor} */}
            <div>
                {/* Renderiza tu componente aquí */}
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            </div>
            
        </>
    );
}

export default DashAdmin;
