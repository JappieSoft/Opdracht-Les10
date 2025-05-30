import './App.css';
import {useState} from "react";
import Fruits from "./components/Fruits/Fruits.jsx";
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

    function calcIncrement(inputArray) {
        let value = (inputArray + 1);
        return value;
    }

    function calcDecrement(inputArray) {
        let value = inputArray > 0 ? inputArray - 1 : 0;
        return value;
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
                    <div>
                        <article>
                            <Fruits img={strawberryIMG} title="Aardbeien" name="strawberry"/>
                            <div className="fruitButtons">
                                <button className="calcButton"
                                        onClick={() => setStrawberry(calcDecrement(strawberry))}>-
                                </button>
                                <p>{strawberry}</p>
                                <button className="calcButton"
                                        onClick={() => setStrawberry(calcIncrement(strawberry))}>+
                                </button>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article>
                            <img src={pearIMG} alt="pear"/>
                            <h3>Peer</h3>
                            <div className="fruitButtons">
                                <button className="calcButton" onClick={() => setPear(calcDecrement(pear))}>-</button>
                                <p>{pear}</p>
                                <button className="calcButton" onClick={() => setPear(calcIncrement(pear))}>+</button>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article>
                            <img src={melonIMG} alt="melon"/>
                            <h3>Meloen</h3>
                            <div className="fruitButtons">
                                <button className="calcButton" onClick={() => setMelon(calcDecrement(melon))}>-</button>
                                <p>{melon}</p>
                                <button className="calcButton" onClick={() => setMelon(calcIncrement(melon))}>+</button>
                            </div>
                        </article>
                    </div>
                    <div>
                        <article>
                            <img src={pineappleIMG} alt="pineapple"/>
                            <h3>Ananas</h3>
                            <div className="fruitButtons">
                                <button className="calcButton"
                                        onClick={() => setPineapple(calcDecrement(pineapple))}>-
                                </button>
                                <p>{pineapple}</p>
                                <button className="calcButton"
                                        onClick={() => setPineapple(calcIncrement(pineapple))}>+
                                </button>
                            </div>
                        </article>
                    </div>
                </section>
                <section>
                    <div>
                        <button onClick={() => calcReset()}>Reset</button>
                    </div>
                </section>
               <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Order Gegevens</legend>
                            <label htmlFor="form-firstname">Voornaam:
                                <input
                                    type="text"
                                    id="form-firstname"
                                    name="firstname"
                                    value={formState.firstname}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="form-lastname">Achternaam:
                                <input
                                    type="text"
                                    id="form-lastname"
                                    name="lastname"
                                    value={formState.lastname}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="form-age">Leeftijd:
                                <input
                                    type="text"
                                    id="form-age"
                                    name="age"
                                    value={formState.age}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="form-postcode">Postcode:
                                <input
                                    type="text"
                                    id="form-postcode"
                                    name="postcode"
                                    value={formState.postcode}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="form-frequentie">Bezorg frequentie:
                                <select value={formState.frequentie}
                                        type="text"
                                        id="form-frequentie"
                                        name="frequentie"
                                        onChange={handleChange}>
                                    <option value="weekly">Iedere Week</option>
                                    <option value="biWeekly">Om de Week</option>
                                    <option value="monthly">Iedere Maand</option>
                                </select>
                            </label>
                                <div>
                                    <legend>Bezorg tijdvak:</legend>
                                    <div>
                                        <input
                                            id="form-time-day"
                                            type="radio"
                                            name="time"
                                            value={formState.time = "day"}
                                            onClick={handleChange}
                                        />
                                        <label htmlFor="form-time-day">Overdag
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            id="form-time-evening"
                                            type="radio"
                                            name="time"
                                            value={formState.time = "evening"}
                                            onClick={handleChange}
                                        />
                                        <label htmlFor="form-time-evening">In de avond
                                        </label>
                                    </div>
                                </div>
                            <div>
                            <legend>Opmerkingen?</legend>
                            <label htmlFor="form-comments">
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
                            <label htmlFor="form-terms">
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
