import "./db.js";
import app from "./server.js"

const PORT = 8080; //8080 포트 사용 for GCP

const handleLsn = () => 
console.log(`✅ Server listening on port http://localhost:${PORT}🚀`);

app.listen(8080, handleLsn);