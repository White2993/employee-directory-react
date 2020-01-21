export default function compare(a, b) {
  const nameA = a.location.toUpperCase();
  const nameB = b.location.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}