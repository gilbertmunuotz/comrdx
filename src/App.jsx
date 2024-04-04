import store from "./store/Store";
import { Provider } from "react-redux";
import MyCart from "./components/MyCart";
import Index from "./components/Index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="card">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Mycarts" element={<MyCart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App
