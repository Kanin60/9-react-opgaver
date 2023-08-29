import { useState } from "react";
import { Wrapper } from "../Wrapper/Wrapper"
import { OnClickButton } from "../OnClickButton/OnClickButton"

export function Exercise4(){
    const [count, setCount] = useState(0)

    return(
        <Wrapper title={"Opgave 4"}>
            <p style={{marginTop:"1em", marginBottom:"1em", fontFamily:"sans-serif"}}>Du har trykket {count} gange</p>
            <OnClickButton clickEvent={()=> setCount(count+1)} />
        </Wrapper>
    )
}