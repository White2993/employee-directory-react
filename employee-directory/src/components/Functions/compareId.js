export default     function compare(a, b) {
  const nameA = a.id
  const nameB = b.id

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}
