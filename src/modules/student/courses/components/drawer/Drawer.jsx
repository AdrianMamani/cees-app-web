import React from 'react';
import DrawerQuiz from './DrawerQuiz';
import DrawerTask from './DrawerTask';
import { useDrawerStore } from '../../store/useDrawerStore';
const Drawer = () => {
  const type = useDrawerStore((state) => state.type);
  const data = useDrawerStore((state) => state.data);
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);

  if (!type) return null;

  switch (type) {
    case 'quiz':
      return <DrawerQuiz open onClose={closeDrawer} item={data} />;
    case 'task':
      return <DrawerTask open onClose={closeDrawer} item={data} />;
    default:
      return null;
  }
};

export default Drawer;
