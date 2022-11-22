import { useState } from 'react'

interface RatingSelectProps {
    select:  (rating: number) => void
}

function RatingSelect({ select }: RatingSelectProps) {
    const [ selected, setSelected ] = useState(10)

    const ratings = []
    for(var i = 0; i <= 10; i++) {
        ratings.push(i)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(+e.target.value)
        select(+e.target.value)
        console.log(selected)
    }

  return (
        <ul className='flex flex-wrap justify-around m-auto my-10'>
            {ratings.map((i) => (
                <li key={`rating-${i}`} className={`relative p-3 bg-bgRating text-center text-lg rounded-full border-disabled transition-all w-[50px] h-[50px] hover:bg-secondary hover:text-white checked:bg-secondary checked:text-white`}>
                <input
                    className='hidden'
                    type='radio'
                    id={`num${i}`}
                    name='rating'
                    value={i}
                    onChange={handleChange}
                    checked={selected === i}
                />
                <label htmlFor={`num${i}`}>{i}</label>
                </li>
            ))}
        </ul>
  )
}

export default RatingSelect
