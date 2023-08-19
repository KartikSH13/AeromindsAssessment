import { useEffect, useState } from "react"

import Img from "./Img";
export default function(){
    const [img,setimg]=useState(0);
    async function loop() {
        setTimeout(()=>{
            img==0?setimg(1):setimg(0)
        },2000)
    }
    loop()
    return <div className="right-side">
        <Img ind={img}/>
    </div>
}