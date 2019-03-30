import React from 'react';
import {Assets} from '../../Container/config';
import AssetItem from './helper/AssetItem';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import {ScreenDetails} from '../../Container/config'
import 'react-accessible-accordion/dist/fancy-example.css';
 
import './style.scss';
 
export default () => (
    <Accordion accordion={false}>
        <AccordionItem>
            <AccordionItemTitle>
                <span className="u-position-relative">
                Screen Details
                <span className="accordion__arrow" role="presentation" />
               </span>
            </AccordionItemTitle>
            <AccordionItemBody>
                {
                    ScreenDetails.map((item,index)=>{
                        return<div key={index}><span className="accordion-lbl">{item.name}</span> <span className="accordion-value">{item.value}</span></div>
                    })
                }
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
        <AccordionItemTitle>
            <span className="u-position-relative">
            Assets
                <span className="accordion__arrow" role="presentation" />
               </span>
        </AccordionItemTitle>
            <AccordionItemBody>
                <div className="row mx-0">{  Assets.map((item,index)=>{
                    return <AssetItem key={index} item={item}/>
                })}</div>          
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
);
