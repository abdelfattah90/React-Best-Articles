import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar bg-neutral text-neutral-content '>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          React Articles
        </Link>
      </div>
      <div className='flex-none'>
        <Link to='/all-articles' className='btn btn-ghost'>
          All Articles
        </Link>
      </div>
    </div>
  )
}

export default Navbar
