
import { useState } from 'react';

const Cards = ({ nombre, imagen, onLike }) => {
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes((prev) => prev + 1);
        onLike();
    };

    return (
        <div
            style={{
                width: '200px',
                padding: '15px',
                border: '1px solid #e0e0e0',
                borderRadius: '15px',
                textAlign: 'center',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
            }}
        >
            {/* Imagen de la fruta */}
            <img
                src={imagen}
                alt={nombre}
                style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                }}
            />

            {/* Nombre */}
            <h3
                style={{
                    color: '#333',
                    textTransform: 'capitalize',
                    margin: '12px 0',
                }}
            >
                {nombre}
            </h3>

            {/* Contador de likes */}
            <p style={{ color: '#666', fontSize: '14px' }}>
                Total de likes: <strong>{likes}</strong>
            </p>

            {/* Botón */}
            <button
                onClick={handleClick}
                style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#57de74',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}
            >
                ❤️ Me gusta ({likes})
            </button>

            {/* Mensaje de popularidad */}
            {likes >= 3 && (
                <p
                    style={{
                        color: '#16a34a',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        marginTop: '12px',
                    }}
                >
                    ⭐ ¡Muy popular!
                </p>
            )}

            {likes === 0 && (
                <p style={{ color: '#999', fontSize: '12px' }}>
                    Sé el primero en dar like
                </p>
            )}
        </div>
    );
};

export default Cards;
