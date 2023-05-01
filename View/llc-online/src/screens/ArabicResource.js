import React from "react"
import LanguageStyle from "../style/LanguageStyle.css"
import { SocialIcon } from 'react-social-icons';

export default function ArabicResource() {
      return (
        <div style = {{LanguageStyle}}>
            <div id="container" className="body">
              <section id="content">
                <h1 style= {{textAlign: 'center'}} id="page_title">Arabic Resources</h1>
                <div id="text">
                  <div className="genContent" id="ctl1" style= {{textAlign: 'center'}}>
                    <h2>برنامج اللغة العربية<br />
                    <p>&nbsp;</p>
                      Arabic Language and&nbsp;Culture</h2>
                    <h2 style={{textAlign: 'center'}}>Learning Arabic at Loyola</h2>
                    <p style={{textAlign: 'center'}}>Loyola University Maryland Arabic courses: (<a href="https://catalogue.loyola.edu/search_advanced.php?cur_cat_oid=16&search_database=Search&search_db=Search&cpage=1&ecpage=1&ppage=1&spage=1&tpage=1&location=3&filter%5Bkeyword%5D=Arabic">university course listings website</a>).</p>
                    <h2 style={{textAlign: 'center'}}>Arabic at Loyola in the News and Social Media</h2>
                      <li style={{textAlign: 'center'}}>Loyola Magazine: "<a href="https://www.loyola.edu/explore/magazine/stories/2019/learning-language-mastering-skill">Learning a Language Mastering a Skill</a>"</li>
                      <li style={{textAlign: 'center'}}>Loyola Arabic Program abroad: <a href="https://www.youtube.com/watch?v=0_Tu2AOKM7M">"Hello=Ahlan by Spiro Vas, '21"</a></li>
                      <li style={{textAlign: 'center'}}><a href="https://www.loyola.edu/news/2019/191211-clinton-scholarship-spring">Scholarship Awards for Arabic students</a></li>
                      <li style={{textAlign: 'center'}}>The Greyhound: <a href="https://thegreyhound.org/9616/news/loyola-arabic-club-hosts-arabyola-got-talent/">"Arabyola Got Talent"</a></li>
                      <li style={{textAlign: 'center'}}>Loyola Arabic e-learning: <a href="https://arabyola.myportfolio.com/">"Arabyola Portal"</a></li>
                      <li style={{textAlign: 'center'}}>Students skits in Arabic: <a href="https://www.youtube.com/watch?v=m0bqe7TUHCU&feature=emb_logo">"Featuring our Loyola Campus"</a></li>
                    <h2 style={{textAlign: 'center'}}>Arabic Program Events</h2>
                    <h3 style={{textAlign: 'center'}}>Arabic Club (Arabyola) Events </h3>
                    <p>Fall events are forthcoming.</p>
                    <p>&nbsp;</p>
                    <h1 style={{textAlign: 'center'}}>External Resources</h1>
                    <h2 style={{textAlign: 'center'}}>Media in Arabic</h2>
                      <li><a href="http://www.bbc.com/arabic" target="_blank">The BBC in Arabic </a>Arabic</li>
                      <li><a href="http://www.aljazeera.net/portal" target="_blank">Al Jazeera </a>Arabic</li>
                      <li><a href="https://arabic.cnn.com/">CNN </a>Arabic</li>
                      <li><a href="http://www.arabicmusictranslation.com/" target="_blank"><em>Arabic Music Translation</em></a>&nbsp;(in Arabic with English translations)
                        &nbsp;&nbsp;&nbsp;</li>
                    <h2>Learning Arabic</h2>
                    <h3>Learn Arabic Online</h3>
                      <li><em><a href="https://learning.aljazeera.net/en">Al Jazeera </a></em><a href="https://learning.aljazeera.net/en">Arabic Courses&nbsp;</a></li>
                      <li><a href="https://www.yamli.com/">Yamli.com</a>&nbsp;</li>
                    <h3>Dictionaries</h3>
                      <li><a href="https://www.lexilogos.com/english/arabic_dictionary.htm">LEXILOGOS</a> (Arabic)</li>
                    <h3>Keyboards</h3>
                      <li><a href="https://arabikey.com/">ArabiKey</a></li>
                    <h3>Grammar</h3>
                      <li><a href="http://acon.baykal.be/">Acon Arabic Conjugator&nbsp;</a></li>
                      <li><a href="http://arabic.desert-sky.net/index.html">Desert Sky&nbsp;</a></li>
                    <h3>For more resources and news follow us on:</h3>
                    {/*<p><a href="https://www.instagram.com/arabyolamd/?hl=en" target="_blank" title="View the Arabyola Program on Instagram"><img alt="Instagram logo" src="/-/media/utility/images/common/social_media/sm_instagram_png" /></a>&nbsp; &nbsp;&nbsp;<a href="https://www.twitter.com/inassan" target="_blank" title="View the Arabyola Program on Twitter"><img alt="Twitter logo" src="/-/media/utility/images/common/social_media/sm_twitter_png" /></a>&nbsp; &nbsp;&nbsp;<a href="https://www.facebook.com/pages/category/Social-Club/Arabyola-1190273361149500/" target="_blank" title="View the Arabyola Program on Facebook"><img alt="Facebook logo" src="/-/media/utility/images/common/social_media/sm_facebook_png" /></a>&nbsp; &nbsp;&nbsp;<a href="https://www.youtube.com/watch?v=S9M7oZoRJ4s" target="_blank" title="View the Arabyola Program on YouTube"><img alt="YouTube logo" src="/-/media/utility/images/common/social_media/sm_youtube_png" /></a></p>*/}
                    {/*genContent*/}
                    <div className="social-links mt-3">
                    <SocialIcon url="https://www.twitter.com/inassan" />
                    <SocialIcon url="https://www.instagram.com/arabyolamd/?hl=en" />
                    <SocialIcon url="https://www.facebook.com/pages/category/Social-Club/Arabyola-1190273361149500/" />
                    <SocialIcon url="https://www.youtube.com/watch?v=S9M7oZoRJ4s" />
                  </div>
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
