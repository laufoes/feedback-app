import FeedbackItem from "./FeedbackItem";

interface FeedbackListProp {
    feedback: {
        id: number;
        rating: number;
        text: string;
    }[]
};


function FeedbackList({ feedback }: FeedbackListProp) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback available yet.</p>
    }

    console.log(feedback)
    return (
        <div className="">
            {feedback.map((item) => (
               <FeedbackItem key={item.id} item={item} />
            ))}

        </div>
    )
}

export default FeedbackList
