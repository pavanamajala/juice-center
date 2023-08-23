import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/molecules/Header";
import { ViewCart } from "./components/organisms/ViewCart";
import { ViewAllAvailableItems } from "./components/pages/ViewAllAvailableItems";

function App() {

  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/all-items" element={<ViewAllAvailableItems />}/>
          <Route path="/cart" element={<ViewCart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
