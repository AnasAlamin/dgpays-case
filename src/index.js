import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const domNode = document.getElementById('root')
const root = ReactDOM.createRoot(domNode)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
