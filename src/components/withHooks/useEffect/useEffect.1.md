### Simple example of useEffect hook

The state value `count` and function to update `setCount` with `count` set to 0 via the useState hook. A second state value of `trigger` updated via `setTrigger` is a boolean toggle to demostrate when the useEffect hook is being called. 

The useEffect hook is called on each completed render therefore when `trigger` is true the `setCount` updates `count` which in turn causes a re-render and useEffect to be called again.
