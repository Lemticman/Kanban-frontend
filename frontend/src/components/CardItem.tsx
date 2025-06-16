interface Props {
  title: string
}

export default function CardItem({ title }: Props) {
  return (
    <div className="bg-white rounded-lg p-2 mb-2 shadow">
      {title}
    </div>
  )
}
