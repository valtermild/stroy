import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import FeatureIcon from '../components/FeatureIcon';
/* import Funfact from '../components/Funfact';
import TeamMemberGrid from '../components/TeamMemberGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import BrandLogoSlider from '../components/BrandLogoSlider'; */
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
//import ModalVideo from 'react-modal-video'
class About extends Component{

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }

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
                                    <h1>О нас</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Главная</a></li>
                                        <li>О нас</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--top--120">
                {/*About section start*/}
                <div className="about-section section-space--inner--bottom--120">
                <div className="container">
                    <div className="row row-25 align-items-center">
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-image-two">
                        <img src="assets/img/about/crimea.jpg" alt="" />                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="about-content-two">
                        <h3>Строительная компания "СТРОЙ СИТИ ГРУПП"</h3>
                        <h1>Более 5 лет профессионального опыта на рынке строительных услуг Крыма</h1>
                        <h4>Работаем с государственными заказчиками и коммерческими организациями.</h4>
                        <p>Специалистами нашей компании было реализовано огромное количество проектов по строительству и реконструкции домов, коттеджей, коммерческих и промышленных зданий и сооружений. Строительная компания "СТРОЙ СИТИ ГРУПП" работает только с лучшими, проверенными временем, поставщиками строительных материалов и использует современные технологии в строительстве. Все используемые нами материалы высокого качества, подтвержденные сертификатами и лабораторными испытаниями.</p>
                        <a href="services" className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">Наши услуги</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*About section end*/}
                
                {/* Feature Icon */}
                <FeatureIcon background = "grey-bg"/>

                {/*About section start*/}
                <div className="about-section section-space--inner--120">
                <div className="container">
                    <div className="about-wrapper row">                    
                    <div className="col-lg-12 col-12">                        
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">РЕКВИЗИТЫ</h2>
                        </div>
                        <p>Ниже приведены реквизиты нашей компании. Если вам необходимо получить свидетельства о государственной регистрации, идентификационный номер налогоплательщика и другие документы, обратитесь в бухгалтерию предприятия.</p>
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <td>
                            <b>Полное наименование:</b>
                                </td>
                                <td>
                                ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОЙ СИТИ ГРУПП"
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <b>Сокращенное наименование:</b>
                                </td>
                                <td>
                                ООО "СТРОЙ СИТИ ГРУПП"
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <b>ИНН/КПП:</b>
                                </td>
                                <td>
                                9103068198 / 910301001
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <b>ОРГН:</b>
                                </td>
                                <td>
                                1159102060523
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <b>Юридический адрес:</b>
                                </td>
                                <td>
                                298600, г. ЯЛТА, ул. САДОВАЯ, д.11, ЭТАЖ ЦОКОЛЬНЫЙ, ОФИС 1-4
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <b>Фактический адрес:</b>
                                </td>
                                <td>
                                298600, г. ЯЛТА, ул. САДОВАЯ, д.11, ЭТАЖ ЦОКОЛЬНЫЙ, ОФИС 1-4
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <b>Телефон, факс:</b>
                                </td>
                                <td>
                                    +7 (918)671-48-35
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <b>Электронная почта:</b>
                                </td>
                                <td>
                            <a href="mailto:info@mmg.group">info@mmg.group</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <b>Сайт:</b>
                                </td>
                                <td>
                            <a href="https://stroycity82.ru" target="_blank" rel="noopener noreferrer">stroycity82.ru</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                            <b>Банковские реквизиты:</b>
                                </td>
                                <td>
                                    БИК  <br></br>
                                    Р/с №, <br></br>
                                    Кор/счет  <br></br>
                                </td>
                            </tr>
                            </tbody>
                            </table>                        
                    </div>                    
                    </div>
                </div>
                </div>
                {/*About section end*/}
                
                {/* Fun fact */}
                
                
                {/* Team member */}
                
                
                {/* Testimonial Slider */}
                
                
                {/* Brand logo */}
               

                </div>


                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default About;