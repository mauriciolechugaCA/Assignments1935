// Mauricio Lechuga - 89522857

let cart = [];

// Function to add items to the cart array
function addToCart(productName) {
  const quantity = prompt("Enter quantity:");

  if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  // Prints the amount input by user to corresponding line in store
  let printQuantity;
  switch (productName) {
    case "USB Pet Rock":
      printQuantity = document.getElementById("itemQuantity1");
      break;
    case "Silent Alarm Clock":
      printQuantity = document.getElementById("itemQuantity2");
      break;
    case "Non-stick Glue Stick":
      printQuantity = document.getElementById("itemQuantity3");
      break;
    case "Invisible Ink Pen":
      printQuantity = document.getElementById("itemQuantity4");
      break;
    case "Set of Square Tires":
      printQuantity = document.getElementById("itemQuantity5");
      break;
    default:
  }

  if (printQuantity) {
    printQuantity.innerHTML = quantity;
  }

  // Pushes the information of each product to the end of the array
  cart.push({
    product: productName,
    quantity: parseInt(quantity),
    cost: getCost(productName),
  });
}

// Function to get the cost of each item depending on the item added
function getCost(productId) {
  if (productId === "USB Pet Rock") {
    return 14.99;
  } else if (productId === "Silent Alarm Clock") {
    return 39.99;
  } else if (productId === "Non-stick Glue Stick") {
    return 3.99;
  } else if (productId === "Invisible Ink Pen") {
    return 8.99;
  } else if (productId === "Set of Square Tires") {
    return 199.99;
  }
  return 0;
}

// Function to checkout items in cart and print receipt
function checkout() {
  // First, we validate that cart is not empty
  if (cart.length === 0) {
    alert("Your cart is empty. Add something to purchase.");
    return;
  }

  // Ask user for their name
  const customerName = prompt("Enter your name:");

  // Validates non-empty input for name
  if (!customerName || customerName === "") {
    alert("Enter a name to start checkout process.");
    return;
  }

  // Declaring the variables for the calculations.
  // Adding values in the array and taxes.
  const taxRate = 0.13;

  // Used reduce to sum values of cart into a single result.
  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.cost,
    0
  );
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  // Print receipt header
  let receipt = "Order Summary\n";
  receipt += "Customer Name: " + customerName + "\n\n";

  // Running through the array to calculate and print each product total
  cart.forEach((item) => {
    receipt +=
      item.quantity +
      "     x     " +
      item.product +
      "     |     " +
      (item.cost * item.quantity).toFixed(2) +
      "\n";
  });

  // Prints the footer of receipt that includes totals.
  // .toFixed(2) prints only two decimal points.
  receipt += "\n\nSubtotal: $" + subtotal.toFixed(2) + "\n";
  receipt += "Taxes @ 13%: $" + taxes.toFixed(2) + "\n";
  receipt += "Total: $" + total.toFixed(2);

  const printReceipt = document.getElementById("receipt");
  printReceipt.innerText = receipt;
}

// Added a function to clear the front and array without reloading
function clearCart() {
  document.getElementById("itemQuantity1").innerHTML = "";
  document.getElementById("itemQuantity2").innerHTML = "";
  document.getElementById("itemQuantity3").innerHTML = "";
  document.getElementById("itemQuantity4").innerHTML = "";
  document.getElementById("itemQuantity5").innerHTML = "";

  document.getElementById("receipt").innerHTML = "  ";

  cart.length = 0;
}
