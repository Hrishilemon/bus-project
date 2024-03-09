import bus from "../../public/bus-icon.svg";

export default function BusCard() {
  return (
    <div>
      <img src={bus.src} alt="Bus Capacity" className="w-2.5 text-blue-500" />
      <div className="flexbox-container">
        <h1>1 min</h1>
        <h1>2 min</h1>
      </div>
    </div>
  );
}
