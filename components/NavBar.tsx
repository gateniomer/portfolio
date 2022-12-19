export const NavBar = () => {
  return (
    <nav className="font-semibold">
      <ul className='flex flex-col md:flex-row gap-2 md:gap-5 md:place-items-center'>
        <li className="cursor-pointer hover:border-b-2"><a href="#what_i_do">What I Do</a></li>
        <li className="cursor-pointer hover:border-b-2"><a href="#about">About</a></li>
        <li className="text-white bg-green-500 px-5 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all text-center"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;