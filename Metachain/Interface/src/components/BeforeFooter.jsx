import { Link } from "react-router-dom"

export default () => {
    return (
        <div id="beforeFooter">
            <div className="beforeFooterContainer maxw pc">
                <section className="py-50 bg-dark-body aos-init aos-animate" data-aos="fade-up">
                    <div className="container mx-auto">
                        <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
                            <div className="">
                                <h1 className="mb-25 text-white text-4xl font-medium">Stay in the know on <br /><span className="text-success"> crypto</span></h1>
                                <p className="text-white-60 fs-18 mb-20">With a 24/7 support team, access to Poloniex Learn, and our global community, we have everything you need to become a crypto expert. </p>
                            </div>
                            <div className="">
                                <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-3">
                                    <div className="flex gap-3 flex-col">
                                        <div className="ms-0 ml-12">
                                            <div className="box bg-[#eff7ff] rounded-sm">
                                                <div className="box-body p-6">
                                                    <h4 className="box-title fw-600 text-xl font-medium">Get 24/7 Support</h4>
                                                    <p className="my-4 text-[#6993ff] text-lg">You’ve got questions, we have answers. Reach out to our support team with any issues and we’ll help you resolve them as quickly as possible.</p>
                                                    <Link to={"/support"} className="btn text-white px-6 py-2 bg-[#6993ff] rounded-md">Contact Support</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box bg-[#e0fdfb] rounded-sm">
                                            <div className="box-body p-6">
                                                <h4 className="box-title fw-600 text-xl font-medium">Be Part of our Global Community</h4>
                                                <p className="my-4 text-[#1bc5bd] text-lg">Let’s stay in touch. Join our communities to keep up with the Poloniex team and our traders from across the world. From Twitter to Trollbox, you’ll find us talking all things crypto.</p>
                                                <div className="social-icons">
                                                    <ul className="list-unstyled flex gap-items-1 justify-between">
                                                        <li><a href="#" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
                                                        <li><a href="#" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                        <li><a href="#" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-linkedin"><i className="fa-brands fa-linkedin"></i></a></li>
                                                        <li><a href="#" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-youtube"><i className="fa-brands fa-youtube"></i></a></li>
                                                        <li><a href="#" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-instagram"><i className="fa-brands fa-instagram"></i></a></li>
                                                    </ul>
                                                </div> <i class=""></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex flex-col gap-3">
                                        <div className="mt-12">
                                            <div className="box bg-[#fff8ea] p-6 rounded-sm">
                                                <div className="box-body p-30">
                                                    <h4 className="box-title fw-600 text-xl font-medium">Don't Miss Poloniex News</h4>
                                                    <p className="my-4 text-lg text-[#ffa800]">We’re always adding new features, listing new assets, and starting new campaigns. Sign up to stay updated with all things Crypto Admin.</p>
                                                    <div className="input-group flex gap-2">
                                                        <input type="text" className="form-control w-[120px] " placeholder="Email address" />
                                                        <button type="button " className="btn px-3 py-1 rounded-md bg-[#ffa800] text-[#fff]">Get Notified</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="me-0 me-lg-50">
                                            <div className="box bg-[#f7f3ff] rounded-sm p-6">
                                                <div className="box-body p-30">
                                                    <h4 className="box-title fw-600 text-xl font-medium">Catch up with Crypto Learn</h4>
                                                    <p className="my-4 text-lg text-[#8950fc] ">You’ve got questions, we have answers. Reach out to our support team with any issues and we’ll help you resolve them as quickly as possible.</p>
                                                    <Link to="/learn" className="btn btn-info bg-[#8950fc] px-6 py-2 rounded-md text-white">Learn More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}