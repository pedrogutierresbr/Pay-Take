import React from "react";
import { render } from "@testing-library/react";
import Produtos from "./produtos";

describe("Teste do componente de Produtos", () => {
    it("deve renderizar o componente quando visível", () => {
        //vamos fazer uma busca por botões
        const { getAllByText } = render(<Produtos visivel={true} adicionarProduto={() => false} />);
        const botoes = getAllByText(/comprar/i);
        expect(botoes).toBeTruthy();
    });
});
