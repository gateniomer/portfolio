export const NavBar = () => {
  return (
    <nav className="text-sm font-semibold">
      <ul className='md:flex gap-5 place-items-center'>
        <li className="cursor-pointer hover:border-b-2">What I Do</li>
        <li className="cursor-pointer hover:border-b-2"><a href="#about">About</a></li>
        <li className="text-white bg-green-500 px-5 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;