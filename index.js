console.log('Hello from Eshan project!');
console.log('Build successful - project is running.');

// Simple example function
function greet(name = 'World') {
    return `Hello, ${name}!`;
}

console.log(greet('Eshan'));

module.exports = { greet };