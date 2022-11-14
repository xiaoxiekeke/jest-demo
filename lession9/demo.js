
export const generateConfig = () => {
  return {
    server: "http://localhost",
    port: 8080,
    domain: "localhost",
    time: 2019
  }
}

export const generateAnotherConfig = () => {
  return {
    server: "http://localhost",
    port: 8081,
    domain: "localhost",
    time: new Date()
  }
}
