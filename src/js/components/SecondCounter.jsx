import React, { useEffect, useState } from 'react';

let segundos1 = 0
let segundos2 = 0
let minutos1 = 0
let minutos2 = 0
let horas1 = 0
let horas2 = 0

const SecondCounter = () => {

    const [tick, setTick] = useState(0)

    useEffect(() => {

        const actualizarReloj = () => {
            segundos1++;

            if (segundos1 >= 10) {
                segundos1 = 0;
                segundos2++;
            }

            if (segundos2 >= 6) {
                segundos2 = 0
                minutos1++
            }


            if (minutos1 >= 10) {
                minutos1 = 0
                minutos2++
            }

            if (minutos2 >= 6) {
                minutos2 = 0
                horas1++
            }

            if (horas1 >= 10) {
                horas1 = 0
                horas2++
            }

            setTick(prev => prev +1)
        }

        const intervalo = setInterval(() => {
            actualizarReloj()
        }, 1000)

        return () => {
            clearInterval(intervalo);
        };
    }, []);

    return (
        <div className="container mt-9 d-flex justify-content-center">
            <div className="card text-center shadow bg-black mt-5" style={{ width: '68rem' }}>
                <div className="card-body">
                    <h1 className="display-1 fw-bold text-white my-3">
                        <i className="fa-solid fa-clock"> </i>
                        {" " + horas2}
                        {" " + horas1}
                        {" : " + minutos2}
                        {" " + minutos1}
                        {" : " + segundos2}
                        {" " + segundos1}
                    </h1>
                </div>
            </div>
        </div>
    );
}
 
export default SecondCounter;