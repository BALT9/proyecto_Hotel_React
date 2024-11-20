import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './formulario1.module.css';

// Lista de países con sus códigos y banderas
const countries = [
  { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Chile', code: '+56', flag: '🇨🇱' },
  { name: 'Peru', code: '+51', flag: '🇵🇪' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴' },
  // Agrega más países según sea necesario
];

function Formulario1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({});
  const [selectedCode, setSelectedCode] = useState(countries[1].code); // Inicializa con el código de Argentina

  const isSubmit = (formData) => {
    // Combina el código del país con el número de WhatsApp
    const whatsappNumber = `${selectedCode} ${formData.number}`;
    console.log({ ...formData, whatsapp: whatsappNumber }); // Muestra los datos en consola
    setData({ ...formData, whatsapp: whatsappNumber });
  };

  const handleCountryChange = (e) => {
    setSelectedCode(e.target.value);
  };

  return (
    <>
      {JSON.stringify(data)}
      <h1 className={styles.title}>Regístrate Aquí</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(isSubmit)}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Correo Electrónico:</label>
            <input
              type="email"
              className={styles.input}
              placeholder='pepe@gmail.com'
              {...register("correo", {
                required: {
                  value: true,
                  message: "Completa este campo"
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Ingresa un correo válido"
                }
              })}
            />
            {errors.correo && (<span className={styles.error}>{errors.correo.message}</span>)}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Crea Una Contraseña:</label>
            <input
              type="password"
              name="password"
              placeholder='contraseña'
              className={styles.input}
              {...register("password", {
                required: {
                  value: true,
                  message: "Completa este campo"
                },
                maxLength: { value: 15, message: "Contraseña inválida" },
                minLength: { value: 8, message: "Contraseña inválida" },
              })}
            />
            {errors.password && (<span className={styles.error}>{errors.password.message}</span>)}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>País:</label>
            <select
              name="country"
              className={styles.select}
              onChange={handleCountryChange}
            >
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Número de WhatsApp:</label>
            <div className={styles.whatsappContainer}>
              <span className={styles.code}>{selectedCode}</span>
              <input
                step="1"
                min="0"
                type="number"
                name="number"
                placeholder='76543210'
                className={styles.input}
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
              />
            </div>
            {errors.number && (<span className={styles.error}>{errors.number.message}</span>)}
          </div>

          <button className={styles.button} type="submit">Crear Cuenta</button>
        </form>
      </div>
    </>
  );
}

export default Formulario1;
