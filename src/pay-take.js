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

    return (
        <div className="">
            <h1>Pay&#38;Take</h1>
            <Menu />
            <Produtos />
            <Checkout />
        </div>
    );
}

export default PayTake;
