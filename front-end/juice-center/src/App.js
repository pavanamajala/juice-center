import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/molecules/Header";
import { ViewCart } from "./components/organisms/ViewCart";
import { ViewAllAvailableItems } from "./components/pages/ViewAllAvailableItems";
import { ConnectGMail } from "./utils/Email/ConnectGMail";

function App() {

  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/all-items" element={<ViewAllAvailableItems />}/>
          <Route path="/cart" element={<ViewCart/>}/>
          <Route path="/email" element={<ConnectGMail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
