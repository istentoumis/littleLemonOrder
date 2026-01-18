import { Category } from '../constants/Menu';

export const filterMenu = (menu: Category[], search: string): Category[] => {
  if (!search.trim()) return menu;

  return menu
    .map(cat => ({
      ...cat,
      dishes: cat.dishes.filter(d =>
        d.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(cat => cat.dishes.length > 0);
};
