import { useEffect } from "react"


export default function Message() {

    useEffect(() => {
        console.log('message Mounted');
        return () => {
           console.log('message Unmounted');
        }
    }, [])

  return (
   <>
   <h3 className="mt-4">Usuario ya Existe</h3>
   </>
  )
}
