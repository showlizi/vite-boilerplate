import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className={`text-[50px]`}>Home</div>

      <Link to="/earn">
        点我去 earn 
      </Link>
    </div>
  );
}