const _console = console
const _Jump = () => _console.log("\n")

interface IOption extends Partial<Console> {
  tag: string,
  func: (value: string) => string
}

const defaultOptions: IOption = {
  tag: "[system]",
  func: (value: string) => value 
}

export default (() => {
  let options: IOption = defaultOptions
  
  const _Log = (...args: (string | undefined | null)[]) => {
    const value = args.length > 1 ? args.slice(1).join(" ") : args[0]
    const tag = args.length >= 2 ? args[0] || options.tag : options.tag
    if (args.length === 0) return
    _console.log(options.func(`${tag} ${value}`))
  }

  return {
    Log: _Log,
    Jump: _Jump,
    Configure: (value: Partial<IOption>) => options = {...options, ...value},
    Reset: () => options = defaultOptions,
    Options: () => options,
    Clear: _console.clear,
    Group: _console.group,
    GroupEnd: _console.groupEnd,
  }
})() 


