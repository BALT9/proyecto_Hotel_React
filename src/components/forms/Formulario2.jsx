import React, { useState } from 'react';
import { set, useForm } from "react-hook-form"
import styles from './formulario1.module.css';
import { Link, Outlet } from "react-router-dom";


function Formulario2() {

  // validar datos
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [data,setData] = useState({})

  function isSubmit(data){
    console.log(data)
    setData(data)
  }

  return (
      <>
        {JSON.stringify(data)}
        <h1 className={styles.title}>Inicia sesion</h1>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit(isSubmit)}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Correo Electrónico:</label>
              <input
                type="email"
                className={styles.input}
                placeholder='abc@gmail.com'
                {...register("correo",{
                  required:{
                    value: true,
                    message: "complete este campo"
                  },
                  pattern:{
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "ingrese un correo valido"
                  }
              })}
              />
              {errors.correo && (<span className={styles.error}>{errors.correo.message}</span>)}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Ingrese su Contraseña:</label>
              <input
                type="password"
                className={styles.input}
                placeholder='abc@gmail.com'
                {...register("password",{
                  required:{
                    value: true,
                    message: "complete este campo"
                  },
                  maxLength: {value: 15, message: "contraseña invalida"},
                  minLength: {value: 8, message: "contraseña invalida"},
              })}
              />
              {errors.password && (<span className={styles.error}>{errors.password.message}</span>)}
            </div>

            <button className={styles.button} type="submit">Iniciar Sesion</button>
            <p>¿No tienes una cuenta?<Link to={"/registrarse"}>Registrate aqui</Link></p>
          </form>
        </div>
      
      </>
  );
}

export default Formulario2;
