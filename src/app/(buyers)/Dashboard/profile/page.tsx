import React from "react";

// Fake profile data
const profile = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://imgs.search.brave.com/D5yHlndPETVg1qTnYLQ3M4xVgBc7F8NacstvmRrFhFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvM2Qt/aWxsdXN0cmF0aW9u/LWh1bWFuLWF2YXRh/ci1wcm9maWxlXzIz/LTIxNTA2NzExMjYu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
  bio: "Full Stack Developer with a passion for creating web applications and solving real-world problems.",
};

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-full w-full text-white">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-80 text-center">
        <img
          src={profile.avatar}
          alt="Profile Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
        <p className="text-gray-400 mb-4">{profile.email}</p>
        <p className="text-gray-300">{profile.bio}</p>
        <button className="mt-6 bg-black hover:bg-white text-white hover:text-black font-semibold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default page;
