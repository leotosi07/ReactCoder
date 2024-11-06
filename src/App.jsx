import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <div className='App'>

      <h1>  Premium Pet Shop </h1>
      <NavBar />
      <ItemListContainer greeting={'bienvenidos'} />
      <ItemDetailContainer/>
    </div>
  )
}

export default App
