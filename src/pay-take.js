import React, { useState } from "react";
import "./pay-take.css";

function PayTake() {
    const [carrinho, setCarrinho] = useState({ produtos: [] });
    const [exibirProdutos, setExibirProdutos] = useState(true);
    const [exibirCheckout, setExibirCheckout] = useState(true);
    const [total, setTotal] = useState("0,00");

    return (
        <div className="">
            <h1>Pay&#38;Take</h1>
        </div>
    );
}

export default PayTake;
