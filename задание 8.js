let newMap = new Map();
newMap.set('en', 'English');
newMap.set('ru', 'Russian');
newMap.set('fr', 'French');
for (let pair of newMap) {
  console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}