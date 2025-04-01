import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Index from "./Components/Index";
import TransactionHistory from "./Components/TransactionHistory";
import { UserContext } from "./Context/AppContext";

const App = () => {
  return (
    <div className="App">
      <UserContext>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transactions" element={<TransactionHistory />} />
        </Routes>
      </UserContext>
    </div>
  );
};

export default App;
