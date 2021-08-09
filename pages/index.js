
import { parseCookies } from "nookies";
export default function Index() {}

export async function getServerSideProps(ctx) {

  const { token } = parseCookies(ctx);
      return {
          redirect: {
              destination: (token ? '/Dashboard' : '/Login'),
              permanent: false
          }
      }
  

}