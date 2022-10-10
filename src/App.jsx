import "./App.css";
import MyPDF from "./book/MoonPhases.pdf";

function App() {
  return (
    <main className="App">
      <h1>Moon Phases</h1>
      <p>
        "At first, I felt like a wheel on a boat; Downright useless..."
      </p>

      <a href={MyPDF} download="Moon Phases - Simon Reinhardt.pdf">
        <button>Download</button>
      </a>
    </main>
  );
}

export default App;
