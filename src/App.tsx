import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/Search'
import { useFetchGif } from './hooks/useFetchGif';
import GifItem from './components/GifItem';

function App() {
  const [gif, setGif] = useState('');
  const {loading, images} = useFetchGif(gif);

  const filterGif = (value) => {
    setGif(value);
  }

  return (
    <>
      <Search filterGif={filterGif}/>
      <h1 className='mt-3 mb-3 text-2xl'>{gif}</h1>
      {
        loading && (<h2>Cargando...</h2>)
      }
      <div className='flex flex-wrap gap-2'>
        {
          images.map(item => {
            return (
              <GifItem key={item.id} title={item.title} url={item.url} />
            )
          })
        }
      </div>
    </>
  ) 
}

export default App
