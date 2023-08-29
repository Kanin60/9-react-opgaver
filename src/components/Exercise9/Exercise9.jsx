import { useEffect, useState } from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { Card } from "./Card"
import style from "./Exercise9.module.scss";

export function Exercise9() {

    const [userData, setUserData] = useState([])
    
    useEffect(() => {
        const fetchUsers = () => {
            const url = "https://random-data-api.com/api/users/random_user?size=9"
            fetch(url).then(result => result.json()).then(data => setUserData(data))
        }
        fetchUsers()
    },[])
    console.log(userData);
    return(
        <Wrapper title="Opgave9">
            <section className={style.cardContainer}>
                {
                    userData && userData.map((item) =>{
                        return(
                            <Card
                                key={item.uid}
                                src={item.avatar}
                                name={item.first_name + " " +  item.last_name}
                                birthday={item.date_of_birth}
                                email={item.email}
                                title={item.employment.title}
                                keySkill={item.employment.key_skill}
                                country={item.address.state + ", " + item.address.country}
                                phone={item.phone_number}
                            />
                        )
                    })
                }
            </section>
        </Wrapper>
    )
}