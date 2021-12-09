import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../index";

describe("<Header /> component tests", () => {
    test("should render the component and match snapshot", () => {
        let header;
        header = render(<Header />);
        expect(header.baseElement).toMatchSnapshot("baseElement");
    });
});