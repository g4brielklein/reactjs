export function Card(props) {
    const { title, description } = props

    return (
        <>
            <h1>Title: { title }</h1>
            <p>Description: { description }</p>
        </>
    )
}
