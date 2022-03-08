import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar bg-neutral text-neutral-content '>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          React Blog
        </Link>
      </div>
      <div className='flex-none'>
        <Link to='/react' className='btn btn-ghost'>
          React
        </Link>
        <Link to='/nextjs' className='btn btn-ghost'>
          Next.js
        </Link>
        <Link to='/js' className='btn btn-ghost'>
          Javascript
        </Link>
      </div>
    </div>
  )
}

export default Navbar
