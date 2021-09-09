import NavBar from '../src/components/Nav/navbar';
//import { parseCookies } from "nookies";
export default function Index() {

    return (
        <>
            <NavBar />

        </>

    );
}

/*export async function getServerSideProps(ctx) {

  const { token } = parseCookies(ctx);
      return {
          redirect: {
              destination: (token ? '/Dashboard' : '/Login'),
              permanent: false
          }
      }


}*/