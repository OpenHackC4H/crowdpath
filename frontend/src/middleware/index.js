const crashReporter = store => next => action => {
    try {
        next(action);
    } catch(err) {
        console.group('Crash Report');
        console.error('Error with action: ', action);
        console.error(err);
        console.groupEnd('Crash Report')
    }
}

export default crashReporter;