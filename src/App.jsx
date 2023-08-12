import "./App.css";
import { CardDetails } from "./components/CardDetails";
import { CardImages } from "./components/CardImages";
import { Header } from "./components/Header";

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <CardImages />
                <CardDetails />
            </div>
        </>
    );
}

export default App;
