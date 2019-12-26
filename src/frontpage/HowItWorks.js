import React from "react"
import selectImg from "../assets/images/cover_bg.svg"
import quotationImg from "../assets/images/office.svg"
import doneImg from "../assets/images/done.svg"
import Button from "@material-ui/core/Button"


class HowItWorks extends React.Component{
    render(){
        return(
            <div className="how-it-works-wrapper">
                <div className="how-it-works-sub-header">
                    <h1>How does it work?</h1>
                </div>
            <div className="how-it-works">                
                <div className="step">
                    <div className="step-image"><img alt="" src={selectImg}/></div>
                    <div className="step-text-wrapper">
                        <div className="step-header">Select motor insurance cover</div>
                        <div className="step-text">
                        Choose from a wide variety of email services.
                        We support both transactional email services (Mailgun, Mailjet, Mandrill, 
                        SendinBlue, SendGrid, Amazon SES and Postmark) and personal email services 
                        (AOL, Gmail, FastMail, iCloud, Mail.ru, Outlook, Yahoo, Yandex and Zoho).
                        </div>
                    </div>
                </div>
                <div className="step">
                    <div className="step-image"><img alt="" src={quotationImg}/></div>
                    <div className="step-text-wrapper">
                        <div className="step-header">Request Quotation.</div>
                        <div className="step-text">
                        Choose from a wide variety of email services.
                        We support both transactional email services 
                        (Mailgun, Mailjet, Mandrill, SendinBlue, SendGrid, 
                        Amazon SES and Postmark) and personal email services 
                        (AOL, Gmail, FastMail, iCloud, Mail.ru, Outlook, Yahoo, Yandex and Zoho).
                        </div>
                    </div>
                </div>
                <div className="step">
                    <div className="step-image"><img alt="" src={quotationImg}/></div>
                    <div className="step-text-wrapper">
                        <div className="step-header">Select Payment Option</div>
                        <div className="step-text">
                        Choose from a wide variety of email services.
                        We support both transactional email services 
                        (Mailgun, Mailjet, Mandrill, SendinBlue, SendGrid, 
                        Amazon SES and Postmark) and personal email services 
                        (AOL, Gmail, FastMail, iCloud, Mail.ru, Outlook, Yahoo, Yandex and Zoho).
                        </div>
                    </div>
                </div>
                <div className="step">
                    <div className="step-image"><img alt="" src={doneImg}/></div>
                    <div className="step-text-wrapper">
                        <div className="step-header"> You are Done! Download Cover</div>
                        <div className="step-text">
                        Choose from a wide variety of email services.
                        We support both transactional email services 
                        (Mailgun, Mailjet, Mandrill, SendinBlue, SendGrid, Amazon SES and Postmark) 
                        and personal email services (AOL, Gmail, FastMail, iCloud, Mail.ru, Outlook, 
                        Yahoo, Yandex and Zoho).
                        </div>
                    </div>
                </div>
                </div>
                <div className="get-started-button"><Button variant="contained">Get started</Button></div>
            </div>
        )
    }
}

export default HowItWorks;