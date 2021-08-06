import React from "react";
import { render } from "@testing-library/react";
import Checkout from "./checkout";

describe("Teste do componente Checkout", () => {
    it("Deve renderizar o componente sem erros", () => {
        const { getByText } = render(<Checkout />);
        const texto = getByText(/checkout/i);
        expect(texto).toBeInTheDocument();
    });
});
