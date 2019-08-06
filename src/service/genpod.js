import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class genpod extends Component{
    render(){
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
                                    <h1>Генеральный подрядчик</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Главная</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Услуги</a></li>
                                        <li>Генеральный подрядчик</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--120">
                    {/*Service section start*/}
                    <div className="service-section">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12 order-1 order-lg-2">
                            <div className="service-details">
                                {/* service gallery */}
                                <ServiceGallery/>

                                <div className="content section-space--top--30">
                                <div className="row">
                                    <div className="col-12">
                                    <h2>Генеральный подрядчик</h2>
                                    <p>Оказывая услуги Генерального подрядчика, компания "СТРОЙ СИТИ ГРУПП" решает комплекс управленческих задач по организации процесса строительства и ввода объекта в эксплуатацию. </p>
                                    <p>Мы обеспечиваем координацию работ, выполняемых специализированными компаниями, в рамках единой технологической и информационной среды, отвечая за результат работы всей команды и объект в целом.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Организация</h3>
                                    <p>Координация и управление всеми процессами возведения объекта на этапах предпроектных работ, проектирования, строительства и ввода объекта в эксплуатацию.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Ценообразование</h3>
                                    <p>Обеспечиваем понятную и обоснованную схему формирования стоимости строительства.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Договор</h3>
                                    <p>Прозрачные отношения с Заказчиком и гибкий подход к расчету стоимости услуг генерального подрядчика — управления строительством.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Результат</h3>
                                    <p>Завершенное строительство и введенный в эксплуатацию объект, построенный в рамках планового бюджета в адекватные сроки и с высоким качеством.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-12 order-2 order-lg-1">
                                <Sidebar />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*Service section end*/}
                    </div>

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


export default genpod;