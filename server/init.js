import "./db.js";
import app from "./server.js"

const PORT = 8080; 

const handleLsn = () => 
console.log(`✅ Server listening on port http://localhost:${PORT}🚀`);

app.listen(8080, handleLsn);