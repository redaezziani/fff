const getDataById= (id) => {
    return {
        type: 'GET_DATA_BY_ID',
        pyload : id
    }
}

export default getDataById;

