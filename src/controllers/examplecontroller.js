// exampleController.js
exports.getExample = (req, res) => {
    // Logic to handle GET request for /example route
    res.send('This is the example route');
  };
  
  exports.postExample = (req, res) => {
    // Logic to handle POST request for /example route
    const data = req.body;
    // Process the data and send a response
    res.json(data);
  };
  