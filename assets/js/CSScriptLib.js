var _____WB$wombat$assign$function_____ = function(name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } } {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /* -- Adobe GoLive JavaScript Library */

    CSAg = window.navigator.userAgent;
    CSBVers = parseInt(CSAg.charAt(CSAg.indexOf("/") + 1), 10);
    CSIsW3CDOM = ((document.getElementById) && !(IsIE() && CSBVers < 6)) ? true : false;

    function IsIE() { return CSAg.indexOf("MSIE") > 0; }

    function CSIEStyl(s) { return document.all.tags("div")[s].style; }

    function CSNSStyl(s) { if (CSIsW3CDOM) return document.getElementById(s).style;
        else return CSFindElement(s, 0); }
    CSIImg = false;

    function CSInitImgID() { if (!CSIImg && document.images) { for (var i = 0; i < document.images.length; i++) { if (!document.images[i].id) document.images[i].id = document.images[i].name; }
            CSIImg = true; } }

    function CSFindElement(n, ly) {
        if (CSBVers < 4) return document[n];
        if (CSIsW3CDOM) { CSInitImgID(); return (document.getElementById(n)); }
        var curDoc = ly ? ly.document : document;
        var elem = curDoc[n];
        if (!elem) { for (var i = 0; i < curDoc.layers.length; i++) { elem = CSFindElement(n, curDoc.layers[i]); if (elem) return elem; } }
        return elem;
    }

    function CSGetImage(n) { if (document.images) { return ((!IsIE() && CSBVers < 5) ? CSFindElement(n, 0) : document.images[n]); } else { return null; } }
    CSDInit = false;

    function CSIDOM() { if (CSDInit) return;
        CSDInit = true; if (document.getElementsByTagName) { var n = document.getElementsByTagName('DIV'); for (var i = 0; i < n.length; i++) { CSICSS2Prop(n[i].id); } } }

    function CSICSS2Prop(id) { var n = document.getElementsByTagName('STYLE'); for (var i = 0; i < n.length; i++) { var cn = n[i].childNodes; for (var j = 0; j < cn.length; j++) { CSSetCSS2Props(CSFetchStyle(cn[j].data, id), id); } } }

    function CSFetchStyle(sc, id) {
        var s = sc;
        while (s.indexOf("#") != -1) { s = s.substring(s.indexOf("#") + 1, sc.length); if (s.substring(0, s.indexOf("{")).toUpperCase().indexOf(id.toUpperCase()) != -1) return (s.substring(s.indexOf("{") + 1, s.indexOf("}"))); }
        return "";
    }

    function CSGetStyleAttrValue(si, id, st) {
        var s = si.toUpperCase();
        var myID = id.toUpperCase() + ":";
        var id1 = s.indexOf(myID, st);
        if (id1 == -1) return "";
        var ch = s.charAt(id1 - 1);
        if (ch != " " && ch != "\t" && ch != "\n" && ch != ";" && ch != "{")
            return CSGetStyleAttrValue(si, id, id1 + 1);
        var start = id1 + myID.length;
        ch = s.charAt(start);
        while (ch == " " || ch == "\t" || ch == "\n") { start++;
            ch = s.charAt(start); }
        s = s.substring(start, si.length);
        var id2 = s.indexOf(";");
        return ((id2 == -1) ? s : s.substring(0, id2));
    }

    function CSSetCSS2Props(si, id) {
        var el = document.getElementById(id);
        if (el == null) return;
        var style = document.getElementById(id).style;
        if (style) {
            if (style.left == "") style.left = CSGetStyleAttrValue(si, "left", 0);
            if (style.top == "") style.top = CSGetStyleAttrValue(si, "top", 0);
            if (style.width == "") style.width = CSGetStyleAttrValue(si, "width", 0);
            if (style.height == "") style.height = CSGetStyleAttrValue(si, "height", 0);
            if (style.visibility == "") style.visibility = CSGetStyleAttrValue(si, "visibility", 0);
            if (style.zIndex == "") style.zIndex = CSGetStyleAttrValue(si, "z-index", 0);
        }
    }
    CSInit = new Array;

    function CSScriptInit() {
        if (typeof(skipPage) != "undefined") { if (skipPage) return; }
        idxArray = new Array;
        for (var i = 0; i < CSInit.length; i++)
            idxArray[i] = i;
        CSAction2(CSInit, idxArray);
    }
    CSStopExecution = false;

    function CSAction(array) { return CSAction2(CSAct, array); }

    function CSAction2(fct, array) {
        var result;
        for (var i = 0; i < array.length; i++) {
            if (CSStopExecution) return false;
            var aa = fct[array[i]];
            if (aa == null) return false;
            var ta = new Array;
            for (var j = 1; j < aa.length; j++) {
                if ((aa[j] != null) && (typeof(aa[j]) == "object") && (aa[j].length == 2)) {
                    if (aa[j][0] == "VAR") { ta[j] = CSStateArray[aa[j][1]]; } else {
                        if (aa[j][0] == "ACT") { ta[j] = CSAction(new Array(new String(aa[j][1]))); } else ta[j] = aa[j];
                    }
                } else ta[j] = aa[j];
            }
            result = aa[0](ta);
        }
        return result;
    }
    CSAct = new Object;

    function newImage(arg) {
        if (document.images) {
            rslt = new Image();
            rslt.src = arg;
            return rslt;
        }
    }

    userAgent = window.navigator.userAgent;
    browserVers = parseInt(userAgent.charAt(userAgent.indexOf("/") + 1), 10);
    mustInitImg = true;

    function initImgID() { var di = document.images; if (mustInitImg && di) { for (var i = 0; i < di.length; i++) { if (!di[i].id) di[i].id = di[i].name; }
            mustInitImg = false; } }

    function findElement(n, ly) {
        var d = document;
        if (browserVers < 4) return d[n];
        if ((browserVers >= 6) && (d.getElementById)) { initImgID; return (d.getElementById(n)) };
        var cd = ly ? ly.document : d;
        var elem = cd[n];
        if (!elem) {
            for (var i = 0; i < cd.layers.length; i++) {
                elem = findElement(n, cd.layers[i]);
                if (elem) return elem;
            }
        }
        return elem;
    }

    function changeImagesArray(array) {
        if (preloadFlag == true) {
            var d = document;
            var img;
            for (i = 0; i < array.length; i += 2) {
                img = null;
                var n = array[i];
                if (d.images) {
                    if (d.layers) { img = findElement(n, 0); } else { img = d.images[n]; }
                }
                if (!img && d.getElementById) { img = d.getElementById(n); }
                if (!img && d.getElementsByName) {
                    var elms = d.getElementsByName(n);
                    if (elms) {
                        for (j = 0; j < elms.length; j++) {
                            if (elms[j].src) { img = elms[j]; break; }
                        }
                    }
                }
                if (img) { img.src = array[i + 1]; }
            }
        }
    }

    function changeImages() {
        changeImagesArray(changeImages.arguments);
    }

    function toggleImages() {
        for (var i = 0; i < toggleImages.arguments.length; i += 2) {
            if (selected == toggleImages.arguments[i])
                changeImagesArray(toggleImages.arguments[i + 1]);
        }
    }

    function CSClickReturn() {
        var bAgent = window.navigator.userAgent;
        var bAppName = window.navigator.appName;
        if ((bAppName.indexOf("Explorer") >= 0) && (bAgent.indexOf("Mozilla/3") >= 0) && (bAgent.indexOf("Mac") >= 0))
            return true; /* dont follow link */
        else return false; /* dont follow link */
    }

    function CSResizeWindow(action) {
        if (navigator.appVersion.charAt(0) >= 4) { window.resizeTo(action[1], action[2]) }
    }

    // Version 1.1. A Michael Ahgren action.
    function CSRemoveIEbox() {
        if (document.images && navigator.userAgent.indexOf("MSIE") != -1) {
            for (i = 0; i < document.links.length; i++) {
                target = eval("document.links[i]")
                target.onfocus = blurHandler
            }
        }
    }

    function blurHandler() {
        obj = window.event.srcElement
        if (obj.tagName == "A" || obj.tagName == "AREA") obj.blur()
    }

    function CSFixFct() {
        var d = document;
        var w = window;
        if (d.cs.csFix.w != w.innerWidth || d.cs.csFix.h != w.innerHeight) {
            d.location = d.location;
        }
    }

    function CSNSFix(action) {
        var d = document;
        var w = window;
        if ((navigator.appName == 'Netscape') && (parseInt(navigator.appVersion) == 4)) {
            if (typeof d.cs == 'undefined') {
                d.cs = new Object;
                d.cs.csFix = new Object;
            } else if (CSIsFrame(w) == true) CSFixFct();
            d.cs.csFix.w = w.innerWidth;
            d.cs.csFix.h = w.innerHeight;
            window.onresize = CSFixFct;
        }
    }

    function CSIsFrame(window) {
        var rootWindow = window.parent;
        if (rootWindow == 'undefined') return false;
        for (i = 0; i < rootWindow.frames.length; i++)
            if (window == rootWindow.frames[i]) return true;
        return false;
    }

    function CSIEPNGFix(action) {
        var bAgent = window.navigator.userAgent;
        var bAppName = window.navigator.appName;
        var bAppVers = window.navigator.appVersion;

        var isIE = (bAppName.indexOf("Explorer") >= 0);
        var isWin = (bAgent.indexOf("Win") >= 0);

        if (isIE && isWin) {
            var vers = 0;
            var idx1 = bAppVers.indexOf("MSIE");

            if (idx1 != -1) {
                idx1 += 4;
                var idx2 = bAppVers.indexOf(";", idx1)
                if (idx2 != -1) {
                    vers = bAppVers.substring(idx1, idx2);
                } else {
                    vers = bAppVers.substring(idx1);
                }
            }

            if (vers >= 5.5) {
                for (var i = 0; i < document.images.length; i++) {
                    var img = document.images[i];
                    var imgName = img.src.toUpperCase();
                    if (imgName.substring(imgName.length - 3, imgName.length) == "PNG") {
                        var imgID = (img.id) ? "id='" + img.id + "' " : "";
                        var imgClass = (img.className) ? "class='" + img.className + "' " : "";
                        var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
                        var imgStyle = "display:inline-block;" + img.style.cssText;
                        if (img.align == "left") imgStyle = "float:left;" + imgStyle;
                        if (img.align == "right") imgStyle = "float:right;" + imgStyle;
                        if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
                        var strNewHTML = "<span " + imgID + imgClass + imgTitle +
                            " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" +
                            "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" +
                            "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
                        img.outerHTML = strNewHTML;
                        i = i - 1;
                    }
                }
            }
        }
    }


    function CSOpenWindow(action) {
        var wf = "";
        wf = wf + "width=" + action[3];
        wf = wf + ",height=" + action[4];
        wf = wf + ",resizable=" + (action[5] ? "yes" : "no");
        wf = wf + ",scrollbars=" + (action[6] ? "yes" : "no");
        wf = wf + ",menubar=" + (action[7] ? "yes" : "no");
        wf = wf + ",toolbar=" + (action[8] ? "yes" : "no");
        wf = wf + ",directories=" + (action[9] ? "yes" : "no");
        wf = wf + ",location=" + (action[10] ? "yes" : "no");
        wf = wf + ",status=" + (action[11] ? "yes" : "no");
        window.open(action[1], action[2], wf);
    }

    function CSSetImageURL(action) {
        var img = CSGetImage(action[1]);
        if (img) img.src = action[2];
    }




}
/*
     FILE ARCHIVED ON 01:39:23 Oct 20, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:51:24 Jun 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 5133.833 (4)
  RedisCDXSource: 1.813
  captures_list: 110.376
  PetaboxLoader3.resolve: 30.6
  exclusion.robots: 0.464
  CDXLines.iter: 26.483 (3)
  load_resource: 5104.94
  exclusion.robots.policy: 0.442
  esindex: 0.017
  LoadShardBlock: 76.952 (3)
*/