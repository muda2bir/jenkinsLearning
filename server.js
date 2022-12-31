const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Home Page");
	}
});

const port = process.env.PORT || 8080
server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
