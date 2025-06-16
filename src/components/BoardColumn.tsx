interface Props {
  title: string
}

export default function BoardColumn({ title }: Props) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 w-64 shadow">
      <h2 className="font-semibold mb-2">{title}</h2>
      {/* cards go here */}
    </div>
  )
}
