export default {
  rTime(date) {
    const jsonDate = new Date(date).toJSON();
    return new Date(new Date(jsonDate) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
  },

  formatDate(iso) {
    const date = new Date(iso);
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec'];
    const suffix = ['st', 'nd', 'rd', 'th'];

    const year = date.getFullYear(); // 年
    const month = monthArr[date.getMonth()]; // 月
    let ddate = date.getDate(); // 日

    if (ddate % 10 < 1 || ddate % 10 > 3) {
      ddate += suffix[3];
    } else if (ddate % 10 === 1) {
      ddate += suffix[0];
    } else if (ddate % 10 === 2) {
      ddate += suffix[1];
    } else {
      ddate += suffix[2];
    }
    return `${ddate} ${month} ${year}`;
  },
};
