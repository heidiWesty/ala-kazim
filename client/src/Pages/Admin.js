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

  useEffect(() => {
    let result = getDummyData();
    setCurrClass(result.classes[0]);
    setData(result);
  }, []);

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
              padding: "10px",
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">
              {currClass != null ? currClass.name : "Loading..."}
            </Typography>
          </Card>
        </Grid>
        <Grid xs={3} item>
          <Card style={{ padding: "10px", minHeight: "100px" }}>
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
            }}
          >
            <Button variant="contained" onClick={editAttendance}>
              Edit Attendance
            </Button>
          </Card>
        </Grid>
        <Grid xs={6} item>
          <Card>
            <SimpleBarChart
              data={getDataForAbscencesChart()}
              options={absenceChartOptions}
            />
          </Card>
        </Grid>
        <Grid xs={6} item>
          <Card>
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
