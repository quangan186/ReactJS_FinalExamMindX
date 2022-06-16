// 1
const combineTwoArraysWithoutDuplicate = (a1, a2) => {
    let a3 = a1.concat(a2);
    let res = []
    for (let i = 0; i < a3.length; i++){
        if (a3.indexOf(a3[i]) === a3.lastIndexOf(a3[i])) {
            res.push(a3[i])
        }
    }
    return res
}
console.log(combineTwoArraysWithoutDuplicate([1, 2, "a"], [1, 3, "b"]));

// 2
let testCases = [
    {
        name: "Arsenal",
        points: 99,
        GD:45
    },
    {
        name: "Chelsea",
        points: 75,
        GD:39
    },
    {
        name: "Manchester United",
        points: 60,
        GD:39
    },
    {
        name: "Liverpool",
        points: 88,
        GD:29
    },
]

const rankTeam = (array) => {
    return array.sort((a,b) => {
        if (a.points > b.points){
            return 1;
        }
        else if (a.points === b.points){
            if (a.GD > b.GD){
                return 1;
            }else{
                return -1
            }
        }else{
            return -1;
        }
        
    }).reverse()
}

console.log(rankTeam(testCases))