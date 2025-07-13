"use client";
import { useEffect, useState } from "react";
import axios from 'axios';

export function Card(props) {
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