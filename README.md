TODO APP - REACT REDUX 

STEP-1 : Create React APP

React - Intro
1. Components (injected to DOM)
2. Virtual DOM is rendered to real DOM
3. React makes a Virtual DOM based on all the Components and renders that virtual DOM to Browser DOM
4. Also updates will only be rendered instead of whole page
5. Virtual DOM is made by React using JSX- which is similar to templating languages (like ejs, hbs, or pug)

Components :
1. Functional Components   vs   Class Components

Component States:

1. Where Data or UI-state is contained in a state of a Component
eq: shopping cart will have a initial empty array state
when a user adds a item to shopping cart the state of the component will get updated to refelct that added item

2. UI-state : for example pop-up is either true or flase which can be contained in state of a component and can be updated

STATE : is an object which can container properties

Container Components vs UI Components

CONTAINER COMPONENTS:
contains state
contain lifecycle hooks
not concerned with UI
Use Classes to create

UI COMPONENTS:
Does'nt have state
receive data from props
only concerned with UI
use function or classes to create

COMPONENT LIFE-CYCLES-HOOKS

a. Mounting Phase - Components are first created

    1. constructor
    2. getDerivedStateFromProps
    3. render
    4. componentDidMount - good place to get data from external sources

b. Updating Phase
 
    1. getDerivedStateFromProps
    2. shouldComponentUpdate
    3. render
    4. getSnapshotBeforeUpdate
    5. componentDidUpdate

c. Unmounting Phase

    1. componentWillUnmount



REACT DOM EVENTS:

Clipboard Events - onCopy onCut onPaste

Composition Events - onCompositionEnd onCompositionStart onCompositionUpdate

Keyboard Events - onKeyDown onKeyPress onKeyUp

Focus Events - onFocus onBlur

Form Events - onChange onInput onInvalid onSubmit

Mouse Events - onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
                onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
                onMouseMove onMouseOut onMouseOver onMouseUp

Pointer Events

Selection Events - onSelect

Touch Events - onTouchCancel onTouchEnd onTouchMove onTouchStart

UI Events - onScroll

Wheel Events - onWheel

Media Events

Image Events - onLoad onError

Animation Events - onAnimationStart onAnimationEnd onAnimationIteration

Transition Events - onTransitionEnd

Other Events - onToggle
