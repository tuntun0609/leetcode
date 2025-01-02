/*
 * @lc app=leetcode.cn id=729 lang=typescript
 * @lcpr version=30204
 *
 * [729] 我的日程安排表 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class MyCalendar {
  private books: number[][] = []
  constructor() {}

  book(startTime: number, endTime: number): boolean {
    for (const [start, end] of this.books) {
      if (startTime < end && endTime > start) return false
    }

    this.books.push([startTime, endTime])
    return true
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */
// @lc code=end

/*
  // @lcpr case=start
  // ["MyCalendar", "book", "book", "book"][[], [10, 20], [15, 25], [20, 30]]\n
  // @lcpr case=end
  
*/
