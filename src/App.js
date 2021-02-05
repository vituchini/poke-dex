import './App.css';
import PokemonsContainer from "./components/PokemonsContainer";
import store from "./redux/redux-store"
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    PokeDex
                </header>
                <PokemonsContainer/>
            </div>
        </Provider>
    );
}

export default App;
