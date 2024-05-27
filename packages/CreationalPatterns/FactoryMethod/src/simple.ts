const SimpleFactory = () => {
  return {
    on: () => "on",
    off: () => "off"
  }
}

const simpleFactorySingleton = SimpleFactory()
