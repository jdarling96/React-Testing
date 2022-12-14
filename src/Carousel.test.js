import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("should render the component", () => {
  render(<Carousel/>)
})

 it("should match snapshot 1", () => {
  const { asFragment } = render(<Carousel />)
  expect(asFragment()).toMatchSnapShot()
  
}) 

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", () => {
  const {queryByTestId, queryByAltText } = render(<Carousel />)
  const rightArrow = queryByTestId("right-arrow")
 
  
  fireEvent.click(rightArrow)
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  const leftArrow = queryByTestId("left-arrow")

  fireEvent.click(leftArrow)
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();


})

it("should hide the right arrow", () => {
  const {queryByTestId, queryByAltText } = render(<Carousel />)
  const rightArrow = queryByTestId("right-arrow")
  fireEvent.click(rightArrow)
  fireEvent.click(rightArrow)
  

  expect(rightArrow).not.toBeInTheDocument()
  expect(queryByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument()
  

})

it("should hide the left arrow", () => {
  const {queryByTestId, queryByAltText } = render(<Carousel />)
  const rightArrow = queryByTestId("right-arrow")
  fireEvent.click(rightArrow)
  const leftArrow = queryByTestId("left-arrow")
  fireEvent.click(leftArrow)
  
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(leftArrow).not.toBeInTheDocument()
  

})
