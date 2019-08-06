import React, { Component } from 'react';

class Sidebar extends Component{
    render(){

        let data = [
            {sidebarListLink: "stroyka", sidebarListIcon: 'flaticon-015-cart', sidebarListText: 'Общестроительные работы'},
            {sidebarListLink: "repair", sidebarListIcon: 'flaticon-010-tank-1', sidebarListText: 'Реконструкция зданий'},
            {sidebarListLink: "fasad", sidebarListIcon: 'flaticon-002-welding', sidebarListText: 'Фасадные работы'},
            {sidebarListLink: "turkey", sidebarListIcon: 'flaticon-004-walkie-talkie', sidebarListText: 'Поставка материалов'},
            {sidebarListLink: "genpod", sidebarListIcon: 'flaticon-042-monitor', sidebarListText: 'Генеральный подрядчик'},
            {sidebarListLink: "otdelka", sidebarListIcon: 'flaticon-050-boxes', sidebarListText: 'Отделочные работы'}
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <li key={i}><a href={val.sidebarListLink}>{val.sidebarListText}</a></li>
            )
        })

        return(
            <div>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <h3 className="sidebar-title">Услуги</h3>
                        <ul className="sidebar-list">
                            {Datalist}
                        </ul>
                    </div>
                    {/* <div className="sidebar">
                        <h3 className="sidebar-title">Download brochure</h3>
                        <ul className="sidebar-list">
                            <li><a href="/"><i className="fa fa-file-pdf-o" />Brochures.PDF</a></li>
                            <li><a href="/"><i className="fa fa-file-word-o" />Brochures.DOC</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Sidebar;