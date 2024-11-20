import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import red from './dashredes.module.css'

function DashRedes(){

    // validacion de datos
    const {
        register,
        handleSubmit,
        setValue,
        // getValues,
        // trigger,
        formState: { errors },
    } = useForm();

    // crea el objeto con los datos del registro
    const [data, setData] = useState({});
    function isSubmit(data) {
        const dataFinal = {...data}
        console.log(dataFinal);
        setData(dataFinal);
        // onValidationChange(true); // El formulario es válido
        const dataString = JSON.stringify(data)
        localStorage.setItem("datos3", dataString);
    }

    useEffect(() => {
        const storedData = localStorage.getItem('datos3');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log(parsedData)
            // Establece el valor del input utilizando setValue
            setValue('facebook', parsedData.facebook || ''); // Ajusta según el nombre del campo
            setValue('whatsapp', parsedData.whatsapp || '');
            setValue('tiktok', parsedData.tiktok || '');
        }
    }, [setValue]);

    // const validate = async () => {
    //     const result = await trigger(); // Valida todos los campos
    //     onValidationChange(result); // Envía el resultado de la validación al padre
    // };

    return(
        <>
        <h2 className={red.titulo}>Redes</h2>
        {JSON.stringify(data)}
            <div className={red.container}>
                <form action="" className={red.form} onSubmit={handleSubmit(isSubmit)}>
                    <label htmlFor="" className={red.label}>Redes Sociales</label>
                    <input
                            type="text"
                            placeholder='Facebook'
                            className={red.inputText}
                            {...register("facebook", {
                                // required: { value: true, message: "El nombre es obligatorio" },  
                                // maxLength: { value: 30, message: "Nombre muy largo" },
                                // minLength: { value: 5, message: "Nombre muy corto" },
                                pattern: {
                                    value: /^https?:\/\/(www\.)?facebook\.com\/.*$/,
                                    message: "El link debe ser de Facebook"
                                }
                            })}
                            onBlur={handleSubmit(isSubmit)}
                            
                        />
                    {errors.facebook && (<span className={red.error}>{errors.facebook.message}</span>)}
                    <input
                            type="text"
                            placeholder='WhastApp'
                            className={red.inputText}
                            {...register("whatsapp", {
                                // required: { value: true, message: "El nombre es obligatorio" },
                                // maxLength: { value: 30, message: "Nombre muy largo" },
                                // minLength: { value: 5, message: "Nombre muy corto" },
                                pattern: {
                                    value: /^\+?[1-9]\d{1,14}$/, // Formato de número internacional
                                    message: "Formato de número no válido"
                                }
                            })}
                            onBlur={handleSubmit(isSubmit)}
                            
                        />
                        {errors.whatsapp && (<span className={red.error}>{errors.whatsapp.message}</span>)}
                        <input
                            type="text"
                            placeholder='Enlace de TikTok'
                            className={red.inputText}
                            {...register("tiktok", {
                            // required: { value: true, message: "El enlace de TikTok es obligatorio" },
                            pattern: {
                                value: /^https?:\/\/(www\.)?tiktok\.com\/@.+\/?\d*$/, // Validación básica para enlaces de TikTok
                                message: "El enlace debe ser válido"
                            }
                            })}
                        />
                        {errors.tiktok && (<span className={red.error}>{errors.tiktok.message}</span>)}

                    
                    <label htmlFor="" className={red.label}>Servicios con los que cuenta</label>
                    <div className={red.chexbox}>
                        <h4>Servicios y facilidades</h4>
                        <div className={red.item}>
                            <label htmlFor="conserjeria">Servicio de conserjería</label>
                            <input type="checkbox" name="servicios" id="conserjeria" value="conserjeria" {...register("servicios")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="cajaFuerte">Caja fuerte</label>
                            <input type="checkbox" name="servicios" id="cajaFuerte" value="cajaFuerte" {...register("servicios")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="entretenimiento">Personal de entretenimiento</label>
                            <input type="checkbox" name="servicios" id="entretenimiento" value="entretenimiento" {...register("servicios")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="cambioDivisas">Cambio de divisas</label>
                            <input type="checkbox" name="servicios" id="cambioDivisas" value="cambioDivisas" {...register("servicios")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="servicioHabitaciones">Servicio de habitaciones</label>
                            <input type="checkbox" name="servicios" id="servicioHabitaciones" value="servicioHabitaciones" {...register("servicios")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="informacionTuristica">Mostrador de información turística</label>
                            <input type="checkbox" name="servicios" id="informacionTuristica" value="informacionTuristica" {...register("servicios")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="accesoConLlave">Acceso con llave</label>
                            <input type="checkbox" name="servicios" id="accesoConLlave" value="accesoConLlave" {...register("servicios")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="checkInPrivado">Check-in/check-out privado</label>
                            <input type="checkbox" name="servicios" id="checkInPrivado" value="checkInPrivado" {...register("servicios")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="recepcion24h">Recepción 24 horas</label>
                            <input type="checkbox" name="servicios" id="recepcion24h" value="recepcion24h" {...register("servicios")} />
                        </div>

                        <h4>General</h4>
                        <div className={red.item}>
                            <label htmlFor="vistaCalleTranquila">Vista a una calle tranquila</label>
                            <input type="checkbox" name="general" id="vistaCalleTranquila" value="vistaCalleTranquila" {...register("general")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="habitacionesFamiliares">Habitaciones familiares</label>
                            <input type="checkbox" name="general" id="habitacionesFamiliares" value="habitacionesFamiliares" {...register("general")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="sofa">Sofá</label>
                            <input type="checkbox" name="general" id="sofa" value="sofa" {...register("general")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="vistaMontana">Vista a la montaña</label>
                            <input type="checkbox" name="general" id="vistaMontana" value="vistaMontana" {...register("general")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="vistaCiudad">Vista a la ciudad</label>
                            <input type="checkbox" name="general" id="vistaCiudad" value="vistaCiudad" {...register("general")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="espacioAlmacenamiento">Espacio de almacenamiento</label>
                            <input type="checkbox" name="general" id="espacioAlmacenamiento" value="espacioAlmacenamiento" {...register("general")} />
                        </div>

                        <h4>Baño</h4>
                        <div className={red.item}>
                            <label htmlFor="ducha">Ducha</label>
                            <input type="checkbox" name="bano" id="ducha" value="ducha" {...register("bano")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="tinaBano">Tina de baño</label>
                            <input type="checkbox" name="bano" id="tinaBano" value="tinaBano" {...register("bano")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="aseo">Aseo</label>
                            <input type="checkbox" name="bano" id="aseo" value="aseo" {...register("bano")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="papelHigienico">Papel higiénico</label>
                            <input type="checkbox" name="bano" id="papelHigienico" value="papelHigienico" {...register("bano")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="banoPrivado">Baño privado</label>
                            <input type="checkbox" name="bano" id="banoPrivado" value="banoPrivado" {...register("bano")} />
                        </div>

                        <h4>Sistema de entretenimiento</h4>
                        <div className={red.item}>
                            <label htmlFor="tvPantallaPlana">TV de pantalla plana</label>
                            <input type="checkbox" name="entretenimiento" id="tvPantallaPlana" value="tvPantallaPlana" {...register("entretenimiento")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="salaEstarTV">Sala de estar/TV compartida</label>
                            <input type="checkbox" name="entretenimiento" id="salaEstarTV" value="salaEstarTV" {...register("entretenimiento")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="tvPorCable">TV por cable o vía satélite</label>
                            <input type="checkbox" name="entretenimiento" id="tvPorCable" value="tvPorCable" {...register("entretenimiento")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="tv">TV</label>
                            <input type="checkbox" name="entretenimiento" id="tv" value="tv" {...register("entretenimiento")} />
                        </div>

                        <h4>Lavandería</h4>
                        <div className={red.item}>
                            <label htmlFor="lavanderia">Lavandería</label>
                            <input type="checkbox" name="lavanderia" id="lavanderia" value="lavanderia" {...register("lavanderia")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="servicioPlanchado">Servicio de planchado</label>
                            <input type="checkbox" name="lavanderia" id="servicioPlanchado" value="servicioPlanchado" {...register("lavanderia")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="planchaPantalones">Plancha para pantalones</label>
                            <input type="checkbox" name="lavanderia" id="planchaPantalones" value="planchaPantalones" {...register("lavanderia")} />
                        </div>

                        <h4>Comedor</h4>
                        <div className={red.item}>
                            <label htmlFor="desayunoHabitacion">Desayuno en la habitación</label>
                            <input type="checkbox" name="comedor" id="desayunoHabitacion" value="desayunoHabitacion" {...register("comedor")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="comidaEntrega">La comida se puede entregar en el alojamiento</label>
                            <input type="checkbox" name="comedor" id="comidaEntrega" value="comidaEntrega" {...register("comedor")} />
                        </div>

                        <h4>Actividades</h4>
                        <div className={red.item}>
                            <label htmlFor="pesca">Pesca</label>
                            <input type="checkbox" name="actividades" id="pesca" value="pesca" {...register("actividades")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="ciclismo">Ciclismo</label>
                            <input type="checkbox" name="actividades" id="ciclismo" value="ciclismo" {...register("actividades")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="entretenimientoNocturno">Entretenimiento nocturno</label>
                            <input type="checkbox" name="actividades" id="entretenimientoNocturno" value="entretenimientoNocturno" {...register("actividades")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="salonBelleza">Salón de belleza</label>
                            <input type="checkbox" name="actividades" id="salonBelleza" value="salonBelleza" {...register("actividades")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="karaoke">Karaoke</label>
                            <input type="checkbox" name="actividades" id="karaoke" value="karaoke" {...register("actividades")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="salaFiestas">Sala de fiestas</label>
                            <input type="checkbox" name="actividades" id="salaFiestas" value="salaFiestas" {...register("actividades")} />
                        </div>

                        <h4>Servicios Básicos</h4>
                        <div className={red.item}>
                            <label htmlFor="wifiGratis">Wifi gratis</label>
                            <input type="checkbox" name="serviciosBasicos" id="wifiGratis" value="wifiGratis" {...register("serviciosBasicos")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="internet">Internet</label>
                            <input type="checkbox" name="serviciosBasicos" id="internet" value="internet" {...register("serviciosBasicos")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="extinguidor">Extinguidor</label>
                            <input type="checkbox" name="serviciosBasicos" id="extinguidor" value="extinguidor" {...register("serviciosBasicos")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="calefaccion">Calefacción</label>
                            <input type="checkbox" name="serviciosBasicos" id="calefaccion" value="calefaccion" {...register("serviciosBasicos")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="toallasRopa">Toallas/ropa de cama (cargo adicional)</label>
                            <input type="checkbox" name="serviciosBasicos" id="toallasRopa" value="toallasRopa" {...register("serviciosBasicos")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="papeleras">Papeleras</label>
                            <input type="checkbox" name="serviciosBasicos" id="papeleras" value="papeleras" {...register("serviciosBasicos")} />
                        </div>

                        <h4>Estacionamiento y transporte</h4>
                        <div className={red.item}>
                            <label htmlFor="estacionamiento">Estacionamiento</label>
                            <input type="checkbox" name="estacionamientoTransporte" id="estacionamiento" value="estacionamiento" {...register("estacionamientoTransporte")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="valetParking">Valet parking</label>
                            <input type="checkbox" name="estacionamientoTransporte" id="valetParking" value="valetParking" {...register("estacionamientoTransporte")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="estacionamientoPrivado">Estacionamiento privado</label>
                            <input type="checkbox" name="estacionamientoTransporte" id="estacionamientoPrivado" value="estacionamientoPrivado" {...register("estacionamientoTransporte")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="servicioTraslado">Servicio de traslado (cargo adicional)</label>
                            <input type="checkbox" name="estacionamientoTransporte" id="servicioTraslado" value="servicioTraslado" {...register("estacionamientoTransporte")} />
                        </div>

                        <h4>Accesibilidad y adecuación</h4>
                        <div className={red.item}>
                            <label htmlFor="mascotas">Se permiten mascotas a solicitud. Ello puede implicar un costo extra.</label>
                            <input type="checkbox" name="accesibilidad" id="mascotas" value="mascotas" {...register("accesibilidad")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="noFumadores">Para no fumadores</label>
                            <input type="checkbox" name="accesibilidad" id="noFumadores" value="noFumadores" {...register("accesibilidad")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="almohadaSinPlumas">Almohada sin plumas</label>
                            <input type="checkbox" name="accesibilidad" id="almohadaSinPlumas" value="almohadaSinPlumas" {...register("accesibilidad")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="areasFumadores">Áreas designadas para fumadores</label>
                            <input type="checkbox" name="accesibilidad" id="areasFumadores" value="areasFumadores" {...register("accesibilidad")} />
                        </div>

                        <h4>Habitación</h4>
                        <div className={red.item}>
                            <label htmlFor="almohadaPlumas">Almohada de plumas</label>
                            <input type="checkbox" name="habitacion" id="almohadaPlumas" value="almohadaPlumas" {...register("habitacion")} />
                        </div>
                        <div className={red.item}>
                            <label htmlFor="enchufeCercaCama">Enchufe cerca de la cama</label>
                            <input type="checkbox" name="habitacion" id="enchufeCercaCama" value="enchufeCercaCama" {...register("habitacion")} />
                        </div>

                        <h4>Aire libre</h4>
                        <div className={red.item}>
                            <label htmlFor="terrazaPatio">Terraza/patio</label>
                            <input type="checkbox" name="aireLibre" id="terrazaPatio" value="terrazaPatio" {...register("aireLibre")} />
                        </div>
                            
                    </div>
                </form>
            </div>
        </>
    )
}
export default DashRedes;