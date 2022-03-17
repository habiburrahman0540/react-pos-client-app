import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import Home from "./page/Home";
import Items from "./page/Items"
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/items" element={<Items/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
