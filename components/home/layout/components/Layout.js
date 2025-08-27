import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import MiniCart from "../elements/MiniCart";
import Breadcrumb from "./Breadcrumb";
import MobileMenu from "./MobileMenu";
import ModalPopup from "./ModalPopup";
import SearchPopup from "./SearchPopup";
import SidebarCart from "./SidebarCart";
// import StyleSwitcher from './StyleSwitcher'

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
  blogMetaSingle,
}) {
  // Search
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);

  // Contact popup
  const [isContactPopup, setContactPopup] = useState(false);
  const handleContactPopup = () => setContactPopup(!isContactPopup);

  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  // Cart
  const [isCart, setCart] = useState(false);
  const handleCart = () => setCart(!isCart);

  // Scroll Header
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <>
      <div
        id="page"
        className={`page_wapper hfeed site ${
          scroll ? "fixed-header floating-menu" : ""
        } ${isMobileMenu ? "crt_mobile_menu-visible" : ""} ${
          isCart ? "side_bar_cart-visible" : ""
        }`}
      >
        {/* <StyleSwitcher /> */}
        <div id="wrapper_full" className="content_all_warpper">
          <MiniCart handleCart={handleCart} />
          <Header
            handleSearch={handleSearch}
            handleContactPopup={handleContactPopup}
            handleMobileMenu={handleMobileMenu}
          />

          {breadcrumbTitle && (
            <Breadcrumb
              breadcrumbTitle={breadcrumbTitle}
              blogMetaSingle={blogMetaSingle}
            />
          )}
          <div id="content" className="site-content">
            {children}
          </div>
        </div>
        <Footer />

        <MobileMenu
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
        <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
        <ModalPopup
          isContactPopup={isContactPopup}
          handleContactPopup={handleContactPopup}
        />
        <SidebarCart handleCart={handleCart} />
      </div>
      <BackToTop />
    </>
  );
}
