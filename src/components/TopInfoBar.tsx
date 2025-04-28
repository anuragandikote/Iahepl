export default function TopInfoBar() {
  return (
    <div className="bg-gray-100 py-2 text-sm text-black">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-3 sm:px-4 max-w-7xl mx-auto gap-1 sm:gap-0 text-left">
        <span className="block">{`The #1 SSB Coaching Academy in South India`}</span>
        <span className="flex items-center gap-1 mt-1 sm:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          Secunderabad, Telangana
        </span>
      </div>
    </div>
  )
}