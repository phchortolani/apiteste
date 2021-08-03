import { parseCookies } from 'nookies';

export default function Signin() {
    return <div>
        Cadastrar Usuário
    </div>
}


export async function getServerSideProps(ctx) {

    const { token } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {}, // will be passed to the page component as props
    }
}