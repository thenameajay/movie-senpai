import Slider from "@/Components/Sliders";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";

export default function Home() {
  const img="https://c4.wallpaperflare.com/wallpaper/364/11/747/monkey-d-luffy-one-piece-hd-wallpaper-preview.jpg"
  const moviedata={
    type:"Trendings",
    slides:[{title:"hello world", img},{title:"demon slayer", img},{title:"AOT", img},{title:"Chainsaw Man", img},{title:"One Piece", img},{title:"Hell's Paradise", img}]
  }
  return (
    <div className="page">
      <Navbar/>
      <Slider sliderData={moviedata}/>
    </div>
  );
}
