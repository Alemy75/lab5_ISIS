import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [items, setItems] = useState([])


  const onSumbitHandler = (event) => {
    event.preventDefault()
    let item = {
      name,
      desc
    }
    setItems(prev => {
      return [...prev, item]
    })
    setName('')
    setDesc('')
  }

  const onDeleteHandler = (name) => {
    setItems(prev => {
      return prev.filter(item => item.name !== name)
    })
    alert('Запись была успешно удалена')
  }

  return (
    <div className='container'>
      <h1>Приложение заметок</h1>
      <form onSubmit={onSumbitHandler}>
        <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder='Введите название' />
        <input value={desc} onChange={(event) => setDesc(event.target.value)} type="text" placeholder='Введите описание' />
        <button>Добавить запись</button>
      </form>
      <h2>Заметки</h2>
      {
        items.map(item => (
          <div className='card'>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <button onClick={onDeleteHandler}>Удалить запись</button>
          </div>
        ))
      }
    </div>
  )
}

export default App
