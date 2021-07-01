let store = {
    user: {
        name: "John Doe"
    }
}

new vue ({
    el: "#one",

    data: {
        shared: store
    }
});

new vue ({
    el: "#two",
    
    data: {
        shared: store
    }
});