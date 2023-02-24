import React from 'react'
import $ from "jquery";


const Footer = () => {

    $(function () {
        $(document).on("scroll", function() {
            if($(this).scrollTop()>=50){
                $("footer").removeClass("horizantal")
                $("footer").addClass("vertical")
            }else{
                $("footer").removeClass("vertical")
                $("footer").addClass("horizantal")
            }
        });
    });


    return (
        <>
            <footer className="footer horizantal">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/asimboga/">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/asimboga">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
                <div className="copyright">&copy; Copyright 2022 : Asım BOĞA</div>
            </footer>
        </>
    )
}

export default Footer