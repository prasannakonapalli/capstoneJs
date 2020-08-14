let items = [];


items = [
  {
    id: 1,
    image: "images/apple-256261_960_720.jpg",
    name: "Apple",
    desc: "Apple",
    price: 1.2,
  },
  {
    id: 2,
    image: "images/bananas-1119790__340.jpg",
    name: "Bannana",
    desc: "Bannana",
    price: 2.2,
  },
  {
    id: 3,
    image: "images/pineapple-1853466__340.jpg",
    name: "PineApple",
    desc: "PineApple",
    price: 3.2,
  },
  {
    id: 4,
    image: "images/orange-1995079__340.jpg",
    name: "Orange",
    desc: "Orange",
    price: 4.2,
  },
  {
    id: 5,
    image: "images/strawberries-3359755__340.jpg",
    name: "Strawberry",
    desc: "Strawberry",
    price: 4.2,
  },
  {
    id: 6,
    image: "images/plums-3641830__340.jpg",
    name: "Plums",
    desc: "Plums",
    price: 4.2,
  },
  {
    id: 7,
    image: "images/kiwi-2673038__340.jpg",
    name: "Kiwi",
    desc: "Kiwi",
    price: 4.2,
  },
  {
    id: 8,
    image: "images/fig-2079166__340.jpg",
    name: "Figs",
    desc: "Figs",
    price: 4.2,
  },
  {
    id: 9,
    image: "images/blackberries-1539540__340.jpg",
    name: "Blackberry",
    desc: "Blackberry",
    price: 4.2,
  },
  {
    id: 10,
    image: "images/blueberries-690072__340.jpg",
    name: "Blueberry",
    desc: "Blueberry",
    price: 4.2,
  },
 {
    id: 11,
    image: "images/grapes-276070__340.jpg",
    name: "Grapes",
    desc: "Grapes",
    price: 4.2,
  },
];

let orderedItems = [];

// Find a <table> element with id="myTable":
let table = document.getElementById("myTable");
let header = document.createElement("thead");
table.appendChild(header);
let tbody = document.createElement("tbody");
table.appendChild(tbody);
let tableHrow = document.createElement("tr");
header.appendChild(tableHrow);

const keys = Object.keys(items[0]);
//console.log(keys);
for (const key of keys) {
  if (key == "image" || key == "name" || key == "desc" || key == "price") {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(key));
    tableHrow.appendChild(th);
  }
}

for (var i = 0; i < items.length; i++) {
  // var id = items[i].id;
  var img = items[i].image;
  var name = items[i].name;
  var desc = items[i].desc;
  var price = items[i].price;

  var tr = document.createElement("tr");

  //var idCell = document.createElement("td");
  var imgCell = document.createElement("td");
  var btnCell = document.createElement("td");
  var nameCell = document.createElement("td");
  var descCell = document.createElement("td");
  var priceCell = document.createElement("td");
  var btn = document.createElement("BUTTON"); // Create a <button> element
  var imgEl = document.createElement("img"); // Create a image element
  imgEl.setAttribute("src", img);

  // idCell.appendChild(document.createTextNode(id));
  imgCell.appendChild(imgEl);

  nameCell.appendChild(document.createTextNode(name));
  descCell.appendChild(document.createTextNode(desc));
  priceCell.appendChild(document.createTextNode(price));
  btn.innerHTML = "Add"; // Insert text

  // 3. Add event handler
  btn.addEventListener("click", function () {
	// console.log(this.parentNode.parentNode);
    var rowId = this.parentNode.parentNode.rowIndex;
    addCart(rowId);
    // console.log(rowId);
    // console.log(this.parentNode);
    // console.log(this.parentNode.closest("tr").rowIndex);
  });

	btnCell.appendChild(btn);

  // tr.appendChild(idCell);
  tr.appendChild(imgCell);
  tr.appendChild(nameCell);
  tr.appendChild(descCell);
  tr.appendChild(priceCell);
  tr.appendChild(btnCell);
//tr.appendChild(btn);

  tbody.appendChild(tr);
}
//document.body.appendChild(table);

