function Matematicas(props) {
  //props.padreMatematicas es la funcion triple
  var ejecutarPadre = props.padreMatematicas;
  var numero = props.numero;
  const doble = () => {
    //props.numero es el numero que te pasa el padre
    var dobleNumero = parseInt(props.numero) * 2;
    console.log("El doble de " + numero + " es = " + dobleNumero);
  };
  return (
    <div>
      <h1 style={{color:"red"}}> Matematicas Hijo: {numero} </h1>
      <button onClick={() => doble()}>Doble</button>
      <br />
      {/* le mandamos a la funcion triple la variable valor  */}
      <button onClick={() => ejecutarPadre("20")}>Triple</button>
    </div>
  );
}
export default Matematicas;
