

import './App.css'
import Form from './component/form/form'
import Header from './component/header/header'
import List from './component/list/List'

function App() {

  return (
    <>
      <Header/>
      <div className="row">
        <Form/>
        <List/>
      </div>
    </>
  )
}

export default App
