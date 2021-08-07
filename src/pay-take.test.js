import React from "react";
import { render } from "@testing-library/react";
import PayTake from "./pay-take";

describe("Teste do componente PayTake", () => {
    it("Deve renderizar o componente sem erros", () => {
        const { getByText } = render(<PayTake />);
        const linkElement = getByText(/Pay&Take/i);
        expect(linkElement).toBeInTheDocument();
    });
});
