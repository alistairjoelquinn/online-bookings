export default (text: string) => {
    navigator.clipboard.writeText(text).then(
        () => {
            console.log('it worked');
        },
        () => {
            console.log(' it failed');
        },
    );
};
