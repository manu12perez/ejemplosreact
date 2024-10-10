import imagenjoker from "../../assets/images/joker.jpg";
import "./SumarNumeros.css";
function SumarNumeros() {
  const suma = (numero1, numero2) => {
    var resultado = numero1 + numero2;
    console.log(resultado);
  };

  return (
    <div>
      <img src={imagenjoker} alt="imagen" />
      <br />
      <button onClick={() => suma(8, 10)}>Suma de 8 + 10</button>
      <br />
      <button onClick={() => suma(15, 32)}>Suma de 15 + 32</button>
      <br />
    </div>
  );
}
export default SumarNumeros;
