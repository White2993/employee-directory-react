export default     function compare(a, b) {
  const nameA = a.occupation.toUpperCase();
  const nameB = b.occupation.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}