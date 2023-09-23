### react-router-dom

- `createBrowserRouter` will create routing-configuration for us.
- it takes list of paths
- we also need to provide the routing configuration to our app using `ReactProvider`
- `root.render(<RouterProvider router={appRouter})`
- you can navigate to the page without reloading the page using `Link` from `react-router-dom`

```
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    }
])

```
