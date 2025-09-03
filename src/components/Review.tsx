export function Review({ name, year, review }: { name: string, year: string, review: string }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg flex-1">
      <p className="text-lg">{review}</p>
      <div className="flex justify-end font-bold">
        <p className="text-sm ">{name}</p>
        <p className="text-sm ml-2">{year}</p>
      </div>
    </div>
  )
}
