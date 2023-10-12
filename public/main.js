// Web Component Events
import { } from './animate.js';
import { PizzaStoreComponent } from './PizzaStoreComponent.js';

const container = document.getElementById('container');
const pizzaStore = new PizzaStoreComponent('Supreme');
const pizzaStore2 = new PizzaStoreComponent('BBQ Chicken!');

container.appendChild(pizzaStore);
container.appendChild(pizzaStore2);

// Window Custom Event
import { pizzaEvent } from './customEvent.js';

window.addEventListener("pizzaDelivery", (e) => console.log(e.detail.name));
window.dispatchEvent(pizzaEvent);

// Pub Sub
import { Observer, Subject } from './pubSub.js';

const subject = new Subject();
const observer = new Observer();

subject.addObserver(observer);
subject.notify('Everyone gets pizzas!');

// Proxy
import { handler } from './proxy.js';

const pizza = { name: 'Margherita', toppings: ['tomato sauce', 'mozzarella'] };
const proxiedPizza = new Proxy(pizza, handler);

console.log(proxiedPizza.name); // Outputs "Getting property name" and "Margherita"
proxiedPizza.name = 'Pepperoni'; // Outputs "Setting property name to Pepperoni"

// Reactive 
// (solidjs style)
import { createSignal, createEffect, createMemo, untrack } from './reactive.js';

const [count, setCount] = createSignal(0);
const [count2, setCount2] = createSignal(2);
const [show, setShow] = createSignal(true);
const sum = createMemo(() => count() + count2());

createEffect(() => {
  console.log(count(), count2(), sum());
  console.log(untrack(() => count()));
}); // 0

setShow(false);
setCount(10);