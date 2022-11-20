interface ItemProps {
  item: {
    id: number;
    rating: number;
    text: string;
}
}

function FeedbackItem({ item }: ItemProps) {
  const { text, rating } = item;
  
    return (
    <div className='box bg-white rounded-2xl border-none px-12 py-10 my-10 relative'>
      <div className="box bg-secondary pt-3 w-12 h-12 text-center text-white rounded-full border border-disabled absolute -top-3 -left-3">
        {rating}
      </div>
      <p className="text-2xl font-semibold text-primary">
        {text}
      </p>
    </div>
  )
}

export default FeedbackItem
