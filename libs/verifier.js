
function verifyPairsName(req, res, next) {
    try {
        const symbols = req.query.symbols;
        console.log(symbols);
        if (symbols === 'tBTCUSD' || symbols === 'tETHUSD') return next();
        return res.status(401).json({
            status: "error",
            data: error,
        });
    } catch (error) {
        return res.status(401).json({
            status: "error",
            data: 'Pairs name are not well defined',
        });
    }
}

module.exports = {
    verifyPairsName,
};
