export default function GenreBadge({
    name,
  }: {
    name: string
  }) {
    return (
      <span className="text-xs px-2 py-1 border rounded-full mr-2">
        {name}
      </span>
    )
  }