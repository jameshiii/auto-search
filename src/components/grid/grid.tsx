import { ColDef, XGrid } from '@material-ui/x-grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Vehicle } from '../../models/vehicle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      height: 400, 
      width: 1200,
      marginTop: '3em',
    },
    grid: {
      border:'none',
    }
  }),
);

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function Grid(props:{rows: Vehicle[]}) {
  const classes = useStyles();
  
  const columns: ColDef[] = [
    {field: 'id', headerName: 'ID', hide:true, sortable:false}, 
    {field: 'price', headerName: "Price", width:150, valueFormatter: ({ value }) => currencyFormatter.format(Number(value))},
    {field: 'model', headerName: "Model", width:280},
    {field: 'mileage', headerName: "Mileage", width:250, sortable:false},
    {field: 'color', headerName: "Color", width:350, sortable:false},
    {field: 'status', headerName: "Status", width: 150, sortable:false}
];

  return (
    <Container> {/* centers grid horizontally */}
      <div className={classes.gridContainer}> {/* stretches the grid out to full width */}
        <XGrid 
          className={classes.grid} 
          rows={props.rows} 
          columns={columns} 
          pageSize={10}
          loading={!props.rows || props.rows.length === 0} />
      </div>
    </Container>
  );
}