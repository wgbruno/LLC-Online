import React, { Component } from 'react'; 

class Home extends Component {

    render() {

        return (
            <body>
                <header id="header">

                    <div class="logo">
                        <a href="https://bootstrapmade.com/" rel="home" title="Free Bootstrap Themes and Website Templates" title="Back to BootstrapMade Homepage"><img alt="BootstrapMade" src="https://bootstrapmade.com/assets/img/logo.png"></a>
                    </div>
                    <div class="preview-devices">
                        <ul>
                            <li class="preview-test preview-devices-active" id="preview-test-desktop" title="Desktop preview of the  Butterfly template"><a href=""><svg class="icon icon-preview"  fill="currentColor"><use xlink:href="https://bootstrapmade.com/assets/img/icons.svg#preview"/></svg></a></li>
                            <li class="preview-test" id="preview-test-tablet" title="Tablet preview of the Butterfly template"><a href=""><svg class="icon icon-tablet"  fill="currentColor"><use xlink:href="https://bootstrapmade.com/assets/img/icons.svg#tablet"/></svg></a></li>
                            <li class="preview-test" id="preview-test-mobile" title="Mobile preview of the Butterfly template"><a href=""><svg class="icon icon-smartphone"  fill="currentColor"><use xlink:href="https://bootstrapmade.com/assets/img/icons.svg#smartphone"/></svg></a></li>
                        </ul>
                    </div>

                    <div class="current-template">
                                <a href="https://bootstrapmade.com/demo/Techie/" title="Previous Template: Techie" target="_top"><svg class="icon icon-chevron-left"  fill="currentColor"><use xlink:href="https://bootstrapmade.com/assets/img/icons.svg#chevron-left"/></svg></a>
                            <a class="template-home" href="https://bootstrapmade.com/butterfly-free-bootstrap-theme/" title="Butterfly Template Home Page">Butterfly</a>
                            <a href="https://bootstrapmade.com/demo/Bikin/" title="Next Template: Bikin" target="_top"><svg class="icon icon-chevron-right"  fill="currentColor"><use xlink:href="https://bootstrapmade.com/assets/img/icons.svg#chevron-right"/></svg></a>
                        </div>
    
                    <div class="navigate">
                        <a href="https://bootstrapmade.com/demo/templates/Butterfly/" target="_top" title="Hide the demo bar"><svg class="icon icon-external-link"  fill="currentColor"><use xlink:href="https://bootstrapmade.com/assets/img/icons.svg#external-link"/></svg></a>
                        <a class="download" href="https://bootstrapmade.com/butterfly-free-bootstrap-theme/#download" title="Download the Butterfly Template"><svg class="icon icon-download"  fill="currentColor"><use xlink:href="https://bootstrapmade.com/assets/img/icons.svg#download"/></svg> <span>Free Download</span></a>
                    </div>

                </header>


                <div id="preview">
                    <iframe id="preview-frame" class="preview-desktop" src="https://bootstrapmade.com/demo/templates/Butterfly/" frameborder="0"></iframe>
                </div>

                    <script src="https://bootstrapmade.com/assets/js/demo-4.3.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-P7JSYB1CSP"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-P7JSYB1CSP');</script>
            </body>
        )
    }
}

export default Home;