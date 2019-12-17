# NetworkReflector
>This is a React Component which  can choose to render its children according to different network environments.

## How to use it？ 
```jsx
import {NetworkReflector} from 'network-reflector';
function App(){
    return (
        <NetworkReflector 
            net4g = {<Img />}
            netWifi = { <Tv />}
            default = {<Text />}
        />
    )
}
```
##  props


