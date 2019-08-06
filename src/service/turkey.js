import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class turkey extends Component{
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
                                    <h1>Поставка материалов</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Главная</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Услуги</a></li>
                                        <li>Поставка материалов</li>
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
                                    <h2>Поставка строительных материалов из Турции</h2>
                                    <p>Организуем оптовые поставки строительных и отделочных товаров напрямую от турецких производителей</p>
                                    <p>Рынок стройматериалов в Турции насыщен очень разнообразными предложениями. Качество лакокрасочных материалов, сухих строительных смесей, бетона, гранита, мрамора, керамики и других стройматериалов соответствует лучшим стандартам и выигрывает по стоимости многих аналогов других стран. Турецкий гранит и мрамор используется в строительстве во всем мире.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Натуральный мрамор</h3>
                                    <p>В Турции добывается 250 сортов мрамора на 500 карьерах – Афьон, Мугла, Биледжик, Амасья, Диярбакыр – треть мировых запасов.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Керамогранит</h3>
                                    <p>Благодаря высоким эксплуатационным характеристикам, а также конкурентной цене, керамогранит пользуются спросом как в частном, так и коммерческом строительстве.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Лакокрасочные материалы</h3>
                                    <p>Используются для внешних и внутренних отделочных работ</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Сухие строительные смеси</h3>
                                    <p>Современные штукатурные смеси для выравнивания стен демонстрируют новые возможности в строительстве. Строительные смеси разводятся легко согласно рецептуре, просто наносятся и не пылят в сухом виде.</p>
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


export default turkey;