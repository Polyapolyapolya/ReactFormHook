import FeedbackForm from './Pages/FeedbackForm.jsx';
import bunner from "./asset/bunner.jpg"

export default function CustemFeedbackForm() {
  return (
    <div className='card'>
        <img src={bunner} className="card-img-top" alt="Баннер"/>
        <div className='card-body'>
            <FeedbackForm></FeedbackForm>
        </div>   
    </div>
  )
}