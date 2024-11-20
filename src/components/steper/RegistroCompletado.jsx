import completo from './registroCompletado.module.css'

function RegistroCompletado(){

    return(
        <>
            <h1 className={completo.titulo} >Formulario Completado</h1>
            <div className={completo.container}>
                <h2>Tu prueba a sido registrada exitosamente</h2>
                <i className='bx bx-cool'></i>
            </div>
        </>
    )
}
export default RegistroCompletado;