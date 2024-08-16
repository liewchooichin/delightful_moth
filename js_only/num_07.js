"use strict";

// simple demo of generator
function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  const gen = generator(10);
  
  // use a for loop to get the items
  // test for done===false. The done is set to false
  // when there is no more items in the generator.
  for(let item=gen.next(); item.done===false; item=gen.next()) {
    console.log(item.value, item.done);
  } 

  // call the generator one by one
  const gen1 = generator(10);
  console.log(gen1.next().value); // 10
  console.log(gen1.next().value); // 11
  console.log(gen1.next().value); // 12
  console.log(gen1.next().value); // 13
  console.log(gen1.next().value); // 20
  console.log(gen1.next().value); // 20
  
  
  // Generator as an object method
  class Foo {
    *generator() {
      yield 1;
      yield 2;
      yield 3;
    }
  }
  
  const f = new Foo();
  const gen2 = f.generator();
  
  console.log(gen2.next()); // { value: 1, done: false }
  console.log(gen2.next()); // { value: 2, done: false }
  console.log(gen2.next()); // { value: 3, done: false }
  console.log(gen2.next()); // { value: undefined, done: true }
  