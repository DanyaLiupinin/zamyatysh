export const onUpdateData = ({data, setEditData}: any) => {
    localStorage.setItem('userData', JSON.stringify(data));
    setEditData(false);
};