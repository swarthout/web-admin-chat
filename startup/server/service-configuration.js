ServiceConfiguration.configurations.upsert(
    { service: "github" },
    {
        $set: {
            clientId: "001e9fffabd2f9d5d387",
            loginStyle: "popup",
            secret: "2fb4907a0385d3d21758185ddd5971314f6dc83c"
        }
    }
);