const items = {
    "Banana": 0.50,
    "Apple": 0.75,
    "Orange": 1.00,
    "Grapefruit": 1.25,
    "Mango": 2.00,
    "Pineapple": 3.50,
    "Watermelon": 5.00,
    "Cantaloupe": 3.00,
    "Honeydew": 2.50,
    "Strawberry": 4.00,  // Price assumed to be per pound
    "Blueberry": 6.00,  // Price assumed to be per pound
    "Raspberry": 5.00,  // Price assumed to be per pound
    "Blackberry": 7.00,  // Price assumed to be per pound
    "Carrot": 0.25,
    "Potato": 0.75,
    "Onion": 0.50,
    "Garlic": 2.00,
    "Lettuce": 1.50,
    "Tomato": 1.00,
    "Cucumber": 0.75,
    "Bell Pepper": 1.25,
    "Broccoli": 2.00,
    "Cauliflower": 2.50,
    "Chicken Breast": 5.00,  // Price assumed to be per pound
    "Ground Beef": 4.00,  // Price assumed to be per pound
    "Salmon": 8.00,  // Price assumed to be per pound
    "Tilapia": 6.00,  // Price assumed to be per pound
    "Eggs": 3.00,  // Price assumed to be per dozen
    "Milk": 2.50,  // Price assumed to be per gallon
    "Bread": 2.00,
    "Rice": 1.50,
    "Pasta": 1.00,
  };
  const listArray = Object.entries(items).map(
  ([key,value]) => {
    return `${key}:${value * 80}`
  })
  console.log(listArray)