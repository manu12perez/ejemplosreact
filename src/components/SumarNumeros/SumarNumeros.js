import imagenjoker from "../../assets/images/joker.jpg";
import "./SumarNumeros.css";

function SumarNumeros() {
  const suma = (numero1, numero2) => {
    var resultado = numero1 + numero2;
    console.log("Suma " + resultado);
  };

  return (
    <div>
        <h1 style={{color:"blue"}}>Sumar números</h1>
      <img src={imagenjoker} alt="imagen" />
      <br />
      <button onClick={() => suma(8, 10)}>Sumar 8 + 10</button>
      <br />
      <button onClick={() => suma(15, 32)}>Sumar 15 + 32</button>
      <br />
    </div>
  );
}
export default SumarNumeros;
