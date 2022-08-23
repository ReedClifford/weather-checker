function debounce(cb, delay = 1000) {
  let timeOut;
  return (...args) => {
    clearInterval(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
