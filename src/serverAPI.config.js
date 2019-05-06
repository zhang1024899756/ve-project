
const ADRESS = "http://veserver.ksmvc.com";

const URL = {
    checkAttribute: ADRESS + "/attribute/check",
    newAttribute: ADRESS + "/attribute/new",
    attributeList: ADRESS + "/attribute/list",

    removePicture: ADRESS + "/picture/remove",
    uploadPicture: ADRESS + "/picture/upload",

    checkComponent: ADRESS + "/component/check",
    newComponent: ADRESS + "/component/new",
    componentList: ADRESS + "/component/list",

    componentDetail: ADRESS + "/component/detail?id=",

    experimentList: ADRESS + "/experiment/list",

    logIn: ADRESS + "/user/signin?",
};

export default URL;