import { Rating } from "./components/Rating/Rating";
import { Accordion } from "./components/Accordion/Accordion";
import { AppTitle } from "./components/AppTitle/AppTitle";
import {OnOffComponent} from './components/OnOffComponent/OnOffComponent'

export const App = () => {
    return (
        <div className="App">
            <AppTitle text='the text if for AppTitle' />
            <Rating starCount={4} />
            <Accordion title='title one' itemsCount={1} collapsed={false} />
            <Rating starCount={2} />
            <Accordion title='title two' itemsCount={3} collapsed={true} />
            <div>-----------------------------------------------------</div>
            <OnOffComponent turnedOn={true}/>
            <OnOffComponent turnedOn={false}/>
        </div>
    );
}
