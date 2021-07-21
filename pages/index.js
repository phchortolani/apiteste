import Home from "./Home";
import 'tailwindcss/tailwind.css'

export default function Index() {
    return <div>
        <style jsx global>{`
      body {
        background: linear-gradient(45deg, #ffeb3b, #fb65655c);
    
      }
      html {    
            height: 100vh;
      }
    `}</style>
        <Home />
    </div>
}