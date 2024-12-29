/*
 * @lc app=leetcode.cn id=1366 lang=typescript
 * @lcpr version=30204
 *
 * [1366] 通过投票对团队排名
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function rankTeams(votes: string[]): string {
  const teamMap = new Map<string, number[]>()
  for (const vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      const team = vote[i]
      if (!teamMap.has(team)) {
        teamMap.set(team, new Array(vote.length).fill(0))
      }
      teamMap.get(team)![i]++
    }
  }

  const teamList = Array.from(teamMap.keys())
  teamList.sort((a, b) => {
    for (let i = 0; i < votes[0].length; i++) {
      if (teamMap.get(a)![i] !== teamMap.get(b)![i]) {
        return teamMap.get(b)![i] - teamMap.get(a)![i]
      }
    }
    return a.localeCompare(b)
  })

  return teamList.join('')
}
// @lc code=end

/*
// @lcpr case=start
// ["ABC","ACB","ABC","ACB","ACB"]\n
// @lcpr case=end

// @lcpr case=start
// ["WXYZ","XYZW"]\n
// @lcpr case=end

// @lcpr case=start
// ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]\n
// @lcpr case=end

 */
