import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../api'

export default function Register() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const navigate                = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      await api.post('/auth/signup', { email, password })
      navigate('/login')               // go back and log in
    } catch {
      setError('Email already registered')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-4 w-80">
        <h1 className="text-2xl font-bold text-center">Create account</h1>
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
          Register
        </button>
        <p className="text-sm text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  )
}