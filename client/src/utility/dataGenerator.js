function getDummyData() {
    let data = {
        classes: [
            {
                id: 0,
                name: 'CMPS 411'
            },
            {
                id: 1,
                name: 'CMPS 401'
            },
            {
                id: 2,
                name: 'CMPS 375'
            },
            {
                id: 3,
                name: 'CMPS 101'
            },
            {
                id: 4,
                name: 'CMPS 201'
            },

        ],
        students: [],
        attendance: []
    }

    let numStudentRecords = getRandomArbitrary(5, 50);
    for (let i = 0; i < numStudentRecords; i++) {
        let names = ['Sanji', 'Blackbeard', 'Vinsmoke', 'Luffy', 'Monkey', 'Zoro', 'Roronoa', 'Nami', 'Robin', 'Jimbei'];
        data.students.push({
            id: i,
            firstName: names[getRandomArbitrary(0, names.length - 1)],
            lastName: names[getRandomArbitrary(0, names.length - 1)],
        });
    }

    let numAttendanceRecords = getRandomArbitrary(100, 1000);
    for (let i = 0; i < numAttendanceRecords; i++) {
        let studentId = getRandomArbitrary(0, data.students.length - 1)
        let classId = getRandomArbitrary(0, 4)
        data.attendance.push({
            id: i,
            studentId: studentId,
            classId: classId,
            date: randomDate(new Date(2021, 0, 1), new Date()),
            wasPresent: Math.random() < 0.5
        });
    }

    return data;
}



function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export default getDummyData;