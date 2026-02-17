import SidebarItem from './SidebarItem';
import { SidebarItemProps } from './types/sidebar-item';

export default function Sidebar() {
  const MENU_ITEMS: SidebarItemProps[] = [
    {
      to: '/',
      label: 'Test 1',
    },
    {
      to: '/aa',
      label: 'Test 2',
    },
  ];

  return (
    <aside className='flex h-full w-24 flex-col items-center justify-between border-r border-r-gray-200 bg-white py-6'>
      <ul className='flex w-full flex-col gap-6'>
        {MENU_ITEMS.map((item, idx) => (
          <li key={idx}>
            <SidebarItem
              to={item.to}
              label={item.label}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
