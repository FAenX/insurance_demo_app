import React from "react"
import img from "../assets/images/cover_bg.svg"


class HowItWorks extends React.Component{
    render(){
        return(
            <div className="how-it-works">
                <div className="sub-header"><h1>How does it work?</h1></div>
                <div className="step">
                    <div><img alt="" src={img}/></div>
                    <div>
                        <div className="step-header">Select motor insurance cover</div>
                        <div>
                        Choose from a wide variety of email services.
We support both transactional email services (Mailgun, Mailjet, Mandrill, SendinBlue, SendGrid, Amazon SES and Postmark) and personal email services (AOL, Gmail, FastMail, iCloud, Mail.ru, Outlook, Yahoo, Yandex and Zoho).
                        </div>
                    </div>
                </div>
                <div className="step"></div>
                <div className="step"></div>
            </div>
        )
    }
}

export default HowItWorks;