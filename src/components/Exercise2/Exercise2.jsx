import { OnClickButton } from '../OnClickButton/OnClickButton'
import { Wrapper } from '../Wrapper/Wrapper'

export function Exercise2() {

    return(
        <Wrapper title={"Opgave 2"}>
            <OnClickButton onClick={() => alert('Du har klikket på knappen')}>Tryk her!</OnClickButton>
        </Wrapper>
    )
    
}