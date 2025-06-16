import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import api from '../api'

import BoardColumn from '../components/BoardColumn'

export default function BoardPage() {
  const { id } = useParams()

  const { data: board } = useQuery({
    queryKey: ['board', id],
    queryFn: async () => (await api.get(`/boards/${id}`)).data
  })

  if (!board) return <p className="p-4">Loading...</p>

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{board.name}</h1>
      <div className="flex gap-4">
        {/* columns map once implemented */}
        <BoardColumn title="To Do" />
        <BoardColumn title="In Progress" />
        <BoardColumn title="Done" />
      </div>
    </div>
  )
}
