import imagenjoker from "../../assets/images/joker.jpg";
import "./SumarNumeros.css";

function SumarNumeros(props) {
  const suma = (numero1, numero2) => {
    var resultado = parseInt(props.numero1) + parseInt(props.numero2);
    console.log("Suma = " + resultado);
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>Sumar números</h1>
      <img src={imagenjoker} alt="imagen" />
      <br />
      <button onClick={() => suma()}>
        Sumar {props.numero1}+{props.numero2}
      </button>
      <br />
    </div>
  );
}
export default SumarNumeros;
