import app from './app.js';
import connectToDB from './configs/db.js';
const PORT=process.env.PORT || 5000;

app.listen(PORT,async ()=>{
    await connectToDB();
    console.log("Space App is running on port :",PORT);
})