const welcome = async (req, res) => {
    
    res
        .status(200)
        .send({
            success: true,
            message: "Welcome Welcome Rimshaaaaa"
        });
}

module.exports = welcome;