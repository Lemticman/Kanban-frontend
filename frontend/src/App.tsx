import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import BoardPage from './pages/Board'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/boards/:id" element={<BoardPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
