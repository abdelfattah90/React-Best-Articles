const ReactArticles = ({ reactArticles }) => {
  return (
    <>
      <div className='container my-12 mx-auto px-4 md:px-12 bg-slate-50'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
          {reactArticles.map((reactArticle) => {
            const { id, title, url, img, from } = reactArticle
            return (
              <div
                key={id}
                className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'
              >
                <a href={url} target='_blank' rel='noreferrer'>
                  <article className='overflow-hidden rounded-lg shadow-lg'>
                    <img
                      className='object-cover h-48 w-96'
                      src={img}
                      alt='Placeholder'
                    />

                    <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
                      <p className='text-lg font-bold hover:underline'>
                        {title}
                      </p>
                    </header>

                    <footer className='flex items-center justify-between leading-tight py-5 px-2'>
                      <p className='ml-2 text-sm'>
                        <span className='font-bold'>From:</span>
                        <span className='ml-1 text-sm text-zinc-500'>
                          {from}
                        </span>
                      </p>
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

export default ReactArticles
