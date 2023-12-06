import './App.css'
import Basket from './Basket/Basket'
import Counter from './Counter'
import Todo from './Todo'
import Wishlist from './Wishlist/Wishlist'

function App() {

  return (
    <>
      <Counter/>
      <hr />
      <Todo/>
      <hr />
      <Wishlist/>
      <hr />
      <Basket/>
    </>
  )
}

export default App
