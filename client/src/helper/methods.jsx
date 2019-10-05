import moment from 'moment'

export const randomUUID = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

export const subtaskTicket = () => {
    return '#'+Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1) + Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
}

export const dateFormat = (date) => {
    return moment(date).format('MMMM Do, h:mm a')
}