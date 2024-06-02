import disco from '../../assets/produtos/discodemons.jpg'
import camisapreta from '../../assets/produtos/camisaurbanpreta.jpeg'
import bonepreto from '../../assets/produtos/boneurbanpreto.jpeg'


const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Kit WRLD - Exclusive",
        detalhes: "Nosso Kit exclusivo para fãs de Juice WRLD e Moda Urbana",
        preco: "R$139,99",
        botao: "Adicionar a lista de desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                nome: "1x T-Shirt Urban Preta",
                imagemKit: camisapreta,
            },
            {
                nome: "1x Boné Urban Preto",
                imagemKit: bonepreto,
            },
            {
                nome: "1x Disco Fighting Demons",
                imagemKit: disco,
            },
        ]
    }
}

export default produto;

