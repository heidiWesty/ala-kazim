import React, { useState, useEffect } from "react";
import "./styles.css";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import getDummyData from "../utility/dataGenerator";
import { Button, Card, Typography } from "@mui/material";
import { SimpleBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
import { useHistory } from "react-router-dom";
import Logout from "./Components/Logout";
import { borderRadius } from "@mui/system";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

let months = [
  {
    group: "Jan",
    month: 1,
    value: 0,
  },
  {
    group: "Feb",
    month: 2,
    value: 0,
  },
  {
    group: "Mar",
    month: 3,
    value: 0,
  },
  {
    group: "Apr",
    month: 4,
    value: 0,
  },
  {
    group: "May",
    month: 5,
    value: 0,
  },
  {
    group: "Jun",
    month: 6,
    value: 0,
  },
  {
    group: "Jul",
    month: 7,
    value: 0,
  },
  {
    group: "Aug",
    month: 8,
    value: 0,
  },
  {
    group: "Sep",
    month: 9,
    value: 0,
  },
  {
    group: "Oct",
    month: 10,
    value: 0,
  },
  {
    group: "Nov",
    month: 11,
    value: 0,
  },
  {
    group: "Dec",
    month: 12,
    value: 0,
  },
];

let presence = [
  {
    absent: "",
    present: "",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Admin() {
  const [data, setData] = useState(null);
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
  let gsheetsId = "1ooDq-aMUjHsfd_ksxvldSLKW01aA39x99aqdo7fzSac";
  //Create connection to database on page load
  useEffect(() => {
    setDatabase(getDatabase(config));

    // let result = getDummyData();
    // setCurrClass(result.classes[0]);
    // setData(result);
  }, []);
  //Everytime database changes, reflect it on page
  useEffect(() => {
    if (database) {
      const fireBaseRef = ref(database, "/");
      onValue(fireBaseRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for (const i in data[gsheetsId].Sheet1) {
          console.log("whazzzuupp: " + data[gsheetsId].Sheet1[i].Name); //returns all students
        }
        debugger;
      });
    }
  }, [database]);

  const getAttendanceData = async () => {};

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
    setCurrClass(data.classes[newValue]);
  };

  const getDataForAbscencesChart = () => {
    months.forEach((data, index) => {
      months[index].value = getAbsencesForMonth(data.month);
    });

    return months;
  };

  const getAbsencesForMonth = (requestedMonth) => {
    if (data == null) return 0;

    let absencesForRequestedMonth = data.attendance.filter(
      (attendanceRecord) => {
        let currentYear = new Date().getFullYear();
        let recordYear = attendanceRecord.date.getFullYear();
        let recordMonth = attendanceRecord.date.getMonth() + 1;
        return (
          requestedMonth === recordMonth &&
          currentYear === recordYear &&
          !attendanceRecord.wasPresent &&
          attendanceRecord.classId === currClass.id
        );
      }
    );
    return absencesForRequestedMonth.length;
  };

  const getDataForPresentChart = () => {
    months.forEach((data, index) => {
      months[index].value = getAttendanceForMonth(data.month);
    });

    return months;
  };

  const getAttendanceForMonth = (requestedMonth) => {
    if (data == null) return 0;

    let absencesForRequestedMonth = data.attendance.filter(
      (attendanceRecord) => {
        let currentYear = new Date().getFullYear();
        let recordYear = attendanceRecord.date.getFullYear();
        let recordMonth = attendanceRecord.date.getMonth() + 1;
        return (
          requestedMonth === recordMonth &&
          currentYear === recordYear &&
          attendanceRecord.wasPresent &&
          attendanceRecord.classId === currClass.id
        );
      }
    );
    return absencesForRequestedMonth.length;
  };

  const getTotalStudentsForCurrClass = (data, currClass) => {
    if (data == null || currClass == null) return 0;

    let uniqueStudents = [];
    data.attendance.forEach((record) => {
      if (
        !uniqueStudents.includes(record.studentId) &&
        record.classId === currClass.id
      ) {
        uniqueStudents.push(record.studentId);
      }
    });
    return uniqueStudents.length;
  };

  const addAttendance = () => {
    alert("Adding attendance is still a WIP");
  };

  const editAttendance = () => {
    alert("Editing attendance is still a WIP");
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
    <Grid container spacing={2} style={{ padding: "50px" }}>
      <Grid item xs={2}>
        <Grid>
          <Grid item xs={2}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/getting-started/installation/"
              >
                Previous Page
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
        <AppBar position="static">
          <Tabs
            orientation="vertical"
            value={tabValue}
            onChange={handleSetTabValue}
          >
            {data &&
              data.classes.map((c) => (
                <Tab key={Math.random()} label={c.name} />
              ))}
          </Tabs>
          <Tab onClick={() => history.push("camview")} label={camView}></Tab>
          {/* <Tabs onClick={() => history.push("camview")} label={camView}>

          </Tabs> */}
        </AppBar>
      </Grid>
      <Grid container spacing={1} xs={10} style={{ padding: "17px" }}>
        <Grid xs={12} align="center"></Grid>
        <Grid xs={3} item align="center">
          <Card
            style={{
              padding: "20px",
              minHeight: "100px",
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
              minHeight: "100px",
              boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
              borderRadius: "1rem",
            }}
          >
            <Grid xs={12}>
              <Typography variant="h6">Total Number of Students:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="h4">
                {getTotalStudentsForCurrClass(data, currClass)}
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid xs={3} item align="center">
          <Card
            style={{
              padding: "10px",
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
              borderRadius: "1rem",
            }}
          >
            <Button variant="contained" onClick={addAttendance}>
              Add Attendance
            </Button>
          </Card>
        </Grid>
        <Grid xs={3} item align="center">
          <Card
            style={{
              padding: "10px",
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
              borderRadius: "1rem",
            }}
          >
            <Button variant="contained" onClick={editAttendance}>
              Edit Attendance
            </Button>
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
            <SimpleBarChart
              data={getDataForAbscencesChart()}
              options={absenceChartOptions}
            />
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
            <SimpleBarChart
              data={getDataForPresentChart()}
              options={attendanceChartOptions}
            />
          </Card>
        </Grid>
        <Logout />
      </Grid>
    </Grid>
  );
}
export default Admin;
