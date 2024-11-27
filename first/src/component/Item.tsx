export default function Item(props :{title:string,description:string}) {
    return(
        <>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </>
    )
}
// export default function Item({title,description}: {title: string; description: string}) {
//     return(
//         <>
//             <h5>{title}</h5>
//             <p>{description}</p>
//
//         </>
//     )
// }