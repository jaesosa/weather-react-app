import "./index.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
          <div className="container">
         <Weather defaultCity="New York" />
         <Forecast />
         <Footer />
       </div>
  );
}

export default App;
