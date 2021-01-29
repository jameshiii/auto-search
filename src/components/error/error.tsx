import Grid from '@material-ui/core/Grid';
import {SentimentDissatisfied} from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
        minHeight: "100vh" // ~ 100% height of viewport
    },
    icon: {
        fontSize: "10em"
    }
  }),
);

export default function Error(props:any) {

    const classes = useStyles();

    return (
        <div>
            <Grid 
            className={classes.grid}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
                <SentimentDissatisfied className={classes.icon} />
                <h1>Oops, something went wrong!</h1>    
            </Grid>
        </div>
    );
}