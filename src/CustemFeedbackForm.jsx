import FeedbackForm from './Pages/FeedbackForm.jsx';
import village from "./asset/village.png"

export default function CustemFeedbackForm() {
  return (
    <div className='card'>
        <img src={village} className="card-img-top opacity-25" alt="Горы"/>
        <div className='card-body'>
            <FeedbackForm></FeedbackForm>
        </div>   
    </div>
  )
}