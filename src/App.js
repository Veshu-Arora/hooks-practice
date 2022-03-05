import UseCallbackHook from "./components/UseCallbackHook";
import UseRefHook from "./components/UseRefHook";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <UseRefHook /> */}
      <hr />
      <UseCallbackHook />
      <hr />
    </div>
  );
}
