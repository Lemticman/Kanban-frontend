// src/pages/Login.tsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'   // ← Link added
import api from '../api'

export default function Login() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const navigate                = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/auth/login', { email, password })
      navigate('/boards/1')                       // temp redirect
    } catch (err) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-4 w-80">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <p className="text-red-600 text-sm">{error}</p>}

        <input
          type="email" placeholder="Email" required
          className="w-full p-2 border rounded"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password" placeholder="Password" required
          className="w-full p-2 border rounded"
          value={password} onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign In
        </button>

        {/* NEW: link to registration page */}
        <p className="text-sm text-center">
          No account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  )
}