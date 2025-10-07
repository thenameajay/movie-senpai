import Slider from "@/Components/Sliders";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";
import TopAutoSlider from "@/Components/TopAutoSlider";

export default function Home() {
  const img="https://wallpapercave.com/wp/wp6121950.jpg"
  const moviedata={
    type:"Trendings",
    slides:[{title:"hello world", img, genere:["adventure", "fantasy", "romcom", "shonen"]},{title:"demon slayer", img, genere:["adventure", "fantasy", "romcom", "shonen"]},{title:"AOT", img, genere:["adventure", "fantasy", "romcom", "shonen"]},{title:"Chainsaw Man", img, genere:["adventure", "fantasy", "romcom", "shonen"]},{title:"One Piece", img, genere:["adventure", "fantasy", "romcom", "shonen"]},{title:"Hell's Paradise", img, genere:["adventure", "fantasy", "romcom", "shonen"]}]
  }
  return (
    <div className="page">
      <Navbar/>
      <TopAutoSlider sliderData={moviedata}/>
      <Slider sliderData={moviedata}/>
      <Slider sliderData={moviedata}/>
      <Slider sliderData={moviedata}/>
    </div>
  );
}
