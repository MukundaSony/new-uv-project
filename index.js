import  express  from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const yourBearerToken = "place_openuv_key";



app.get("/",(req,res) =>{
    res.render("index.ejs")
})
app.post("/", async(req,res) =>{
    try{
        
        const result = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${req.body.lat}&lng=${req.body.lon}` ,{headers:{
            "x-access-token": `${ yourBearerToken}`}
        });
        const response = result.data;
        res.render("index.ejs",{UV : response.result.uv});

    }
    catch(error){
        console.log(error.response.data)
    }
});


app.listen(3000,() =>{
    console.log("server is running on port 3000");
})