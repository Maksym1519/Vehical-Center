import ct from "./catalog.module.scss";
import { Header } from "../../components/Common/Header/Header";
import { Footer } from "../../components/Common/Footer/Footer";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css"; // Импорт стилей (можете выбрать свои стили)
import { useState } from "react";
import Arrow from "../../images/arrow-down.svg";
import Share from "../../images/Share.svg";
import Search from "../../images/Search.svg";
import Car1 from "../../images/catalog-img1.webp";
import Car2 from "../../images/catalog-img2.webp";
import Car3 from "../../images/catalog-img3.webp";
import Car4 from "../../images/catalog-img4.webp";
import Car5 from "../../images/catalog-img5.webp";
import Car6 from "../../images/catalog-img6.webp";
import Truck from "../../images/Truck-icon.svg"

export const Catalog = ({ isCustomStyle }) => {
  //const [price, setPrice] = useState(10000);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5000);
  const [minYear, setMinYear] = useState(2005);
  const [maxYear, setMaxYear] = useState(2012);
  const [minDistance, setMinDistance] = useState(0);
  const [maxDistance, setMaxDistance] = useState(5000);
  // const handleSliderChange = (event) => {
  //   const newPrice = parseInt(event.target.value);
  //   setPrice(newPrice);
  // };
  const handleMinChange = (e) => {
    setMinValue(parseInt(e.target.value));
  };

  const handleMaxChange = (e) => {
    setMaxValue(parseInt(e.target.value));
  };
  const handleMinTime = (e) => {
    setMinYear(parseInt(e.target.value));
  };

  const handleMaxTime = (e) => {
    setMaxYear(parseInt(e.target.value));
  };
  const handleMinDistance = (e) => {
    setMinDistance(parseInt(e.target.value));
  };

  const handleMaxDisrance = (e) => {
    setMaxDistance(parseInt(e.target.value));
  };

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const [isArrowRotated2, setIsArrowRotated2] = useState(false);
  const [isArrowRotated3, setIsArrowRotated3] = useState(false);
  const [isArrowRotated4, setIsArrowRotated4] = useState(false);
  const [isArrowRotated5, setIsArrowRotated5] = useState(false);
  const [isArrowRotated6, setIsArrowRotated6] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = () => {
    setIsActive((prevState) => !prevState);
  };
  const toggleAccordion2 = () => {
    setIsActive2((prevState) => !prevState);
  };
  const toggleAccordion3 = () => {
    setIsActive3((prevState) => !prevState);
  };
  const toggleAccordion4 = () => {
    setIsActive4((prevState) => !prevState);
  };
  const toggleAccordion5 = () => {
    setIsActive5((prevState) => !prevState);
  };
  const toggleAccordion6 = () => {
    setIsActive6((prevState) => !prevState);
  };

  const toggleArrowRotation = () => {
    setIsArrowRotated((prevState) => !prevState);
  };
  const toggleArrowRotation2 = () => {
    setIsArrowRotated2((prevState) => !prevState);
  };
  const toggleArrowRotation3 = () => {
    setIsArrowRotated3((prevState) => !prevState);
  };
  const toggleArrowRotation4 = () => {
    setIsArrowRotated4((prevState) => !prevState);
  };
  const toggleArrowRotation5 = () => {
    setIsArrowRotated5((prevState) => !prevState);
  };
  const toggleArrowRotation6 = () => {
    setIsArrowRotated6((prevState) => !prevState);
  };

  const accordionData = [
    {
      title: (
        <div className={ct.search__item}>
          <div className={ct.search__item__main}>
            <span className={ct.search__item__mainText}>Body type</span>
            <img
              src={Arrow}
              alt="icon"
              className={isArrowRotated ? ct.arrowRotated : ""}
            />
          </div>
        </div>
      ),
      content: (
        <div className={ct.input__content}>
          <div className={ct.input__content__item}>
            <h4 className={ct.input__item__title}>Make, Model</h4>
            <div className={ct.accordion__search}>
              <input
                type="text"
                className={ct.accordion__input}
                placeholder="Search make"
              />
              <img src={Search} alt="icon" />
            </div>
          </div>
          <div className={ct.input__content__item}>
            <h4 className={ct.input__item__title}>Model</h4>
            <div className={ct.accordion__search}>
              <input
                type="text"
                className={ct.accordion__input}
                placeholder="Search make"
              />
              <img src={Search} alt="icon" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className={ct.search__item}>
          <div
            className={ct.search__item__main}
           >
            <span className={ct.search__item__mainText}>Body type</span>
            <img
              src={Arrow}
              alt="icon"
              className={isArrowRotated2 ? ct.arrowRotated : ""}
            />
          </div>
        </div>
      ),
      content: (
        <div className={ct.input__content}>
          <div className={ct.input__content__item}>
            <h4 className={ct.input__item__title}>Make</h4>
            <div className={ct.accordion__search}>
              <input
                type="text"
                className={ct.accordion__input}
                placeholder="Search make"
              />
              <img src={Search} alt="icon" />
            </div>
          </div>
          <div className={ct.input__content__item}>
            <h4 className={ct.input__item__title}>Model</h4>
            <div className={ct.accordion__search}>
              <input
                type="text"
                className={ct.accordion__input}
                placeholder="Search make"
              />
              <img src={Search} alt="icon" />
            </div>
          </div>
        </div>
      ),
    },
  ];
  const { title, content } = accordionData;
  return (
    <div className={ct.catalog__wrapper}>
      <Header isCustomStyle={true} />
      <div className={ct.catalog__mainWrapper}>
        <div className={ct.catalog__container}>
          <div className={ct.catalog__search}>
            <h3 className={ct.search__title}>Detailed search</h3>

            <div className={ct.search__item}>
              <div
                className={ct.search__item__main}
                onClick={() => {
                  toggleAccordion();
                  toggleArrowRotation();
                }}
              >
                <span className={ct.search__item__mainText}>Make,model</span>
                <img
                  src={Arrow}
                  alt="icon"
                  className={isArrowRotated ? ct.arrowRotated : ""}
                />
              </div>

              {isActive && (
                <div>
                  {" "}
                  <div className={ct.input__content}>
                    <div className={ct.input__content__item}>
                      <h4 className={ct.input__item__title}>Make, Model</h4>
                      <div className={ct.accordion__search}>
                        <input
                          type="text"
                          className={ct.accordion__input}
                          placeholder="Search make"
                        />
                        <img src={Search} alt="icon" />
                      </div>
                    </div>
                    <div className={ct.input__content__item}>
                      <h4 className={ct.input__item__title}>Model</h4>
                      <div className={ct.accordion__search}>
                        <input
                          type="text"
                          className={ct.accordion__input}
                          placeholder="Search make"
                        />
                        <img src={Search} alt="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={ct.search__item}>
              <div className={ct.search__item__main} onClick={() => {
                  toggleAccordion2();
                  toggleArrowRotation2();
                }}>
                <span className={ct.search__item__mainText}>Body type</span>
                <img src={Arrow} alt="icon" className={isArrowRotated2 ? ct.arrowRotated : ""}/>
              </div>
              {isActive2 && <div className={ct.input__content}>
          <div className={ct.input__content__item}>
             <div className={ct.accordion__checkBox}>
              <input
                type="checkbox"
                className={ct.accordion__input__checkBox}
                placeholder="Search make"
              />
              <img src={Truck} alt="icon" className={ct.truck__img} />
              <span className={ct.truck__title}>Trucks</span>
            </div>
             <div className={ct.accordion__checkBox}>
              <input
                type="checkbox"
                className={ct.accordion__input__checkBox}
                placeholder="Search make"
              />
              <img src={Truck} alt="icon" className={ct.truck__img} />
              <span className={ct.truck__title}>SUV</span>
            </div>
             <div className={ct.accordion__checkBox}>
              <input
                type="checkbox"
                className={ct.accordion__input__checkBox}
                placeholder="Search make"
              />
              <img src={Truck} alt="icon" className={ct.truck__img} />
              <span className={ct.truck__title}>Sedan</span>
            </div>
             <div className={ct.accordion__checkBox}>
              <input
                type="checkbox"
                className={ct.accordion__input__checkBox}
                placeholder="Search make"
              />
              <img src={Truck} alt="icon" className={ct.truck__img} />
              <span className={ct.truck__title}>Hatchback</span>
            </div>
             <div className={ct.accordion__checkBox}>
              <input
                type="checkbox"
                className={ct.accordion__input__checkBox}
                placeholder="Search make"
              />
              <img src={Truck} alt="icon" className={ct.truck__img} />
              <span className={ct.truck__title}>Coupe</span>
            </div>
             <div className={ct.accordion__checkBox}>
              <input
                type="checkbox"
                className={ct.accordion__input__checkBox}
                placeholder="Search make"
              />
              <img src={Truck} alt="icon" className={ct.truck__img} />
              <span className={ct.truck__title}>Convertiable</span>
            </div>
             <div className={ct.accordion__checkBox}>
              <input
                type="checkbox"
                className={ct.accordion__input__checkBox}
                placeholder="Search make"
              />
              <img src={Truck} alt="icon" className={ct.truck__img} />
              <span className={ct.truck__title}>VAN</span>
            </div>
          </div>
         </div>}
            </div>
           
            <div className={ct.search__item}>
              <div className={ct.search__item__main} onClick={() => {
                  toggleAccordion3();
                  toggleArrowRotation3();
                }}>
                <span className={ct.search__item__mainText}>Transmission</span>
                <img src={Arrow} alt="icon" className={isArrowRotated3 ? ct.arrowRotated : ""}/>
              </div>
              {isActive3 && <div className={ct.input__content}>
              <div className={ct.accordion__checkBox}>
              <input
                type="checkbox"
                className={ct.accordion__input__checkBox}
                />
               <span className={ct.truck__title}>Automatic</span>
            </div>
              <div className={ct.accordion__checkBox}>
              <input
                type="checkbox"
                className={ct.accordion__input__checkBox}
                />
               <span className={ct.truck__title}>Manual</span>
            </div>
                </div>}
              </div>
           
            <div className={ct.search__item}>
              <div className={ct.search__item__main} onClick={() => {
                  toggleAccordion4();
                  toggleArrowRotation4();
                }}>
                <span className={ct.search__item__mainText}>Price</span>
                <img src={Arrow} alt="icon" className={isArrowRotated4 ? ct.arrowRotated : ""}/>
              </div>
              {isActive4 && <div className={ct.input__content}>
                <div className={ct.accordion__counter}>
                <div className={ct.accordion__price__wrapper}>
                  <span className={ct.accordion__price__num}>{minValue}</span>
                  <span className={ct.accordion__price__num + " " + ct.accordion__price__total}>{maxValue}</span>
                </div>
                <div className={ct.accordion__inputsWrapper}>
                <input type="range"  
                min={0}
                max={500000}
                value={maxValue}
                onChange={handleMaxChange}/>
                 </div>
                </div>
                </div>}
            </div>
            <div className={ct.search__item}>
              <div className={ct.search__item__main} onClick={() => {
                  toggleAccordion5();
                  toggleArrowRotation5();
                }}>
                <span className={ct.search__item__mainText}>Year</span>
                <img src={Arrow} alt="icon" className={isArrowRotated5 ? ct.arrowRotated : ""}/>
              </div>
              {isActive5 && <div className={ct.input__content}>
                <div className={ct.accordion__counter}>
                <div className={ct.accordion__price__wrapper}>
                  <span className={ct.accordion__year__num}>{minYear}</span>
                  <span className={ct.accordion__year__num + " " + ct.accordion__year__total}>{maxYear}</span>
                </div>
                <div className={ct.accordion__inputsWrapper}>
                <input type="range"  
                min={2005}
                max={2023}
                value={maxYear}
                onChange={handleMaxTime}/>
                 </div>
                </div>
                </div>}
             </div>
            <div className={ct.search__item}>
              <div className={ct.search__item__main}>
                <span className={ct.search__item__mainText}>Kilometres </span>
                <img src={Arrow} alt="icon" />
              </div>
            </div>
          </div>
          <div className={ct.catalog__cars}>
            <div className={ct.catalog__filters}>
              <div className={ct.catalog__filters__block}>
                <div className={ct.filters__inputSearch__wrapper}>
                  <input
                    type="text"
                    className={ct.filters__inputSearch}
                    placeholder="Find a dream car..."
                  />
                  <img src={Search} alt="search" className={ct.input__search} />
                </div>
                <img src={Share} alt="icon" />
              </div>
              <div className={ct.catalog__filters__block}>
                <span className={ct.recomendations__label}>Sorted by</span>
                <div className={ct.filters__block__recomendations}>
                  <span className={ct.recomendations__text}>
                    Recommendations
                  </span>
                  <img src={Arrow} alt="arrow" />
                </div>
              </div>
            </div>
            <div className={ct.catalog__cars__body}>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car1} alt="bg" />
                </div>
                <div className={ct.item__info}>
                  <h4 className={ct.item__info__title}>
                    Porsche Panamera II Turbo S E-Hybrid{" "}
                  </h4>
                  <span className={ct.item__info__price}>$ 150 000</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div
                    className={
                      ct.item__description__text +
                      " " +
                      ct.item__description__textBorder
                    }
                  >
                    Sedan
                  </div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car2} alt="bg" />
                </div>
                <div className={ct.item__info}>
                  <h4 className={ct.item__info__title}>
                    Mitsubishi Outlander III Restyling 3 More datail information
                  </h4>
                  <span className={ct.item__info__price}>$ 23 500</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div
                    className={
                      ct.item__description__text +
                      " " +
                      ct.item__description__textBorder
                    }
                  >
                    Sedan
                  </div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car3} alt="bg" />
                </div>
                <div className={ct.item__info}>
                  <h4 className={ct.item__info__title}>
                    Mercedes-Benz CLA I (C117, X117) 200 More information
                  </h4>
                  <span className={ct.item__info__price}>$ 150 000</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div
                    className={
                      ct.item__description__text +
                      " " +
                      ct.item__description__textBorder
                    }
                  >
                    Sedan
                  </div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car4} alt="bg" />
                </div>
                <div className={ct.item__info}>
                  <h4 className={ct.item__info__title}>
                    Mercedes-Benz W124 420
                  </h4>
                  <span className={ct.item__info__price}>$ 23 000</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div
                    className={
                      ct.item__description__text +
                      " " +
                      ct.item__description__textBorder
                    }
                  >
                    Sedan
                  </div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car5} alt="bg" />
                </div>
                <div className={ct.item__info}>
                  <h4 className={ct.item__info__title}>
                    Mercedes-Benz E-Class III (W211, S211) Restyling 230
                  </h4>
                  <span className={ct.item__info__price}>$ 150 000</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div
                    className={
                      ct.item__description__text +
                      " " +
                      ct.item__description__textBorder
                    }
                  >
                    Sedan
                  </div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car6} alt="bg" />
                </div>
                <div className={ct.item__info}>
                  <h4 className={ct.item__info__title}>
                    Audi A7 I (4G) S-tronic
                  </h4>
                  <span className={ct.item__info__price}>$ 23 500</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div
                    className={
                      ct.item__description__text +
                      " " +
                      ct.item__description__textBorder
                    }
                  >
                    Sedan
                  </div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
