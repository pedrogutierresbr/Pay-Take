import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Checkout from "./checkout";
import axiosMock from "axios";

describe("Teste do componente Checkout", () => {
    //criado dados que seriam enviados para api
    const dadosFinalizarCompra = {
        email: "email@test.com",
        nomeCompleto: "Guga Noblat",
        cpf: "293.462.345-98",
        endereco: "Rua dos cadastros, 389",
        cidade: "São Paulo",
        estado: "SP",
        cep: "12345-789",
        termosCondicoes: true,
        emailPromocional: "S",
        dataNascimento: new Date("1998-07-20T03:00:00.000Z"),
        produtos: "{}",
        total: "R$ 10,00",
    };

    it("deve finalizar a compra com sucesso", async () => {
        //simulado requisicao de api
        axiosMock.get.mockResolvedValueOnce({ data: ["São Paulo", "São Pedro"] });
        //renderizado componente (com dependencias)
        const { findByTestId, getByTestId, getByPlaceholderText } = render(
            <Checkout
                visivel={true}
                handleExibirProdutos={() => false}
                total={"10,00"}
                produtos={{}}
                handleLimparCarrinho={() => false}
            />
        );
        //simulado click nos campos e inserção de dados
        fireEvent.change(getByTestId("txt-email"), { target: { value: "email@test.com" } });
        fireEvent.change(getByTestId("txt-nome-completo"), { target: { value: "Guga Noblat" } });
        fireEvent.change(getByPlaceholderText("Selecione a data"), {
            target: { value: "20/07/1998" },
        });
        fireEvent.change(getByTestId("txt-cpf"), { target: { value: "293.462.345-98" } });
        fireEvent.change(getByTestId("txt-endereco"), {
            target: { value: "Rua dos cadastros, 389" },
        });
        fireEvent.change(getByTestId("estado"), { target: { value: "SP" } });
        //aqui tera a chamada do axios para requisicao
        const cidade = await findByTestId("cidade");
        fireEvent.change(cidade, { target: { value: "São Paulo" } });
        fireEvent.change(getByTestId("txt-cep"), { target: { value: "12345-789" } });
        fireEvent.click(getByTestId("check-termos-condicoes"));
        fireEvent.click(getByTestId("btn-finalizar-compra"));
        const modal = await findByTestId("modal-compra-sucesso");
        expect(modal).toHaveTextContent("Compra realizada com sucesso!"); //teste se modal sucesso é exibida
        expect(axiosMock.get).toHaveBeenCalledTimes(1); //teste se ta fazendo requisição get
        expect(axiosMock.post).toHaveBeenCalledTimes(1); //teste se ta fazendo requisição post
        expect(axiosMock.post.mock.calls[0][1]).toStrictEqual(dadosFinalizarCompra);
    });
});
