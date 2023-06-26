import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PayContext = createContext({});


export const PayProvider = ({ children }) => {


    const [pay, setPay] = useState(false)
    const [logged, setLogged] = useState(false)


    useEffect(() => {
        const TOKEN = window.localStorage.getItem('token');
        if (TOKEN) {
            setLogged(true)
            const getStatus = async () => {
                axios.get('http://farimahhasan.ir/api/package/1/status', {
                    headers: {
                        //'Content-Type': 'application/json',
                        'Authorization': `Bearer ${TOKEN}`
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        if (response.data.status === true) {

                            window.localStorage.setItem("truePay", true)
                            setPay(true)
                        } else {

                            window.localStorage.setItem("truePay", false)
                            setPay(false)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
            getStatus()

        }else{
            setLogged(false)
            setPay(false)
        }

    },)
    return (
        <PayContext.Provider value={{ pay , logged}}>
            {children}
        </PayContext.Provider>
    )
}

export default PayContext;