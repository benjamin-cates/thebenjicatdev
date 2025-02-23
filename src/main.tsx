import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Project } from './pages/Project'
import { Sitemap } from './pages/Sitemap'
import { NotFound } from './pages/NotFound'

import './style/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="project/:project_name" element={<Project />}></Route>
        <Route path="sitemap" element={<Sitemap />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
