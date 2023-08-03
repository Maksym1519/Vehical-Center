import ct from "./catalog.module.scss";
import ReactSlider from "react-slider";
import { Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
const Header = lazy(()=>import('../../components/Common/Header/Header'))
//import { Header } from "../../components/Common/Header/Header";
import { Footer } from "../../components/Common/Footer/Footer";
import { CatalogModal } from "./CatalogModal";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css"; // Импорт стилей (можете выбрать свои стили)
import { useState, useEffect } from "react";
import Arrow from "../../images/arrow-down.svg";
import Share from "../../images/Share.svg";
import Search from "../../images/Search.svg";
import Car1 from "../../images/catalog-img1.webp";
import Car2 from "../../images/catalog-img2.webp";
import Car3 from "../../images/catalog-img3.webp";
import Car4 from "../../images/catalog-img4.webp";
import Car5 from "../../images/catalog-img5.webp";
import Car6 from "../../images/catalog-img6.webp";
import Truck from "../../images/Truck-icon.svg";
import Filter from "../../images/Filter icon.svg";
import Close from "../../images/search-Close.svg";


function LoadingInfo () {
  return <h2>Loading...</h2>
  
}
const Catalog = ({ isCustomStyle }) => {
  const [sliderValue, setSliderValue] = useState([0, 500000]);
  const [sliderYearValue, setSliderYearValue] = useState([2002, 2023]);
  const [sliderDistanceValue, setSliderDistanceValue] = useState([0, 20000]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(500000);
  const [minYear, setMinYear] = useState(2005);
  const [maxYear, setMaxYear] = useState(2012);
  const [minDistance, setMinDistance] = useState(0);
  const [maxDistance, setMaxDistance] = useState(20000);
  const [isRecomendations, setRecomendation] = useState(false);
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

  const handleMaxDistance = (e) => {
    setMaxDistance(parseInt(e.target.value));
  };
  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };
  const handleSliderYearChange = (newValue) => {
    setSliderYearValue(newValue);
    setMinYear(newValue[0]);
    setMaxYear(newValue[1]);
  };
  const handleSliderDistanceChange = (newValue) => {
    setSliderDistanceValue(newValue);
    setMinDistance(newValue[0]);
    setMaxDistance(newValue[1]);
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
  const [isArrowRotated7, setIsArrowRotated7] = useState(false);
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
  const showRecomendation = () => {
    setRecomendation((prevState) => !prevState);
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
  const recomendationArrowRotation = () => {
    setIsArrowRotated7((prevState) => !prevState);
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
          <div className={ct.search__item__main}>
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
  //modal search------------------------------------
  const [isSearchOpen, setSearchOpen] = useState(false);

  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
    // Устанавливаем обработчик события при монтировании компонента
    window.addEventListener("resize", handleResize);

    // Инициализируем состояние isSearchOpen при загрузке страницы
    handleResize();

    // Удаляем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    // Определяем ширину экрана и управляем видимостью блока
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1025) {
      setSearchOpen(true); // Открываем блок при ширине экрана >= 1025px
    } else if (screenWidth >= 200 && screenWidth <= 1024) {
      setSearchOpen(false); // Закрываем блок при ширине экрана от 768px до 1024px
    }
  };

  return (
    <div className={ct.catalog__wrapper}>
      <Suspense fallback={<LoadingInfo />}>
      <Header isCustomStyle={true} />
      </Suspense>
      <div className={ct.catalog__mainWrapper}>
        <div className={ct.catalog__container}>
          {/* catalog search------------------------------------------------------- */}
          {isSearchOpen && (
            <div className={ct.catalog__search}>
              <img
                src={Close}
                alt="close"
                className={ct.search__close}
                onClick={closeSearch}
              />
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
                <div
                  className={ct.search__item__main}
                  onClick={() => {
                    toggleAccordion2();
                    toggleArrowRotation2();
                  }}
                >
                  <span className={ct.search__item__mainText}>Body type</span>
                  <img
                    src={Arrow}
                    alt="icon"
                    className={isArrowRotated2 ? ct.arrowRotated : ""}
                  />
                </div>
                {isActive2 && (
                  <div className={ct.input__content}>
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
                  </div>
                )}
              </div>

              <div className={ct.search__item}>
                <div
                  className={ct.search__item__main}
                  onClick={() => {
                    toggleAccordion3();
                    toggleArrowRotation3();
                  }}
                >
                  <span className={ct.search__item__mainText}>
                    Transmission
                  </span>
                  <img
                    src={Arrow}
                    alt="icon"
                    className={isArrowRotated3 ? ct.arrowRotated : ""}
                  />
                </div>
                {isActive3 && (
                  <div className={ct.input__content}>
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
                  </div>
                )}
              </div>

              <div className={ct.search__item}>
                <div
                  className={ct.search__item__main}
                  onClick={() => {
                    toggleAccordion4();
                    toggleArrowRotation4();
                  }}
                >
                  <span className={ct.search__item__mainText}>Price</span>
                  <img
                    src={Arrow}
                    alt="icon"
                    className={isArrowRotated4 ? ct.arrowRotated : ""}
                  />
                </div>
                {isActive4 && (
                  <div className={ct.input__content}>
                    <div className={ct.accordion__counter}>
                      <div className={ct.accordion__price__wrapper}>
                        <div className={ct.price__numbers__wrapper}>
                          <span className={ct.accordion__price__num}>
                            {minValue}
                          </span>
                          <span
                            className={
                              ct.accordion__price__num +
                              " " +
                              ct.accordion__price__total
                            }
                          >
                            {maxValue}
                          </span>
                        </div>
                        <ReactSlider
                          className="horizontal-slider"
                          thumbClassName="example-thumb"
                          trackClassName="example-track"
                          //defaultValue={[0, 100]}
                          value={sliderValue}
                          onChange={handleSliderChange}
                          ariaLabel={["Lower thumb", "Upper thumb"]}
                          ariaValuetext={(state) =>
                            `Thumb value ${state.valueNow}`
                          }
                          renderThumb={(props, state) => (
                            <div {...props}>{state.valueNow}</div>
                          )}
                          pearling
                          minDistance={10}
                          min={0}
                          max={500000}
                        />
                      </div>
                      <div className={ct.accordion__inputsWrapper}>
                        {/* <input type="range"  
                min={0}
                max={500000}
                value={maxValue}
                onChange={handleMaxChange}/> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={ct.search__item}>
                <div
                  className={ct.search__item__main}
                  onClick={() => {
                    toggleAccordion5();
                    toggleArrowRotation5();
                  }}
                >
                  <span className={ct.search__item__mainText}>Year</span>
                  <img
                    src={Arrow}
                    alt="icon"
                    className={isArrowRotated5 ? ct.arrowRotated : ""}
                  />
                </div>
                {isActive5 && (
                  <div className={ct.input__content}>
                    <div className={ct.accordion__counter}>
                      <div className={ct.accordion__price__wrapper}>
                        <div className={ct.price__numbers__wrapper}>
                          <span className={ct.accordion__year__num}>
                            {minYear}
                          </span>
                          <span
                            className={
                              ct.accordion__year__num +
                              " " +
                              ct.accordion__year__total
                            }
                          >
                            {maxYear}
                          </span>
                        </div>
                      </div>
                      <div className={ct.accordion__inputsWrapper}>
                        <ReactSlider
                          className="horizontal-slider"
                          thumbClassName="example-thumb"
                          trackClassName="example-track"
                          //defaultValue={[0, 100]}
                          value={sliderYearValue}
                          onChange={handleSliderYearChange}
                          ariaLabel={["Lower thumb", "Upper thumb"]}
                          ariaValuetext={(state) =>
                            `Thumb value ${state.valueNow}`
                          }
                          renderThumb={(props, state) => (
                            <div {...props}>{state.valueNow}</div>
                          )}
                          pearling
                          minDistance={1}
                          min={2002}
                          max={2023}
                        />
                        {/* <input type="range"  
                min={2005}
                max={2023}
                value={maxYear}
                onChange={handleMaxTime}/> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={ct.search__item}>
                <div
                  className={ct.search__item__main}
                  onClick={() => {
                    toggleAccordion6();
                    toggleArrowRotation6();
                  }}
                >
                  <span className={ct.search__item__mainText}>Kilometres </span>
                  <img
                    src={Arrow}
                    alt="icon"
                    className={isArrowRotated6 ? ct.arrowRotated : ""}
                  />
                </div>
                {isActive6 && (
                  <div className={ct.input__content}>
                    <div className={ct.accordion__counter}>
                      <div className={ct.accordion__price__wrapper}>
                        <div className={ct.price__numbers__wrapper}>
                          <span className={ct.accordion__distance__num}>
                            {minDistance}
                          </span>
                          <span
                            className={
                              ct.accordion__distance__num +
                              " " +
                              ct.accordion__price__total
                            }
                          >
                            {maxDistance}
                          </span>
                        </div>
                      </div>
                      <div className={ct.accordion__inputsWrapper}>
                        <ReactSlider
                          className="horizontal-slider slider__distance"
                          thumbClassName="example-thumb"
                          trackClassName="example-track"
                          value={sliderDistanceValue}
                          onChange={handleSliderDistanceChange}
                          renderThumb={(props, state) => (
                            <div {...props}>{state.valueNow}</div>
                          )}
                          //min={0}
                          max={200000}
                        />
                        {/* <input type="range"  
                min={0}
                max={200000}
                value={maxDistance}
                onChange={handleMaxDistance}/> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* -------------------------------------------------- */}
          <div className={ct.catalog__cars}>
            <div className={ct.catalog__filters}>
              <div className={ct.catalog__filters__block}>
                <div className={ct.catalog__showMenu} onClick={openSearch}>
                  <img src={Filter} alt="icon" />
                  <span className={ct.showMenu__text}>Search Filter</span>
                </div>
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
                  <div
                    className={ct.recomendations__main}
                    onClick={() => {
                      recomendationArrowRotation();
                      showRecomendation();
                    }}
                  >
                    <span className={ct.recomendations__text}>
                      Recommendations
                    </span>
                    <img
                      src={Arrow}
                      alt="arrow"
                      className={isArrowRotated7 ? ct.arrowRotated : ""}
                    />
                  </div>
                  {isRecomendations && (
                    <div className={ct.recomendations__content}>
                      <div className={ct.recomendations__content__container}>
                        <Link to="/">
                          <span className={ct.recomendations__content__item}>
                            Newest inventory
                          </span>
                        </Link>
                        <Link to="/">
                          <span className={ct.recomendations__content__item}>
                            Lowest price
                          </span>
                        </Link>
                        <Link to="/">
                          <span className={ct.recomendations__content__item}>
                            Highest prices
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}
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

export default Catalog;