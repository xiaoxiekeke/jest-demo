export const fetchData = () => {
  return new Promise((resolved) => {
    resolved('(function() {return 123})()')
  })
}