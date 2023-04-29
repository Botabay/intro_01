import { Rating } from "./components/Rating/Rating";
import { Accordion } from "./components/Accordion/Accordion";
import { AppTitle } from "./components/AppTitle/AppTitle";
import {OnOffComponent} from './components/OnOffComponent/OnOffComponent'
import {InlineCssOnOffComponent} from './components/InlineCssOnOffComponent'
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating'
import { useState } from "react";
import {ratingValueType} from './components/Rating/Rating'

export const App = () => {
    const [starCountSt,setStarCountSt]=useState<ratingValueType>(1)
    return (
        <div className="App">
            <AppTitle text='the text if for AppTitle' />

            <Rating starCount={starCountSt} onClick={setStarCountSt}/>
            <Accordion title='title one' itemsCount={5} collapsed={false} />
            {/* <Rating starCount={2} /> */}
            <Accordion title='title two' itemsCount={2} collapsed={true} />
            <div>-----------------------------------------------------</div>
            <OnOffComponent turnedOn={true}/>
            <OnOffComponent turnedOn={false}/>
            <div>-----------------------------------------------------</div>
            <InlineCssOnOffComponent/>
            <UncontrolledAccordion title='title UncontrolledAccordion' itemsCount={3}/> 
            
            <UncontrolledRating />
        </div>
    );
}
