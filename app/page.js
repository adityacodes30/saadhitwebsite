import Button from "@/components/Button";
import stl from "./page.module.css";
import pill1 from "../public/pill1.png";
import pill2 from "@/public/pill2.png";
export default function Home() {
  return (
    <>
      <section className={stl.heroSection}>
        <div className={stl.heroText}>
          <h1>
            Saadhit is an One Stop solution for all your Pharma Business needs
          </h1>
        </div>
        <Button text="Get Started" />
      </section>
      <img
        src="/pill1.png"
        style={{
          width: "7vw",
          position: "relative",
          left: "12vw",
          bottom: "13vh",
          marginBottom: "-10vh",
        }}
        alt="pill1"
      />
      <img
        src="/pill2.png"
        style={{
          width: "7vw",
          position: "relative",
          left: "75vw",
          bottom: "2vh",
          marginBottom: "-10vh",
        }}
        alt="pill2"
      />
      <section className={stl.aboutSection}>
        
          <h1 className={stl.aboutHeading} >Who We Are</h1>
          <p className={stl.aboutText}>
            Imagine a place where you could go to get just about anything done.
            Saadhit is exactly that From launching successful marketing
            campaigns to writing technical literature , we do it all
          </p>
  
      </section>
    </>
  );
}
