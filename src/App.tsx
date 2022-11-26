import {useState} from 'react'


import './App.css'
import {Title} from "./title/Title";

class Person {
    public name: string;
    private lastName: any;
    private address: string;
    private phone: string;

    constructor({name, lastName, phone, address}: Person) {
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
    };

}

function NewComponent() {
    return <>
        <h1>Vite + Reacts</h1>

        <h1>carlos</h1>
        <h1>this is so amazing</h1>
    </>;
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <NewComponent/>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is

                    {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <Title title={"carlos"}/>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
