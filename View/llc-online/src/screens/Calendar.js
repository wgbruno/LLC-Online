import React from 'react'
//import getEvents from '../../../../controller/logic/calendarController'

export default function Calendar(){
    //const res = getEvents()
    return(            
      <div>
          <div id="container" className="body" style={{display: "flex", alignItems: "center"}}>
            <section id="content">
              <h1 id="page_title">Calendar and Events</h1>
              <div id="text">
                <div className="genContent" id="ctl1">
                  <p><a href="https://calendar.google.com/calendar/embed?src=t9bn75qe8cq5kovvmagfk4gjmc%40group.calendar.google.com&ctz=America/New_York" className="btn" target="_blank">LLC Schedule</a> <a href="https://calendar.google.com/calendar/embed?src=klbqroltufja6ml871e71p1an0%40group.calendar.google.com&ctz=America/New_York" className="btn" target="_blank">Cultural Events Calendar</a></p>
                  <p>
                  </p>
                  <p><iframe width={600} height={600} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=t9bn75qe8cq5kovvmagfk4gjmc%40group.calendar.google.com&color=%23865A5A&ctz=America%2FNew_York" frameBorder={0} scrolling="no" style={{borderWidth: '0px'}} title="Language Learning Center Calendar" /></p>
                  <p>&nbsp;</p>
                  <p><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=klbqroltufja6ml871e71p1an0%40group.calendar.google.com&color=%238C500B&ctz=America%2FNew_York" width={600} height={600} frameBorder={0} scrolling="no" style={{borderWidth: '0px'}} title="Loyola Cultural Events Calendar" /></p>
                  {/*genContent*/}
                </div>
                {/*genContent*/}
              </div> {/* end text */}
            </section> {/* end content */}
          </div> {/* end container */}
          <footer>
            <div className="footer_bottom">
              <div className="body">Copyright © 2023 Loyola University Maryland. All rights reserved. <a href="/about/privacy-policy">Privacy Policy</a><a href="/department/consumer-information">Consumer Information</a><a href="/about/accessibility">Accessibility</a></div>
            </div>
          </footer>
      </div>
    );
  }
