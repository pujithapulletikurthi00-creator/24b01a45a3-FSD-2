"use strict";
const express = require("express");
const app = express();
const PORT = 4000;
app.get("/product/:productId", (req, res) => {
    const productId = req.params.productId;
    res.send(
        `<h1>Product Details</h1>
         <p>You are viewing Product ID: <strong>${productId}</strong></p>`
    );
});
app.get("/route/:start/:end", (req, res) => {
    const { start, end } = req.params;
    res.send(
        `Finding a route from <b>${start}</b> to <b>${end}</b>.`
    );
});
app.get("/filter", (req, res) => {
    const type = req.query.type;
    const order = req.query.order;
    res.json({
        message: "Filter Results",
        selectedType: type || "All",
        orderedBy: order || "Default"
    });
});
app.listen(PORT, () => {
    console.log(`Dynamic server started at http://localhost:${PORT}`);
});
