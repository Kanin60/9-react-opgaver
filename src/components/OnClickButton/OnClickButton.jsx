import style from './OnClickButton.module.scss'
export function OnClickButton({clickEvent}) {
    
    return(
        <button className={style.allButton} onClick={clickEvent}>Tryk her</button>
    )
}