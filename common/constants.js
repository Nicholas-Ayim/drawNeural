const constants = {}

//all folders
constants.ROOT = "file:///C:/Users/NICK/Desktop/neuralNetworks/";
constants.DATA_DIR = "../data";
constants.RAW_DIR =  constants.DATA_DIR+"/raw"
constants.DATASET_DIR = constants.DATA_DIR+"/dataset"
constants.JSON_DIR = constants.DATASET_DIR+"/json"
constants.IMG_DIR = "../data/dataset/image"
constants.JS_OBJECTS = "../common/js_objects"
constants.SAMPLES_JS=constants.JS_OBJECTS+"/samples.js"

if(typeof module!== "undefined"){
    module.exports=constants
}