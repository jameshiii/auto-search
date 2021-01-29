import { useEffect, useState } from 'react';
import AppBar from './appBar';
import Grid from './grid';
import Error from './error';
import { Vehicle } from '../models/vehicle';

export default function App(props: { dealer: string }) {
  const [hasError, setHasError] = useState<boolean>(false);
  const [rows, setRows] = useState<Vehicle[]>([]);
  const uri = `https://localhost:44329/api/Vehicle?dealer=${encodeURIComponent(props.dealer)}`;
  console.log(uri);

  useEffect(() => {
    fetch(uri, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => setRows(result), (error) => {
        console.log(error);
        setHasError(true);
      })
  }, [uri]);

  if (hasError) {
    return (
      <Error />
    );
  } else {
    return (
      <div>
        <AppBar />
        <Grid rows={rows} />
      </div>
    );
  }
}
