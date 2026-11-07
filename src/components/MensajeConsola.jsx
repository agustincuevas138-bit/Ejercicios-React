// src/components/MensajeConsola.jsx
import { useEffect } from "react";

const MensajeConsola = () => {
  useEffect(() => {
    console.log("El componente MensajeConsola se ha renderizado");
  }, []); // El array vacío asegura que solo se ejecute una vez al montar

  return (
    <div>
      <p>Revisa la consola del navegador para ver el mensaje del useEffect.</p>
    </div>
  );
};

export default MensajeConsola;