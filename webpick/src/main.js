


import $ from "jquery"
import "./css/index.css"
import "./css/aa.less"
import "./css/bb.scss"

$(function(){
    $("li:even").css("backgroundColor","pink")
    $("li:odd").css("backgroundColor","pink")
})