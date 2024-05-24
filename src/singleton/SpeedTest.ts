import Console from "./Console"

Console.Configure({
  tag: "[speed-test]",
})

interface ITimeTracker {
  name: string
  start: number
  end: number | undefined
}

function getTimeDifference(a: number | undefined, b: number) {
  return (a || new Date().getTime()) - b
}

export default ( () => {
  const timeTrackerMap = new Map<string, ITimeTracker>()
  let currentTracker: string | null = null
  const _CalculateTimeSpend = (name: string): number => (timeTrackerMap.has(name)
    ? getTimeDifference(
      timeTrackerMap.get(name)?.end,
      timeTrackerMap.get(name)!.start
    ) : 0
  )

  return {
    Track: (trackerName?: string) => {
      const name = trackerName || `default_${timeTrackerMap.size}`
      currentTracker = name
      
      timeTrackerMap.set(name, {
        name,
        start: new Date().getTime(),
        end: undefined
      })
      Console.Jump()
      Console.Group(`[tracker:${name}]`, "started")
    },
    Untrack: (trackerName?: string) => {
      const name = trackerName || currentTracker
      if (!name) return

      if (name && timeTrackerMap.has(name)) {
        (timeTrackerMap.get(name)!.end = new Date().getTime())
        Console.Log(
          `[traker:${name}]`,
          "untracked at",
          `${_CalculateTimeSpend(name)}ms`
        )
      }
      Console.GroupEnd()
    },
    Result: (trackerName?: string) => {
      const name = trackerName || currentTracker
      name && timeTrackerMap.get(name)
        && Console.Log(
          `[speed-result:${name}]`,
          `${_CalculateTimeSpend(name)}ms`
        )
    },
  }
})()
