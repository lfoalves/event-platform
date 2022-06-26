import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export function NotFound() {
  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Fora de Órbita</h1>
        <Link to={'/'} className='text-cyan-600 text-3xl hover:underline transition-all'>Ir para o início</Link>

        <div className="fixed bottom-0 w-full">
        <Footer />
        </div>
    </div>
  );
}