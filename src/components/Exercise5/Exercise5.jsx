import style from './Exercise5.module.scss'
import { Wrapper } from "../Wrapper/Wrapper";

export function Exercise5(){
    const animalArray = ['Hund', 'Kat', 'Ko', 'Ged', 'Mus', 'Hest']

    return(
        <Wrapper title="Opgave 5">
            <ul>
                {animalArray.map((animal, index) => {
                        return <li key={animal + index}>{animal}</li>
                } )}
            </ul>
        </Wrapper>
    )
}