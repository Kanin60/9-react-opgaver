import { Wrapper } from "../Wrapper/Wrapper"
import { CreateList } from "./CreateList"
//ICONS
import { ReactComponent as Cat } from "../../assets/cat.svg";
import { ReactComponent as Cow } from "../../assets/cow.svg";
import { ReactComponent as Dog } from "../../assets/dog.svg";
import { ReactComponent as Horse } from "../../assets/horse.svg";
import { ReactComponent as Goat } from "../../assets/goat.svg";
import { ReactComponent as Mouse } from "../../assets/mouse.svg";

export function Exercise6(){
    const animalList =[
        {name: 'Hund', icon: <Dog/>},
        {name: 'Kat', icon: <Cat/>},
        {name: 'Ko', icon: <Cow/>},
        {name: 'Ged', icon: <Goat/>},
        {name: 'Mus', icon: <Mouse/>},
        {name: 'Hest', icon: <Horse/>},
    ]

    return(
        <Wrapper title={"Opgave 6"}>
            <CreateList list={animalList} />
        </Wrapper>
    )
}