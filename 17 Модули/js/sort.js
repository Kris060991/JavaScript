export function sort(items, columnName) {
  const sortedData = [...items];
  let sortOrder = 1;

  sortedData.sort((a, b) => {
    if (columnName === "weight") {
      return parseInt(a[columnName]) - parseInt(b[columnName]) * sortOrder;
    } else if (columnName === "date") {
      return new Date(a[columnName]) - new Date(b[columnName]) * sortOrder;
    }
    return a[columnName].localeCompare(b[columnName]) * sortOrder;
  });
  return sortedData;
}