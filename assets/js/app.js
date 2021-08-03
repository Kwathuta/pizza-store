pizzas = [];

function PizzaItem(size, toppings, crust, individualCost) {
    this.sizeName = size,
    this.toppingsType = toppings,
    this.crustName = crust,
    this.cost = individualCost
}



let options, size, crust, toppings;

run = () => {
    options = document.querySelectorAll("[name='toppings']:checked");
    size = document.querySelector("[name='sizes']:checked").value;
    crust = document.querySelector("[name='crust']:checked").value;
    console.log(size);

}