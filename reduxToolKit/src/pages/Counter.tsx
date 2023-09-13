import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useDispatch } from "react-redux"
import { addCount, deductCount } from "../redux/reducer"
import { useState } from "react"


export const Counter = () => {
  const count = useSelector((store: RootState) => store.counterReducer)
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>('')

  function addCounter() {
    dispatch(addCount(+value))
  }

  function deductCounter() {
    dispatch(deductCount(+value))
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  console.log(value)

  return (
    <div>
      <h1>Counter</h1>
      <h1 style={{ fontSize: '5rem', fontFamily: 'sans-serif' }}>{count}</h1>
      <br />
      <br />
      <input type="number" placeholder="Enter the number you want to add/deduct" onChange={handleInput} value={value}/>
      <br />
      <div>
        <button onClick={addCounter}>Add</button>

        <button disabled={count == 0} onClick={deductCounter}>Deduct</button>
      </div>
    </div>
  )
}
