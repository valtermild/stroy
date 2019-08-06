import React, {Component} from 'react';
class NavBar extends Component{
    render(){
        return(
            <div>
                {/*====================  header area ====================*/}
                <div className="header-area">
                    <div className="header-area__desktop header-area__desktop--default">
                    {/*=======  header top bar  =======*/}
                    <div className="header-top-bar">
                        <div className="container">
                        <div className="row align-items-center">                            
                            <div className="col-lg-12">
                            {/* top bar right */}
                            <div className="top-bar-right-wrapper">
                                <a href="mailto:info@mmg.group" className="ht-btn ht-btn--default d-inline-block">НАПИСАТЬ НАМ</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*=======  End of header top bar  =======*/}
                    {/*=======  header info area  =======*/}
                    <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    {/* logo */}
                                    <div className="logo">
                                    <a href={`${process.env.PUBLIC_URL}/`}>
                                        <img src="assets/img/logo/logo_main.png" className="img-fluid" alt="Logo" />
                                    </a>
                                    </div>
                                    {/* header contact info */}
                                    <div className="header-contact-info">
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-smartphone-android" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Телефон</h6>
                                        <a href="tel:+79186714835" className="header-info-single-item__subtitle">+7-918-671-48-35</a>
                                        </div>
                                    </div>
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-home" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Адрес</h6>
                                        <p className="header-info-single-item__subtitle">Ялта, ул.Садовая 11(офис 1-4)</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* mobile menu */}
                                    <div className="mobile-navigation-icon" id="mobile-menu-trigger">
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    {/*=======  End of header info area =======*/}
                    {/*=======  header navigation area  =======*/}
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* header navigation */}
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            <li>
                                                <a href={`${process.env.PUBLIC_URL}/`}>ГЛАВНАЯ</a> 
                                            </li>
                                            <li><a href={`${process.env.PUBLIC_URL}/about-us`}>О НАС</a></li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href={`${process.env.PUBLIC_URL}/services`}>УСЛУГИ</a>
                                                <ul className="submenu">                                                
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
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
            </div>
        )
    }
}


export default NavBar;