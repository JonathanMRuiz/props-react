import Comentario from "./components/Comentario";
import Saludo from "./components/Saludo";


function App() {

  const sujeto ={
    nombre:'Joni',
    urlImagen:'https://via.placeholder.com/150',
    texto:'loremIpsumloremIpsumloremIpsum'
  }

  return (
    <div className="container mt-2">
        <Saludo persona = "Joni"/>
        <Saludo persona = "Mati"/>

        <Comentario sujeto={sujeto}/>
    </div>
  );
}

export default App;
