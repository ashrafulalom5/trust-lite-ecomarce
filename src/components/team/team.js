import React from 'react';
import Aminul from '../../asset/image/team/aminul.jpg';
import Babul from '../../asset/image/team/babul.jpg';
import Farabi from '../../asset/image/team/farabi.jpg';
import Porag from '../../asset/image/team/porag.jpg';
import Shafi from '../../asset/image/team/shafi.jpg';
const team = props => {
  return (
                  <div className="container">
                    <div className="row mt-5">
                       <div className="heading-title text-center">
                            <h3 className="text-uppercase">Our professionals </h3>
                            <p className="p-top-30 half-txt">Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend. </p>
                        </div>
                  </div>



                    <div className="row">
                          <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={Babul} alt="team member" className="img-responsive"/>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">

                                    <h4>Co-founder & CEO</h4>
                                        <p>BABUL Ahmed  <br></br>
                                                Managing Director of 
                                                AB Solution Limited </p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Babul Ahmed</h5>
                                <span>Co-founder & CEO</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={Farabi} alt="team member" className="img-responsive"/>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                    <h4>Co-founder & COO</h4>
                                        <p>S.A.A.  FARABI <br></br>
                                        Founder of Bali international Agro Ltd.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                            <h5>S.A.A.  FARABI </h5>
                            <span>Co-founder & COO</span>
                                
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={Porag} alt="team member" className="img-responsive"/>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>CBDO</h4>
                                        <p>Ahmed Shahrear Porag <br></br>
                                            Founder of Airsky UK Limited.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Ahmed Shahrear Porag</h5>
                                <span>CBDO</span>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={Shafi} alt="team member" className="img-responsive"/>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>CHR</h4>
                                        <p>S.A.A  SHAFI<br></br>
                                        District coordinator 
                                        Chapainawabganj at
                                        ESDP under of BIDA</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>S.A.A  SHAFI</h5>
                                <span>District coordinator </span>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src={Aminul} alt="team member" className="img-responsive"/>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>Chief Mentor</h4>
                                        <p>Dr. AMINUL ISLAM<br></br>Resident Medical Officer at
                                            Dhaka Shishu Hospital </p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Dr. AMINUL ISLAM</h5>
                                <span>Chief Mentor</span>
                            </div>
                        </div>

                    </div>
                  </div>

  );
};


export default team;