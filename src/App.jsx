import './App.css';
import {useState} from "react";
import Fruits from "./components/Fruits/Fruits.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import InputForm from "./components/InputForms/Inputform.jsx";
import calcIncrement, {calcDecrement} from "./helpers/calculations.js";
import strawberryIMG from "./assets/strawberry.png";
import pearIMG from "./assets/pear.png";
import melonIMG from "./assets/melon.png";
import pineappleIMG from "./assets/pineapple.png";


function App() {


    /*------------------order calculator-----------------------------------------------------------*/


    const [strawberry, setStrawberry] = useState(0);
    const [pear, setPear] = useState(0);
    const [melon, setMelon] = useState(0);
    const [pineapple, setPineapple] = useState(0);

    function calcReset() {
        setStrawberry(0);
        setPear(0);
        setMelon(0);
        setPineapple(0);
    }


    /*------------------form actions-----------------------------------------------------------*/

    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        age: "",
        postcode: "",
        frequentie: "",
        time: "",
        comments: "",
        terms: false,
    });


    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }


    const handleSubmit = (event) => {

        console.log(event.target.firstname.value);
        console.log(event.target.lastname.value);
        console.log(event.target.age.value);
        console.log(event.target.postcode.value);
        console.log(event.target.frequentie.value);
        console.log(event.target.time.value);
        console.log(event.target.comments.value);
        console.log(event.target.terms.checked);

        console.log("Order details:");
        console.log(`Strawberries: ${strawberry}`);
        console.log(`Pears: ${pear}`);
        console.log(`Melons: ${melon}`);
        console.log(`Pineapple's: ${[pineapple]}`);


        event.preventDefault(formState);
    };


    /*------------------form actions end-----------------------------------------------*/

    return (


        <>
            <main>
                <h1>Fruitmand bezorgservice</h1>
                <section>
                    <Fruits img={strawberryIMG} title="Aardbeien" name="strawberry">
                        {() => (
                            <div className="fruitButtons">
                                <Buttons style={"calcButton"} buttonType={"-"}
                                         onClick={() => setStrawberry(calcDecrement(strawberry))}/>
                                <p>{strawberry}</p>
                                <Buttons style={"calcButton"} buttonType={"+"}
                                         onClick={() => setStrawberry(calcIncrement(strawberry))}/>
                            </div>
                        )}
                    </Fruits>
                    <Fruits img={pearIMG} title="Peren" name="pear">
                        {() => (
                            <div className="fruitButtons">
                                <Buttons style={"calcButton"} buttonType={"-"}
                                         onClick={() => setPear(calcDecrement(pear))}/>
                                <p>{pear}</p>
                                <Buttons style={"calcButton"} buttonType={"+"}
                                         onClick={() => setPear(calcIncrement(pear))}/>
                            </div>
                        )}
                    </Fruits>
                    <Fruits img={melonIMG} title="Meloen" name="melon">
                        {() => (
                            <div className="fruitButtons">
                                <Buttons style={"calcButton"} buttonType={"-"}
                                         onClick={() => setMelon(calcDecrement(melon))}/>
                                <p>{melon}</p>
                                <Buttons style={"calcButton"} buttonType={"+"}
                                         onClick={() => setMelon(calcIncrement(melon))}/>
                            </div>
                        )}
                    </Fruits>
                    <Fruits img={pineappleIMG} title="Ananas" name="pineapple">
                        {() => (
                            <div className="fruitButtons">
                                <Buttons style={"calcButton"} buttonType={"-"}
                                         onClick={() => setPineapple(calcDecrement(pineapple))}/>
                                <p>{pineapple}</p>
                                <Buttons style={"calcButton"} buttonType={"+"}
                                         onClick={() => setPineapple(calcIncrement(pineapple))}/>
                            </div>
                        )}
                    </Fruits>
                </section>
                <section>
                    <div>
                        <Buttons buttonType={"Reset"} onClick={() => calcReset()}/>
                    </div>
                </section>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Order Gegevens</legend>
                            <InputForm name="Voornaam" title="firstname">
                                <input
                                    type="text"
                                    id="form-firstname"
                                    name="firstname"
                                    value={formState.firstname}
                                    onChange={handleChange}
                                />
                            </InputForm>
                            <InputForm name="Achternaam" title="form-lastname">
                                <input
                                    type="text"
                                    id="form-lastname"
                                    name="lastname"
                                    value={formState.lastname}
                                    onChange={handleChange}
                                />
                            </InputForm>
                            <InputForm name="Leeftijd" title="form-age">
                                <input
                                    type="text"
                                    id="form-age"
                                    name="age"
                                    value={formState.age}
                                    onChange={handleChange}
                                />
                            </InputForm>
                            <InputForm name="Postcode" title="form-postcode">
                               <input
                                    type="text"
                                    id="form-postcode"
                                    name="postcode"
                                    value={formState.postcode}
                                    onChange={handleChange}
                                />
                            </InputForm>
                            <InputForm name="Bezorg frequentie" title="form-frequentie">
                                <select value={formState.frequentie}
                                        id="form-frequentie"
                                        name="frequentie"
                                        onChange={handleChange}>
                                    <option value="weekly">Iedere Week</option>
                                    <option value="biWeekly">Om de Week</option>
                                    <option value="monthly">Iedere Maand</option>
                                </select>
                            </InputForm>
                            <div>
                                <legend>Bezorg tijdvak:</legend>
                                <div className="formItems">
                                    <label htmlFor="form-time-day">Overdag
                                    </label>
                                    <input
                                        id="form-time-day"
                                        type="radio"
                                        name="time"
                                        value={formState.time = "day"}
                                        onClick={handleChange}
                                    />
                                </div>
                                <div className="formItems">
                                    <label htmlFor="form-time-evening">In de avond
                                    </label>
                                    <input
                                        id="form-time-evening"
                                        type="radio"
                                        name="time"
                                        value={formState.time = "evening"}
                                        onClick={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <legend>Opmerkingen?</legend>
                                <label htmlFor="form-comments" className="formItems">
                                <textarea id="form-comments"
                                          name="comments"
                                          rows="5"
                                          cols="40"
                                          spellCheck="true"
                                          placeholder="Nog andere handige informatie?"
                                          value={formState.comments}
                                          onChange={handleChange}
                                    >
                                    </textarea>
                                </label>
                            </div>
                            <label htmlFor="form-terms" className="formItems">
                                <input
                                    type="checkbox"
                                    id="form-terms"
                                    name="terms"
                                    checked={formState.terms}
                                    onChange={handleChange}
                                />
                                Akkoord met de algemene voorwaarden
                            </label>
                            <button type="submit">Versturen</button>
                        </fieldset>
                    </form>
                </section>
            </main>
        </>
    )
}

export default App
