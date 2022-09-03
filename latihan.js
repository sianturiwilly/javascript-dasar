var students = [
    ["Willi", "A", 87],
    ["Nike", "A", 75],
    ["Darwis", "B", 81],
    ["Aura", "B", 73]
]

function groupClass(arr2D){
    var result = [];
    var classA = {
        class : "A",
        students : [],
        scores : []
    }
    var classB = {
        class : "B",
        students: [],
        scores: []
    }

    for(var i = 0; i < arr2D.length; i++){
        if(arr2D[i][1] === "A"){
            classA.students.push(arr2D[i][0]);
            classA.scores.push(arr2D[i][2]);
        }else{
            classB.students.push(arr2D[i][0]);
            classB.scores.push(arr2D[i][2]);
        }
    }

    result.push(classA);
    result.push(classB);

    return result;
}

// console.log(students[]);