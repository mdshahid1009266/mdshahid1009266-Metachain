import mongoose from "mongoose";
// const URL="mongodb+srv://shahidtemp7384:mdshahid7384@cluster0.qgbgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const URL="mongodb+srv://shahidtemp7384:mdshahid7384@cluster0.27xhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const connection = async () => {
//     try {
//         await mongoose.connect(URL);
//         console.log("database connected");
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// export default connection;


async function connectToDatabase() {
  try {
    await mongoose.connect(URL);
    console.log('Database connected');
  } catch (error) {
    console.error('Connection failed:', error.message);
    // Handle the error appropriately, e.g., retry connection or display a user-friendly message
  }
}

export default connectToDatabase;
