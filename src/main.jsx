import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TgsApp from './apps/TgsApp.jsx'
import OpportunitiesApp from './apps/TGSConnect.jsx'
import { getSubdomain } from './utils/subdomain.js'
import { getAppTitle } from './utils/doctitle.js'

let AppToRender;
const subdomain = getSubdomain()
switch (subdomain) {
  case "opportunities":
    AppToRender = OpportunitiesApp;
    break;
  default:
    AppToRender = TgsApp;
}

getAppTitle()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OpportunitiesApp />
  </StrictMode>,
)
