import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Component/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";


export default function Home() {
  return (
      <>
        <section className="Home">
        <Navbar/>

        <div className="Head-container">
          <div className="title">
            <h1 className="head-title">La cité céleste</h1>
          </div>
          <div className="underline"></div>

          <div className="text">
             <p className="head-text">
              Bienvenue sur le site officiel de la cité céleste. Chers amis, nous sommes maintenant <br />
              des enfants de dieu, et ce que nous serons n'a pas encore été révélée, mais nous savons <br />
              que lorsque le christ apparaitra, nous lui serons semblables, car nous le verrons tel qu'il est.
             </p>
          </div>

          <div className="arrow">
          <IoIosArrowDown className="arrow-down"/>
          </div>
        </div>
        </section>

        <section className="about">
          
           <div className="box-container">

            <div className="first-container">
                  <img className="first-img" src="/Img/Bible.jpg" alt="" />
                  <div className="title-container">
                    <h1 className="title">About our church</h1>
                    <div className="description">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni a provident fuga beatae qui perspiciatis id nemo sapiente expedita rerum necessitatibus voluptatem praesentium nostrum quasi unde, asperiores saepe ad sed!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident earum quae rem praesentium. Debitis sed ex perferendis cumque ipsa cum. Doloribus officia sequi qui? Cupiditate delectus similique veniam odit?
                        
                      </p>
                    </div>
                  </div>

                  <div className="links">Nous visitez <FaArrowRight /></div>
            </div>

              <div className="second-container">
              <div className="second-title">
                    <h1 className="title-second">About our church</h1>
                    <div className="description-second">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni a provident fuga beatae qui perspiciatis id nemo sapiente expedita rerum necessitatibus voluptatem praesentium nostrum quasi unde, asperiores saepe ad sed!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam provident earum quae rem praesentium. Debitis sed ex perferendis cumque ipsa cum. Doloribus officia sequi qui? Cupiditate delectus similique veniam odit?
                      </p>
                      <div className="links-second">Nous rejoindre <FaArrowRight /></div>
              </div>
              <div className="img-container"><img className="second-img" src="/Img/Friends.jpg" alt="" /></div>
               
           </div>
           
           </div>
           </div>
        </section>
      
     </>  

    
  );
}
