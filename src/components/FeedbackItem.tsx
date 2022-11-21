import Card from "./Card";
import { BsX } from 'react-icons/bs'

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
    <Card reverse={true}>
        <div className="box bg-secondary pt-2 w-12 h-12 text-center text-white text-xl font-normal rounded-full border border-disabled absolute -top-3 -left-3">
            {rating}
        </div>
        <button className='absolute top-3 right-3' onClick={() => {}}>
            <BsX color='purple' />
        </button>
        <p>
            {text}
        </p>
    </Card>
  )
}

export default FeedbackItem
