// task.js

// This function returns a constant string
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// This function returns a string to be appended
export function getLast() {
  return ' is okay';
}

// This function combines two strings and returns the result
export function taskNext() {
  const combination = 'But sometimes let';
  return combination + getLast();
}