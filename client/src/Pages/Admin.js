import React, { useState, useEffect } from "react";
import "./styles.css";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import getDummyData from "../utility/dataGenerator";
import {
  Button,
  Card,
  Typography,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import { SimpleBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { useHistory } from "react-router-dom";
import Logout from "./Components/Logout";
import { borderRadius } from "@mui/system";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import VtSeparator from "./Components/VtSeparator";

const monthsForAbscence = [
  {
    group: "Jan",
    month: 1,
    days: 31,
  },
  {
    group: "Feb",
    month: 2,
    days: 28,
  },
  {
    group: "Mar",
    month: 3,
    days: 31,
  },
  {
    group: "Apr",
    month: 4,
    days: 30,
  },
  {
    group: "May",
    month: 5,
    days: 31,
  },
  {
    group: "Jun",
    month: 6,
    days: 30,
  },
  {
    group: "Jul",
    month: 7,
    days: 31,
  },
  {
    group: "Aug",
    month: 8,
    days: 31,
  },
  {
    group: "Sep",
    month: 9,
    days: 30,
  },
  {
    group: "Oct",
    month: 10,
    days: 31,
  },
  {
    group: "Nov",
    month: 11,
    days: 30,
  },
  {
    group: "Dec",
    month: 12,
    days: 31,
  },
];

const monthsForAttendance = [
  {
    group: "Jan",
    month: 1,
    days: 31,
  },
  {
    group: "Feb",
    month: 2,
    days: 28,
  },
  {
    group: "Mar",
    month: 3,
    days: 31,
  },
  {
    group: "Apr",
    month: 4,
    days: 30,
  },
  {
    group: "May",
    month: 5,
    days: 31,
  },
  {
    group: "Jun",
    month: 6,
    days: 30,
  },
  {
    group: "Jul",
    month: 7,
    days: 31,
  },
  {
    group: "Aug",
    month: 8,
    days: 31,
  },
  {
    group: "Sep",
    month: 9,
    days: 30,
  },
  {
    group: "Oct",
    month: 10,
    days: 31,
  },
  {
    group: "Nov",
    month: 11,
    days: 30,
  },
  {
    group: "Dec",
    month: 12,
    days: 31,
  },
];
//deleted

// const January = [
//   {
//     numMonth: 1,
//     numDays: 31,
//   }
// ];

// const February = [
//   {
//     numMonth: 2,
//     numDays: 28,
//   }
// ];

// const March = [
//   {
//     numMonth: 3,
//     numDays: 31,
//   }
// ];

// const April = [
//   {
//     numMonth: 4,
//     numDays: 30,
//   }
// ];

// const May = [
//   {
//     numMonth: 5,
//     numDays: 31,
//   }
// ];

// const June = [
//   {
//     numMonth: 6,
//     numDays: 30,
//   }
// ];

// const July = [
//   {
//     numMonth: 7,
//     numDays: 31,
//   }
// ];

// const August = [
//   {
//     numMonth: 8,
//     numDays: 31,
//   }
// ];

// const September = [
//   {
//     numMonth: 9,
//     numDays: 30,
//   }
// ];

// const October = [
//   {
//     numMonth: 10,
//     numDays: 31,
//   }
// ];

// const November = [
//   {
//     numMonth: 11,
//     numDays: 30,
//   }
// ];

// const December = [
//   {
//     numMonth: 12,
//     numDays: 31,
//   }
// ];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Admin() {
  const [tabValue, setTabValue] = useState(0);
  const [currClass, setCurrClass] = useState();

  //Connection object for Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBfz0vMyGdjKk5ZjFQmDcbTg4zAsEcYDuU",
    authDomain: "ala-kazim-firebase.firebaseapp.com",
    databaseURL: "https://ala-kazim-firebase-default-rtdb.firebaseio.com",
    projectId: "ala-kazim-firebase",
    storageBucket: "ala-kazim-firebase.appspot.com",
    messagingSenderId: "48119734702",
    appId: "1:48119734702:web:14ea03a55488798fb3a83f",
    measurementId: "G-F7MW1WXRNB",
  };
  //State for the Firebase Configuration and Database Connection
  const [config, setConfig] = useState(initializeApp(firebaseConfig));
  const [database, setDatabase] = useState();
  const [classes, setClasses] = useState();
  const [students, setStudents] = useState();
  const [attendance, setAttendance] = useState();

  const [changeStudent, setChangeStudent] = useState("");
  const [changeDate, setChangeDate] = useState(null);

  const [toggle, setToggle] = useState("add");
  const [selectedAttendanceRecord, setSelectedAttendanceRecord] = useState(1);

  //Create connection to database on page load
  useEffect(() => {
    setDatabase(getDatabase(config));
  }, []);

  //Everytime database changes, reflect it on page
  useEffect(() => {
    if (database) {
      const fireBaseRef = ref(database, "/");
      onValue(fireBaseRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setAttendance(
          data["1ooDq-aMUjHsfd_ksxvldSLKW01aA39x99aqdo7fzSac"].Sheet1
        );
        setStudents(data.Students);
        setClasses(data.Classes);
        setCurrClass(data.Classes[0]);
      });
    }
  }, [database]);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
    setCurrClass(classes[newValue]);
  };

  const handleNameChange = (e) => {
    setChangeStudent(e.target.value);
  };

  const handleDateChange = (e) => {
    setChangeDate(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedAttendanceRecord(e.target.value);
    if (!attendance) return;
    setChangeStudent(attendance[e.target.value].Name);
    setChangeDate(attendance[e.target.value].Date);
  };

  const handleToggleChange = (e) => {
    setToggle(e.target.value);
    if (!attendance) return;
    if (e.target.value === "edit") {
      setChangeStudent(attendance[selectedAttendanceRecord].Name);
      setChangeDate(attendance[selectedAttendanceRecord].Date);
    } else {
      setChangeStudent("");
      setChangeDate("");
    }
  };

  const getDataForAbscencesChart = () => {
    //r3kt
    monthsForAbscence.forEach((data, index) => {
      monthsForAbscence[index].value = getAbsencesForMonth(data.month);
    });

    return monthsForAbscence;
  };

  const getAbsencesForMonth = (requestedMonth) => {
    if (attendance == null || students == null) return 0;
    let attendancesForMonth = 0;
    students.forEach((student) => {
      let days = [];
      attendance.forEach((attendanceRecord) => {
        //On singular record
        //Get records month and dat
        let recordDateObj = new Date(attendanceRecord.Date);
        let recordMonth = recordDateObj.getMonth() + 1;
        let recordDay = recordDateObj.getDate();
        //If that record is for curr month && that day not in day[] and record we are currently checking is the same as student we are checking day for
        if (
          recordMonth === requestedMonth &&
          !days.includes(recordDay) &&
          student.name === attendanceRecord.Name
        ) {
          days.push(recordDay);
        }
        //Add to day[]
      });
      attendancesForMonth += days.length;
    });
    return (
      monthsForAbscence[requestedMonth - 1].days * students.length -
      attendancesForMonth
    );
  };

  const getDataForAttendanceChart = () => {
    let attendanceData = monthsForAttendance;
    attendanceData.forEach((data, index) => {
      attendanceData[index].value = getAttendanceForMonth(data.month);
    });

    return attendanceData;
  };

  const getAttendanceForMonth = (requestedMonth) => {
    if (attendance == null) return 0;

    let absencesForRequestedMonth = attendance.filter((attendanceRecord) => {
      let currentYear = new Date().getFullYear();
      let recordDateObj = new Date(attendanceRecord.Date);
      let recordYear = recordDateObj.getFullYear();
      let recordMonth = recordDateObj.getMonth() + 1;
      return requestedMonth === recordMonth && currentYear === recordYear;
    });
    return absencesForRequestedMonth.length;
  };

  const getTotalStudentsForCurrClass = () => {
    if (students == null || currClass == null) return 0;

    const studentsInClass = students.filter((student) => {
      return student.classes.includes(currClass.id); //accept value and check array for given value returning true if class exist in array false if it doesn't
    }).length;
    return studentsInClass;
  };

  const addAttendance = async () => {
    if (!database || !attendance) return;
    if (!changeDate || !changeStudent) {
      alert("No Data to Add");
      return;
    }
    let newRecordId = attendance[attendance.length - 1].ID + 1;
    let newRecord = {
      Date: changeDate,
      ID: newRecordId,
      Name: changeStudent,
    };
    let data = [...attendance, newRecord];
    data[0] = null;
    await set(
      ref(database, "/1ooDq-aMUjHsfd_ksxvldSLKW01aA39x99aqdo7fzSac/Sheet1"),
      data
    );
    alert("You have successfully added a record.");
  };

  const editAttendance = async () => {
    if (!database || !attendance) return;
    if (!changeDate || !changeStudent) {
      alert("No Data to Add");
      return;
    }
    let data = {
      Date: changeDate,
      ID: selectedAttendanceRecord,
      Name: changeStudent,
    };
    await update(
      ref(
        database,
        "/1ooDq-aMUjHsfd_ksxvldSLKW01aA39x99aqdo7fzSac/Sheet1/" +
          selectedAttendanceRecord
      ),
      data
    );
    alert("You have successfully added a record.");
  };

  const absenceChartOptions = {
    title: "Absences By Month",
    axes: {
      left: {
        mapsTo: "value",
      },
      bottom: {
        mapsTo: "group",
        scaleType: "labels",
      },
    },
    height: "400px",
  };

  const attendanceChartOptions = {
    title: "Attendances By Month",
    axes: {
      left: {
        mapsTo: "value",
      },
      bottom: {
        mapsTo: "group",
        scaleType: "labels",
      },
    },
    height: "400px",
  };

  const history = useHistory();
  let camView = "Camera View";

  return (
    <Grid container spacing={2} style={{ padding: "30px" }}>
      <Grid item xs={12}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Admin</Typography>
          <Link underline="hover" color="inherit" href="/Edit">
            Edit
          </Link>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={2}>
        <AppBar position="static" style={{ minWidth: "235px" }}>
          <Typography
            style={{
              textAlign: "center",
              marginTop: 15,
              fontSize: 20,
              borderBottomColor: "1px solid white",
            }}
          >
            Select Course:
          </Typography>
          <Tabs
            orientation="vertical"
            value={tabValue}
            onChange={handleSetTabValue}
          >
            {classes &&
              classes.map((c) => {
                return <Tab key={Math.random()} label={c.name} />;
              })}
          </Tabs>
          {/* <Tab onClick={() => history.push("camview")} label={camView}></Tab> */}
          {/* <Tabs onClick={() => history.push("camview")} label={camView}>

          </Tabs> */}
        </AppBar>
      </Grid>
      <Grid container spacing={1} xs={10} style={{ padding: "17px" }}>
        <Grid xs={2} align="center"></Grid>
        <Grid xs={3} item align="center">
          <Card
            style={{
              padding: "20px",
              minHeight: "150px",
              maxHeight: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
              borderRadius: "1rem",
            }}
          >
            <Typography variant="h4">
              {currClass != null ? currClass.name : "Loading..."}
            </Typography>
          </Card>
        </Grid>
        <Grid xs={3} item>
          <Card
            style={{
              padding: "10px",
              minHeight: "150px",
              maxHeight: "200px",
              boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
              borderRadius: "1rem",
            }}
          >
            <Grid xs={12} item align="center">
              <Typography variant="h6">Total Number of Students:</Typography>
            </Grid>
            <Grid xs={12} item align="center">
              <Typography variant="h4">
                {getTotalStudentsForCurrClass()}
              </Typography>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid xs={6} item>
        <Card
          style={{
            marginTop: "20px",
            boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
            borderRadius: "0.7rem",
            padding: "20px",
          }}
        >
          {students && attendance && (
            <SimpleBarChart
              data={getDataForAbscencesChart()}
              options={absenceChartOptions}
            />
          )}
        </Card>
      </Grid>
      <Grid xs={6} item>
        <Card
          style={{
            marginTop: "20px",
            boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
            borderRadius: "0.7rem",
            padding: "20px",
          }}
        >
          {students && attendance && (
            <SimpleBarChart
              data={getDataForAttendanceChart()}
              options={attendanceChartOptions}
            />
          )}
        </Card>
      </Grid>
      <Logout />
    </Grid>
  );
}
export default Admin;
