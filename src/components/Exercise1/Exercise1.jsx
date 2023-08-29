//importer style
import style from './Exercise1.module.scss'
import { Wrapper } from '../Wrapper/Wrapper'

//lav en gul firkant med text i midten
export function Exercise1() {
    
    return(
        <Wrapper title={"Opgave 1"}>
            <div className={style.yellowSquare}>
                <p className={style.helloText}>Hello, World!</p>
            </div>
        </Wrapper>
                
    )
}