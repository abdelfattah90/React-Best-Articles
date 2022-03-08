import mainImg from './main.png'

function Header() {
  return (
    <>
      <div className='container p-5 flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28'>
        <div className='flex flex-1 flex-col items-center lg:items-start'>
          <h2 className='text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6'>
            React Best Articles
          </h2>

          <p className='text-bookmark-grey text-lg text-center lg:text-left mb-6'>
            ReactJS developers apparently love to write and share their coding
            experiences. Therefore, you can find a lot of platforms, blogs, and
            so on with interesting and practical information. Here is a
            collection of articles on ReactJS framework that are undoubtedly
            worth reading.
          </p>

          <div className='flex justify-center flex-wrap gap-6'>
            <button
              type='button'
              className='btn btn-purple hover:bg-bookmark-white'
            >
              Check it out!
            </button>
          </div>
        </div>
        <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
          <img
            className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
            src={mainImg}
            alt=''
          />
        </div>
      </div>
    </>
  )
}

export default Header
