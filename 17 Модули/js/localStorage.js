export function getItems(key = "item") {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
}

export function setItems(items, key = "item") {
  localStorage.setItem(key, JSON.stringify(items));
  return true;
}

export async function addToLocalStorage(item, key = "item") {
  const items = getItems(key);
  items.push(item);
  return setItems(items, key);
}