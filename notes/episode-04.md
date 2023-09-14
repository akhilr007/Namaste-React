1. Head
   - Logo
   - Nav Item
2. Body
   - Search
   - RestaurantContainer
     - RestaurantCard
3. Footer
   - Copyright

- when you want to dynamically pass data to components, we use props.
- it wraps the props into an object and pass it to our component.

  ```
  const Restaurant = (props) => {
   return (
      <div>
         {props.name}
         {props.cuisine}
      </div>
   )
  }
  <Restaurant name="KFC" cuisine="Fast Food" />
  ```

  - key helps in rendering only the new component.
  - if we dont use key all the components will be re-rendered.
