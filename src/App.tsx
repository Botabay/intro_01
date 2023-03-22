//---------------00 -кабзда-------------------------
let b: boolean;
//b='ad' //error: wrong type of value
b=true; //good

let arr: Array<number | string>
//arr=[true,3n] //error: wrong type of value
arr=[4,4,'s',4];//good

//---------------01 -компоненты-------------------------
const App1 = () => { }// first type of used components (for a event handlers)
function App2 () { }// second(main) type of used components

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    ) ;
}

function Rating () {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}
function Accordion () {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function Star () {
    return (
        <div>
            star
        </div>
    )
}
function AccordionTitle () {
    //console.log('AccordionTitle is rendered')//tool for debugging
    //debugger; //tool for debugging
    return (
        <h3>
            Menu
        </h3>
    )
}
function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

function AppTitle () {
    return (
        <>This is title of the app</>
    )
}
export default App;
