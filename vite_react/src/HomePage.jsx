import './index.css'

import Button from './components/Button.jsx';

function Home() {

  return (
    <>
      <div className='main-content'>
        <h1>Vite + React</h1>
        <div className="card">
          <Button className="flex justify-center bg-blue-800">Button!</Button>
        </div>
      </div>
    </>
  )
}

export default Home