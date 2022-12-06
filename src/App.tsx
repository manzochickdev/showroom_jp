import './App.css';
import FoodAppImg from './project2/img/banner.png'
import HelloAppImg from './HelloWorld/images/img_1.jpg'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='h-screen'>
      <div style={{ backgroundImage: `url(${HelloAppImg})` }} className="relative w-full h-1/3 bg-no-repeat bg-cover3">
        <Link to="/hello">
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl mb-5 font-black font-mono md:text-5xl'>Eggcellent</p>
        </Link>
      </div>
      <div style={{ backgroundImage: `url(${FoodAppImg})` }} className="relative w-full h-1/3 bg-no-repeat bg-cover3">
        <Link to="/food">
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl mb-5 font-bold md:text-5xl'>Food App</p>
        </Link>
      </div>

    </div>
  )
}

export default App;
