import React, { useState } from "react";

import "./pay-take.css";

//Components
import Menu from "./components/menu/menu";
import Produtos from "./components/produtos/produtos";
import Checkout from "./components/checkout/checkout";

function PayTake() {
    //estados principáis da aplicação
    const [carrinho, setCarrinho] = useState({ produtos: [] });
    const [exibirProdutos, setExibirProdutos] = useState(true);
    const [exibirCheckout, setExibirCheckout] = useState(false);
    const [total, setTotal] = useState("0,00");

    function adicionarProduto(produto) {
        const objCarrinho = Object.assign({}, carrinho); //criado cópia do objeto carrinho
        //atualizar a quantidade
        let novoProduto = true;
        objCarrinho.produtos.forEach((prod, index) => {
            if (prod.nome === produto.nome) {
                objCarrinho.produtos[index].quantidade++;
                novoProduto = false;
            }
        });
        //adicionar novo produto ao carrinho
        if (novoProduto) {
            objCarrinho.produtos.push({
                nome: produto.nome,
                preco: produto.preco,
                quantidade: 1,
            });
        }
        //adicionar ao estado carrinho
        setCarrinho(objCarrinho);
    }

    return (
        <div className="">
            <Menu />
            <Produtos visivel={exibirProdutos} adicionarProduto={adicionarProduto} />
            <Checkout />
        </div>
    );
}

export default PayTake;
