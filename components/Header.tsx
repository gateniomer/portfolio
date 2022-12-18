export const Header = () => {
  return (
  <header className='flex place-content-between lg:px-12 py-5 place-items-center'>
    <h1 className='text-3xl'>Omer Gatenio</h1>
    <nav className="hidden md:block">
      <ul className='flex gap-5'>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </nav>
  </header>)
}

export default Header;