import React from "react";
import ReactDOM from "react-dom";
import AnimatedHeader from "../components/AnimatedHeader";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AnimatedHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
