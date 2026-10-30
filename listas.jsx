
import { useState } from 'react';
import Cards from './cards.jsx';

const Listas = () => {
  const frutas = [
    { id: 1, nombre: 'manzana', imagen: 'manzana.jpeg' },
    { id: 2, nombre: 'uva', imagen: 'uva.jpeg' },
    { id: 3, nombre: 'sandia', imagen: 'sandia.jpeg' },
  ];

  const [total, setTotal] = useState(0);
  const [busqueda, setBusqueda] = useState('');

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Total de likes de frutas: {total}</h1>

      <input
        style={{
          padding: '10px',
          marginBottom: '20px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
        type="text"
        placeholder="Ingrese el nombre de una fruta"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div style={{ display: 'flex', gap: '10px' }}>
        {frutasFiltradas.length === 0 && (
          <p style={{ color: '#ccc', fontSize: '20px' }}>
            No se encontraron frutas con el nombre {busqueda}
          </p>
        )}

        {frutasFiltradas.map((fruta) => (
          <Cards
            key={fruta.id}
            nombre={fruta.nombre}
            imagen={fruta.imagen}
            onLike={() => {
              setTotal((prev) => prev + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Listas;
