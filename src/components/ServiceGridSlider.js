import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            spaceBetween : 30,
            autoplay: {
                delay: 5000,
            },
            // Responsive breakpoints
            breakpoints: {
                1499:{
                    slidesPerView : 3
                },

                991:{
                    slidesPerView : 2
                },

                767:{
                    slidesPerView : 1

                },

                575:{
                    slidesPerView : 1
                }
            }

        }
        let data = [
            {img: 'stroyka.jpg', iconName: 'flaticon-002-welding', serviceTitle: 'Общестроительные и подготовительные работы', serviceExcerpt: 'Выполняем все работы в рамках возведения зданий и сооружений.', serviceUrl: 'stroyka'},
            {img: 'repair.jpg', iconName: 'flaticon-004-walkie-talkie', serviceTitle: 'Реконструкция зданий и сооружений', serviceExcerpt: 'Внешний и внутренний ремонт капитальных сооружений.', serviceUrl: 'repair'},
            {img: 'fasad.jpg', iconName: 'flaticon-015-cart', serviceTitle: 'Фасадные работы любой сложности', serviceExcerpt: 'Формирование привлекательного внешнего вида и повышение функциональности фасада.', serviceUrl: 'fasad'},
            {img: 'mramor.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'Поставка отделочных материалов из Турции', serviceExcerpt: 'Доставляем высококачественные материалы турецких производителей.', serviceUrl: 'turkey'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>                        
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceExcerpt}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">УЗНАТЬ БОЛЬШЕ</a>
                    </div>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {/*====================  service grid slider area ====================*/}
                <div className="service-grid-slider-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">Наши услуги <span className="title-icon" /></h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="service-slider">
                            <Swiper {...params}>
                                {DataList}
                            </Swiper>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;