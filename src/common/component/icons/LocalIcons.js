import { Image } from "react-native";

const GoogleIcon = require("../../../assets/images/google.png");
const SearchIcon = require("../../../assets/images/search.png");
const LocationIcon = require("../../../assets/images/location.png");



const Icons = ({ name, styles }) => {
    switch (name) {
        case "google":
            return <Image source={GoogleIcon} style={{ width: 18, height: 18, ...styles }} />
        case "search":
            return <Image source={SearchIcon} style={{ width: 16, height: 16, ...styles }} />
        case "location":
            return <Image source={LocationIcon} style={{ width: 13, height: 16, ...styles }} />
        default:
            return false;
    }
}
export default Icons;