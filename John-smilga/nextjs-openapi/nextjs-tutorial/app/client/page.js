'use client'
import { useState } from "react/cjs/react.production.min";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl">Client Page</h1>;
      <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  );
};
export default ClientPage;
