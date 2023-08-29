export function CreateList(props) {

    return(
        <table >
            <tbody>
                {props.list.map((item, index) => {
                    return(
                    <tr key={index}>
                        <td style={{border:"1px solid black", padding:"5px 30px"}}>{item.icon} {item.name}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}