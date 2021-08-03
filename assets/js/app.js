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

createPizzaItem = () => {
    run();
    toppings = [];
    for (let i = 0; i < options.length; i++) {
        toppings.push(options[i].value);
    };

    individualCost = myFunction();
    
    function myFunction() {
        let crustCost
        let sizeCost
        let toppingsCost

        if (size == 'Small') {
            sizeCost = 100;
        }
        else if (size == 'Medium') {
            sizeCost = 200;
        }
        else if (size == 'Large') {
            sizeCost = 400;
        }
        else if (size == 'X-Large') {
            sizeCost = 600;
        }

        console.log(sizeCost);

        if (crust == 'Crispy') {
            crustCost = 200;
        } else if (crust == 'Stuffed') {
            crustCost = 400;
        }

        console.log(crustCost);
        
        toppingsCost=0;

        toppings.forEach(element => {
            if (element == 'BBQ-Steak') {
                toppingsCost += 300;

            } 
            if (element == 'Peri-Peri') {
                toppingsCost += 300;

            } 
            if (element == 'Vegan') {
                toppingsCost += 200;
                
            }          
            console.log(toppingsCost);
        });

        totalCost=crustCost + sizeCost + toppingsCost
        console.log(totalCost)
        return totalCost
    };

    const newPizza = new PizzaItem(size, toppings, crust, individualCost)

    pizzas.push(newPizza);
    
    totalcost = 0;
    for (let i = 0; i < pizzas.length; i++) {
        totalcost += pizzas[i].cost;
    }

    //Output
    console.log(pizzas);
    console.log(newPizza);
    console.log(totalcost);
    console.log(newPizza.toppingsType.toString())

    div = document.createElement('div')
    div.setAttribute('class', 'list')
    document.getElementById('item-list').appendChild(div)

    p = document.createElement('p');
    let orderText = document.createTextNode(newPizza.crustName + ' ' + newPizza.toppingsType + ' ' + newPizza.sizeName);
    p.setAttribute('id', 'item');
    p.appendChild(orderText);
    div.appendChild(p);

    p = document.createElement('p');
    let subTotalText = document.createTextNode(newPizza.cost);

    p.setAttribute('id', 'sub-total');
    p.appendChild(subTotalText);
    div.appendChild(p);
};