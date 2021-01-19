# use-hide-scrollbar
>custom react hook to hide browser scrollbar
 
## Install

```sh
yarn add use-hide-scrollbar
```

## Usage

```jsx
import React, { useRef } from 'react';
import useClickOutside from 'use-click-outside';

const App = () => {

  const [trigger, setTrigger] = useState(false);
  useScrollingElement(trigger);
  console.log(trigger)
  return (
    <div>
      <button onClick={() => setTrigger(prev => !prev)}>Click me!</button>
    </div>
  );
}
```
All you need is to pass a boolean as a parameter

```js
  useHideScrollbar(trigger);
```

## Show your support

Give a ⭐️ if this project helped you!