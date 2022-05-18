export default () => ({
    onMouseOver: (e: any) => {
        if (document.documentElement.classList.contains('dark')) {
            e.currentTarget.children[0].style.stroke = 'white';
        } else {
            e.currentTarget.children[0].style.stroke = 'black';
        }
    },
    onMouseOut: (e: any) => {
        e.currentTarget.children[0].style.stroke = '';
    },
});
