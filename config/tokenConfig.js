module.exports = {
    jwt: {
        tokens: {
            access: {
                type: "access",
                expiresIn: "30m",
            },
            refresh: {
                type: "refresh",
                expiresIn: "10d",
            },
        },
    },
};
