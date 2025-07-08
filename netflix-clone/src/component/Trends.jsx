import Nav from './Nav'
import img01 from '../assets/img01.webp'
import img02 from '../assets/img02.webp'
function Trends() {

    const movies = [
        {
            "id": 1,
            "url":img01
        },
        {
            "id": 2,
            "url":img02
        },
        {
            "id": 3,
            "url":img01
        },
        {
            "id": 4,
            "url":img02
        },
        {
            "id": 5,
            "url":img01
        },
        {
            "id": 6,
            "url":img02
        },
        {
            "id": 7,
            "url":img01
        },
        {
            "id": 8,
            "url":img02
        },
    ]
  return (
    <div className='pt-10 p-10 py-0 bg-gradient-to-b from-black to-gray-900'>
        <div className='font-bold text-2xl '>Trending Now</div>
            <div className='flex gap-10   overflow-scroll hide-scrollbar'>
        {movies.map((movie , index) => {
            return(
                  <div key={index} className='pt-6 relative '>
                     <img className="rounded-2xl min-w-[150px]" src={movie.url} alt="" />
                         <div className='text-9xl font-bold absolute bottom-0 left-[-25px] text-stroke-white'>
                                {movie.id}
                        </div>   
                </div>
            )
        })}
            
            </div>
    </div>
  )
}

export default Trends