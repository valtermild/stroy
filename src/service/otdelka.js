import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class otdelka extends Component{
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
                                    <h1>Отделочные работы</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Главная</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Услуги</a></li>
                                        <li>Отделочные работы</li>
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
                                    <h2>Отделочные работы</h2>
                                    <p>Работы по отделке считаются одними из самых трудо- и материалоемких. Поэтому относиться к их проведению следует очень ответственно, ведь от этого будет зависеть конечный результат ремонта или стройки.</p>
                                    <p>Строительная компания "СТРОЙ СИТИ ГРУПП" выполнит качественные работы по отделке помещений по доступной стоимости и в запланированный срок.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Внешние работы по отделке</h3>
                                    <p>Заключается в проведении ремонтных или реконструкционных работ, которые требует фасад задания или строения. Это может быть нанесение на него разнообразной штукатурки, панельного покрытия, камня и т.д.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Внутренние отделочные работы</h3>
                                    <p>Включают в себя подготовку стен и нанесение финишных покрытий, обустройство выравнивающей стяжки, настил напольных покрытий, шпатлевка и окрашивание потолков, сантехнические работы, проводка электрики.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Демонтажные работы</h3>
                                    <p>Демонтаж перегородок, плитки, потолка, полов, сантехники, элементов системы электроснабжения и т.п.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Ремонтно-монтажные работы</h3>
                                    <p>Установка сантехники и оборудования, устройство полов, монтаж перегородок, дверей, электроточек и т.д.</p>
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


export default otdelka;