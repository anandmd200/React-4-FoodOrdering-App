# React-4-FoodOrdering-App

### Config Driven UI? 
A dynamic UI which is changes based on data known as `config driven` UI. See if people on different location (As food odering App) see different data(UI).Basically, contoling UI by some configuration provided by backend API.

### optional Chaining ?


### Define `props` in React?
Passing arguments inside the component is known as `props`. Props is a short hand of properties inside component. `props` as name is not mandatory it is only good proctice used by the community of developers.

```
 <RestaurantCard restaurantList={restaurantList[0]} />

```
#### Can we pass multiple props? 
Yes, You can pass.

```
<RestaurantCard restaurantList={restaurantList[0]} neame="Andrew"/>
```

### what is spread Operator?
The spread `(...)` syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

O/P: 6

```

### why we use `map` instead of loop?
`map` is a best way to do functional programming. In industry you will always see map in large scale.

```
 restaurantList.map(Element => <RestaurantCard {...Element.data} />);

 or

 restaurantList.map(Element =>{
    return <RestaurantCard {...Element.data} />
 });

```

### Virtual DOM? 
It is not the only use in React, it is Software Engineering concept. `Virtual Dom` is a same representation of DOM tree in memory and sync with the real DOM using `reconciliation` process.
`Reconciliation` uses `Diff` algorithm to find diff between trees (Real DOM diff Vrtual Dom) and it determines what portion of UI need to be changed or re-render.

### why we need unique key for element? 
Because, diff algorithm easily identifiy that which react element was their and which new one come, where it will be placed in dom tree. This is what makes react fast.
The key only has to be unique among its siblings, not globally unique.

`No key <<<<< Index key << uniques key`

```
<div> <div> <div> <div>    <-----  new <div>  React confuse (where to place it) 

<div key="1"> <div key="2"> <div key="3"> <div key="4">       <----- new <div key="5"> (easily identify and render it)

```

