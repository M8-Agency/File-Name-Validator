import React, { Component } from "react";

const Form = ({
    onChange,
    onSubmit,
    name,
    title,
    add1,
    add2,
    phoneExt,
    mobile,
    error
}) => {
    const submitCTA =
        error === false ? "Signature copied!" : "Paste signature to clipboard!";
    const CTAstatus = error === false ? "copied" : "";
    return (
        <form onSubmit={onSubmit}>
            <div className="input-holder">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={onChange}
                />
            </div>

            <div className="input-holder">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={onChange}
                />
            </div>

            <div className="input-holder">
                <label htmlFor="add1">Address 1</label>
                <input
                    id="add1"
                    name="add1"
                    type="text"
                    value={add1}
                    onChange={onChange}
                />
            </div>

            <div className="input-holder">
                <label htmlFor="add2">Address 2</label>
                <input
                    id="add2"
                    name="add2"
                    type="text"
                    value={add2}
                    onChange={onChange}
                />
            </div>

            <div className="input-holder">
                <label htmlFor="phoneExt">Phone Extension</label>
                <input
                    id="phoneExt"
                    name="phoneExt"
                    type="text"
                    value={phoneExt}
                    onChange={onChange}
                />
            </div>

            <div className="input-holder">
                <label htmlFor="mobile">Mobile</label>
                <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    value={mobile}
                    onChange={onChange}
                />
            </div>

            <div className="input-holder">
                <input className={CTAstatus} type="submit" value={submitCTA} />
            </div>
        </form>
    );
};

const Visualizer = ({ name, title, add1, add2, phoneExt, mobile }) => {
    const address = add2 !== "" ? `${add1}, ${add2}` : add1;
    const extension = phoneExt !== "" ? `ext. ${phoneExt}` : "";
    const mobilePhone = mobile !== "" ? `  |  m: ${mobile}` : "";
    return (
        <table
            id="m8-email-signature"
            className="SigVisualizer"
            width="500"
            cellSpacing="0"
            cellPadding="0"
            border="0"
        >
            <tbody>
                <tr>
                    <td colSpan="2">
                        <span
                            style={{
                                fontFamily: "Helvetica,sans-serif",
                                color: "#000000",
                                fontSize: "16px"
                            }}
                        >
                            {name}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <span
                            style={{
                                fontFamily: "Helvetica,sans-serif",
                                color: "#959595",
                                fontSize: "12px"
                            }}
                        >
                            {title}
                        </span>
                    </td>
                </tr>
                <tr style={{ lineHeight: "15px" }}>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td rowSpan="4" width="85px">
                        <a href="https://m8agency.com">
                            <img
                                alt="M8"
                                src="https://m8website2018-vxhdb1nikcdy49t.stackpathdns.com/static/images/hosted/logo-email-signature.png"
                                width="65"
                                height="45"
                            />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span
                            style={{
                                fontFamily: "Helvetica,sans-serif",
                                color: "#000000",
                                fontSize: "12px"
                            }}
                        >
                            {address}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span
                            style={{
                                fontFamily: "Helvetica,sans-serif",
                                color: "#000000",
                                fontSize: "12px"
                            }}
                        >
                            o: 786-623-5500 {extension}
                            {mobilePhone}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a
                            style={{
                                fontFamily: "Helvetica,sans-serif",
                                color: "#000000",
                                fontSize: "12px"
                            }}
                            href="https://m8agency.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.M8agency.com
            </a>
                    </td>
                </tr>
                <tr />
                <tr style={{ lineHeight: "25px" }}>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <span
                            style={{
                                fontFamily: "Helvetica,sans-serif",
                                color: "#cccccc",
                                fontSize: "9px"
                            }}
                        >
                            Privileged/Confidential Information may be contained in this
                            message. If you are not the addressee indicated in this message
                            (or responsible for delivery of the message to such person), you
                            may not copy or deliver this message to anyone. In such case, you
                            should destroy this message and kindly notify the sender by reply
                            email. Please advise immediately if you or your employer does not
                            consent to email for messages of this kind. Opinions, conclusions
                            and other information in this message that do not relate to the
                            official business of M8 shall be understood as neither given nor
                            endorsed by it.
            </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

class NameGenerator extends Component {
    constructor() {
        super();

        this.state = {
            name: "Jane Doe",
            title: "Director of Fun",
            add1: "2200 Biscayne Blvd, 2nd Floor",
            add2: "Miami, FL 33137",
            phoneExt: "",
            mobile: "",
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value,
            error: null
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        const signature = document.querySelector("#m8-email-signature");
        const range = document.createRange();
        range.selectNode(signature);
        window.getSelection().addRange(range);

        try {
            document.execCommand("copy");
            this.setState({
                error: false
            });
        } catch (err) {
            this.setState({
                error: err
            });
        }

        window.getSelection().removeAllRanges();
    }
    render() {
        return (
            <div className="NameGenerator">
                <Form
                    name={this.state.name}
                    title={this.state.title}
                    add1={this.state.add1}
                    add2={this.state.add2}
                    phoneExt={this.state.phoneExt}
                    mobile={this.state.mobile}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    error={this.state.error}
                />
                <Visualizer
                    name={this.state.name}
                    title={this.state.title}
                    add1={this.state.add1}
                    add2={this.state.add2}
                    phoneExt={this.state.phoneExt}
                    mobile={this.state.mobile}
                />
            </div>
        );
    }
}

export default NameGenerator;
