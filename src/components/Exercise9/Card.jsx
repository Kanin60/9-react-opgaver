import style from "./Card.module.scss"
import { FaFaceSmileBeam } from 'react-icons/fa6';
export function Card(props) {
    
    return(
        <>
            <div className={style.card}>
                <div className={style.frontAndBackContainer}>
                    <div className={style.cardFront}>
                        <img src={props.src} alt="Avatar" />
                        <article>
                            <h5>{props.name}</h5>
                            <p className={style.cardText}>{props.title}</p>
                            <p className={style.cardText}>{props.keySkill}</p>
                        </article>
                    </div>
                    <div className={style.cardBack}>
                        <article>
                            <h5>{props.name}</h5>
                            <p className={style.cardText}>{props.phone}</p>
                            <p className={style.cardText}>{props.email}</p>
                            <p className={style.cardText}>{props.birthday}</p>
                            <p className={style.cardText}>{props.country}</p> 
                            <FaFaceSmileBeam className={style.emoji}/>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}