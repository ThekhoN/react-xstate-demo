export const getUpdatedCount = (count, type) => {
  if (type === 'INCREMENT') {
    return count + 1
  } else if (type === 'DECREMENT') {
    return count - 1
  } else {
    return count
  }
}
