import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsChevronExpand } from 'react-icons/bs'

const Table = ({ data, column }) => {
  return (
    <table className="bg-slate-100">
      <thead className="bg-blue-500 mb-2 text-zinc-50 font-bold">
        <ul className='h-20 grid grid-cols-12'>        
          <li className='col-span-1 border-r text-center flex justify-center items-center'>№</li>
          <li className='col-span-4 border-r text-center flex justify-center items-center'>Title <BsChevronExpand size='30px'/></li>
          <li className='col-span-1 border-r text-center flex justify-center items-center'>Price  <BsChevronExpand size='30px' margin-left='1rem'/></li>
          <li className='col-span-2 border-r text-center flex justify-center items-center'>Category <BsChevronExpand size='30px'/></li>
          <li className='col-span-1 border-r text-center flex justify-center items-center'>Rate  <BsChevronExpand size='30px'/></li>
          <li className='col-span-1 border-r text-center flex justify-center items-center'>Count  <BsChevronExpand size='30px'/></li>
          <li className='col-span-1 border-r text-center flex justify-center items-center'>Editing</li>
          <li className='col-span-1 border-r text-center flex justify-center items-center'>Delete</li>
        </ul>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => <ul className=''>{item.heading}</ul>;

const TableRow = ({ item, column }) => (
  <ul className="hover:scale-105 transition ease-in-out delay-100 border-x-2 grid grid-cols-12 mb-2 mt-2">
    <li className="bg-slate-300 bg-white p-2 pl-10 pr-10 shadow-xl cursor-pointer font-bold border-2 col-span-1">
      {item.id}
    </li>
    <li className="bg-slate-300 bg-white p-2 shadow-xl cursor-pointer font-bold border-2 col-span-4">
      {item.title}
    </li>
    <li className="bg-slate-300 bg-white p-2 shadow-xl cursor-pointer font-bold border-2 col-span-1">
      {item.price}
    </li>
    <li className="bg-slate-300 bg-white p-2 shadow-xl cursor-pointer font-bold border-2 col-span-2">
      {item.category}
    </li>
    <li className="bg-slate-300 bg-white p-2 shadow-xl cursor-pointer font-bold border-2 col-span-1">
      {item.rating.rate}
    </li>
    <li className="bg-slate-300 bg-white p-2 shadow-xl cursor-pointer font-bold border-2 col-span-1">
      {item.rating.count}
    </li>
    <li className="bg-slate-300 bg-white p-2 shadow-xl cursor-pointer font-bold border-2 col-span-1 text-center">
      <button className="btn-1 bg-green-700 text-zinc-50 rounded-xl pl-6 pr-6 p-1 ">
        <BsFillPencilFill />
      </button>
    </li>
    <li className="bg-slate-300 bg-white p-2 shadow-xl cursor-pointer font-bold border-2 col-span-1 text-center">
      <button className="btn-2 bg-red-700 text-zinc-50 rounded-xl pl-6 pr-6 p-1">
        <RiDeleteBin6Fill />
      </button>
    </li>
  </ul>
);
export default Table;
