let initialCards = [
	{
		CARD_FRONT: 'What is React?',
		CARD_BACK:
			'React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps.',
		PROFICIENCY: 0,
	},
	{
		CARD_FRONT: 'What is JSX?',
		CARD_BACK:
			'JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax',
		PROFICIENCY: 0,
	},
	{
		CARD_FRONT: 'Difference between Element and Component',
		CARD_BACK:
			'An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components.Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function.',
		PROFICIENCY: 0,
	},
	{
		CARD_FRONT: 'Two types of components in React?',
		CARD_BACK: 'Functional Components and Class Components',
		PROFICIENCY: 0,
	},
	{
		CARD_FRONT: 'When to use a Class Component over a Function Component?',
		CARD_BACK:
			'If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component.',
		PROFICIENCY: 0,
	},
	{
		CARD_FRONT: 'What are Pure Components?',
		CARD_BACK:
			'React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state.',
		PROFICIENCY: 0,
	},
	{
		CARD_FRONT: 'What is state in React?',
		CARD_BACK:
			'State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.',
		PROFICIENCY: 0,
	},
	{
		CARD_FRONT: 'What are props in React?',
		CARD_BACK:
			'Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.',
		PROFICIENCY: 0,
	},
	{
		CARD_FRONT: 'What is the difference between state and props?',
		CARD_BACK:
			'Both props and state are plain JavaScript objects.Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function. ',
		PROFICIENCY: 0,
	},
];
let initialSettings = {
	import: [],
	username: '',
};

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ cards: initialCards });
	chrome.storage.sync.set({ settings: initialSettings });
	let optionsUrl = chrome.runtime.getURL('/options.html');
	chrome.tabs.create({
		url: optionsUrl,
		active: true,
	});
});
