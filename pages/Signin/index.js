import { parseCookies } from 'nookies';
export default function Signin() {
    return <div>
        <label htmlFor="name">Nome Completo</label>
        <input id="name"></input>
        <label htmlFor="user">Nome de Usuário:</label>
        <input id="user"></input>
        <label htmlFor="pass">Senha:</label>
        <input id="pass"></input>
        <button>Inscreva-se</button>
    </div>
}


export async function getServerSideProps(ctx) {

    const { token } = parseCookies(ctx);

    if(!token){
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