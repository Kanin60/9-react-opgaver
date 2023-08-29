import style from "../OnClickButton/OnClickButton.module.scss"

export function AlertButton(props) {
    return(
        <button className={style.allButton} onClick={() => alert("Du trykkede på " + props.title)}>{props.title}</button>
    )
    
}