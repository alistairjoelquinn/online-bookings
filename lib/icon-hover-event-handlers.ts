export default () => ({
    onMouseOver: (e: any) => (e.currentTarget.children[0].style.stroke = 'red'),
    onMouseOut: (e: any) => {
        e.currentTarget.children[0].style.stroke = '';
    },
});
