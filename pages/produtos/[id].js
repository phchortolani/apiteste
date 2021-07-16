
export async function getServerSideProps(context) {
    const id = context.query.id;
    const date = new Date();

    return {
        props: {
            id: id
        }
    }
}


export default function produtos(props) {
    return <p>Produto: {props.id}</p>

}