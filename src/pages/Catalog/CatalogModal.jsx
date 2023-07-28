import { useState } from 'react';
import ct from '../Catalog/catalog.module.scss'

export const CatalogModal = () => {
   
       return (
        <div>
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
              <div className={ct.search__item__main} onClick={() => {
                  toggleAccordion6();
                  toggleArrowRotation6();
                }}>
                <span className={ct.search__item__mainText}>Kilometres </span>
                <img src={Arrow} alt="icon" className={isArrowRotated6 ? ct.arrowRotated : ""}/>
              </div>
              {isActive6 && <div className={ct.input__content}>
                <div className={ct.accordion__counter}>
                <div className={ct.accordion__price__wrapper}>
                  <span className={ct.accordion__distance__num}>{minDistance}</span>
                  <span className={ct.accordion__distance__num + " " + ct.accordion__price__total}>{maxDistance}</span>
                </div>
                <div className={ct.accordion__inputsWrapper}>
                <input type="range"  
                min={0}
                max={200000}
                value={maxDistance}
                onChange={handleMaxDistance}/>
                 </div>
                </div>
                </div>}
            </div>
          </div>
        </div>
    )
}