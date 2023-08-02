import b from './blog.module.scss';
import { Link, Route, Router, Routes } from "react-router-dom";
import { Header } from '../../components/Common/Header/Header';
import { IntroTitle } from '../../components/Common/IntroTitle';
import { Footer } from '../../components/Common/Footer/Footer';
import Img1 from '../../images/article-slider1.webp';
import Img2 from '../../images/article-slider2.webp';
import Img3 from '../../images/article-slider3.webp';
import Img4 from '../../images/blog-img4.webp';
import Img5 from '../../images/blog-img5.webp';
import Img6 from '../../images/blog-img6.webp';
import Img7 from '../../images/blog-img7.webp';
import Img8 from '../../images/blog-img8.webp';
import Img9 from '../../images/blog-img9.webp';
import { useState } from 'react';


 const Blog = () => {
     return (
        <div className={b.blog__wrapper}>
          <Header />
          <IntroTitle text={'Our blog'} /> 
          <div className={b.blog__container}>
             <div className={b.blog__grid}>
             <div className={b.grid__item}>
                    <div className={b.grid__item__bgWrapper}>
                      <Link to="/Article"><img src={Img1} alt="bg" /></Link>
                    </div>
                    <div className={b.grid__item__info}>
                      <p className={b.grid__item__date}>10 May, 2020</p>
                      <p className={b.grid__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             <div className={b.grid__item}>
                    <div className={b.grid__item__bgWrapper}>
                    <Link to="/Article"><img src={Img2} alt="bg" /></Link>
                    </div>
                    <div className={b.grid__item__info}>
                      <p className={b.grid__item__date}>10 May, 2020</p>
                      <p className={b.grid__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             <div className={b.grid__item}>
                    <div className={b.grid__item__bgWrapper}>
                    <Link to="/Article"><img src={Img3} alt="bg" /></Link>
                    </div>
                    <div className={b.grid__item__info}>
                      <p className={b.grid__item__date}>10 May, 2020</p>
                      <p className={b.grid__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             <div className={b.grid__item}>
                    <div className={b.grid__item__bgWrapper}>
                    <Link to="/Article"><img src={Img4} alt="bg" /></Link>
                    </div>
                    <div className={b.grid__item__info}>
                      <p className={b.grid__item__date}>10 May, 2020</p>
                      <p className={b.grid__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             <div className={b.grid__item}>
                    <div className={b.grid__item__bgWrapper}>
                    <Link to="/Article"><img src={Img5} alt="bg" /></Link>
                    </div>
                    <div className={b.grid__item__info}>
                      <p className={b.grid__item__date}>10 May, 2020</p>
                      <p className={b.grid__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             <div className={b.grid__item}>
                    <div className={b.grid__item__bgWrapper}>
                    <Link to="/Article"><img src={Img6} alt="bg" /></Link>
                    </div>
                    <div className={b.grid__item__info}>
                      <p className={b.grid__item__date}>10 May, 2020</p>
                      <p className={b.grid__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             <div className={b.grid__item + " " + b.grid__item_mobileNone}>
                    <div className={b.grid__item__bgWrapper}>
                    <Link to="/Article"><img src={Img7} alt="bg" /></Link>
                    </div>
                    <div className={b.grid__item__info}>
                      <p className={b.grid__item__date}>10 May, 2020</p>
                      <p className={b.grid__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             <div className={b.grid__item + " " + b.grid__item_mobileNone}>
                    <div className={b.grid__item__bgWrapper}>
                    <Link to="/Article"><img src={Img8} alt="bg" /></Link>
                    </div>
                    <div className={b.grid__item__info}>
                      <p className={b.grid__item__date}>10 May, 2020</p>
                      <p className={b.grid__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             <div className={b.grid__item + " " + b.grid__item_none}>
                    <div className={b.grid__item__bgWrapper}>
                    <Link to="/Article"><img src={Img9} alt="bg" /></Link>
                    </div>
                    <div className={b.grid__item__info}>
                      <p className={b.grid__item__date}>10 May, 2020</p>
                      <p className={b.grid__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             </div>
          </div>
          <Footer />
          </div>
    )
}

export default Blog;