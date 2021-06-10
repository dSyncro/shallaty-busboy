import axios from 'axios';
import React from 'react';
import { IoBarcodeOutline } from "react-icons/io5";

export default class RistocodeLogin extends React.Component {

    state = {
        ristocode: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            ristocode: this.state.ristocode
        }

        const res = await axios.post("/api/ristologin", data);
        console.log(res.data);
    }

    render() {
        return (
            <form className="flex flex-col gap-6 items-center">
                <div className="group flex bg-opacity-10 bg-white font-open-sans px-4 py-2 rounded-full text-xl focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-600 items-center">
                    <IoBarcodeOutline />
                    <input
                        type="text"
                        placeholder="Inserisci il ristocode"
                        className="bg-transparent text-center appearance-none focus:outline-none"
                        value={this.state.ristocode}
                        onChange={e => { this.setState({ ristocode: e.target.value }) }} />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button onClick={this.handleLogin} type="submit" className="font-poppins transition-colors duration-200 bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700 text-2xl py-3 px-8 rounded-full">Accedi</button>
                    <a className="font-open-sans text-sm hover:text-yellow-500 transition-colors duration-200" href="#">Non hai il codice?</a>
                </div>
            </form>
        )
    }
}
