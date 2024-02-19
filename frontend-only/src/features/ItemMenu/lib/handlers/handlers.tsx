export const onAddItem = ({chosenSize, setCaptionActive, addItemHandler}: any) => {
    if (chosenSize === '') {
        setCaptionActive(true);
    } else {
        addItemHandler();
    }
};