import "./App.css";
import { WelcomeWindow } from "./components/welcomeWindow";
require("normalize-css");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeWindow />
      </header>
    </div>
  );
}

export default App;
