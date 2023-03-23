import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {AppTitle} from "./components/AppTitle/AppTitle";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating starCount={4}/>
            <Accordion/>
            <Rating starCount={2}/>
            <Accordion/>
        </div>
    ) ;
}

export default App;
