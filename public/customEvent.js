const pizzaEvent = new CustomEvent("pizzaDelivery", {
  detail: {
    name: "supreme",
  },
});

export {
  pizzaEvent
}