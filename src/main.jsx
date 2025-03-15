import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import SeminarList from './components/seminarList/SeminarList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeminarList />
  </StrictMode>,
)
