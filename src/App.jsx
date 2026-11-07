// src/App.jsx
import { useState } from 'react';
import Props from './components/Props';
import Contador from './components/Contador';
import Controles from './components/Controles';
import InputTexto from './components/InputTexto';
import Formulario from './components/Formulario';
import MensajeCondicional from './components/MensajeCondicional';
import Sesion from './components/Sesion';
import MensajeConsola from './components/MensajeConsola';
import ContadorEfecto from './components/ContadorEfecto';
import ConsumoApi from './components/ConsumoApi';

function App() {
  // Variables para el ejemplo de Props
  const nombre = "Juan";
  const apellidos = "Pérez";

  // Estado compartido para Contador + Controles
  const [contador, setContador] = useState(0);

  return (
    <>
      <h1>Ejercicios React</h1>
      
      {/* 1. Props */}
      <Props nombre={nombre} apellidos={apellidos} />
      <hr />

      {/* 2. useState (Combinación de componentes) */}
      <Contador contador={contador} />
      <Controles setContador={setContador} />
      <hr />

      {/* 3. Input Simple con useState */}
      <InputTexto />
      <hr />

      {/* 4. Formulario con useState (Objeto) y onSubmit */}
      <Formulario />
      <hr />

      {/* 5. Renderizado Condicional */}
      <MensajeCondicional />
      <hr />

      {/* 6. Renderizado Condicional alternando Componentes */}
      <Sesion />
      <hr />

      {/* 7. useEffect (Una sola ejecución al montar) */}
      <MensajeConsola />
      <hr />

      {/* 8. useEffect con dependencias */}
      <ContadorEfecto />
      <hr />

      {/* 9. Consumo de API con useEffect y fetch */}
      <ConsumoApi />
    </>
  );
}

export default App;