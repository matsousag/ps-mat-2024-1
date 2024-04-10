import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

import {ThemeProvider} from '@mui/material/styles'
import theme from './UI/AppBar'
import CssBase from 'mui/material/CssBass'
import TopBar from './UI/AppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
    </>
  )
}

export default App

