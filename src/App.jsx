import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <div className='App'>

      <h1>  Premium Pet Shop </h1>
      <NavBar />
      <ItemListContainer greeting={'bienvenidos'} />
      <ItemCount 
      initial={1} 
      stock={10} 
      onAdd={(quantity) => console.log('cantidad agregada:',quantity)}
      />
    </div>
  )
}

export default App
