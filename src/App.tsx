import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Poem from "./pages/Poem";
import PoemAdd from "./pages/PoemAdd";
import PoemEdit from "./pages/PoemEdit";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {

  return (
      <>

        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/poem" element={<Poem/>}/>
              <Route path="/addPoem" element={<PoemAdd/>}/>
              <Route path="/editPoem/:id" element={<PoemEdit/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </Wrapper>
        </BrowserRouter>

      </>
  )
}

export default App
