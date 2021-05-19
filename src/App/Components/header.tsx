import "./header.scss";
import HeaderLogo from "../Assets/Photos/HeaderLogo.png";
import React from "react";

export const Header = () => {
	return (
		<header>
			<a href="#MainPhoto" id="LogoContainer">
				<img src={HeaderLogo} alt="Burnside Logo" id="HeaderLogo" />
			</a>
			<div id="header-blur" />
			<a
				href="#MainPhoto"
				className="HeaderLink"
				style={{ gridColumn: 4, opacity: 1 }}
			>
				Home
			</a>
			<a
				href="#AboutSection"
				className="HeaderLink"
				style={{ gridColumn: 5 }}
			>
				About
			</a>
			<a
				href="#AwardsSection"
				className="HeaderLink"
				style={{ gridColumn: 6 }}
			>
				Awards
			</a>
			<a
				href="#VexSection"
				className="HeaderLink"
				style={{ gridColumn: 7 }}
			>
				Vex
			</a>
			<a
				href="#RobotsSection"
				className="HeaderLink"
				style={{ gridColumn: 8 }}
			>
				Robots
			</a>
			<a
				href="#SponsorsSection"
				className="HeaderLink"
				style={{ gridColumn: 9 }}
			>
				Sponsors
			</a>
			<a href="#Footer" className="HeaderLink" style={{ gridColumn: 10 }}>
				Contact
			</a>
		</header>
	);
};