function addCart(element) {
  // console.log(element);
  //console.log(items.filter((r) => r.id == element));
  //let item = items.filter((r) => r.id == element)[0];

//find whether the element exists in the Items array.
  let item = items.find((r) => r.id == element);
  // console.log(item);
  //let orderItem = orderedItems.filter((r) => r.id == item.id)[0];

//find whether the element exists in the OrderItems array.
  let orderItem = orderedItems.find((r) => r.id == element);
  //console.log(orderItem);

//if orderItems doesn't exists then create new object and push to orderedItems array
  if (!orderItem) {
    //  console.log("Test");
    let oi = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1, //default set to 1
    };
    orderedItems.push(oi);
  } else { //update quantity and price for the existing OrderedItem
    // console.log(orderItem);
    // console.log(item.price);
    orderItem.quantity = orderItem.quantity + 1;
    orderItem.price = item.price * orderItem.quantity;
    // console.log(orderItem);
  }

  // console.log(orderedItems);
}

function displayOrderItems() {
  //alert("test");

  let subTotal = 0;
  let taxTotal = 0;
  let grandTotal = 0;
  let table = document.getElementById("myCheckoutTable");
  table.innerHTML = "";
  let header = document.createElement("thead");
  table.appendChild(header);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  let tableHrow = document.createElement("tr");
  header.appendChild(tableHrow);

  const keys = Object.keys(orderedItems[0]);
  //console.log(keys);
  for (const key of keys) {
    if (key == "name" || key == "quantity" || key == "price") {
      let th = document.createElement("th");
      th.appendChild(document.createTextNode(key));
      tableHrow.appendChild(th);
    }
  }

  for (var i = 0; i < orderedItems.length; i++) {
    // var id = items[i].id;

    var name = orderedItems[i].name;
    var price = orderedItems[i].price;
    var qty = orderedItems[i].quantity;
    subTotal += price;
    var tr = document.createElement("tr");

    var nameCell = document.createElement("td");
    var priceCell = document.createElement("td");
    var qtyCell = document.createElement("td");

    nameCell.appendChild(document.createTextNode(name));
    priceCell.appendChild(document.createTextNode(price.toFixed(2)));
    qtyCell.appendChild(document.createTextNode(qty));

    // tr.appendChild(idCell);
    tr.appendChild(nameCell);
    tr.appendChild(priceCell);
    tr.appendChild(qtyCell);

    tbody.appendChild(tr);
  }
  var trsubTotal = document.createElement("tr");
  var subTotalCell = document.createElement("td");
  var subTotalValCell = document.createElement("td");
	subTotalValCell.setAttribute("colspan", 2);
	subTotalValCell.setAttribute("class", "subtotals");
	subTotalCell.setAttribute("class", "subtotals");
  var trTaxTotal = document.createElement("tr");
  var taxTotalCell = document.createElement("td");
  var taxTotalValCell = document.createElement("td");
taxTotalValCell.setAttribute("colspan", 2);
taxTotalValCell.setAttribute("class", "subtotals");
taxTotalCell.setAttribute("class", "subtotals");
  var trGrandTotal = document.createElement("tr");
  var grandTotalCell = document.createElement("td");
  var grandTotalValCell = document.createElement("td");
grandTotalValCell.setAttribute("colspan", 2);
grandTotalValCell.setAttribute("class", "subtotals");
grandTotalCell.setAttribute("class", "subtotals");

  subTotalCell.appendChild(document.createTextNode("SubTotal"));
  subTotalValCell.appendChild(document.createTextNode(subTotal.toFixed(2)));

  taxTotalCell.appendChild(document.createTextNode("TaxTotal"));
  taxTotal = (subTotal * 6) / 100;
  taxTotalValCell.appendChild(document.createTextNode(taxTotal.toFixed(2)));

  grandTotalCell.appendChild(document.createTextNode("Grand Total"));
  grandTotal = subTotal + taxTotal;
  grandTotalValCell.appendChild(document.createTextNode(grandTotal.toFixed(2)));

  trsubTotal.appendChild(subTotalCell);
  trsubTotal.appendChild(subTotalValCell);
  trTaxTotal.appendChild(taxTotalCell);
  trTaxTotal.appendChild(taxTotalValCell);
  trGrandTotal.appendChild(grandTotalCell);
  trGrandTotal.appendChild(grandTotalValCell);
  tbody.appendChild(trsubTotal);
  tbody.appendChild(trTaxTotal);
  tbody.appendChild(trGrandTotal);
}
