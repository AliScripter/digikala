'use strict';

class SiteHeader extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement(`template`);
    template.innerHTML = ` 
<link rel="stylesheet" href="./fontawsome-pro/css/all.min.css" />
<link rel="stylesheet" href="./styles/reset.css" />
<link rel="stylesheet" href="./styles/output_tailwind.css" />
<link rel="stylesheet" href="./styles/style.css" />
<link rel="stylesheet" href="./components/header/header.css">
<div class="header__top flex items-center m-3 justify-between ">
        <div class="header__top-right flex items-center">
          <a href="/" class="spa_link">
            <img src="./images/logo.svg" alt="logo" class="ml-3" id="logo" />
          </a>

          <div class="header__top_searchbox text-slate-500">
            <div id="search_input" class="flex items-center w-full h-10">
              <div class="search_icon mt-1.5">
                <i
                  class="fa-solid fa-magnifying-glass text-[18px] cursor-pointer"
                ></i>
              </div>

              <input
                type="search"
                placeholder="جستجو"
                class="w-full h-full mr-3"
                style="background-color: #ede7e7"
              />
            </div>
          </div>
        </div>
        <div class="header__top-left flex items-center justify-around w-24">
          <div class="flex items-start cursor-pointer">
            <i class="fa-regular fa-user"></i>

            <i class="fa-solid fa-triangle rotate-180 text-[10px] mr-1.5"></i>
          </div>
          <span class="text-slate-500">|</span>
          <a href="#">
            <i
              class="fa-regular fa-cart-shopping fa-flip-horizontal cursor-pointer"
            ></i>
          </a>
        </div>
      </div>
      <div id="menu_res_none" class='w-max'></div>
      <div class="category-toggle"></div>

      <div class="header__menu m-3 flex items-center justify-between">
        <div class="header__menu-right flex justify-around items-center">
          <ul class="flex items-center justify-between w-full">
            <!-- !TEST AI -->
            <div class="dropdown">
              <button class="dropbtn flex items-center">
                <i class="fas fa-bars"></i> دسته بندی کالاها
              </button>
              <div class="dropdown-content">
                <div class="category">
                  <a href="#">موبایل</a>
                  <div class="sub-content left-sub">
                    <a href="/iphone.html" class="spa_link"> آیفون *</a>
                    <a href="/samsung.html" class="spa_link"> سامسونگ *</a>
                    <a href="#">شیائومی</a>
                    <a href="#">هوآوی</a>
                    <a href="#">نوکیا</a>
                  </div>
                </div>
                <div class="category">
                  <a href="#">کالای دیجیتال</a>
                  <div class="sub-content left-sub">
                    <a href="#">لپتاپ ایسوس</a>
                    <a href="#">لپتاپ لنوو</a>
                    <a href="#">مک بوک</a>
                    <a href="#">لپتاپ HP</a>
                    <a href="#">لپتاپ دل</a>
                  </div>
                </div>
                <div class="category">
                  <a href="#">خانه و آشپزخانه</a>
                  <div class="sub-content left-sub">
                    <a href="#">قابلمه و تابه</a>
                    <a href="#">زودپز</a>
                    <a href="#">سرویس پخت و پز</a>
                    <a href="#">مبل</a>
                    <a href="#">قاب عکس</a>
                  </div>
                </div>
                <div class="category">
                  <a href="#">لوازم خانگی برقی</a>
                  <div class="sub-content left-sub">
                    <a href="#">تلویزیون</a>
                    <a href="#">ساندبار</a>
                    <a href="#">کولرگازی</a>
                    <a href="#">یخچال</a>
                    <a href="#">چرخ گوشت</a>
                  </div>
                </div>
                <div class="category">
                  <a href="#">مد و پوشاک</a>
                  <div class="sub-content left-sub">
                    <a href="#">پیراهن مردانه</a>
                    <a href="#">کت شلوار</a>
                    <a href="#">کفش</a>
                    <a href="#">هودی</a>
                    <a href="#">دامن</a>
                  </div>
                </div>
              </div>
            </div>
            
            <span class="">|</span>
            <a href="#">
              <li>
                <i class="fa-regular fa-badge-percent"></i
                ><span>شگفت انگیزها</span>
              </li> </a
            ><a href="#">
              <li>
                <i class="fa-regular fa-basket-shopping"></i
                ><span>سوپرمارکت</span>
              </li> </a
            ><a href="#">
              <li>
                <i class="fa-duotone fa-gift-card"></i><span>کارت هدیه</span>
              </li> </a
            ><a href="#">
              <li>
                <i class="fa-sharp fa-solid fa-fire"></i
                ><span>پرفروش ترین ها</span>
              </li>
            </a>
            <span class="">|</span>

            <a href="#">
              <li><i></i><span>سوالی دارید؟</span></li> </a
            ><a href="#">
              <li><i></i><span>در دیجی کالا بفروشید!</span></li>
            </a>
          </ul>
        </div>
        <div class="header__menu-left flex items-baseline cursor-pointer mr-8">
          <i class="fa-regular fa-location-dot ml-2"></i>
          <span>ارسال به خراسان رضوی، مشهد</span>
        </div>
      </div>
      <hr class="my_border text-neutral-400" />
      <!--!RESPONSEVE MENU IN DOWN OF PAGE  -->
      <div class="down_menu_container-absolute">
        <hr class="my_border text-neutral-400" />

        <div class="down_menu">
          <a href="#">
            <i class="fa-solid fa-house-user text-neutral-900"></i>
            <p class="text-neutral-900">خانه</p></a
          >
          <a href="#" class="respons_category"
            ><i class="fa-light fa-list-tree"></i>
            <p>دسته بندی</p></a
          >
          <a href="#"
            ><i
              class="fa-regular fa-cart-shopping fa-flip-horizontal cursor-pointer"
            ></i>
            <p>سبد خرید</p></a
          >
          <a href="#"
            ><i class="fa-regular fa-user"></i>
            <p>دیجی کالا من</p></a
          >
        </div>
      </div>`;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const categoriBtn = this.shadowRoot.querySelector('.respons_category');
    const menuContainer = this.shadowRoot.querySelector('#menu_res_none');

    const menu = `<div class="dropdown p-3 my_dp ">
        <button class="dropbtn flex items-center">
          <i class="fas fa-bars ml-1.5"></i> دسته بندی کالاها
        </button>
        <div class="dropdown-content">
          <div class="category" id="mobileCategory">
            <a href="#">موبایل</a>
            <div class="sub-content left-sub">
              <a href="/iphone.html" class="spa_link"> آیفون *</a>
              <a href="/samsung.html" class="spa_link"> سامسونگ *</a>
              <a href="#">شیائومی</a>
              <a href="#">هوآوی</a>
              <a href="#">نوکیا</a>
            </div>
          </div>
          <div class="category" id="digitalCategory">
            <a href="#">کالای دیجیتال</a>
            <div class="sub-content left-sub">
              <a href="#">لپتاپ ایسوس</a>
              <a href="#">لپتاپ لنوو</a>
              <a href="#">مک بوک</a>
              <a href="#">لپتاپ HP</a>
              <a href="#">لپتاپ دل</a>
            </div>
          </div>
          <div class="category" id="kitchenCategory">
            <a href="#">خانه و آشپزخانه</a>
            <div class="sub-content left-sub">
              <a href="#">قابلمه و تابه</a>
              <a href="#">زودپز</a>
              <a href="#">سرویس پخت و پز</a>
              <a href="#">مبل</a>
              <a href="#">قاب عکس</a>
            </div>
          </div>
          <div class="category" id="electronicCategory">
            <a href="#">لوازم خانگی برقی</a>
            <div class="sub-content left-sub">
              <a href="#">تلویزیون</a>
              <a href="#">ساندبار</a>
              <a href="#">کولرگازی</a>
              <a href="#">یخچال</a>
              <a href="#">چرخ گوشت</a>
            </div>
          </div>
          <div class="category" id="fashionCategory">
            <a href="#">مد و پوشاک</a>
            <div class="sub-content left-sub">
              <a href="#">پیراهن مردانه</a>
              <a href="#">کت شلوار</a>
              <a href="#">کفش</a>
              <a href="#">هودی</a>
              <a href="#">دامن</a>
            </div>
          </div>
        </div>
      </div>`;

    let isMenuOpen = false;

    categoriBtn.addEventListener('click', () => {
      if (!isMenuOpen) {
        menuContainer.innerHTML = menu;
        menuContainer.style.display = 'block';
        isMenuOpen = true;
      } else {
        menuContainer.innerHTML = '';
        menuContainer.style.display = 'none';
        isMenuOpen = false;
      }
    });
  }
}

export { SiteHeader };
