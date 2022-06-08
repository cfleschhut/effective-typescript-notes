"use strict";
/*
Item 31:
Push Null Values to the Perimeter of Your Types
*/
function extent(nums) {
    let result = null;
    for (const num of nums) {
        if (!result) {
            result = [num, num];
        }
        else {
            result = [Math.min(num, result[0]), Math.max(num, result[1])];
        }
    }
    return result;
}
const [min, max] = extent([0, 1, 2]);
const span = max - min;
const range = extent([0, 1, 2]);
if (range) {
    const [min, max] = range;
    const span = max - min;
}
class UserPosts {
    constructor(user, posts) {
        this.user = user;
        this.posts = posts;
    }
    static async init(userId) {
        const [user, posts] = await Promise.all([
            fetchUser(userId),
            fetchPostsForUser(userId),
        ]);
        return new UserPosts(user, posts);
    }
    getUserName() {
        return this.user.name;
    }
}
