in React , APP.js is the main component

It will load up Components

So to navigate pages , in React there is no server calls - we inject components using react router

REACT ROUTER:

about || home || etc = COMPONENTS

npm i react-router-dom
npm i react-router

BrowserRouter and Route

enclose all the jsx in BrowserRouter - so that we can use Route tag inside that JSX

<Route path='' component={}>



We can load certain components based on Routes using the above line

But after this also the pages are loaded but the request is still going to server

So we need to use Links and NavLinks to avoid going to server each time a link is clicked

change 'href' to 'to' and anchor or <a> tags to Links and NavLinks instead

HOW to REDIRECT to Url
props.history.push

HIGHER ORDER COMPONENTS:
these adds features to the components to make them supercharged


USING AXIOS:

use API calls in Class based Components and also along with lifecycleHooks so that the DOM is render once the API call is finished and data is available 


