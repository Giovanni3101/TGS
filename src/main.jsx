import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TgsApp from './apps/TgsApp.jsx'
import TgsAcademyApp from './apps/TgsAcademyApp.jsx'
import { getSubdomain } from './utils/subdomain.js'
import { getAppTitle } from './utils/doctitle.js'

let AppToRender;
const subdomain = getSubdomain()
switch (subdomain) {
  case "academy":
    AppToRender = TgsAcademyApp;
    break;
  default:
    AppToRender = TgsApp;
}

getAppTitle()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TgsAcademyApp />
  </StrictMode>,
)
