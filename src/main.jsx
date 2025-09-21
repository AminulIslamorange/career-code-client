import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvier from './context/AuthContext/AuthProvier';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-screen-xl mx-auto'> 
   <AuthProvier>
     <RouterProvider router={router} />
     </AuthProvier>
    </div>
  </StrictMode>,
)
