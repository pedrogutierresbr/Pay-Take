import React from "react";
import { render } from "@testing-library/react";
import Checkout from "./checkout";

describe("Teste do componente Checkout", () => {
    it("Deve renderizar o componente sem erros", () => {
        const { getAllByText } = render(<Checkout />);
        const textos = getAllByText(/Finalizar compra/i);
        expect(textos[0]).toBeInTheDocument();
        expect(textos[1]).toBeInTheDocument();
    });
});
