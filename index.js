const express = require ('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// app.get("/", (req, res) => {
//     res.json({status: "server is running"});
// });

// app.get("/test", (req, res) => {
//     res.json({status: "test is running"});
// });

app.post('/test', (req, res)=> {
    const reqString = req.body.string_to_cut;
    const stringToArr = reqString.split('');
    let resultArr = [];
    for (let i=2; i < stringToArr.length; i=i+3) {
            resultArr.push(stringToArr[i]);
        }
    res.json({return_string: resultArr.join('')});
});

app.listen(PORT, () => {console.log(`Listening at port ${PORT}`)})