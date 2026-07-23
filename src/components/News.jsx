import React from 'react'

const News = ({msg}) => {
  return (
    <div className='w-full flex flex-col gap-5 h-fit border-1 border-gray-500 rounded-3xl px-[10px] py-[20px]'>
      <h1 className='text-4xl font-bold text-center underline'>The Times of india</h1>
      <h2 className='text-xl'>Date of publication : </h2>
      <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde accusamus voluptate possimus eaque voluptatibus earum pariatur voluptatem illo non, ab labore quisquam, cupiditate rerum natus adipisci officia, neque harum.
      Corrupti quos voluptate animi eum? Quibusdam, odio fuga. Fuga tempore eum suscipit non? Quod assumenda explicabo delectus. Modi, tenetur? Earum maxime magni sapiente dolores quod labore odio inventore dolor minima!</p>
      <p className='text-2xl'>"The Indian stock market extended losses for the fourth session on Thursday, with Sensex and Nifty closing lower as oil prices soared after the US military completed its 12th successive night of strik… [+4610 chars]"</p>
    </div>
  )
}

export default News
