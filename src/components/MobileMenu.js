import React, {Component} from 'react';


class MobileMenu extends Component{
    render(){
        return(
            <div>
                {/*=======  offcanvas mobile menu  =======*/}
                <div className="offcanvas-mobile-menu" id="mobile-menu-overlay">
                    <a href="#/" className="offcanvas-menu-close" id="mobile-menu-close-trigger">
                        <i className="ion-android-close" />
                    </a>
                    <div className="offcanvas-wrapper">
                        <div className="offcanvas-inner-content">
                        <div className="offcanvas-mobile-search-area">
                            <form action="#">
                            <input type="search" placeholder="Search ..." />
                            <button type="submit"><i className="fa fa-search" /></button>
                            </form>
                        </div>
                        <nav className="offcanvas-navigation">
                            <ul>
                            <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>ГЛАВНАЯ</a>
                            </li>
                            <li><a href={`${process.env.PUBLIC_URL}/about-us`}>О НАС</a></li>
                            <li className="menu-item-has-children">
                                <a href={`${process.env.PUBLIC_URL}/services`}>УСЛУГИ</a>
                                <ul className="sub-menu">
                                    <li><a href={`${process.env.PUBLIC_URL}/stroyka`}>Общестроительные работы</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/repair`}>Реконструкция зданий</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/fasad`}>Фасадные работы</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/turkey`}>Поставка материалов</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/genpod`}>Генеральный подрядчик</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/otdelka`}>Отделочные работы</a></li>
                                </ul>
                            </li>                                                       
                            <li><a href={`${process.env.PUBLIC_URL}/contact-us`}>КОНТАКТЫ</a> </li>
                            </ul>
                        </nav>
                        <div className="offcanvas-widget-area">
                            <div className="off-canvas-contact-widget">
                            <div className="header-contact-info">
                                <ul className="header-contact-info__list">
                                <li><i className="ion-android-phone-portrait" /> <a href="tel:+79186714835">+7-918-671-4835</a></li>
                                <li><i className="ion-android-mail" /> <a href="mailto:info@mmg.group">info@mmg.group</a></li>
                                </ul>
                            </div>
                            </div>                            
                        </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of offcanvas mobile menu  =======*/}

            </div>
        )
    }
}

export default MobileMenu;