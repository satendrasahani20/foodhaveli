import LocalIcon from "../component/icons/LocalIcons.js"

export const checkIcons = (iconName) => {
    if (<LocalIcon name={iconName} />) {
        return () => <LocalIcon name={iconName} />
    } else if (iconName) {
        return iconName
    }
}
export const getDynamicStyles = (theme, disable, colorsType, btnSize) => {
    return {
        backgroundColor: disable ? theme.colors["lightGray"] : theme.colors[colorsType],
        width: btnSize == "large" ? 270 : btnSize == "medium" ? 88 : 50,
        height: btnSize == "large" ? 49 : btnSize == "medium" ? 30 : 50,
        justifyContent: btnSize == "large" ? 'center' : "",
    };
};
export const buttonFonts = (btnSize) => {
    return {
        fontSize: btnSize == "large" ? 15 : btnSize == "medium" ? 12 : 10,
        marginTop: btnSize == "large" ? "" : btnSize == "medium" ? 3 : 0,
    }
}

export const checkErrors=(errorsObj,keyName)=>{
   return !!errorsObj && errorsObj[keyName];
}