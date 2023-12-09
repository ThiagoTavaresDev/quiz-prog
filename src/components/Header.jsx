import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { useState } from "react";
export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <header className='min-h-[100px] min-w-[600px] sm:w-screen bg-gray-600 flex items-center justify-between px-20'>
      
            <h1 className='text-gray-200 font-bold text-3xl flex gap-2 items-center'>
                Quiz de Programação
                <span><FaHtml5/></span>
                <span><FaCss3Alt/></span>
                <span><FaJs/></span>
            </h1>
            <nav>
                <ul className='lg:flex lg:gap-12 font-bold lg:text-lg text-gray-200'>
                    <li className='lg:border-[1px] lg:border-transparent lg:hover:border-blue-300 lg:p-2 lg:rounded-sm lg:transition'>
                        <a href="/">Entrar</a>
                    </li>
                    <li className='lg:border-[1px] lg:border-transparent lg:hover:border-blue-300 lg:p-2 lg:transition lg:rounded-sm'>
                        <a href="/">Registrar-se</a>
                    </li>
                    <li className='lg:border-[1px] lg:border-transparent lg:hover:border-blue-300 lg:p-2 lg:rounded-sm lg:transition'>
                        <a href="/">Contato</a>
                    </li>
                </ul>
            </nav>
    
    </header>
  )
}
