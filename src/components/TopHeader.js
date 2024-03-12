import React from 'react';
import './TopHeader.css';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContainerFrost from './ContainerFrost';


const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="icons-container">

                <ContainerFrost width="50px" height="50px" padding="0px">
                    <LinkedInIcon
                        fontSize="large"
                        className="pointer"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/jonas-sundt-a6ba89225/",
                                "_blank"
                            )
                        }
                    />
                </ContainerFrost>

                <ContainerFrost width="50px" height="50px" padding="0px">
                    <EmailIcon
                        fontSize="large"
                        className="pointer"
                        onClick={() => (window.location = "mailto:jonassundt98@gmail.com")}
                    />
                </ContainerFrost>

                <ContainerFrost width="50px" height="50px" padding="0px">
                    <GitHubIcon
                        fontSize="large"
                        className="pointer"
                        onClick={() =>
                            window.open("https://www.github.com/jonassundt/", "_blank")
                        }
                    />
                </ContainerFrost>


            </div>
        </div>
    );
};

export default TopHeader;

