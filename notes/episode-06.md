### useEffect hook

- app -> render -> api call -> render
- it will be called after the component is rendered.
- `useEffect(()=>{}, [])`
- in useEffect hook, first argument is callable function, second argument is dependency array.
- if no dependency array is provided, then useEffect will be called at every component render.
- if dependency array is empty, then useEffect will be called on only initial render.
- if dependency array is `[some_variable]`, then useEffect will be called everytime some_variable is changed.

### conditional-rendering

- rendering according to the condition is called conditional rendering

### when we want to use useState ?

- when we want to get the variable to dynamically change.
- when we want to change the variable in component and to render it in ui.
- when a state variable changes react update the state variable, then renders the component, then react finds what is the change in virtual dom and then renders the only changed state variable in ui.
- whenever there is a change in the state variable, react re-renders the whole component.
