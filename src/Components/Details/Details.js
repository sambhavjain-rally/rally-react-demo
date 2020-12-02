import React, { useState } from "react"
import './Custom.css';
import '../../Assets/css/bootstrap.min.css';
import { getDetails } from "../Services/service";

export default function Details() {
    const [doctorDetails, setDoctorDetails] = useState([]);

    function getDoctorDetails() {
        getDetails().then(data => {
            setDoctorDetails(data);
        }).catch((error) => {
            setDoctorDetails([])
        });
    }

    return (
        <span>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-white">
                <div class="container ">
                    <a class="navbar-brand title" href="#">
                        Rally Health India
                </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto">
                        </ul>
                        <form class="form-inline mt-2 mt-md-0">
                            <li class="dropdown profileCTA">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                    aria-expanded="false">Profile <span class="caret"></span></a>
                                <ul class="dropdown-menu" aria-labelledby="about-us">
                                    <li><a href="#">Settings</a></li>
                                    <li><a href="../login.html">Logout</a></li>
                                </ul>
                            </li>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container topHeader">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Who are you looking for?</h1>
                    </div>
                </div>
            </div>

            <div class="jumbotron feature">
                <div class="container showSearchContainer">
                    <div class="row">
                        <div class="col-lg-12">
                            <form class="example" action="action_page.php">
                                <input type="text" placeholder="Search for health care providers..." name="search" />
                                <a class="searchBTN" type="" onClick={() => getDoctorDetails()}>Search<i class="fa fa-search"></i></a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="searchContainer">
                    {doctorDetails.map((docDetail, index) => (
                        <div class="row ProviderList">
                            <div class="col-lg-9">
                                <div class="media">
                                    <img class="mr-3" src="./images/pcpIcon.svg" alt="Generic placeholder image"></img>
                                    <div class="media-body">
                                        <h1 class="mt-0"><a href="#" class="showPCPdetails">{docDetail.lastName}, {docDetail.firstName}, {docDetail.qualification}</a><span>{docDetail.specialization}</span></h1>
                                        <h6>{docDetail.addressLine1}<br></br>
                                            {docDetail.addressLine2}<br></br>
                                            {docDetail.phone}<br></br>
                                            <a href="#">{docDetail.distance} Miles Away</a><br></br>
                                            <a href="#">View Additional Locations ({docDetail.additionalLocation})</a><br></br>
                                            <a href="#">View Enrollment Information</a><p></p>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 rgtCol my-auto">
                                <h6>
                                    <a href="#">{docDetail.evaluation}</a><br></br>
                                    <a href="#">{docDetail.acceptance}</a>
                                </h6>
                            </div>
                            <div class="col-sm-12 botDetails">
                                {docDetail.botDetails}
                            </div>
                        </div>
                    ))}
                </div>
                <div class="providerContainer">
                </div>
            </div>

        </span>
    );
}

