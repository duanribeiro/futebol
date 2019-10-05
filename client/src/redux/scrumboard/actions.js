const scrumAction = {
    UPDATE_BOARDS: 'UPDATE_BOARDS',
    
    updateBoards: (data) => {
        return {
            type: scrumAction.UPDATE_BOARDS,
            boards: data
        };
    }
}

export default scrumAction