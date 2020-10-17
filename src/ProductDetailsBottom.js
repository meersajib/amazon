import React from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';



function ProductDetailsBottom({description, review}) {
    return (
        <div className='productdetailbottom'>
            <Tabs
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList>
          <Tab tabFor="one">Description</Tab>
          <Tab tabFor="two">Review</Tab>
        </TabList>
        <TabPanel tabId="one">
          <p>{description}</p>
        </TabPanel>
        <TabPanel tabId="two">
          <p>{review}</p>
        </TabPanel>
      </Tabs>
        </div>
    )
}

export default ProductDetailsBottom
