import React, { useEffect, useState } from "react";
import "./Home.css";
import Service from "./Service";
const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="service-container">
        <div className="grid grid-cols-4 gap-8">
          {services.map((service) => (
            //   <Service key={service._id} service={service}></Service>
            <div className="">
              <div className="img-container">
                <img className="" src={service.img} alt="" />
                <div className="text-container h-20 flex justify-center align-middle bg-pink-500 py-4">
                  <p className="text-white font-semibold px-4 text-center">
                    {service.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
