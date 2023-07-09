export const params = {
    injectStyles: [
      `
      .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: 300ms opacity;
        transform: translate3d(0, 0, 0);
        z-index: 10;
      }
      .swiper-pagination.swiper-pagination-hidden {
        opacity: 0;
      }
      .swiper-pagination-disabled > .swiper-pagination,
      .swiper-pagination.swiper-pagination-disabled {
        display: none !important;
      }
      /* Common Styles */
      .swiper-pagination-fraction,
      .swiper-pagination-custom,
      .swiper-horizontal > .swiper-pagination-bullets,
      .swiper-pagination-bullets.swiper-pagination-horizontal {
        bottom: var(--swiper-pagination-bottom, 8px);
        top: var(--swiper-pagination-top, auto);
        left: 300px;
        width: 100%;
      }
      /* Bullets */
      .swiper-pagination-bullets-dynamic {
        overflow: hidden;
        font-size: 0;
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
        transform: scale(0.33);
        position: relative;
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
        transform: scale(1);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
        transform: scale(1);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
        transform: scale(0.66);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
        transform: scale(0.33);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
        transform: scale(0.66);
      }
      .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
        transform: scale(0.33);
      }
      .swiper-pagination-bullet {
        width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
        height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
        display: inline-block;
        border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
        background: var(--swiper-pagination-bullet-inactive-color, #000);
        opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
      }
      button.swiper-pagination-bullet {
        border: none;
        margin: 0;
        padding: 0;
        box-shadow: none;
        -webkit-appearance: none;
                appearance: none;
      }
      .swiper-pagination-clickable .swiper-pagination-bullet {
        cursor: pointer;
      }
      .swiper-pagination-bullet:only-child {
        display: none !important;
      }
      .swiper-pagination-bullet-active {
        opacity: var(--swiper-pagination-bullet-opacity, 1);
        background: var(--swiper-pagination-color, var(--swiper-theme-color));
      }
      .swiper-vertical > .swiper-pagination-bullets,
      .swiper-pagination-vertical.swiper-pagination-bullets {
        right: var(--swiper-pagination-right, 8px);
        left: var(--swiper-pagination-left, auto);
        top: 50%;
        transform: translate3d(0px, -50%, 0);
      }
      .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
      .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
        margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
        display: block;
      }
      .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
      .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
      }
      .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
      .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
        display: inline-block;
        transition: 200ms transform, 200ms top;
      }
      .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
      .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
      }
      .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
      .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
      }
      .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
      .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
        transition: 200ms transform, 200ms left;
      }
      .swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
      :host(.swiper-horizontal.swiper-rtl) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
        transition: 200ms transform, 200ms right;
      } 
      `,
    ],
  };