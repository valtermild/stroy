import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class fasad extends Component{
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
                                    <h1>Фасадные работы</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Главная</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Услуги</a></li>
                                        <li>Фасадные работы</li>
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
                                    <h2>Фасадные работы</h2>
                                    <p>Такое название получил целый комплекс операций, направленных на формирование привлекательного внешнего вида и повышение функциональности фасада. Любой, кто так или иначе связан со строительством, понимает, что фасад – это не только «лицо» постройки, но и надежная защита, минимизирующая потери тепла зимой и предотвращающая перегрев летом.</p>
                                    <p>Когда выполняется капитальный ремонт, специалисты строительной компании «СТРОЙ СИТИ ГРУПП» начинают работу с осмотра и диагностики состояния фасада здания. После чего создается список операций, который может включать в себя:</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Шпатлевка, покраска или облицовка</h3>
                                    <p>Иногда требуется реставрация отдельных элементов или всего архитектурного декора. Данные операции по большей части направлены на изменение внешнего вида постройки.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Монтажные работы</h3>
                                    <p>В этом случае выполняется установка водоотливов, систем вентиляции, молниеотводов и систем, предотвращающих образование льда на определенных участках. Последние реализуются за счет использования специальных кабелей и могут работать в комплексе с тем оборудованием, что выполняет схожие функции на крыше здания.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Защита фасада</h3>
                                    <p>Она производится двумя способами. Первый из них предполагает защиту от потери тепла, например, так работает технология «мокрый фасад», а второй обеспечивает защиту от влаги. Обычно речь идет о пропитке водоотталкивающими составами.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Монтаж вентфасадов</h3>
                                    <p>Так называют поверхности, образованные металлическими конструкциями и керамическими элементами.</p>
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


export default fasad;