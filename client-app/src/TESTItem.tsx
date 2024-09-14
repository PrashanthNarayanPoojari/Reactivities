import { testInterface } from './demo'
interface Props{
    testInterface : testInterface
}
export default function TESTItem({testInterface}:Props) {

  return (
        <div key={testInterface.name}>
        <span> {testInterface.name}</span>
        <button onClick={()=>testInterface.print(testInterface.value)}> {testInterface.value}</button>
         </div>
  )
}