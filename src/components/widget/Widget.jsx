import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = () => {
	return (
		<div className="widget">
			<div className="left">
				<span className="title">USERS</span>
				<span className="counter">1947</span>
				<span className="link">See All User</span>
			</div>
			<div className="right">
				<div className="percentage negative">
					<KeyboardArrowUpIcon />
					20%
				</div>
				<PersonOutlinedIcon className="icon" />
			</div>
		</div>
	);
};

export default Widget;
