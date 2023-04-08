import React from 'react'
//import getEvents from '../../../../controller/logic/calendarController'

export default function Calendar(){
    //const res = getEvents()
    return(            
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>
          Calendar and Schedules - Language Learning Center - Loyola University Maryland
        </title><link rel="stylesheet" type="text/css" href="/~/media/utility/css/department/dept1.2.min.css?v=20221128-2" />
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6944232/7455412/css/fonts.css" />
        <style dangerouslySetInnerHTML={{__html: "\n/* Temporary solution to fix form scrolling until next update is live */\n.scfForm { height: auto !important; }\n" }} />
        {/* Google Tag Manager */}
        {/* End Google Tag Manager */}
        <meta name="keywords" /><meta name="description" content="View the schedule of events at Loyola University Maryland's Language Learning Center." />
        <form method="post" action="/department/language-learning-center/calendar" id="form1">
          <div className="aspNetHidden">
            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" defaultValue="/wEPDwULLTE1ODg5Mjg2NzcPFgIeE1ZhbGlkYXRlUmVxdWVzdE1vZGUCARYIZg8WAh4EVGV4dAUjPCFET0NUWVBFIGh0bWw+DQo8aHRtbCBsYW5nPSJlbiI+DQpkAgIPZBYEAgEPFgIfAQWaATxtZXRhIGNoYXJzZXQ9IlVURi04Ij4NCjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSI+IA0KPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIiAvPg0KDQpkAgUPFgIfAQWLBjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgdHlwZT0idGV4dC9jc3MiIGhyZWY9Ii9+L21lZGlhL3V0aWxpdHkvY3NzL2RlcGFydG1lbnQvZGVwdDEuMi5taW4uY3NzP3Y9MjAyMjExMjgtMiI+DQo8bGluayByZWw9InN0eWxlc2hlZXQiIHR5cGU9InRleHQvY3NzIiBocmVmPSJodHRwczovL2Nsb3VkLnR5cG9ncmFwaHkuY29tLzY5NDQyMzIvNzQ1NTQxMi9jc3MvZm9udHMuY3NzIiAvPg0KDQo8c3R5bGU+DQovKiBUZW1wb3Jhcnkgc29sdXRpb24gdG8gZml4IGZvcm0gc2Nyb2xsaW5nIHVudGlsIG5leHQgdXBkYXRlIGlzIGxpdmUgKi8NCi5zY2ZGb3JtIHsgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH0NCjwvc3R5bGU+DQoNCjwhLS0gR29vZ2xlIFRhZyBNYW5hZ2VyIC0tPg0KPHNjcmlwdD4oZnVuY3Rpb24odyxkLHMsbCxpKXt3W2xdPXdbbF18fFtdO3dbbF0ucHVzaCh7J2d0bS5zdGFydCc6DQpuZXcgRGF0ZSgpLmdldFRpbWUoKSxldmVudDonZ3RtLmpzJ30pO3ZhciBmPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sDQpqPWQuY3JlYXRlRWxlbWVudChzKSxkbD1sIT0nZGF0YUxheWVyJz8nJmw9JytsOicnO2ouYXN5bmM9dHJ1ZTtqLnNyYz0NCidodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JytpK2RsO2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaixmKTsNCn0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnZGF0YUxheWVyJywnR1RNLU1TQ0ZGSCcpOzwvc2NyaXB0Pg0KPCEtLSBFbmQgR29vZ2xlIFRhZyBNYW5hZ2VyIC0tPg0KZAIEDxYCHwEFBjxib2R5PmQCCBBkZBYCAgEPZBYCZg9kFgJmD2QWDmYPFgIfAQUYTGFuZ3VhZ2UgTGVhcm5pbmcgQ2VudGVyZAIBDw8WAh4LTmF2aWdhdGVVcmwFJC9kZXBhcnRtZW50L2xhbmd1YWdlLWxlYXJuaW5nLWNlbnRlcmRkAgIPDxYCHwIFJC9kZXBhcnRtZW50L2xhbmd1YWdlLWxlYXJuaW5nLWNlbnRlcmRkAgMPFgIeC18hSXRlbUNvdW50AgUWCmYPZBYEAgEPFgIfAQVMPGEgaHJlZj0iL2RlcGFydG1lbnQvbGFuZ3VhZ2UtbGVhcm5pbmctY2VudGVyL2ZhY3VsdHkiID5GYWN1bHR5IFNlcnZpY2VzPC9hPmQCAw8WAh8DAv////8PZAIBD2QWBAIBDxYCHwEFTTxhIGhyZWY9Ii9kZXBhcnRtZW50L2xhbmd1YWdlLWxlYXJuaW5nLWNlbnRlci9zdHVkZW50cyIgPlN0dWRlbnQgU2VydmljZXM8L2E+ZAIDDxYCHwMC/////w9kAgIPZBYEAgEPFgIfAQVOPGEgaHJlZj0iL2RlcGFydG1lbnQvbGFuZ3VhZ2UtbGVhcm5pbmctY2VudGVyL2NhbGVuZGFyIiA+Q2FsZW5kYXIgJiBFdmVudHM8L2E+ZAIDDxYCHwMC/////w9kAgMPZBYEAgEPFgIfAQVRPGEgaHJlZj0iL2RlcGFydG1lbnQvbGFuZ3VhZ2UtbGVhcm5pbmctY2VudGVyL2NhdGFsb2ciID5MTEMgTWF0ZXJpYWxzIENhdGFsb2c8L2E+ZAIDDxYCHwMC/////w9kAgQPZBYEAgEPFgIfAQVHPGEgaHJlZj0iL2RlcGFydG1lbnQvbGFuZ3VhZ2UtbGVhcm5pbmctY2VudGVyL3Jlc291cmNlcyIgPlJlc291cmNlczwvYT5kAgMPFgIfAwL/////D2QCBQ9kFgJmDxYCHwMCAhYEZg9kFgQCAw8WAh4HVmlzaWJsZWhkAgUPDxYEHwEFBEhvbWUfAgUkL2RlcGFydG1lbnQvbGFuZ3VhZ2UtbGVhcm5pbmctY2VudGVyZGQCAQ9kFgYCAQ8WAh8BBRk8bGkgY2xhc3M9ImN1cnJlbnRfcGFnZSI+ZAIDDxYCHwEFE0NhbGVuZGFyIGFuZCBFdmVudHNkAgUPDxYGHwEFE0NhbGVuZGFyIGFuZCBFdmVudHMfAgUtL2RlcGFydG1lbnQvbGFuZ3VhZ2UtbGVhcm5pbmctY2VudGVyL2NhbGVuZGFyHwRoZGQCBw8WAh8BBSw8aDEgaWQ9InBhZ2VfdGl0bGUiPkNhbGVuZGFyIGFuZCBFdmVudHM8L2gxPmQCCg8WAh8EaGRkTB5SbqPT+0y5meWhUQk0P5TZ+xs=" />
          </div>
          <div className="aspNetHidden">
            <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" defaultValue="52DEDB11" />
          </div>
          <header>
            <div id="skip_to_content"><a href="#content">Skip to main content</a></div>
            <section id="logo_name" className="body">
              <a id="loyola_u" href="https://www.loyola.edu/">Loyola University Maryland</a>
              <h1 id="site_name">Language Learning Center</h1>
              <ul id="utility_links">
                <li><a href="https://www.loyola.edu">Loyola.edu</a></li>
              </ul>
            </section>
            <nav id="main">  
              <div id="mobile_menu"><a id="body_0_lnkMobileHomeBtn" href="/department/language-learning-center">Home</a> <a id="show_menu" href="#"><img src="/images/new-dept-template/mobile_menu.png" alt="Menu" /></a></div> {/* end mobile menu */}
              <div className="menu body">
                <ul className="sf-menu clearfix">
                  <li id="home"><a id="body_0_lnkHomeBtn" href="/department/language-learning-center">Home<img src="/images/new-dept-template/home_btn.png" alt="Home Icon" /></a></li>
                  <li><a href="/department/language-learning-center/faculty">Faculty Services</a>
                  </li>
                  <li><a href="/department/language-learning-center/students">Student Services</a>
                  </li>
                  <li><a href="/department/language-learning-center/calendar">Calendar &amp; Events</a>
                  </li>
                  <li><a href="/department/language-learning-center/catalog">LLC Materials Catalog</a>
                  </li>
                  <li><a href="/department/language-learning-center/resources">Resources</a>
                  </li>
                </ul>
              </div> {/* end menu */}
            </nav>
          </header>
          <div className="clear" />
          <div id="breadcrumb_social" className="body">
            <ul id="breadcrumb">
              <li>
                <a id="body_0_breadcrumb_rptBreadcrumbs_lnkBreadcrumbLink_0" href="/department/language-learning-center">Home</a></li>
              <li className="current_page">
                Calendar and Events
              </li>
            </ul>
            <ul id="social"><li><a href="https://twitter.com/LoCo_LLC" target="_blank"><img src="/-/media/utility/images/common/social_media/sm_twitter_svg.ashx" alt="Twitter" /></a></li></ul>
          </div> {/* end breadcrumb_social */}
          <div id="container" className="body">
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
            <section id="more_info">
              <aside className="feature green"><article><h2>
                    Hours of Operation
                  </h2><p>Monday - Thursday: 9am - 8pm</p>
                  <p>Friday: 9am - 5pm</p>
                  <p>Saturday: Closed</p>
                  <p>Sunday: 2pm - 6pm</p></article></aside><aside className="feature blue"><article><h2>
                    Contact Us
                  </h2><p>Maryland Hall 443<br />
                    410-617-2674<br />
                    <a href="mailto:loyolallc@loyola.edu">loyolallc@loyola.edu</a></p>
                  <p>&nbsp;</p>
                  <p><strong>Kelly Keenan<br />
                    </strong>Director, Language Learning Center<br />
                    <a href="mailto:kekeenan@loyola.edu">kekeenan@loyola.edu</a></p>
                  <p>&nbsp;</p>
                  <p><strong>Student Supervisors (2022-2023)</strong>&nbsp;<br />
                    Bill Bruno ('23)<br />
                    Grace Potter ('23)</p></article></aside><div className="genPortlet">
                <p><a href="/academics/modern-languages" className="btn jade_green">Modern Languages Website</a></p>
              </div><div className="genPortlet">
                <a className="twitter-timeline" data-width={390} data-height={800} href="https://twitter.com/LoCo_LLC">Tweets by LoCo_LLC</a>
              </div>
            </section> {/* end more_info */}
          </div> {/* end container */}
          <footer>
            <div className="body">
              <a id="loyola_logo" href="https://www.loyola.edu/"><img src="/images/new-dept-template/loyola_logo.gif" alt="Loyola logo" /></a>
              <address>4501 N. Charles Street, Baltimore, MD 21210<br />410-617-2000 | Weather Line: 410-617-2223</address>
            </div>
            <div className="footer_bottom">
              <div className="body">Copyright © 2023 Loyola University Maryland. All rights reserved. <a href="/about/privacy-policy">Privacy Policy</a><a href="/department/consumer-information">Consumer Information</a><a href="/about/accessibility">Accessibility</a></div>
            </div>
          </footer>
        </form>
      </div>
    );
  }
