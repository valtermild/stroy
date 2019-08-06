import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Services extends Component{
    render(){

        let data = [
            {pageLink: 'stroyka', img: 'stroyka.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'Общестроительные и подготовительные работы', serviceSubtitle: 'Выполняем все работы в рамках возведения зданий и сооружений.'},
            {pageLink: 'repair', img: 'repair.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'Реконструкция зданий и сооружений', serviceSubtitle: 'Внешний и внутренний ремонт капитальных сооружений.'},
            {pageLink: 'fasad', img: 'fasad.jpg', iconClass: 'flaticon-015-cart', serviceTitle: 'Фасадные работы любой сложности', serviceSubtitle: 'Формирование привлекательного внешнего вида и повышение функциональности фасада.'},
            {pageLink: 'turkey', img: 'mramor.jpg', iconClass: 'flaticon-010-tank-1', serviceTitle: 'Поставка отделочных материалов из Турции', serviceSubtitle: 'Доставляем высококачественные материалы турецких производителей.'},
            {pageLink: 'genpod', img: 'genpod.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'Функции генерального подрядчика', serviceSubtitle: 'Решаем все вопросы, от разработки проекта до его реализациии в материале.'},
            {pageLink: 'otdelka', img: 'otdelka.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'Отделочные работы', serviceSubtitle: 'Отделка помещений современными материалами.'}
        ];

        let Datalist = data.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="Service Grid" />
                        </a>
                        </div>                        
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceSubtitle}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`} className="see-more-link">Подробнее</a>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>

                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Услуги</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Главная</a></li>
                                        <li>Услуги</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  service page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Service section start*/}
                <div className="service-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-item-wrapper">
                            <div className="row">
                                {Datalist}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Service section end*/}
                </div>

                {/*====================  End of service page content  ====================*/}

                {/* Brand logo */}
                <BrandLogoSlider background = "grey-bg" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}

export default Services;