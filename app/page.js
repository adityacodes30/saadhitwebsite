import Button from "@/components/Button";
import stl from "./page.module.css";
import pill1 from "../public/pill1.png";
import pill2 from "@/public/pill2.png";
import Card1 from "@/components/card1";
import Card2 from "@/components/card2";
import Stepcard from "@/components/Stepcard";
export default function Home() {
  return (
    <div>
      <section className={stl.heroSection}>
        <div className={stl.heroText}>
          <h1>
            Saadhit is an One Stop solution for all your Pharma Business needs
          </h1>
        </div>
        <Button text="Get Started" />
      </section>
      <img
        className={stl.floating1}
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
        className={stl.floating2}
        src="/pill2.png"
        style={{
          width: "7vw",
          position: "relative",
          left: "75vw",
          bottom: "0vh",
          marginBottom: "-10vh",
        }}
        alt="pill2"
      />
      <section className={stl.aboutSection}>
        <h1 className={stl.aboutHeading}>Who We Are</h1>
        <p className={stl.aboutText}>
          Imagine a place where you could go to get just about anything done.
          Saadhit is exactly that From launching successful marketing campaigns
          to writing technical literature , we do it all
        </p>
      </section>

      <section className={stl.subAboutSection}>
        <h2 className={stl.subAboutHeading}>The Saadhit Way</h2>
        <p className={stl.subAboutText}>
          Discover how we do things here at Saadhit
        </p>
        <div className={stl.subAboutCards}>
          <Card1 source={pill1} text=" highly skilled " />
          <Card1 source={pill1} text=" highly skilled " />
          <Card1 source={pill1} text=" highly skilled " />
        </div>
      </section>

      <section className={stl.whatSection}>
        <h2 className={stl.whatHeading}>What we Do</h2>
        <p className={stl.whatText}>What we do to supercharge your business</p>

        <div className={stl.whatCards}>
          <Card2></Card2>
          <Card2></Card2>
          <Card2></Card2>
        </div>
        <div className={stl.whatCards}>
          <Card2></Card2>
          <Card2></Card2>
          <Card2></Card2>
        </div>
        <Button text="Explore Services"></Button>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          flexDirection: "column",
          alignItems: "center",
          
        }}
        className={stl.howSection}
      >
      <h2 className={stl.howHeading}>Discover how we make the magic happen</h2>
        <Stepcard color='white' top='20vh'></Stepcard>
        <Stepcard color='#b6ddcb' top='25vh'></Stepcard>
        <Stepcard color='#eccad1' top='30vh'></Stepcard>
        <Stepcard color='#774fe7' top='35vh'></Stepcard>
        
      </section>
     

      <section className={stl.caseSection}>
      <h2 className={stl.howHeading}> Read how we do it</h2>
      </section>
    </div>
  );
}
