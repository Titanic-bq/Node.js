import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler() {
  console.log(`Hello, World!`);
}

function farewellHandler() {
  console.log(`Goodbye, World!`);
}

myEmitter.on("greet", greetHandler);
myEmitter.on("farewell", farewellHandler);

myEmitter.emit("greet");
myEmitter.emit("farewell");

myEmitter.on("error", (err) => {
  console.error(`An error occurred: ${err.message}`);
});

myEmitter.emit("error", new Error("Something went wrong!"));
