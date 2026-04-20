const notFound = (req, res, next) => {
    res.status(404).json({
        message: "Route doesn't exist"
    });
};

export default notFound;