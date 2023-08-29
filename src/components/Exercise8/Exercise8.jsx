import { Wrapper } from "../Wrapper/Wrapper";
import { jsonJokes } from "./jokes";
import style from "./Exercise8.module.scss";

export function Exercise8() {
    return(
        <Wrapper title="Opgave 8">
            <div  className={style.jokeContainer}>
                {
                    jsonJokes.map((item, index) => {
                        return(
                            <div key={index}>
                                <h3>{item.setup}</h3>
                                <p>{item.punchline}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}