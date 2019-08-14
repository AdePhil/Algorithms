const houses = [4, 8, 1, 1];
const stores = [5, 3, 1, 2, 6];

function searchForMinValue(array, value) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === value) {
      return value;
    }
    if (array[mid] > value) {
      high = mid - 1;
    } else if (array[mid] < value) {
      low = mid + 1;
    }
  }
  return array[high] ? array[high] : array[low];
}

function getMinimumDistances(houses, stores) {
  const sortedStores = stores.sort((a, b) => a - b);
  const mimDistances = [];
  for (const house of houses) {
    const minDistance = searchForMinValue(sortedStores, house);
    mimDistances.push(minDistance);
  }
  console.log(mimDistances);
  return mimDistances;
}

getMinimumDistances(houses, stores);
