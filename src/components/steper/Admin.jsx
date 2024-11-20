import { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import admin from './admin.module.css';
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

function Admin({onValidationChange}) {
    
    // verificacion de formularios
    // const[completado,setCompletado]=useState(false)

    // validacion de datos
    const {
        register,
        handleSubmit,
        setValue,
        getValues, //obtiene los valores del form
        trigger,
        formState: { errors },
    } = useForm();

    

    const ubicacion = getValues('Ubicacion')
    const [sucursal, setSucursal] = useState();

    // crea el objeto con los datos del registro
    const [data, setData] = useState({}); //toda la data esta aqui
    function isSubmit(data) {
        const pais = {"pais" : "boli"}
        const numero = {"whastapp": `${selectedCode} ${data.number}`}
        const sucursalData = coordenadas
        setSucursal(sucursalData)
        
        const dataFinal = {...data, ...logo, ...numero, ...pais, ...sucursal}
        console.log(dataFinal);
        setData(dataFinal);
        const dataString = JSON.stringify(data)


        localStorage.setItem("datos", dataString);
        
        // const valor = localStorage.getItem('datos');
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
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
            setValue('nombreDueno', parsedData.nombreDueno || '');
            setValue('email', parsedData.email || '');
            setValue('contrasena', parsedData.contrasena || '');
            setValue('number', parsedData.number || '');
        }
    }, [setValue]);


    const validate = async () => {
        const result = await trigger(); // Valida todos los campos
        onValidationChange(result); // Envía el resultado de la validación al padre
    };
    
    
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
    // elimina la imagen
    const handleImageRemove = () => {
        setSelectedImage(null);  // Restablecer el estado de la imagen a null
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


    // Lista de países con sus códigos y banderas
    const countries = [
        { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
        { name: 'Argentina', code: '+54', flag: '🇦🇷' },
        { name: 'Chile', code: '+56', flag: '🇨🇱' },
        { name: 'Peru', code: '+51', flag: '🇵🇪' },
        { name: 'Colombia', code: '+57', flag: '🇨🇴' },
        // Agrega más países según sea necesario
    ];

    // const [selectPais,setSelectPais] = useState(countries[null])
    const [selectedCode, setSelectedCode] = useState(countries[0].code); // Inicializa con el código de bolivia
    const handleCountryChange = (e) => {
        setSelectedCode(e.target.value);
        // setSelectPais(e.target.)
      };
    return (
        <>
            
            {/* <h1 className={admin.titulo}>Tu perfil</h1> */}
            {JSON.stringify(ubicacion)}
            <div className={admin.container}>
                <div className={`${admin.form} `}>
                    <form className={admin.formulario} onSubmit={handleSubmit(isSubmit)} onBlur={validate}>
                        
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
                                    <div className={admin.contX}>
                                        <img src={selectedImage} alt="Vista previa" />
                                        <i className='bx bx-x' onClick={handleImageRemove}></i>
                                    </div>
                                    
                                </div>
                            )}
                        </div>
                        {/* {errors.logo && (<span className={admin.error}>{errors.logo.message}</span>)} */}

                        
                        
                        <label htmlFor="" className={admin.label}>Nombre del Encargado</label>
                        <input
                            type="text"
                            placeholder='Juan'
                            autoComplete="off"
                            className={admin.inputText}
                            
                            {...register("nombreDueno", {
                                required: { value: true, message: "El nombre es obligatorio" },
                                maxLength: { value: 30, message: "Nombre muy largo" },
                                minLength: { value: 5, message: "Nombre muy corto" }
                            })}
                            onBlur={handleSubmit(isSubmit)}
                        />
                        {errors.nombreDueno && (<span className={admin.error}>{errors.nombreDueno.message}</span>)}

                        <label htmlFor="" className={admin.label}>Correo Electronico</label>
                        <input
                            type="email"
                            placeholder='juan@gmail.com'
                            className={admin.inputText}
                            autoComplete="off"
                            {...register("email", {
                                required: { value: true, message: "El correo es obligatorio" },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Ingrese un correo electrónico válido"
                                }
                            })}
                            onBlur={handleSubmit(isSubmit)}
                        />
                        {errors.email && (<span className={admin.error}>{errors.email.message}</span>)}
                        
                        <label htmlFor="" className={admin.label}>Crear contraseña</label>
                        <input
                            type="text"
                            placeholder='contraseña'
                            autoComplete="off"
                            className={admin.inputText}
                            
                            {...register("contrasena", {
                                required: { value: true, message: "La contraseña es obligatoria" },
                                minLength: { value: 8, message: "La contraseña debe tener al menos 8 caracteres" },
                                maxLength: { value: 30, message: "La contraseña no puede tener más de 30 caracteres" },
                                pattern: {
                                    value: /^[A-Za-z0-9@#$%^&*()_+={}\[\]:;,.<>?/-]{6,30}$/,
                                    message: "contraseña no valida"
                                }
                            })}
                            onBlur={handleSubmit(isSubmit)}
                        />
                        {errors.contrasena && (<span className={admin.error}>{errors.contrasena.message}</span>)}

                        <div className={admin.contNumber}>
                            <div className={admin.formGroup}>
                                <label className={admin.label}>País:</label><br />
                                <select
                                    name="country"
                                    className={admin.select}
                                    onChange={handleCountryChange}
                                    >
                                    {countries.map((country, index) => (
                                        <option key={index} value={country.code}>
                                        {country.flag} {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={admin.formGroup}>
                                <label className={admin.label}>Número de WhatsApp:</label><br />
                                
                                <span className={admin.code}>{selectedCode}</span>
                                <input
                                    step="1"
                                    min="0"
                                    type="number"
                                    name="number"
                                    placeholder='76543210'
                                    className={admin.inputText}
                                    {...register("number", {
                                    required: {
                                        value: true,
                                        message: "Completa este campo"
                                    },
                                    maxLength: { value: 15, message: "Número inválido" },
                                    minLength: { value: 5, message: "Número inválido" },
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Ingresa un número válido"
                                    }
                                    })}
                                    onBlur={handleSubmit(isSubmit)}
                                /> <br />
                                
                                {errors.number && (<span className={admin.error}>{errors.number.message}</span>)}
                            </div>
                        </div>

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
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            {/* {JSON.stringify(sucursal)} */}
            
        </>
    );
}

export default Admin;
