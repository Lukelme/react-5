import React, { useState } from 'react';

const Componente = () => {
  const [contador, setContador] = useState(0);


  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      {/* Botão que aumenta o contador quando clicado */}
      <button onClick={aumentarContador}>Aumentar</button>
    </div>
  );
};

export default Componente;
