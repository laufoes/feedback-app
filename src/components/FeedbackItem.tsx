import Card from "./Card";
import { useContext } from 'react'
import { BsX } from 'react-icons/bs'
import { FeedbackContext, FeedbackDataProps } from "../context/FeedbackContext";

interface ItemProps {
    item: {
        id: number;
        rating: number;
        text: string;
    }
}

function FeedbackItem({ item }: ItemProps) {
    const { text, rating } = item;
    const  { deleteFeedback} = useContext<FeedbackDataProps>(FeedbackContext);


    return (
        <Card reverse={true}>
            <div className="box bg-secondary pt-2 w-12 h-12 text-center rounded-full text-white order border-disabled absolute -top-3 -left-3">
                {rating}
            </div>
            <button className='absolute top-3 right-3' onClick={() => deleteFeedback(item.id)}>
                <BsX color='purple' />
            </button>
            <p>
                {text}
            </p>
        </Card>
    )
}

export default FeedbackItem
