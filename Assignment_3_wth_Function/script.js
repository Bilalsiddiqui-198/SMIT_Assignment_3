let products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    varations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: true,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    varations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    varations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];

//task1
function product_by_id(all_products, productid) {
  for (let i = 0; i < all_products.length; i++) {
    if (all_products[i].id === productid) 
      return all_products[i];
  }
}
let product_id = 102;
let product = product_by_id(products, product_id);

if (product) {
  console.log(product);
} else {
  console.log("Product not found");
}

// task2
function title_of_pro(pro) {
  for (let i = 0; i < pro.length; i++) {
    console.log(pro[i].title);
  }
}

title_of_pro(products);

// task3
function product_by_id(all_products, productid) {
  for (let i = 0; i < all_products.length; i++) {
    if (all_products[i].id === productid) 
      return all_products[i];
  }
}
product_id = 102;
product = product_by_id(products, product_id);

function colors(pro) {
  for (let i = 0; i < pro.varations.length; i++) {
    console.log(pro.varations[i].color);
  }
}

// all_colors=colors(product)
if (product) {
  console.log("Available colors");
  // console.log(all_colors);
  colors(product);
} else {
  console.log("Product not found");
}

// task4
function product_by_id(all_products, productid) {
  for (let i = 0; i < all_products.length; i++) {
    if (all_products[i].id === productid) 
      return all_products[i];
  }
}
product_id = 102;
product = product_by_id(products, product_id);
let totalquantity = 0;

function Total_quantity(pro) {
  for (let i = 0; i < pro.varations.length; i++) {
    totalquantity += pro.varations[i].quantity;
  }
  console.log(totalquantity);
}
if (product) {
  console.log("Total Quantity: ");
  Total_quantity(product);
} else {
  console.log("Product not found");
}

// task5
function product_filter(pro) {
  for (var i = 0; i < pro.length; i++) {
    for (var j = 0; j < pro[i].varations.length; j++) {
      if (pro[i].varations[j].quantity < 2) {
        console.log(pro[i].title);
      }
    }
  }
}

product_filter(products);

// task6

function calculateavgratingpro(pro) {
  let reviewCount = pro.reviews.length;
  let totalrating = 0;
  for (let f = 0; f < reviewCount; f++) {
    totalrating += pro.reviews[f].rating;
  }
  if (reviewCount > 0) {
    return totalrating / reviewCount;
  } else {
    return 0;
  }
}
function highestratedpro(products) {
  let highestratedproduct = [];
  let highestavgrating = 0;

  for (let i = 0; i < products.length; i++) {
    let avgRating = calculateavgratingpro(products[i]);

    if (highestavgrating < avgRating) {
      highestavgrating = avgRating;
      highestratedproduct = [products[i]];
    } else if (avgRating === highestavgrating) {
      highestratedproduct.push(products[i]);
    }

    return { highestratedproduct, highestavgrating };
  }
}

function display_highest_rated_pro(products) {
  let result = highestratedpro(products);
  if (result.highestratedproduct.length > 0) {
    console.log("Products with the highest average rating:");
    for (var i = 0; i < result.highestratedproduct.length; i++) {
      console.log("Title:" + result.highestratedproduct[i].title);
    }
    console.log("Average Rating:" + result.highestavgrating);
  } else {
    console.log("No products found");
  }
}
display_highest_rated_pro(products);

console.log("Task7");
// task7
function calculateavgratingpro7(pro) {
  let reviewCount = pro.reviews.length;
  let totalrating = 0;
  for (let f = 0; f < reviewCount; f++) {
    totalrating += pro.reviews[f].rating;
  }
  if (reviewCount > 0) {
    return totalrating / reviewCount;
  } else {
    return 0;
  }
}
function highestratedpro7(products) {
  let highestratedproduct = [];
  let highestavgrating = 0;

  for (let i = 0; i < products.length; i++) {
    let avgRating = calculateavgratingpro7(products[i]);

    if (highestavgrating < avgRating) {
      highestavgrating = avgRating;
      highestratedproduct = [products[i]];
    } else if (avgRating === highestavgrating) {
      highestratedproduct.push(products[i]);
    }
  }
  return { highestratedproduct, highestavgrating };
}

function display_highest_rated_pro7(products) {
  let result = highestratedpro(products);
  if (result.highestratedproduct.length > 0) {
    console.log("Products with the highest average rating:");
    console.log("Average Rating:" + result.highestavgrating);
    for (var i = 0; i < result.highestratedproduct.length; i++) {
      console.log("Title:" + result.highestratedproduct[i].title);
      console.log("Approved Reviews:");

      var approvedReviews = [];
      for (var j = 0; j < result.highestratedproduct[i].reviews.length; j++) {
        if (result.highestratedproduct[i].reviews[j].status === true) {
          console.log(result.highestratedproduct[i].reviews[j]);
        }
      }
    }
  } else {
    console.log("No products found");
  }
}
display_highest_rated_pro7(products);

// task8
console.log("Task8");
function mostexpvariation(products) {
  for (var i = 0; i < products.length; i++) {
    var product8 = products[i];
    var mostExpensiveVariation = product8.varations[0];

    for (var j = 1; j < product8.varations.length; j++) {
      if (product8.varations[j].price > mostExpensiveVariation.price) {
        mostExpensiveVariation = product8.varations[j];
      }
    }

    console.log(
      "Product" +
        products[i].id +
        "=" +
        product8.title +
        "-" +
        mostExpensiveVariation.color +
        "(" +
        mostExpensiveVariation.price +
        ")"
    );
  }
}
mostexpvariation(products);

//task9
function totalstockValue(products) {
  var totalStock = 0;
  for (var i = 0; i < products.length; i++) {
    var product9 = products[i];
    for (var j = 0; j < product9.varations.length; j++) {
      totalStock +=
        product9.varations[j].price * product9.varations[j].quantity;
    }
  }
  console.log("Total Stock Value: " + totalStock);
}
totalstockValue(products);
