import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 p-5 md:p-8 lg:px-12 lg:py-8">
      <p className="text-sm font-bold text-red-600 mb-1">HIGHLIGHTS</p>
      <p className="text-3xl font-bold text-gray-950 mb-2">What are the special moments in your life?</p>
      <p className="text-lg text-gray-950">We believe every moment counts! Share your favourite highlights, unforgettable memories, and the stories that make your life shine.</p>
    </div>
  );
}
