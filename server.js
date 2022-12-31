const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("<h1>Home Page</h1>");
	}
});

const port = process.env.PORT || 7860 
server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
