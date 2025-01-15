let orderStack = [];
let deliveryQueue = [];
let orderIdCounter = 1;

function placeOrder(type) {
    const priority = type === "Premium" ? 1 : type === "Popular" ? 2 : 3;
    const newOrder = { id: orderIdCounter++, type, priority };
    orderStack.unshift(newOrder); // Add new order to the top of the stack
    displayStack();
}

function deliverOrder() {
    if (orderStack.length === 0) {
        alert("No orders to deliver!");
        return;
    }
    const orderToDeliver = orderStack.shift(); // Remove from the top of the stack
    deliveryQueue.push(orderToDeliver); // Add to the end of the queue
    displayStack();
    displayQueue();
}

function cancelOrder() {
    if (orderStack.length === 0) {
        alert("No orders to cancel!");
        return;
    }
    orderStack.shift(); // Remove from the top of the stack
    displayStack();
}

function cancelDelivery() {
    if (deliveryQueue.length === 0) {
        alert("No deliveries to cancel!");
        return;
    }
    deliveryQueue.shift(); // Remove from the front of the queue
    displayQueue();
}

function displayStack() {
    const stackList = document.getElementById("orderStack");
    stackList.innerHTML = "";
    orderStack.forEach(order => {
        const li = document.createElement("li");
        li.textContent = `Order ID: ${order.id} - ${order.type}`;
        stackList.appendChild(li);
    });
}

function displayQueue() {
    const queueList = document.getElementById("deliveryQueue");
    queueList.innerHTML = "";
    deliveryQueue.forEach(order => {
        const li = document.createElement("li");
        li.textContent = `Order ID: ${order.id} - ${order.type}`;
        queueList.appendChild(li);
    });
}
