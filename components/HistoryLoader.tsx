const HistoryLoader: React.FC = () => {
  return (
    <>
      <div className="min-w-full w-full border border-gray-300 shadow rounded-md p-4 mx-auto">
        <div className="min-w-full w-full animate-pulse flex flex-row space-x-4">
          <div className="rounded-full bg-gray-300 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HistoryLoader
