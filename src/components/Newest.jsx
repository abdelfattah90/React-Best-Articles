const Newest = ({ newests }) => {
  return (
    <>
      <div className='container my-12 mx-auto px-4 md:px-12 bg-slate-50'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
          {newests.map((newest) => {
            const { id, title, url, img, date, from } = newest
            return (
              <div
                key={id}
                className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'
              >
                <a href={url}>
                  <article className='overflow-hidden rounded-lg shadow-lg'>
                    <img
                      alt='Placeholder'
                      className='block h-auto w-full min-h-full'
                      h
                      src={img}
                    />

                    <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
                      <h1 className='text-lg'>{title}</h1>
                    </header>

                    <footer className='flex items-center justify-between leading-tight py-5 px-2'>
                      <p className='ml-2 text-sm'>
                        From:
                        <span className='ml-1 text-sm text-zinc-500'>
                          {from}
                        </span>
                      </p>
                      <p className='text-indigo-600 text-sm'>{date}</p>
                    </footer>
                  </article>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Newest
