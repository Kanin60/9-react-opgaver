import { useState } from 'react'
import { Wrapper } from '../Wrapper/Wrapper'
import style from "./exercise7.module.scss"

export function Exercise7() {

    const [firstName, setFisrtName] = useState("")
    const [lastName, setLastName] = useState("")
    
    function alertUser() {
        alert(`Hello ${firstName} ${lastName}`)
    }

    return(
        <Wrapper title="Opgave 7">
            <form className={style.formstyle}>
                <div>
                    <input onChange={(event)=> setFisrtName(event.target.value)} name="fname" type="text" placeholder='Skriv dit fornavn her' />
                    <input onChange={(event)=> setLastName(event.target.value)} name="lname" type="text" placeholder='Skriv dit efternavn her' />
                    <button type='button' onClick={()=> alertUser()} className={style.redButton}>Tryk her</button>
                </div>

            </form>
        </Wrapper>
    )
        
}