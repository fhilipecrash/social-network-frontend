import { Link, Outlet } from 'react-router-dom'

export function Dashboard() {
  document.title = 'Dashboard'

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <nav className="flex flex-row items-center justify-center">
        <Link to="profile" className="text-blue-600 hover:underline">
          Profile
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Settings
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}
