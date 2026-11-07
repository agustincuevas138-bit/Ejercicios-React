// src/components/ContadorEfecto.jsx
import { useState, useEffect } from "react";

const ContadorEfecto = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El contador ahora es: ${contador}`);
  }, [contador]); // Dependencia: Se ejecuta cada vez que 'contador' cambie

  return (
    <div>
      <p>Contador con efecto: {contador}</p>
      <button onClick={() => setContador(contador + 2)}>Incrementar en 2</button>
    </div>
  );
};

export default ContadorEfecto;