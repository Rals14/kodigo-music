import '../assets/css/Plans.css'
import { Link } from 'react-router-dom'

export const Plans = ({nombrePlan, description, price }) => {

  return (
    <div className='plan'>
        <h3>{nombrePlan}</h3>
        <p>{description}</p>
        <p className='price'>Price: {price}</p>
        <Link className='plan-btn' id='plan-btn' to='/subscribe'>Try it</Link>
    </div>
  )
}
