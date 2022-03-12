export const Loading = () => {
  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 56px)" }}>
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="">データ取得中です...</div>
      </div>
    </div>
  )
}