// Middleware Auth
const token = req.header('Authorization');

if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
}

try {
    const TOKEN_VALUE = token.split(' ')[1];
    next();
} catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' });
}
