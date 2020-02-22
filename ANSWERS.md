- [ ] Why would you use class component over function components (removing hooks from the question)?

    Functional components are basic JavaScript functions. These are components that just accept data and display them in some form. React lifecycle methods (for example, componentDidMount) cannot be used in functional components.There is also no render method used in funtional components. Class Compnts on the other hand, extend the Component class in React.React lifecycle methods can be used inside class components (for example, componentDidMount).You can also pass props down to class components and access them with "this.props."

- [ ] Name three lifecycle methods and their purposes.

    Mounting – Birth of your component, Update – Growth of your component, Unmount – Death of your component. These lifecycles are important because they are necessary in order for React apps to make API requests and then render based on the data that was received.

- [ ] What is the purpose of a custom hook?
    A custom hook helps us to write clearer and more concise code.These hooks make it easy to add a single piece of state to a component just by moving the hooks-related code into a function..

- [ ] Why is it important to test our apps?

    Testing minimizes the risk of bugs finding their way into production code and is a part of every developer’s workflow. There are numerious reasons why we should test out apps; it surfaces bugs, reduces the risk of regressions, allows us to trust the code, allows us to consider edge cases, as well as acting as documentation for the code. 