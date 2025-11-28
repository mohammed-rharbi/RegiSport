import { Outlet } from 'react-router-dom';
import SideBar from '../components/ui/sideBar';

export default function ManagerLayout() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 ml-72 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}
