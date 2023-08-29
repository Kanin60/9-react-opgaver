import style from "../Wrapper/Wrapper.module.scss";

export function Wrapper({title, children}) {

const randomColor = () => { 
    let r = Math.floor(Math.random(0)*255)
    let g = Math.floor(Math.random(0)*255)
    let b = Math.floor(Math.random(0)*255)
    return "solid 3px rgb(" + r + "," + g + "," + b + ")"}

    return(
        <div className={style.Wrapper} style={{border: randomColor()}}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}