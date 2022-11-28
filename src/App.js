import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Labelinput from './components/Labelinput';


function App() {

    const [bananas, setBananas] = useState(0);
    const [strawberrys, setStrawberrys] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState(0);
    const [deliverChoice, toggleDeliverChoice] = useState("");
    const [deliverDaychoice, toggleDeliverDayChoice] = useState("");
    const [note, setNote] = useState("");
    const [terms, toggleTerms] = useState(false);


    return (
        <>
            <div>
                <h1>Fruit Delivery</h1>
                <h3>Bananas</h3>
                <button
                    type="button"
                    className="bananas"
                    onClick={() => setBananas(bananas + 1)}
                >
                    +
                </button>
                <button
                    type="button"
                    className="bananas"
                    disabled={bananas === 0}
                    onClick={() => setBananas(bananas - 1)}
                >
                    -
                </button>


                <h3>Strawberrys</h3>
                <button
                    type="button"
                    className="strawberrys"
                    onClick={() => setStrawberrys(strawberrys + 1)}
                >
                    +
                </button>
                <button
                    type="button"
                    className="strawberrys"
                    disabled={strawberrys === 0}
                    onClick={() => setStrawberrys(strawberrys - 1)}
                >
                    -
                </button>



                <h3>Apples</h3>
                <button
                    type="button"
                    className="apples"
                    onClick={() => setApples(apples + 1)}
                >
                    +
                </button>
                <button
                    type="button"
                    className="apples"
                    disabled={apples === 0}
                    onClick={() => setApples(apples - 1)}
                >
                    -
                </button>



                <h3>Kiwis</h3>
                <button
                    type="button"
                    className="kiwis"
                    onClick={() => setKiwis(kiwis + 1)}
                >
                    +
                </button>
                <button
                    type="button"
                    className="kiwis"
                    disabled={kiwis === 0}
                    onClick={() => setKiwis(kiwis - 1)}
                >
                    -
                </button>

                <br/>
                <br/>
                <button
                    type="button"
                    onClick={() => resetQuantity()}
                >
                    Reset
                </button>
            </div>

            <br/>
            <br/>


            <div>
                <form onSubmit={sendForm}>
                    <label form="firstname-field">Firstname</label>
                    <br/>
                    <input
                        type="text"
                        value={firstname}
                        onChange={(c) => setFirstname(c.target.value)}
                    />
                    <br/>


                    <label form="lastname-field">Lastname</label>
                    <br/>
                    <input
                        type="text"
                        value={lastname}
                        onChange={(c) => setLastname(c.target.value)}
                    />
                    <br/>


                    <label form="age-field">Age</label>
                    <br/>
                    <input
                        type="text"
                        value={age}
                        onChange={(c) => setAge(c.target.value)}
                    />
                    <br/>


                    <label form="zipcode-field">Zipcode</label>
                    <br/>
                    <input
                        type="text"
                        value={zipcode}
                        onChange={(c) => setZipcode(c.target.value)}
                    />
                    <br/>


                    <label form="deliver-field">DeliverChoice</label>
                    <br/>
                    <select
                        value={deliverChoice}
                        onChange={(c) => toggleDeliverChoice(c.target.value)}
                    >
                        <option value="week">Every week</option>
                        <option value="weeks">Every 2 weeks</option>
                        <option value="month">Every month</option>
                    </select>
                    <br/>


                    <label form="day-field">Day</label>
                    <input
                        type="radio"
                        value="day"
                        checked={deliverDaychoice === "day"}
                        onChange={(c) => toggleDeliverDayChoice(c.target.value)}
                    />
                    <br/>


                    <label form="evening-field">Evening</label>
                    <input
                        type="radio"
                        value="evening"
                        checked={deliverDaychoice === "evening"}
                        onChange={(c) => toggleDeliverDayChoice(c.target.value)}
                    />
                    <br/>


                    <label form="note-field">Note</label>
                    <br/>
                    <textarea
                        type="text"
                        value={note}
                        onChange={(c) => setNote(c.target.value)}
                        rows={10}
                    />
                    <br/>


                    <label form="terms-field">I accept the terms</label>
                    <input
                        type="checkbox"
                        value={terms}
                        onChange={(c) => toggleTerms(c.target.value)}
                    />

                    <br/>
                    <button type="submit">Send</button>

                </form>
            </div>

        </>
    );


    function resetQuantity() {
        setBananas(0);
        setStrawberrys(0);
        setApples(0);
        setKiwis(0);
    }


    function sendForm(event) {
        event.preventDefault();
        console.log({firstname}, {lastname}, {age}, {zipcode}, {deliverChoice}, {deliverDaychoice}, {note}, {terms});
        console.log({bananas}, {strawberrys}, {apples}, {kiwis});
    }



    // (3)
    //
    // return (
    //     <>
    //         <div>
    //             <h1>Fruit Delivery</h1>
    //             <Counter
    //                 fruitType={bananas}
    //                 counter={bananas}
    //                 setCount={setBananas()}
    //             />
    //             <Counter
    //                 fruitType={strawberrys}
    //                 counter={strawberrys}
    //                 setCount={setStrawberrys()}
    //             />
    //             <Counter
    //                 fruitType={apples}
    //                 counter={apples}
    //                 setCount={setApples()}
    //             />
    //             <Counter
    //                 fruitType={kiwis}
    //                 counter={kiwis}
    //                 setCount={setKiwis()}
    //             />
    //
    //             <br />
    //             <br />
    //             <Button
    //                 type="button"
    //                 onClick={() => resetQuantity()}
    //             >
    //                 Reset
    //             </Button>
    //         </div>
    //
    //
    //
    //
    //         <div>
    //             <form onSubmit={sendForm}>
    //                 <Labelinput label="Firstname" type="text" name="firstname" value={firstname} handler={setFirstname}/>
    //
    //                 <br />
    //                 <Labelinput label="Lastname" type="text" name="lastname" value={lastname} handler={setLastname}/>
    //
    //                 <br />
    //                 <Labelinput label="Age" type="number" name="age" value={age} handler={setAge}/>
    //
    //                 <br />
    //                 <Labelinput label="Zipcode" type="number" name="zipcode" value={zipcode} handler={setZipcode}/>
    //
    //                 <br />
    //
    //                 <select
    //                     value={deliverChoice}
    //                     onChange={(c) => toggleDeliverChoice(c.target.value)}
    //                 >
    //                     <option value="week">Every week</option>
    //                     <option value="weeks">Every 2 weeks</option>
    //                     <option value="month">Every month</option>
    //                 </select>
    //                 <br />
    //
    //
    //                 <label for="day-field">Day</label>
    //                 <input
    //                     type="radio"
    //                     value="day"
    //                     checked={deliverDaychoice === "day"}
    //                     onChange={(c) => toggleDeliverDayChoice(c.target.value)}
    //                 />
    //                 <br />
    //
    //
    //                 <label for="evening-field">Evening</label>
    //                 <input
    //                     type="radio"
    //                     value="evening"
    //                     checked={deliverDaychoice === "evening"}
    //                     onChange={(c) => toggleDeliverDayChoice(c.target.value)}
    //                 />
    //                 <br />
    //
    //
    //                 <label for="note-field">Note</label>
    //                 <br />
    //                 <textarea
    //                     type="text"
    //                     value={note}
    //                     onChange={(c) => setNote(c.target.value)}
    //                     rows={10}
    //                 />
    //                 <br />
    //
    //
    //                 <label for="terms-field">I accept the terms</label>
    //                 <input
    //                     type="checkbox"
    //                     value={terms}
    //                     onChange={(c) => toggleTerms(c.target.value)}
    //                 />
    //
    //                 <br />
    //                 <Button type="submit">Send</Button>
    //
    //             </form>
    //         </div>
    //
    //     </>
    // );



}

export default App;






