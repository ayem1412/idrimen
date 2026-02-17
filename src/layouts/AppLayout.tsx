import { Outlet } from 'react-router';
import Sidebar from '../widgets/sidebar/Sidebar';

export default function AppLayout() {
  return (
    <div className='flex h-screen'>
      <Sidebar />

      <main className='flex-1 overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  );
}
