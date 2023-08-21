import React from 'react'
import { CodeUssd, TextUssd, BtnUssd } from "../../components/Carusel/style"
import { UssdCodes } from '../../mock/category'
const USSDList = () => {
    const getUSDDAndroid = (e) => {
        window?.Android?.CallUSSD(e);
    };
    const getUSDDIOS = (e) => {
        window?.webkit?.messageHandlers?.CallUSSD.postMessage(e);
      };
    return (
        <div className='w-[100%] h-[85vh] overflow-auto flex  flex-col justify-start items-center ' style={{ backgroundColor: "var(--bg-color)" }}>
            {UssdCodes.map((item, index) => {
                return <BtnUssd key={index} onClick={()=>{
                    getUSDDAndroid(`${item.code}`)
                    getUSDDIOS(`${item.code}`)
                }}><TextUssd>{item.title} </TextUssd> <CodeUssd>{item.code}</CodeUssd></BtnUssd>
            })}
        </div>
    )
}

export default USSDList