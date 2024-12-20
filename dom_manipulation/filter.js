const searchData = [
  { name: 'Fashion', image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg' },
  { name: 'Shirt', image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg' },
  { name: 'Jacket', image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg' },
  { name: 'Mobile', image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg' },
  { name: 'Laptop', image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg' },
  { name: 'Home', image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg' },
  { name: 'Book', image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg' },
];

// Example search term
const searchTerm = 'book';

// Filter and iterate
const filteredData = searchData.filter(item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

// Output the filtered results
filteredData.forEach(item => {
  console.log(`Name: ${item.name}`);
  console.log(`Image: ${item.image}`);
});
