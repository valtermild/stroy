import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class repair extends Component{
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
                                    <h1>Реконструкция зданий</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Главная</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Услуги</a></li>
                                        <li>Реконструкция зданий</li>
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
                                    <h2>Реконструкция зданий и сооружений</h2>
                                    <p>Переустройство с целью частичного или полного изменения функционального назначения, установки нового эффективного оборудования, улучшения застройки территорий, приведения в соответствие с современными возросшими нормативными требованиями.</p>
                                    <p>Переустройство включает перепланировку и увеличение высоты помещений, усиление, частичную разборку и замену конструкций, а также надстройку, пристройку и улучшение фасадов зданий.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Модернизация недвижимости</h3>
                                    <p>На сегодняшний день реконструкция зданий считается основным способом решения проблемы модернизации объектов недвижимости, улучшение технико-эксплуатационных и эстетических качеств сооружения до соответствия современным требованиям и нормам. </p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Реконструкция старых жилых домов</h3>
                                    <p>Надстройка малоэтажных жилых домов избавляет от необходимости начинать дорогостоящее капитальное строительство высотных квартирных домов. При этом семьи, нуждающиеся в улучшении условий проживания, получают возможность обзавестись новым современным жильем.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Пристройки к зданиям</h3>
                                    <p>Возведение пристройки к зданию, которая позволяет увеличить общую площадь объекта, тем самым решая проблему с нехваткой свободного пространства. Также данная мера направлена на усовершенствование функциональности сооружения.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Реконструкция памятников архитектуры</h3>
                                    <p>За длительное время эксплуатации конструктивные элементы памятников архитектуры могут ветшать и изнашиваться, что приводит к разрушению сооружений и утрате ими уникальных строительных деталей.</p>
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


export default repair;