import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                {/*====================  footer area ====================*/}
                <div className="footer-area dark-bg">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-content-wrapper section-space--inner--100">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12">
                                {/* footer intro wrapper */}
                                <div className="footer-intro-wrapper">
                                    <div className="footer-logo">
                                    <a href={`${process.env.PUBLIC_URL}/`}>
                                        <img src="assets/img/logo/logo_main.png" className="img-fluid" alt="" />
                                    </a>
                                    </div>
                                    <div className="footer-desc">
                                    "СТРОЙ СИТИ ГРУПП" - строительная компания в Ялте. Реконструкция зданий и сооружений, отделочные работы, строительные материалы из Турции.
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                {/* footer widget */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget__title">МЕНЮ</h4>
                                    <ul className="footer-widget__navigation">
                                    <li><a href={`${process.env.PUBLIC_URL}/`}>Главная</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/about-us`}>О нас</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/services`}>Услуги</a></li>                                    
                                    <li><a href={`${process.env.PUBLIC_URL}/contact-us`}>Контакты</a></li>
                                    </ul>
                                </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                {/* footer widget */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget__title">УСЛУГИ</h4>
                                    <ul className="footer-widget__navigation">
                                    <li><a href={`${process.env.PUBLIC_URL}/stroyka`}>Строительство</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/repair`}>Реконструкция зданий</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/turkey`}>Поставка материалов</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/genpod`}>Генеральный подрядчик</a></li>
                                    </ul>
                                </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                {/* footer widget */}
                                <div className="footer-widget mb-0">
                                    <h4 className="footer-widget__title">КОНТАКТЫ</h4>
                                    <div className="footer-widget__content">
                                    <p className="address">Ялта, ул.Садовая 11 (нижний этаж, офис 1-4)</p>
                                    <ul className="contact-details">
                                        <li>+7 918 671 4835</li>
                                        <li>info@mmg.group</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                        <div className="footer-copyright-wrapper">
                        <div className="footer-copyright text-center">
                        © Все права защищены
                        </div>
                    </div>
                </div>
                {/*====================  End of footer area  ====================*/}
                {/*====================  scroll top ====================*/}
                <button className="scroll-top" id="scroll-top">
                    <i className="ion-android-arrow-up" />
                </button>
                {/*====================  End of scroll top  ====================*/}
            </div>
        )
    }
}


export default Footer;