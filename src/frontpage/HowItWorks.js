import React from "react"
import selectImg from "../assets/images/cover_bg.svg"
import quotationImg from "../assets/images/office.svg"
import doneImg from "../assets/images/done.svg"
import Button from "@material-ui/core/Button"


class HowItWorks extends React.Component{
    render(){
        return(
            <div className="how-it-works-wrapper">
                <div className="how-it-work-sub-header">
                    <h1>How does it work?</h1>
                </div>
            <div className="how-it-works">
                
                <div className="step">
                    <div><img alt="" src={selectImg}/></div>
                    <div>
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
                    <div><img alt="" src={quotationImg}/></div>
                    <div>
                        <div className="step-header">Request Quotation, Accept and Select Payment Option</div>
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
                    <div><img alt="" src={doneImg}/></div>
                    <div>
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
                <div><Button variant="contained">Get started</Button></div>
            </div>
        )
    }
}

export default HowItWorks;