require('dotenv').config();
const app = require('./app');
const connectDB = require('./DB/Db');

const PORT = process.env.PORT || 3000;

(async () => {
    try{
          await connectDB();   
          console.log("✅ MongoDB Ready"); 

           app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
    } catch(err) {
        console.error("❌ Startup Error:", err.message);
    process.exit(1)
    }
  
  
 
})();
