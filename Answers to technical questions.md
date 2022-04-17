1. How long did you spend on the coding assignment?
   a. What would you add to your solution if you had more time?
   b. If you didn't spend much time on the coding test, then use this as an
   opportunity to explain what you would add.

I spent about 16 hours +/- 1 hour for the coding portion of the test.

1. A: If I had more time, I would:

    1. Dynamically render images based on viewport size for better performance
    2. Add integration tests
    3. Create a different style of pagination for the mobile view
    4. Design a better layout and theme
    5. Add a loading spinner
    6. Change the favicon

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I think the most useful feature would be that React 18 is generally backwards compatible and provides many new features that can be immediately accessed with minor code changes.

In React 18, rendering is now interruptible. Previously, rendering was a single uninterruptible synchronous transaction.

With React 18, state updates can be prioritized with the useTransition and useDeferredValue hooks

State batching has also been improved for asynchronous tasks. Multiple states are now executed together; therefore, the component is only rerendered once

---Code Snippet---
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
<React.StrictMode>
<GlobalStyle />
<Provider store={store}>
<App />
</Provider>
</React.StrictMode>
);
---Code Snippet---

3. How would you track down a performance issue in production? Have you ever had to do this?

A: I would use React Profiler to determine which components were causing a throttle. I would check throttles by doing an operation individually and checking the profiler results.

If there was a component that was rendered multiple times but didn't need to be, then that component could be memoized.

Lazy loading could be used to render critical components to the UI first and allow other components to be rendered later

via react.lazy(), React.Suspense

No, I never had to do this.

4. How would you improve the API that you just used?

It seems like the search API endpoint only returns 100 items even though the num_found field can exceed 100.

It might improve the response time if there was an endpoint that sent a response either when num_found <= 100 or if a threshhold could be set for num_found (might be better depending on how the data is stored and the search is done on the backend).

5. Please describe yourself using correctly formatted JSON.

{
"sin": "111-111-111",
"first_name:": "Bran",
"last_name:": "Balachandran",
"qualities": ["easy to get along with", "polite", "passionate", "strong work ethic", "quick learner", "strong time management skills"],
"hobbies": ["watching and playing sports", "playing the piano", "walking my dog", "learning new things"],
"spoken_languages": ["english"],
"computer_languages": ["JavaScript", "TypeScript", "Python", "Java"]
}
