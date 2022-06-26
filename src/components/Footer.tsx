import LogoRocketseat from '../assets/logo-rocketseat.svg';
export function Footer() {

  return(
    <footer className="w-full bg-gray-900 px-4 py-5 flex justify-between items-center border-t border-gray-500">
      <div className="flex gap-4 items-center justify-center">
        <img src={LogoRocketseat} alt="" />
        <span className='text-gray-300 text-sm'>Rocketseat - Todos os direitos reservados</span>
      </div>
      <span className='text-gray-300 text-sm'>Políticas de privacidade</span>
    </footer>
  );
}