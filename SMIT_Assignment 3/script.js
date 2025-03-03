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
var productId=102;
var product=null;

for (var i=0;i<products.length;i++) {
  if (products[i].id===productId) {
    product = products[i];
    break;
  }
}

if (product) {
  console.log(product);
} else {
  console.log("Product not found");
}


//task2
for (var i=0;i<products.length;i++) {
  console.log(products[i].title);
}

// task3
var productId=102;
var product=null;

for (var i=0;i<products.length;i++) {
  if (products[i].id===productId) {
    product=products[i];
    break;
  }
}

if (product) {
  console.log("Available colors:");
  for (var i=0;i<product.varations.length;i++) {
    console.log(product.varations[i].color);
  }
} else {
  console.log("Product not found");
}


//task4
var productId=102;
var product=null;
var totalquantity=0;

for (var i=0;i<products.length;i++) {
  if (products[i].id===productId) {
    product=products[i];
    break;
  }
}

if (product) {
  for (var i=0;i<product.varations.length;i++) {
    totalquantity+=product.varations[i].quantity;
  }
  console.log("Available colors:"+totalquantity);
} else {
  console.log("Product not found");
}

// task5
console.log("\nTASK5");
for (var i=0;i<products.length;i++) {
  for (var j=0;j<products[i].varations.length;j++) {
    if (products[i].varations[j].quantity<2) {
      console.log(products[i].title);
    }
  }
}


//task6
var highestRatedProduct=[];
var highestavgRating=0;

for (var i=0;i<products.length;i++) {
  reviewCount=products[i].reviews.length;
  totalRating=0;
  for (var j=0;j<reviewCount;j++) {
    totalRating+=products[i].reviews[j].rating;
  }
  var avgRating=reviewCount>0 ? totalRating/reviewCount : 0;
  if (highestavgRating<avgRating) {
    highestavgRating=avgRating;
    highestRatedProduct=[products[i]];
  } else if (avgRating===highestavgRating) {
    highestRatedProduct.push(products[i]);
  }
}

if (highestRatedProduct.length>0) {
  console.log("Products with the highest average rating:");
  for (var i=0;i<highestRatedProduct.length; i++) {
    console.log("Title:"+highestRatedProduct[i].title);
  }
  console.log("Average Rating:" + highestavgRating);
} else {
  console.log("No products found");
}



// task7
var highestRatedProduct=[];
var highestavgRating=0;

for (var i=0;i<products.length;i++) {
  reviewCount=products[i].reviews.length;
  totalRating=0;
  for (var j=0;j<reviewCount;j++) {
    totalRating+=products[i].reviews[j].rating;
  }
  var avgRating=reviewCount>0 ? totalRating/reviewCount : 0;
  if (highestavgRating<avgRating) {
    highestavgRating=avgRating;
    highestRatedProduct=[products[i]];
  } else if (avgRating===highestavgRating) {
    highestRatedProduct.push(products[i]);
  }
}

if (highestRatedProduct.length>0) {
  console.log("\n\n\nProducts with the highest average rating:");
  for (var i=0;i<highestRatedProduct.length; i++) {
    console.log("Title:"+highestRatedProduct[i].title);

    console.log("Approved Reviews:");

    var approvedReviews=[];
    for (var j=0;j<highestRatedProduct[i].reviews.length;j++) {
      if (highestRatedProduct[i].reviews[j].status===true) {
        console.log(highestRatedProduct[i].reviews[j]);
      }
    }
  }

  console.log("Average Rating:"+highestavgRating);
} else {
  console.log("No products found");
}


//task8
for (var i=0;i<products.length; i++) {
  var product=products[i];
  var mostExpensiveVariation=product.varations[0];
  
  for (var j=1;j<product.varations.length;j++){
    if (product.varations[j].price>mostExpensiveVariation.price){
      mostExpensiveVariation=product.varations[j];
    }
  }
  
  console.log("Product" +productId +"=" +product.title +"-"+mostExpensiveVariation.color+ "("+mostExpensiveVariation.price+")");
}


//task9
var totalStock=0;
for (var i=0;i<products.length;i++) {
  var product=products[i];
  for (var j=0;j<product.varations.length;j++) {
    totalStock+=product.varations[j].price*product.varations[j].quantity;
  }
}
console.log("Total Stock Value: "+totalStock);