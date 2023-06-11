app.patch("/classes/approved/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
        $set: {
            status: "approved",
        },
    };
    const result = await classesCollection.updateOne(filter, updateDoc);
    res.send(result);
});
///
app.patch("/classes/denied/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
        $set: {
            status: "denied",
        },
    };
    const result = await classesCollection.updateOne(filter, updateDoc);
    res.send(result);
});



app.delete("/classes/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await classesCollection.deleteOne(query);
    res.send(result);
});