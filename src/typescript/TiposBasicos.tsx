

export const TiposBasicos = () => {

    const nombre: string = "Byron";
    const edad: number = 26;
    const estaActivo: boolean = true

    const poderes: string[] = ['velocidad', 'volar', 'rayos-X']

    return (
        <>
            <h3>Tipos básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? "activo" : "no activo"}
            <br />
            {poderes.join(', ')}
        </>
    )
}
