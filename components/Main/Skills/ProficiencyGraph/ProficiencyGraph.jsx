/* eslint-disable object-shorthand */
/* eslint-disable func-names */
import { Bar } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  graphDiv: {
    width: '60%',
    height: 'fit-content',
    minHeight: '50vh',
    padding: '10px',
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 960px)': {
      width: '100%',
      // padding: '10px 0',
      margin: 'auto',
      marginTop: '20px',
    },
    '@media (orientation: portrait) and (max-width: 600px)': {
      // width: '100%',
      // padding: '10px 0',
      // margin: 'auto',
      // marginTop: '20px',
      minHeight: '60vh',
    },
    '@media (orientation: landscape) and (max-width: 768px)': {
      minHeight: '50vw',
    },
  },
}));

const data = {
  labels: ['React', 'SQL', 'Express.js', 'C++', 'Python', 'MongoDB'],
  datasets: [
    {
      label: 'Relative Proficiency',
      data: [80, 60, 70, 50, 40, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  layout: {
    padding: 10,
  },
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  aspectRatio: 2,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#e5b9a2',
      },
    },
    title: {
      display: true,
      text: 'Skill Proficiency Chart',
      // color: '#11649c',
      color: '#e5b9a2',
      padding: {
        top: 10,
        bottom: 20,
      },
      font: {
        size: 16,
        family: 'Montserrat',
      },
    },
  },
  scales: {
    y: {
      ticks: {
        font: {
          family: 'Montserrat',
        },
        color: '#bbe1fa',
      },
    },
    x: {
      ticks: {
        callback: function (value) {
          return `${value}%`;
        },
        font: {
          family: 'Montserrat',
        },
      },
    },
  },
};

const ProficiencyGraph = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Paper className={classes.graphDiv}>
      <Bar
        data={data}
        options={{
          ...options,
          plugins: {
            ...options.plugins,
            legend: {
              ...options.plugins.legend,
              labels: {
                ...options.plugins.legend.labels,
                color: theme.palette.primary.fontColor1,
              },
            },
            title: {
              ...options.plugins.title,
              color: theme.palette.primary.fontColor1,
            },
          },
          scales: {
            ...options.scales,
            y: {
              ...options.scales.y,
              ticks: {
                ...options.scales.y.ticks,
                color: theme.palette.primary.fontColor2,
              },
            },
          },
        }}
      />
    </Paper>
  );
};

export default ProficiencyGraph;
