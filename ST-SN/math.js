function math(nums){
    if (nums == 1) return 1;
    let ans = math(nums-1) + nums;
    return ans;
}
math(5);
// I'm happy i made it x3