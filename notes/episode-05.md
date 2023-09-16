### React Hooks

- React hooks are normal js utility functions given to us by react.
- `useState` - super-powerful variables in react

  - whenever a state variable changes, react will re-render my component.
  - it keeps the ui layer in sync with the data layer. As soon as my data layer updates, ui layer updates.
  - it maintains the state of the component.
  - ```
        const [restaurants, setRestaurants] = useState([
            {
                name: "kfc",
                avgRating: 4.5
            },
            {
                name: "mcd",
                avgRating: 3.9
            }
        ]);

        // to update the state variable
        const filteredList = restaurants.filter(res => res.avgRating > 4);
        setRestaurants(filteredList);
    ```

### Why react is fast ?

- React is doing `efficient DOM manipulation`.
- React uses `reconciliation algorithm`. Also known as `React Fiber`.
- `Virtual DOM` is the representation of actual DOM. It is actually a React Element, i.e, an object.
- `Diff Algorithm` - will find out the difference between new virtual DOM and old virtual DOM.
- It will then actually update the DOM.
