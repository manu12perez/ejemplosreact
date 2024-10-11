import Matematicas from "./Matematicas";

function PadreMatematicas () {
    const triple = (valor) =>{
        var tripleNumero = parseInt(valor)*3;
        console.log("El tiple de " + valor + " es = " + tripleNumero);
    }
    return(
        <div>
            <h1 style={{color:"blue"}}>Matemáticas Padre</h1>
            {/* A Matematicas le pasamos los props numero y padreMatematicas
            padreMatematicas contiene la funcion triple */}
            <Matematicas numero="10" padreMatematicas={triple}/> 
        </div>
    )
}
export default PadreMatematicas;