"use client";
import { useEffect, useState } from "react";
import axios from 'axios';

const imageUrls = {
  'loading': 'loading.png'
};

function Card(props) {
  const { title, location, desc } = props;

  const [imageUrl, setImageUrl] = useState('loading.png');

  useEffect(() => {
    const getImageUri = async () => {
      const cachedImageUrlKey = "image-url-" + encodeURIComponent(title);
      const cachedImageUrl = localStorage.getItem(cachedImageUrlKey);
      if (cachedImageUrl) {
        setImageUrl(cachedImageUrl);
        return;
      }

      try {
        const response = await axios.get("https://api.openverse.org/v1/images/?q=" + encodeURIComponent(title));
        setImageUrl(response.data.results[0].url);
        localStorage.setItem(cachedImageUrlKey, response.data.results[0].url);
      } catch (err) {
        setImageUrl("https://random.dog/b8acf898-dc54-4ff3-973b-a0e00e567b8c.jpg");
      }
    };
    getImageUri();
  }, [title]);

  return (
    <div className="bg-white rounded-xl border-px border-gray-400 p-6">
      <div className="w-full aspect-video mb-3">
        <img src={imageUrl} alt={title} className="rounded-xl w-full h-full object-cover" />
      </div>
      <p className="text-lg text-black font-semibold mb-0">{title}</p>
      <p className="text-base text-gray-400 mb-2">{location}</p>
      <p className="text-sm text-black line-clamp-3">{desc}</p>
    </div>
  );
}

export default function Home() {
  const [_, setEntries] = useState([]);
  const [columns, setColumns] = useState([]);
  const [numColumns, setNumColumns] = useState(0);

  useEffect(() => {
    const onResizeOrEntries = () => {
      setEntries(_entries => {
        // no entries, no columns-
        if (!(_entries instanceof Array) || _entries.length === 0)
          return _entries;
    
        const windowInnerWidth = window.innerWidth;
    
        setNumColumns(_numColumns => {
          let noChange = false;
          console.log(windowInnerWidth);

          if (windowInnerWidth < 768) {
            noChange = _numColumns === 1;
            _numColumns = 1;
          } else if (windowInnerWidth < 1024) {
            noChange = _numColumns === 2;
            _numColumns = 2;
          } else {
            noChange = _numColumns === 3;
            _numColumns = 3;
          }

          if (noChange)
            return _numColumns;

          console.log(_numColumns);
          // prep array of n columns, where each index 0:n is an array of data entries
          let _columns = [];
          for (let i = 0; i < _numColumns; i++)
            _columns.push([]); // empty array

          // iterate through the n columns one by one adding an entry in order of their ids
          for (let entry of _entries) {
            try {
              let col = (entry.id-1) % _numColumns;
              _columns[col].push(entry);
            } catch (err) {
              console.log("Bad entry: " + entry);
              console.log(err);
            }
          }

          setColumns(_columns);

          return _numColumns;
        });

        return _entries;
      });
    };

    const initialGet = async () => {
      try {
        const response = await axios.get("/api/getreviews");
        setEntries(response.data);
        onResizeOrEntries();
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    initialGet();

    window.onresize = onResizeOrEntries;
  }, []);

  let gridClassName = "grid grid-cols-1 gap-6";
  switch (numColumns) {
  case 2: gridClassName = "grid grid-cols-2 gap-6"; break;
  case 3: gridClassName = "grid grid-cols-3 gap-6"; break;
  }

  return (
    <div className="bg-gray-200 p-5 md:p-8 lg:px-12 lg:py-8">
      <p className="text-sm font-bold text-red-600 mb-1">
        HIGHLIGHTS
      </p>
      <p className="text-3xl font-bold text-gray-950 mb-2">
        What are the special moments in your life?
      </p>
      <p className="text-lg text-gray-950 mb-4 md:mb-6 lg:mb-8">
        We believe every moment counts!
        Share your favourite highlights, unforgettable memories, and the stories that make your life shine.
      </p>
      <div className={gridClassName}>
        {
          columns.map(col => (
            <div key={`col-${Math.random()}`} className="flex flex-col gap-y-6">
              {
                col.map(item => (
                  <Card key={item.id} title={item.title} location={item.location} desc={item.description} />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}
