// src/components/ConsumoApi.jsx
import { useState, useEffect } from "react";

const ConsumoApi = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      // Se utiliza una API de prueba como ejemplo
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const json = await respuesta.json();
      setData(json);
    } catch (error) {
      setData({ error: "Error al consumir la API" });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h3>Respuesta de la API:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ConsumoApi;