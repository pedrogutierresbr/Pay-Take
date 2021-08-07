import React from "react";
import { render } from "@testing-library/react";
import ListarProdutos from "./listar-produtos";

describe("Teste do componente de listagem de produtos", () => {
    //como estamos usando uma lista estática, não existe necessidade de mocks
    it("deve exibir os nomes dos produtos nos cards", () => {
        const { getByTestId } = render(
            <ListarProdutos adicionarProduto={() => false} exibirMensagem={() => false} />
        );
        expect(getByTestId("card1")).toHaveTextContent("TypeScript");
        expect(getByTestId("card2")).toHaveTextContent("7 dias");
    });

    it("deve exibir as descrições dos produtos nos cards", () => {
        const { getByTestId } = render(
            <ListarProdutos adicionarProduto={() => false} exibirMensagem={() => false} />
        );
        expect(getByTestId("card1")).toHaveTextContent("standard dummy text");
        expect(getByTestId("card5")).toHaveTextContent(
            "scrambled it to make a type specimen book."
        );
    });

    it("deve exibir os preços dos produtos nos botões de comprar", () => {
        const { getByTestId } = render(
            <ListarProdutos adicionarProduto={() => false} exibirMensagem={() => false} />
        );
        expect(getByTestId("card1")).toHaveTextContent("Comprar R$ 57,90");
        expect(getByTestId("card7")).toHaveTextContent("Comprar R$ 27,90");
    });
});
