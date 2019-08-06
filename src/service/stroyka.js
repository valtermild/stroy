import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class stroyka extends Component{
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
                                    <h1>Общестроительные работы</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Главная</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Услуги</a></li>
                                        <li>Общестроительные работы</li>
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
                                    <h2>Общестроительные работы</h2>
                                    <p>Это максимально широкий спектр многопрофильных работ, состоящих из проектирования, подготовки и возведения объекта, его отделки, обустройства и дальнейшего обслуживания. Общестроительные работы подразделяются на несколько основных видов в зависимости от используемых материалов, технологических особенностей и обслуживаемых элементов конструкции.</p>
                                    <p>Под данным понятием на современном строительном рынке принято рассматривать следующие работы:</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Геодезические</h3>
                                    <p>Представляют собой комплекс измерений, вычислений и построений на местности, при котором должно обеспечиваться проектное размещение сооружений с необходимой точностью и возведение их конструкций (элементов) в полном соответствии с геометрическими их параметрами и требованиями нормативных документов.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Инженерно-проектные</h3>
                                    <p>На этом этапе производится разработка технологии функционирования будущего здания, архитектуры, сбор и расчёт всех нагрузок, выбор и детальный расчёт конструктивных и инженерных решений.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Подготовительные работы</h3>
                                    <p>Мероприятия по подготовке строительной площадки к началу возведения здания или сооружения. Состав этих работ зависит от местоположения участка, его рельефа, времени года.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Работы нулевого цикла</h3>
                                    <p>Как правило, производство работ нулевого цикла предусматривает сооружение основания объекта, подготовку подъездных путей к нему и прокладку подземных коммуникаций.</p>
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


export default stroyka;