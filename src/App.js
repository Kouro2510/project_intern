import {Route, Routes} from "react-router-dom";
import Page from "./Layout/Page/Page";
import "./App.css"
import ProductDetails from "./Conpoments/Page/ProductDetail/ProductDetails";

function App() {
  return (
    <Routes>

        <Route index path="/" element={<Page><ProductDetails/></Page>}/>
    </Routes>
  );
}

export default App;
