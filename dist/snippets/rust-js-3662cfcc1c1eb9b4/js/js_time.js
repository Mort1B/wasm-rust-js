export function get_now_date() {
    console.log("get_not_date called!");
    let curr_date = new Date();
    return curr_date.toDateString();
}