import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Index from "./Components/Index";
import TransactionHistory from "./Components/TransactionHistory";
import SidebarRight from "./Bars/SidebarRight";

TransactionHistory;
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/transactions" element={<TransactionHistory />} />
        <Route path="/a" element={<SidebarRight />} />
      </Routes>
    </div>
  );
};

export default App;
