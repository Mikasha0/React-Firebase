import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Create_Post from "./Create-Post/Create_Post";
import Register from "./Pages/Register";
import Formikk from "./Pages/Formikk";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactHookForm from "./Pages/ReactHookFrom";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();

  const [username, setUserName] = useState("");
  const [catFact, setCatFact] = useState("");

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider
          value={{ username, setUserName, catFact, setCatFact }}
        >
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createPost" element={<Create_Post />} />
              <Route path="/register" element={<Register color="green" />} />
              <Route path="/validate" element={<Formikk color="green" />} />
              <Route path="/reactHookForm" element={<ReactHookForm/>}/>
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
