// Primero se define la interfaz principal
interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion
}

// Luego se definen las que sean necesarias para la principal
interface Direccion {
    pais: string,
    casaNo: number
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Byron',
        edad: 26,
        direccion: {
            pais: 'Ecuador',
            casaNo: 4
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
