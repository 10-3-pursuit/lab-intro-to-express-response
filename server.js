const app = require("./app");

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
