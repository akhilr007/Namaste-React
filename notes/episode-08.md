### class based components

- suppose we have class based `user-component` inside `about-component`.
- when `about-component` is loaded, then `user-component` is loaded.
- when `user-component` is loaded, a new instance of this class is created.
  - first, constructor is called
  - then, render is called

### Lifecycle of class based components

- Parent constructor is called
- Parent render is called
- Child constructor is called
- Child render is called
- Child componentDidMount is called
- Parent componentDidMount is called

- `componentDidMount` is used to make API calls.

- when multiple components are inside parent
- parent constructor is called
- parent render is called

  - first, constructor is called
  - first, render is called

  - second, constructor is called
  - second, render is called

    <dom updated in a single batch>

  - first, componentDidMount is called
  - second, componentDidMount is called

- parent componentDidMount is called

- first, render phase is initiated then commit phase is initiated.

### How to destroy setInterval in useEffect

```
useEffect(() => {
    const id = setInterval(() =>{
        console.log("react op");
    }, 1000);

    return () => {
        clearInterval(id);
    }
}, [])

```

`return in useEffect` will be called when you leave the component and go to some another component.
