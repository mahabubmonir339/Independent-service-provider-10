import React from 'react';
import './Courses.css'

const Courses = () => {
    return (
        <div class="owl-item cloned">
            <div class="item">
                <div class="card mb-0 overflow-hidden">
                    <div class="card-body">
                        {/* <img src="../../assets/images/media/color/sm/1.jpg" alt="img" class="w-9 h-9 br-7 mb-4"> */}
                        <div class="">
                            <div class="item-card2">
                                <div class="item-card2-desc">
                                    <div class="d-inline-flex">
                                        <div class="star-ratings start-ratings-main clearfix me-3">
                                            <div class="stars stars-example-fontawesome stars-example-fontawesome-sm">
                                                <div class="br-wrapper br-theme-fontawesome-stars">
                                                    <select class="example-fontawesome" name="rating" autocomplete="off" style="display: none;">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4" selected="">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                    <div class="br-widget">
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        <span class="">758 reviews</span>
                                    </div>
                                    <div class="item-card2-text mb-1">
                                        <a href="page-details.html" class="text-dark"><h4 class="mb-2">HTML</h4></a>
                                    </div>
                                    <a href="javascript:void(0)" class="">HTML</a>, <a href="javascript:void(0)" class="">Training</a>, <a href="javascript:void(0)" class="">Coding class</a>, <a href="javascript:void(0)" class="">Examinations</a>
                                    <h4 class="mt-3 fs-25">$35 <del class="fs-16 text-muted">$65</del></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Courses;