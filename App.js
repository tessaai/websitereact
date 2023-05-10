import "./App.css";
import Components  from "./components/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Components />
    </div>
  );
}

export default App;
