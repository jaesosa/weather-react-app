import "./index.css";
import Weather from "./Weather";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
          <div className="container">
         <Weather defaultCity="New York" />
       <Footer />
       </div>
         
  );
}

export default App;
