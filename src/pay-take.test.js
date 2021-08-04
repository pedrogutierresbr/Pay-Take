import React from "react";
import { render, screen } from "@testing-library/react";
import PayTake from "./pay-take";

test("renders learn react link", () => {
    render(<PayTake />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
