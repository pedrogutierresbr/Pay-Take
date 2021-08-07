import React from "react";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

function ItensCarrinhoMenu(props) {
    function render() {
        //se carrinho vazio
        if (props.produtos.length === 0) {
            return (
                <NavDropdown.Item href="" data-testid="itens">
                    <FontAwesomeIcon icon={faSadTear} />
                    &nbsp; Carrinho vazio
                </NavDropdown.Item>
            );
        }
        // listagem dos produtos
        const itens = props.produtos.map((produto) => (
            <NavDropdown.Item href="" key={produto.nome} data-testid={produto.nome}>
                {produto.nome} - {produto.quantidade} x {produto.preco}
            </NavDropdown.Item>
        ));
        return itens;
    }

    return render();
}

ItensCarrinhoMenu.propTypes = {
    produtos: PropTypes.array.isRequired,
};

export default ItensCarrinhoMenu;
