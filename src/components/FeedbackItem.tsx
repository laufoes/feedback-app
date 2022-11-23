import Card from "./Card";
import { useContext } from 'react'
import { BsX } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { FeedbackContext, FeedbackDataProps } from "../context/FeedbackContext";

interface ItemProps {
    item: {
        id: string;
        rating: number;
        text: string;
    }
}

function FeedbackItem({ item }: ItemProps) {
    const { text, rating } = item;
    const  { deleteFeedback, editExistingFeedback } = useContext<FeedbackDataProps>(FeedbackContext);


    return (
        <Card reverse={true}>
            <div className="box bg-secondary pt-2 w-12 h-12 text-center rounded-full text-white order border-disabled absolute -top-3 -left-3">
                {rating}
            </div>
            <div className='absolute top-3 right-3 w-14 flex justify-between'>
                <button onClick={() => deleteFeedback(item.id)}>
                    <BsX color='purple' size={32} />
                </button>
                <button onClick={() => editExistingFeedback(item)}>
                    <FaEdit color='purple' size={20} />
                </button>
            </div>
            <p>
                {text}
            </p>
        </Card>
    )
}

export default FeedbackItem
