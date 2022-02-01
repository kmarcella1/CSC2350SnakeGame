import "./styles.css";
// import Snake from "./Snake.ts";
import display from "./display";
import { useEffect } from "react";
import Snake from "./Snake";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    const snake1 = new Snake();
    snake1.move(4);
    display(snake1.position);
    snake1.turn();
    snake1.move(3);
    display(snake1.position);
    const snake2 = new Snake();
    snake2.move(5);
    snake2.turn();
    snake2.move(2);
    display(snake2.position);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
