import SpeedTest from "./singleton/SpeedTest"
import Console from "./singleton/Console"

Console.Configure({
  tag: "[program]",
})

export default () => {
  SpeedTest.Track("global")

  // console TimeTracker block 
  SpeedTest.Track("first loop")
  for (let i = 0; i < 5; i++) {
    Console.Log(i.toString())
  }
  SpeedTest.Untrack()

  // console TimeTracker block 
  SpeedTest.Track("second loop")
  for (let i = 0; i < 50; i++) {
    Console.Log(i.toString())
  }
  SpeedTest.Untrack()
  
  Console.Jump()
  SpeedTest.Untrack("global")  
  Console.Jump()

  SpeedTest.Result("first loop")
  SpeedTest.Result("second loop")
  SpeedTest.Result("global")
}