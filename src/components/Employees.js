import React, { useEffect, useState } from 'react';
import CustomeTable from './CustomeTable';
import { Input } from 'antd';


const Employees = () => {
  const [data, setData] = useState([]);
  const [fdata, setFData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    const regx = new RegExp(search,'i');
    const tdata = data.filter(item=>{
      console.log(item.name.indexOf(search));
      return regx.test(item.name);
    });
    if(search.trim() === '')
    setFData(data)
    else
    setFData(tdata)
  },[search]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const result = json.map((item) => {
          const { id, username, email } = item;
          return {
            id,
            name: username,
            email,
          };
        });
        setData(result);
        setFData(result);
      });
  }, []);

  return (
    <>
      <Input placeholder="Search" onChange={(e)=>{
        setSearch(e.target.value);
      }}/>
      <CustomeTable data={fdata} />
    </>
  );
};

export default Employees;
