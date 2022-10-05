import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("should render the component", () => {
    render(<Card />)
})

 it("should match snapshot ", () => {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapShot()
    
  }) 

