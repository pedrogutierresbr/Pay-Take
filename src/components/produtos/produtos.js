import React, { useState } from "react";
import ListarProdutos from "../listar-produtos/listar-produtos";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

import "./produtos.css";

function Produtos(props) {
    const [exibirMsg, setExibirMsg] = useState(false);
    const [produto, setProduto] = useState("");

    function visivel() {
        return props.visivel ? null : "hidden";
    }

    function exibirMensagem(produto) {
        setExibirMsg(true);
        setProduto(produto);
        setTimeout(() => {
            setExibirMsg(false);
        }, 3000);
    }

    return (
        <div className={visivel()}>
            <Alert variant="success" className="alerta" show={exibirMsg}>
                <strong>{produto}</strong> asicionado com sucessor ao carrinho!
            </Alert>
            <ListarProdutos exibirMensagem={exibirMensagem} adicionarProduto={adicionarProduto} />
        </div>
    );
}

Produtos.propTypes = {
    visivel: PropTypes.bool.isRequired,
    adicionarProduto: PropTypes.func.isRequired,
};

export default Produtos;
