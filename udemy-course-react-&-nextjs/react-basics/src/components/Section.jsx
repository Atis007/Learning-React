export default function Section({ title, children, ...props }) {
    {/* ...props -> merge the rest of the data, into the props object, that was not manually extracted
        ... -> spread data on to some element*/}
    return <section { ...props }>
        <h2>{ title }</h2>
        { children }
    </section>
}