import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
	color: #fff;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 0.1rem;
`;

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 10px 50px;
	margin-bottom: 50px;
	background: #3399ff;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	display: flex;
	align-items: center;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
	${OptionContainerStyles}
`;
