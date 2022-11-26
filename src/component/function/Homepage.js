import React, {useState} from "react";
import styled from 'styled-components'

const PurposeP = styled.p`
    font-size:40px;
    margin-left:90px;
    margin-right:90px;
`
const UncomfortableP = styled.p`
    font-size:20px;
    margin-left:90px;
    margin-right:200px;
`

const Navbar = () => {


    return (
        <>
            <div style={{
                alignItems: "center",
                justifyContent: "flex-start",
                fontWeight: "bold",
                fontSize: "200px",
                marginTop: "100px",
                marginLeft: "90px",

            }}>
                <span style={{
                    // border: '1px solid black',
                    border: 'none',
                    padding:'0px 60px 20px 60px',
                    borderRadius: '3rem',
                    backgroundColor:'#CBDDF5'
                }}>

                <span style={{color: "black"}}>Z</span>
                <span style={{color: "#3ea6ff"}}>A</span>
                <span style={{color: "black"}}>M</span>
                <span style={{color: "#3ea6ff"}}>A</span>
                <span style={{color: "black"}}>R</span>
                </span>

            </div>
            <PurposeP>It is a platform that solves the difficulties experienced during band activities and supports
                easier and more efficient ensemble performances.</PurposeP>
            <UncomfortableP>I've been in a band for about 10 years, but there are two inconveniences.
                The first is that it is difficult to modify sheet music. In band ensembles, it is often necessary to
                raise or lower the key of a song. Moving these keys is a chore for musicians playing the instrument.
                Because the whole sheet music needs to be revised. In particular, it is a nuisance for those who know
                well about harmonics, but if you do not know and only know how to play an instrument, it is difficult to
                get your hands on it and you have to correct the score as others tell you.
                Usually, when looking at sheet music, you can print it out on paper, but most of the time you read it
                using a tablet PC, including an iPad.

                I use KakaoTalk for announcements and a tablet program for sheet music. Inconvenience occurs in the use
                of the other two programs, and sometimes corrections are omitted and the ensemble may not work properly.

                The inefficiency that arises from modifying sheet music and using other platforms in parallel makes band
                activities difficult. Our team believes there is a clear market need to address these
                issues.</UncomfortableP>

        </>

    );
};

export default Navbar;
