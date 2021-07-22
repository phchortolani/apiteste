import Login from "./Login/login";
import 'tailwindcss/tailwind.css'

export default function Index() {
  return <div>
    <style jsx global>{`
      body {
        background: linear-gradient(45deg, #ffeb3b, #fb65655c);
        margin: 0;
        padding: 0;

    
      }
      html {    
            height: 100vh;
      }
    `}</style>
    <Login />
  </div>
}