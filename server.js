const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var rTables = [
    {
        customerName: "Trevor",
        phoneNumber: "89032409324",
        customerEmail: "Trevor@aol.com",
        customerID: "MistaManTrev"

    },
    {
        customerName: "Mike",
        phoneNumber: "6199060086",
        customerEmail: "mike@aol.com",
        customerID: "CaptainMike"
    },
    {
        customerName: "Oakkar",
        phoneNumber: "555555555",
        customerEmail: "oakkar@aol.com",
        customerID: "FireFireFire"
    }
];
var rWaitlist = [
    {
        customerName: "Travis",
        phoneNumber: "80249390324",
        customerEmail: "Travis@aol.com",
        customerID: "FOOBAR"
    },
    {
        customerName: "Clark",
        phoneNumber: "82039093244",
        customerEmail: "Clark@aol.com",
        customerID: "Bald"
    },
    {
        customerName: "Jon",
        phoneNumber: "09324890324",
        customerEmail: "jon@aol.com",
        customerID: "Glasses"
    }
];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", (req, res) => {
    return res.json(rTables)
});
app.get("/api/waitlist", (req, res) => {
    return res.json(rWaitlist);
});

app.post("/api/tables", (req, res) => {
    var newTable = req.body;

    console.log(newTable);

    if (rTables.length < 5) {
        rTables.push(newTable);
    }
    else {
        rWaitlist.push(newTable);
    }
    res.json(newTable);
})

app.post("/api/reserves", (req, res) => {
    var newTable = req.body;

    console.log(newTable);

    if (rTables.length < 5) {
        rTables.push(newTable);
    }
    else {
        rWaitlist.push(newTable);
    }
    res.json(newTable);
})



app.listen(PORT, () => {
    console.log("App listening on PORT" + PORT);
})