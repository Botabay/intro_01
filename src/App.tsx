import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {AppTitle} from "./components/AppTitle/AppTitle";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    ) ;
}

export default App;
