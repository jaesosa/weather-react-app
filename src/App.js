import "./index.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
          <div className="container">
         <Search />
         <Weather />
         <Forecast />
         <Footer />
       </div>
  );
}

export default App;
