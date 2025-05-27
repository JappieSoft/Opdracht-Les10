import './App.css';
import { useState } from "react";
import Fruits from "./components/Fruits/Fruits.jsx";
import strawberryIMG from "./assets/strawberry.png";
import pearIMG from "./assets/pear.png";
import melonIMG from "./assets/melon.png";
import pineappleIMG from "./assets/pineapple.png";




function App() {

    const [strawberry, setStrawberry] = useState(0);
    const [pear, setPear] = useState(0);
    const [melon, setMelon] = useState(0);
    const [pineapple, setPineapple] = useState(0);

    function calcReset(){
        setStrawberry(0) ;
        setPear(0) ;
        setMelon(0) ;
        setPineapple(0);
    }

    function calcIncrement(inputArray) {
        let value = (inputArray + 1) ;
        return value;
    }

    function calcDecrement(inputArray) {
        let value = inputArray > 0 ? inputArray - 1 : 0;
        return value;
    }


    return (
        <>
            <main>

                <h1>Fruitmand bezorgservice</h1>
                <section>
                <div>
                    <article>
                        <Fruits img={strawberryIMG} title="Aardbeien" name="strawberry"/>
                        <div className="fruitButtons">
                            <button className="calcButton" onClick={() => setStrawberry(calcDecrement(strawberry))}>-</button>
                            <p>{strawberry}</p>
                            <button className="calcButton" onClick={() => setStrawberry(calcIncrement(strawberry))}>+</button>
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
                            <button className="calcButton" onClick={() => setPineapple(calcDecrement(pineapple))}>-</button>
                            <p>{pineapple}</p>
                            <button className="calcButton" onClick={() => setPineapple(calcIncrement(pineapple))}>+</button>
                        </div>
                    </article>
                </div>
                </section>
                <section>
                <div>
                    <button onClick={() => calcReset()}>Reset</button>
                </div>
                </section>
            </main>
        </>
    )
}

export default App
