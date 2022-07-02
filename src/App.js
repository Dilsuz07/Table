import axios from 'axios';
import { useEffect, useState } from 'react'
import Table from './components/Table';

function App() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <Table data={dataTable} />
    </div>
  );
}

export default App;
