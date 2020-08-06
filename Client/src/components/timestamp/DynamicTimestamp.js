let time = (now) => {
    if ((Date.now()-now) < 1000){
        return 'just now'
    } else if ((Date.now()-now) === 1000){
        return '1 second ago'
    } else if ((Date.now()-now) < 60000) {
        return 'seconds ago';
    } else if ((Date.now()-now) === 60000){
        return 'a minute ago';
    } else if ((Date.now()-now) < 900000){
        return 'minutes ago';
    } else if ((Date.now()-now) < 1800000){
        return '15 minutes ago';
    } else if ((Date.now()-now) < 2700000){
        return '30 minutes ago';
    } else if ((Date.now()-now) < 3600000){
        return '45 minutes ago';
    } else if ((Date.now()-now) < 7200000){
        return '1 hour ago';
    } else if ((Date.now()-now) < 10800000){
        return '2 hours ago';
    } else if ((Date.now()-now) < 86400000){
        return 'hours ago';
    } else if ((Date.now()-now) < (1.728e+8)){
        return '1 day ago';
    } else if ((Date.now()-now) < (2.592e+8)){
        return '2 day ago';
    } else if ((Date.now()-now) < (6.048e+8)){
        return 'days ago';
    } else if ((Date.now()-now) < (1.21e+9)){
        return '1 week ago';
    } else if ((Date.now()-now) < (1.814e+9)){
        return '2 weeks ago';
    } else if ((Date.now()-now) < (2.628e+9)){
        return 'weeks ago';
    } else if ((Date.now()-now) < (5.256e+9)){
        return '1 month ago';
    } else if ((Date.now()-now) < (7.884e+9)){
        return '2 months ago';
    } else if ((Date.now()-now) < (3.154e+10)){
        return 'months ago';
    } else if ((Date.now()-now) < (6.307e+10)){
        return '1 year ago';
    } else if ((Date.now()-now) < (9.461e+10)){
        return '2 years ago';
    } else {
        return 'years ago';
    };
};

export default time