"use client";
import { useEffect, useState } from "react";

function Card(props) {
  const { title, location, desc } = props;

  return (
    <div className="bg-white rounded-xl border-px border-gray-400 p-4">
      <p className="text-black">{title}, {location}, {desc}</p>
    </div>
  );
}

export default function Home() {
  // const [entries, setEntries] = useState([]);
  // const [columns, setColumns] = useState([]);
  // const [numColumns, setNumColumns] = useState(0);

  useEffect(() => {
    // try {
    //   const data = axios.get("https://surgetakehome.vercel.app/api/getreviews/sable");
    //   setEntries(data);
    // } catch (err) {
    //   console.log(err);
    // }
    // 
    // const onResize = () => {
    //   setEntries(_entries => {
    //     // no entries, no columns
    //     if (_entries.length === 0)
    //       return _entries;
    // 
    //     const windowInnerWidth = window.innerWidth;
    //     let _numColumns;
    // 
    //     if (windowInnerWidth < 768) {
    //       // tw <= sm prefix; one column
    //       setNumColumns(1);
    //       _numColumns = 1;
    //     } else if (windowInnerWidth < 1024) {
    //       // tw md prefix; two columns
    //       setNumColumns(2);
    //       _numColumns = 2;
    //     } else {
    //       // tw >= lg prefix; three columns
    //       setNumColumns(3);
    //       _numColumns = 3;
    //     }
    // 
    //     // prep array of n columns, where each index 0:n is an array of data entries
    //     let _columns = Array(_numColumns);
    //     for (i = 0; i < _numColumns; i++)
    //       _columns[i] = []; // empty array
    // 
    //     // iterate through the n columns one by one adding an entry in order of their ids
    //     for (entry of _entries) {
    //       try {
    //         let col = entry.id % _numColumns;
    //         _columns[col].push(entry);
    //       } catch (err) {
    //         console.log("Bad entry: " + entry);
    //       }
    //     }
    // 
    //     setColumns(_columns);
    //     return _entries; // no change
    //   });
    // };
    // 
    // onResize();
    // window.onresize = onResize;
  }, [])

  return (
    <div className="bg-gray-200 p-5 md:p-8 lg:px-12 lg:py-8">
      <p className="text-sm font-bold text-red-600 mb-1">HIGHLIGHTS</p>
      <p className="text-3xl font-bold text-gray-950 mb-2">What are the special moments in your life?</p>
      <p className="text-lg text-gray-950 mb-4 md:mb-6 lg:mb-8">We believe every moment counts! Share your favourite highlights, unforgettable memories, and the stories that make your life shine.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Card title="Hello" location="World" desc="This is Vercel" />
        <Card title="Hello" location="World" desc="Lorem ipsum dolor emit, ipsum dolor emit, ipsum dolor emit" />
        <Card title="Hello" location="World" desc="This is Vercel" />
        <Card title="Hello" location="World" desc="This is Vercel" />
        <Card title="Hello" location="World" desc="This is Vercel" />
      </div>
    </div>
  );
}
