module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (date) => {
        return `${newDate(date).getMonth() + 1}/${ new Date(date).getDate()}/${
            new Date(date).getFullYear()
        }`;
    },
};