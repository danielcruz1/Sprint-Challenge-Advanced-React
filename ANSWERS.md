

:)

- [ ] Why would you use class component over function components (removing hooks from the question)?

    Originally, class components held the edge over functional components because funcational components are stateless and don't have access to lifecycles. Class components have access to these inherently. Now, thanks to the addition of hooks, functional componenets now have access to state (useState) and life cycle (useEffect). 
    (TK article: https://www.andreasreiterer.at/react-functional-components/)




- [ ] Name three lifecycle methods and their purposes.

    render - used to tell React that whent this method gets called, it needs to return some piece of DOM. Required in class components, or the component will not work.
    setState - used to change the component's state data and calls for a rerender. 
    componentWillUnmount - when the component is removed from the screen, this method can be used to do any necessary cleanup
    (TK - The React Lifecycle)




- [ ] What is the purpose of a custom hook?

    Custom hooks allow us to skip writing out all of the stateful logic for our non-visual behavior. It also produes DRY code for easier reading and use. Can be used over and over again in our code. Multiple custom hooks can be combined in a single, powerful custom hook! 
    (TK - Composing and Sharing Non-Visual Behavior)




- [ ] Why is it important to test our apps?

    Per the TK info for this section (Testing Web Applications):
    -Surfaces bugs faster
    -Reduces risks of regressions
    -Allows us to trust the code
    -Makes us think about the edge cases
    -Acts as a documentation for the code
    -Encourages us to write more testable code
