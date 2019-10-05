import React from "react";
import { locakscreenBack } from "helper/constant";

const PricingStyle1 = (props) => {
    const loginContainer = {
        backgroundImage: `url(${locakscreenBack})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "fixed",
        overflow: "auto",
        top: 0,
        bottom: 0
    };

    return (
        <div className="container-fluid pricing-page" style={loginContainer}>
            <button
                className="page-home-button"
                onClick={() => props.history.push("/")}
            >
                Home
            </button>
            <div className="Pricing-title text-center">
                Let's Get You Signed Up.
            </div>
            <div className="pricing-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="pricing-card ptb-24">
                                <div className="fs-34">Basic</div>
                                <div className="fs-16 mb-16">
                                    For single usage
                                </div>
                                <div className="pink-highlight mb-20">
                                    <span className="fs-34">
                                        <sup>$</sup> 4.9
                                    </span>{" "}
                                    monthly per user
                                </div>
                                <div className="list fs-14">
                                    <div className="mb-16">1 vCPU</div>
                                    <div className="mb-16">1TB Transfer</div>
                                    <div className="mb-16">10GB Disk space</div>
                                    <div className="mb-16">10 Projects</div>
                                    <div className="mb-16">10 Boards</div>
                                    <div className="mb-16">24/7 Support</div>
                                </div>
                                <div>
                                    <button className="pricing-button">
                                        Get Started
                                    </button>
                                </div>
                                <div className="trial-info mt-7">
                                    7 day free trial to start
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-white-card ptb-24">
                                <div className="fs-34">Standard</div>
                                <div className="fs-16 mb-16">For 10 users</div>
                                <div className="pink-highlight mb-20">
                                    <span className="fs-34">
                                        <sup>$</sup> 12.5
                                    </span>{" "}
                                    monthly per user
                                </div>
                                <div className="list fs-14">
                                    <div className="mb-16">2 vCPU</div>
                                    <div className="mb-16">2TB Transfer</div>
                                    <div className="mb-16">30GB Disk space</div>
                                    <div className="mb-16">30 Projects</div>
                                    <div className="mb-16">40 Boards</div>
                                    <div className="mb-16">24/7 Support</div>
                                </div>
                                <div>
                                    <button className="pricing-button">
                                        Get Started
                                    </button>
                                </div>
                                <div className="trial-info mt-7">
                                    $5 credit for new A/C
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-card ptb-24">
                                <div className="fs-34">Premium</div>
                                <div className="fs-16 mb-16">
                                    For unlimited users
                                </div>
                                <div className="pink-highlight mb-20">
                                    <span className="fs-34">
                                        <sup>$</sup> 29.5
                                    </span>{" "}
                                    monthly per user
                                </div>
                                <div className="list fs-14">
                                    <div className="mb-16">4 vCPU</div>
                                    <div className="mb-16">4TB Transfer</div>
                                    <div className="mb-16">
                                        128GB Disk space
                                    </div>
                                    <div className="mb-16">
                                        Unlimited Projects
                                    </div>
                                    <div className="mb-16">
                                        Unlimited Boards
                                    </div>
                                    <div className="mb-16">24/7 Support</div>
                                </div>
                                <div>
                                    <button className="pricing-button">
                                        Get Started
                                    </button>
                                </div>
                                <div className="trial-info mt-7">
                                    Backup + Cloud storage
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-pricing mt-48">
                <div className="text-center fs-34">FAQ</div>
                <div className="text-center fs-20">
                    It's okay. We all have questions that need answers.
                </div>
                <div className="container mtb-48">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pricing-faq-card">
                                <div className="title">
                                    <i className="fas fa-question mr-10 mb-10" />{" "}
                                    Can I cancel at any time?
                                </div>
                                <div className="description">
                                    Roe subscriptions renew, just like Netflix
                                    or Hulu. But, of course you can cancel at
                                    any point. It would be a pretty shabby
                                    business, if that wasn't an option. :)
                                    Seriously — it's not like the gym. Visit
                                    your settings page, click "Cancel," and
                                    done. Tears will be shed on this end, but
                                    that's not your concern.
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pricing-faq-card">
                                <div className="title">
                                    <i className="fas fa-question mr-10 mb-10" />{" "}
                                    do I gain access to everything?
                                </div>
                                <div className="description">
                                    Roe subscriptions renew, just like Netflix
                                    or Hulu. But, of course you can cancel at
                                    any point. It would be a pretty shabby
                                    business, if that wasn't an option. :)
                                    Seriously — it's not like the gym. Visit
                                    your settings page, click "Cancel," and
                                    done. Tears will be shed on this end, but
                                    that's not your concern.
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pricing-faq-card">
                                <div className="title">
                                    <i className="fas fa-question mr-10 mb-10" />{" "}
                                    Do you offer student discounts?
                                </div>
                                <div className="description">
                                    Roe subscriptions renew, just like Netflix
                                    or Hulu. But, of course you can cancel at
                                    any point. It would be a pretty shabby
                                    business, if that wasn't an option. :)
                                    Seriously — it's not like the gym. Visit
                                    your settings page, click "Cancel," and
                                    done. Tears will be shed on this end, but
                                    that's not your concern.
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pricing-faq-card">
                                <div className="title">
                                    <i className="fas fa-question mr-10 mb-10" />{" "}
                                    was Total Recall a dream or not?
                                </div>
                                <div className="description">
                                    Roe subscriptions renew, just like Netflix
                                    or Hulu. But, of course you can cancel at
                                    any point. It would be a pretty shabby
                                    business, if that wasn't an option. :)
                                    Seriously — it's not like the gym. Visit
                                    your settings page, click "Cancel," and
                                    done. Tears will be shed on this end, but
                                    that's not your concern.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingStyle1;
