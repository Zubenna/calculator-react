const showResult = state => {
  const { total, next, operation } = state;
  if (next !== null && next.length > 17) {
    return 'invalid entry';
  }
  if (total !== null && next !== null) {
    if (total.length + 1 + next.length > 17) {
      return 'invalid entry';
    }
  }
  const result = `${total}${operation}${next}`.replace(/null/g, '');
  return result === '' ? undefined : result;
};

export default showResult;
