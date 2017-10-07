function saveState(state){
    localStorage.setItem('state', JSON.stringify(state));
}

export default function () {
    return next => (reducer, initialState) => {
        const store = next(reducer, initialState);
        store.subscribe( () => {
            const state = store.getState();
            saveState(state);
        });
        return store;
    }
}