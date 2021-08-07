import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import placeholder from "../../../images/286x180.png";

function ListarProdutos(props) {
    // Para exemplificar criei um array, porem aqui poderia ser uma API
    const produtos = [
        { nome: "Aprenda TypeScript", preco: "R$ 57,90" },
        { nome: "JavaScript em 7 dias", preco: "R$ 55,30" },
        { nome: "React do básico ao avançado", preco: "R$ 62,20" },
        { nome: "Algoritmos e Lógica de programação", preco: "R$ 19,90" },
        { nome: "Testes Unitários com Jest", preco: "R$ 33,20" },
        { nome: "Node Js na prática", preco: "R$ 52,90" },
        { nome: "Tudo sobre Mongo DB", preco: "R$ 27,90" },
        { nome: "Python do básico ao primeiro projeto", preco: "R$ 121,30" },
    ];

    function handleComprar(event, produto) {
        event.preventDefault();
        // adicionar o produto no carrinho
        props.adicionarProduto(produto);
        // exibir mensagem que produto foi adicionado ao carrinho
        props.exibirMensagem(produto);
    }

    function render() {
        let key = 1;

        const cards = produtos.map((produto) => (
            <Card key={key} className="cardProduto mb-5" data-testid={"card" + key++}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body className="text-center">
                    <Card.Title className="cardTitle">{produto.nome}</Card.Title>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </Card.Text>
                    <Button
                        variant="success"
                        className="buttonCard"
                        onClick={(event) => handleComprar(event, produto)}
                    >
                        Comprar {produto.preco}
                    </Button>
                </Card.Body>
            </Card>
        ));
        return cards;
    }

    return render();
}

ListarProdutos.propTypes = {
    adicionarProduto: PropTypes.func.isRequired,
    exibirMensagem: PropTypes.func.isRequired,
};

export default ListarProdutos;
