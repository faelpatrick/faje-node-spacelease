import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Listen Port: ${PORT}.`)
});