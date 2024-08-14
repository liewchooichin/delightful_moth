/**
 * By starting from the number 1 and repeatedly
 * either adding 5 or multiplying by 3, an infinite set of numbers can be
produced. How would you write a function that, given a number, tries
to find a sequence of such additions and multiplications that produces
that number? For example, the number 13 could be reached by first
multiplying by 3 and then adding 5 twice, whereas the number 15 can-
not be reached at all.
 */
function findSolution(target) {
    function find(current, history) {
        var _a;
        if (current == target) {
            return history;
        }
        else if (current > target) {
            return "";
        }
        else {
            return (_a = find(current + 5, "(".concat(history, " + 5)"))) !== null && _a !== void 0 ? _a : find(current * 3, "(".concat(history, " * 3)"));
        }
    }
    return find(1, "1");
}
// find a solution
console.log(findSolution(1));
console.log(findSolution(24));
