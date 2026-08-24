import React, { useState } from 'react'

const filmes =[
    {id: 1, nome: "Homem-Aranha: Um novo dia ", inteira: 50.00, meia: 25.00, quantidade: 30, disponivel: true},
    { id: 2, nome: "A odisseia", inteira: 50.00, meia: 25.00, quantidade: 30, disponivel: true },
    { id: 3, nome: "Sobrenantural: Agora entre nós", inteira: 50.00, meia: 25.00, quantidade: 30, disponivel: true },
    { id: 4, nome: "o diabo veste prada", inteira: 50.00, meia: 25.00, quantidade: 30, disponivel: false },
    { id: 5, nome: "Toy Story 5", inteira: 50.00, meia: 25.00, quantidade: 30, disponivel: true }
]

const Ingressos = () => {
    const [items, setItems] = useState(filmes);
    const [status, setStatus] = useState("");
    const [enviar, setEnviar] = useState(false);

    const alterarQuantidade = (id, valor) => {
        setItems(prev => 
            prev.map(item=> 
                item.id === id ? {...item, quantidade: Math.max(0, item.quantidade + valor )} : item
            )
        )
    }

    const fimlesDisponiveis = items.filter(item => item.disponivel);

  return (
    <>
      
    </>
  )
}

export default Ingressos
