import ct from "./catalog.module.scss";
import { Header } from "../../components/Common/Header/Header";
import { Footer } from "../../components/Common/Footer/Footer"
import Arrow from "../../images/arrow-down.svg";
import Share from "../../images/Share.svg";
import Search from "../../images/Search.svg";
import Car1 from '../../images/catalog-img1.webp';
import Car2 from '../../images/catalog-img2.webp';
import Car3 from '../../images/catalog-img3.webp';
import Car4 from '../../images/catalog-img4.webp';
import Car5 from '../../images/catalog-img5.webp';
import Car6 from '../../images/catalog-img6.webp';

export const Catalog = ({ isCustomStyle }) => {
  return (
    <div className={ct.catalog__wrapper}>
      <Header isCustomStyle={true} />
      <div className={ct.catalog__mainWrapper}>
        <div className={ct.catalog__container}>
          <div className={ct.catalog__search}>
            <h3 className={ct.search__title}>Detailed search</h3>
            <div className={ct.search__item}>
              <div className={ct.search__item__main}>
                <span className={ct.search__item__mainText}>Make, Model</span>
                <img src={Arrow} alt="icon" />
              </div>
            </div>
            <div className={ct.search__item}>
              <div className={ct.search__item__main}>
                <span className={ct.search__item__mainText}>Body type</span>
                <img src={Arrow} alt="icon" />
              </div>
            </div>
            <div className={ct.search__item}>
              <div className={ct.search__item__main}>
                <span className={ct.search__item__mainText}>Transmission</span>
                <img src={Arrow} alt="icon" />
              </div>
            </div>
            <div className={ct.search__item}>
              <div className={ct.search__item__main}>
                <span className={ct.search__item__mainText}>Price</span>
                <img src={Arrow} alt="icon" />
              </div>
            </div>
            <div className={ct.search__item}>
              <div className={ct.search__item__main}>
                <span className={ct.search__item__mainText}>Year</span>
                <img src={Arrow} alt="icon" />
              </div>
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
                  <span className={ct.recomendations__text}>Recommendations</span>
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
                   <h4 className={ct.item__info__title}>Porsche Panamera II Turbo S E-Hybrid  </h4>
                   <span className={ct.item__info__price}>$ 150 000</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div className={ct.item__description__text + " " + ct.item__description__textBorder}>Sedan</div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car2} alt="bg" />
                </div>
                <div className={ct.item__info}>
                   <h4 className={ct.item__info__title}>Mitsubishi Outlander III Restyling 3 More datail information</h4>
                   <span className={ct.item__info__price}>$ 23 500</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div className={ct.item__description__text + " " + ct.item__description__textBorder}>Sedan</div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car3} alt="bg" />
                </div>
                <div className={ct.item__info}>
                   <h4 className={ct.item__info__title}>Mercedes-Benz CLA I (C117, X117) 200 More information</h4>
                   <span className={ct.item__info__price}>$ 150 000</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div className={ct.item__description__text + " " + ct.item__description__textBorder}>Sedan</div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car4} alt="bg" />
                </div>
                <div className={ct.item__info}>
                   <h4 className={ct.item__info__title}>Mercedes-Benz W124 420</h4>
                   <span className={ct.item__info__price}>$ 23 000</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div className={ct.item__description__text + " " + ct.item__description__textBorder}>Sedan</div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car5} alt="bg" />
                </div>
                <div className={ct.item__info}>
                   <h4 className={ct.item__info__title}>Mercedes-Benz E-Class III (W211, S211) Restyling 230</h4>
                   <span className={ct.item__info__price}>$ 150 000</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div className={ct.item__description__text + " " + ct.item__description__textBorder}>Sedan</div>
                  <div className={ct.item__description__text}>Transmission</div>
                  <div className={ct.item__description__text}>Kilometres </div>
                </div>
              </div>
              <div className={ct.catalog__item}>
                <div className={ct.item__imgWrapper}>
                  <img src={Car6} alt="bg" />
                </div>
                <div className={ct.item__info}>
                   <h4 className={ct.item__info__title}>Audi A7 I (4G) S-tronic</h4>
                   <span className={ct.item__info__price}>$ 23 500</span>
                </div>
                <div className={ct.item__description}>
                  <div className={ct.item__description__text}>2012 year</div>
                  <div className={ct.item__description__text + " " + ct.item__description__textBorder}>Sedan</div>
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
