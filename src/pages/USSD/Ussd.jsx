import React from 'react'
import { CodeUssd, TextUssd, BtnUssd } from "../../components/Carusel/style"
import { UssdCodes } from '../../mock/category'
const USSDList = () => { 
    return (
        <div className='w-[100%] h-[100%] flex flex-col justify-start items-center ' style={{ backgroundColor: "var(--bg-color)" }}>
            {UssdCodes.map((item, index) => {
                return <BtnUssd key={index}><TextUssd>{item.title} </TextUssd> <CodeUssd>{item.code}</CodeUssd></BtnUssd>
            })}
        </div>
    )
}

export default USSDList