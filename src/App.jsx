import "./App.css";
import { CardImages } from "./components/CardImages";
import { Header } from "./components/Header";

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <CardImages />
            </div>
        </>
    );
}

export default App;
