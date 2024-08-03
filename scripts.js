app.get('/track-click/:linkId', async (req, res) => {
    const { linkId } = req.params;
    await Link.updateOne({ _id: linkId }, { $inc: { clicks: 1 } });
    // Redirect to the actual URL
    res.redirect('https://example.com');
});
