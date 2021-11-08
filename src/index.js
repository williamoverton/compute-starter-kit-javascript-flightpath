import { Router } from "flight-path";

// Create router object for binding routes to.
const router = new Router();

// Add middleware for all routes setting the x-powered-by header.
router.use((req, res) => {
  res.setHeader("x-powered-by", "Fastly C@E - Flight Path");
});


// Bind to GET requests on /
router.get("/", (req,res) => {
  res.send("Hello World!")
});

// Finally, have Flight Path handle requests by calling .listen() on the router.
router.listen();