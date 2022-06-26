import { Link } from "react-router-dom";

export function NotFound() {
  return(
    <div className="bg-green-700 w-full h-screen">
      <h1>Not Found</h1>
        <Link to={'/'} className='text-cyan-600 text-2xl'>Ir para o iníco</Link>
    </div>
  );
}