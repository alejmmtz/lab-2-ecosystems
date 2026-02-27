import Create from "./components/Create";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";

export default function Index() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Create />
      <Posts />
    </div>
  );
}
