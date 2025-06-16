import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import BoardPage from './pages/Board'
import Register from './pages/Register'

<Routes>
  <Route path="/login"    element={<Login />} />
  <Route path="/register" element={<Register />} />   {/* ← new */}
  <Route path="/boards/:id" element={<BoardPage />} />
  <Route path="*" element={<Navigate to="/login" replace />} />
</Routes>

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/boards/:id" element={<BoardPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
