import React from "react";
import { render } from "@testing-library/react";
import axiosMock from "axios";
import ListarCidades from "./listar-cidades";

describe("Teste do componente listagem de cidades", () => {
    it("deve gerar uma listagem de cidades", async () => {
        axiosMock.get.mockResolvedValueOnce({ data: ["São Sebastião", "Ubatuba"] });
        const { findByTestId } = render(<ListarCidades estado="SP" />);
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(await findByTestId("São Sebastião")).toHaveTextContent("São Sebastião");
        expect(await findByTestId("Ubatuba")).toHaveTextContent("Ubatuba");
    });
});
