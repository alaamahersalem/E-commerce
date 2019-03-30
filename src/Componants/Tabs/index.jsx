import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {tabContent} from '../../Container/config'
import "react-tabs/style/react-tabs.css";
import'./style.scss'

export default () => (
  <Tabs>
    <TabList>
      {
        tabContent.map((item,index)=> <Tab key={index}>{item.title}</Tab>)
      }
    </TabList>
      {
        tabContent.map((item,index)=><TabPanel key={index}> <div>{item.content}</div></TabPanel>)
      }
 
  </Tabs>
);