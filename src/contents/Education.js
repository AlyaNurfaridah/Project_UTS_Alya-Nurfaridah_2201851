import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="SDN 004/XI Pelayang Raya" where="In Jambi City" from="2011" to="201"/>
            <Widecard title="SMPN 009 Amar Sakti" where="In Jambi City" from="2017" to="2018"/>
            <Widecard title="SIT Fajar Hidayah Kota Wisata" where="In Kota Wisata, Cibubur" from="2018" to="2022"/>
            <Widecard title="University Of Education" where="VIT University" from="August 2022" to="Present"/>
            </div>
            )
        }
    }
    
export default Education
    