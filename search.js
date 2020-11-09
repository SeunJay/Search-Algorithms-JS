function linearSearch(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 3, 4, 5, 6, 7], 1));

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== elem && start <= end) {
    if (arr[mid] < elem) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === elem ? mid : -1;
}

//console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13], 4));

function isAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

//console.log(isAscending([1, 2, 4, 20, 19]));

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (!map1[char]) {
      map1[char] = 1;
    } else {
      map1[char]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!map2[char]) {
      map2[char] = 1;
    } else {
      map2[char]++;
    }
  }

  for (let key in str1) {
    if (!str2[key]) {
      return false;
    } else {
      str1[key] -= 1;
    }
  }

  return true;
}

console.log(isAnagram("seune", "nseu"));
