### Simple example of useState hook with initial value from props

Initially declare the state value `count` and function to update `setCount` with `count` set to the props value for example:

```js
	<UseStateII count={100}/>
```

`setCount` updates the value of count in state to be count + 1 this is the equivalent to this.setState({ count: this.state.count + 1 }), see the without hooks example below

