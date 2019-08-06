import React, { Component } from 'react';
//import ModalVideo from 'react-modal-video'

class VideoCta extends Component{

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
                {/*====================  video cta area ====================*/}
                <div className="video-cta-area section-space--inner--120">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="video-cta-content">
                            <h4 className="video-cta-content__small-title">СТРОЙ СИТИ ГРУПП</h4>
                            <h3 className="video-cta-content__title">Строительная компания в Ялте</h3>
                            <p className="video-cta-content__text">У нас большой опыт строительства жилых и нежилых зданий, реконструкции и капитального ремонта. Обращаясь в компанию "СТРОЙ СИТИ ГРУПП", вы попадаете к профессионалам своего дела.</p>
                            <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--round">КОНТАКТЫ</a>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6">
                            <div className="cta-video-image">
                            <img src="assets/img/backgrounds/dom.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of video cta area  ====================*/}
            </div>
        )
    }
}


export default VideoCta;