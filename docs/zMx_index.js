// index.js
console.log('Server started successfully!');
setInterval(() => {
  console.log('Server is running...', new Date().toISOString());
}, 5000);