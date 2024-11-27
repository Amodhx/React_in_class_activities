// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function Case(props:{content: string, function:Function}) {

    const  number  = props.content

    return(
        <>
            <button onClick={() => props.function(number)}>Count sh ould be here : {number}</button>
        </>
    )
}
export default Case