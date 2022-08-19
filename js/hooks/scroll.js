function useScroll(moreThen, fn) {
  function watch(event) {
    if (window.scrollY >= moreThen) {
      fn();
    }
  }

  window.addEventListener("scroll", watch);

  return () => {
    window.removeEventListener("scroll", watch);
  };
}
