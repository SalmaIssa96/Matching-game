import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  timer: {
    color: '#001F3F',
  },
}));

const Timer = ({ time }) => {
  const { classes } = useStyles();

  return (
    <div className="App">
      <h1 className={classes.timer}>{time}</h1>
    </div>
  );
};

export default Timer;
