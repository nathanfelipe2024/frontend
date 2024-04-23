import React from 'react';

export default function TableNathan ({products}) {
    return (
        <div>
            <h2>Tabela de Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque (kg)</th>
                        <th style={{ textAlign: 'center' }}>Ações</th>
                    </tr>
                </thead>
            <tbody>
                {products.map((prod) => (
                    <tr key={prod.id}>
                    <td>{prod.id}</td>    
                    <td>{prod.name}</td>    
                    <td>{prod.preco}</td>
                    <td>{Estoque}</td>
                    <td>
                    <button>editar</button>
                    <button>excluir</button>
                    </td>    
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};