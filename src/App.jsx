import "./App.css";
import CustomerManager from "./components/CustomerManager";

function App() {
  return (
    <div className="flex items-center justify-center mx-auto h-screen bg-linear-to-r from-pink-300 to-blue-400">
      <CustomerManager />
    </div>
  );
}

export default App;
