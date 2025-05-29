import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

<p className="mt-4 text-sm">
  Don't have an account? <a href="/register" className="text-blue-500 underline">Register here</a>
</p>

  const handleLogin = async () => {
    try {
      await axios.post('https://kanban-backend.up.railway.app/login', { email, password }, { withCredentials: true })
      navigate('/dashboard')
    } catch (error) {
      alert('Login failed')
    }
  }

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border mb-4" />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 w-full">Login</button>
    </div>
  )
}

export default Login