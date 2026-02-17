import { NavLink } from 'react-router';
import { SidebarItemProps } from './types/sidebar-item';

export default function SidebarItem({ label, to }: SidebarItemProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex cursor-pointer flex-col items-center justify-center gap-1 border-l-4 p-2 transition-all duration-200 ${isActive ? 'border-blue-500 bg-blue-50 text-blue-500' : 'border-transparent text-gray-400 hover:text-gray-600'}`
      }
      to={to}
    >
      <span className='text-xs font-medium'>{label}</span>
    </NavLink>
  );
}
