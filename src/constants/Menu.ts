export type Dish = {
  name: string;
  image: string;
};

export type Category = {
  id: string;
  name: string;
  dishes: Dish[];
};

export const menu: Category[] = [
  {
    id: '1',
    name: 'Starters',
    dishes: [
      { name: 'Bruschetta', image: '../assets/grilled-chicken.jpg' },
      { name: 'Garlic Bread', image: 'grilled-chicken' },
      { name: 'Caesar Salad', image: 'grilled-chicken' },
      { name: 'Tomato Soup', image: 'grilled-chicken' },
      { name: 'Spring Rolls', image: 'grilled-chicken' },
      { name: 'Stuffed Mushrooms', image: 'grilled-chicken' },
    ],
  },
  {
    id: '2',
    name: 'Mains',
    dishes: [
      { name: 'Grilled Chicken', image: 'grilled-chicken' },
      { name: 'Pasta Carbonara', image: 'grilled-chicken' },
      { name: 'Ribeye Steak', image: 'grilled-chicken' },
      { name: 'Fish & Chips', image: 'grilled-chicken' },
      { name: 'Vegetable Stir Fry', image: 'grilled-chicken' },
      { name: 'Beef Burger', image: 'grilled-chicken' },
    ],
  },
  {
    id: '3',
    name: 'Desserts',
    dishes: [
      { name: 'Cheesecake', image: 'grilled-chicken' },
      { name: 'Brownie', image: 'grilled-chicken' },
      { name: 'Ice Cream', image: 'grilled-chicken' },
      { name: 'Fruit Salad', image: 'grilled-chicken' },
      { name: 'Tiramisu', image: 'grilled-chicken' },
      { name: 'Chocolate Mousse', image: 'grilled-chicken' },
    ],
  },
  {
    id: '4',
    name: 'Drinks',
    dishes: [
      { name: 'Coke', image: 'grilled-chicken' },
      { name: 'Lemonade', image: 'grilled-chicken' },
      { name: 'Coffee', image: 'grilled-chicken' },
      { name: 'Tea', image: 'grilled-chicken' },
      { name: 'Orange Juice', image: 'grilled-chicken' },
      { name: 'Smoothie', image: 'grilled-chicken' },
    ],
  },
  {
    id: '5',
    name: 'Specials',
    dishes: [
      { name: 'Seafood Platter', image: 'grilled-chicken' },
      { name: 'Lamb Chops', image: 'grilled-chicken' },
      { name: 'Paella', image: 'grilled-chicken' },
      { name: 'Sushi Roll', image: 'grilled-chicken' },
      { name: 'Duck Confit', image: 'grilled-chicken' },
    ],
  },
  {
    id: '6',
    name: 'Vegan',
    dishes: [
      { name: 'Vegan Burger', image: 'grilled-chicken' },
      { name: 'Quinoa Salad', image: 'grilled-chicken' },
      { name: 'Stuffed Peppers', image: 'grilled-chicken' },
      { name: 'Vegan Curry', image: 'grilled-chicken' },
      { name: 'Falafel Wrap', image: 'grilled-chicken' },
    ],
  },
];
