(function(){var o=CodeMirror.getMode({tabSize:4},"gfm");function e(e){test.mode(e,o,Array.prototype.slice.call(arguments,1))}var t=CodeMirror.getMode({tabSize:4},{name:"gfm",highlightFormatting:true});function r(o){test.mode(o,t,Array.prototype.slice.call(arguments,1))}r("codeBackticks","[comment&formatting&formatting-code `][comment foo][comment&formatting&formatting-code `]");r("doubleBackticks","[comment&formatting&formatting-code ``][comment foo ` bar][comment&formatting&formatting-code ``]");r("codeBlock","[comment&formatting&formatting-code-block ```css]","[tag foo]","[comment&formatting&formatting-code-block ```]");r("taskList","[variable-2&formatting&formatting-list&formatting-list-ul - ][meta&formatting&formatting-task [ ]]][variable-2  foo]","[variable-2&formatting&formatting-list&formatting-list-ul - ][property&formatting&formatting-task [x]]][variable-2  foo]");r("formatting_strikethrough","[strikethrough&formatting&formatting-strikethrough ~~][strikethrough foo][strikethrough&formatting&formatting-strikethrough ~~]");r("formatting_strikethrough","foo [strikethrough&formatting&formatting-strikethrough ~~][strikethrough bar][strikethrough&formatting&formatting-strikethrough ~~]");e("emInWordAsterisk","foo[em *bar*]hello");e("emInWordUnderscore","foo_bar_hello");e("emStrongUnderscore","[strong __][em&strong _foo__][em _] bar");e("fencedCodeBlocks","[comment ```]","[comment foo]","","[comment ```]","bar");e("fencedCodeBlockModeSwitching","[comment ```javascript]","[variable foo]","","[comment ```]","bar");e("fencedCodeBlockModeSwitchingObjc","[comment ```objective-c]","[keyword @property] [variable NSString] [operator *] [variable foo];","[comment ```]","bar");e("fencedCodeBlocksNoTildes","~~~","foo","~~~");e("taskListAsterisk","[variable-2 * []] foo]","[variable-2 * [ ]]bar]","[variable-2 * [x]]hello]","[variable-2 * ][meta [ ]]][variable-2  [world]]]","    [variable-3 * ][property [x]]][variable-3  foo]");e("taskListPlus","[variable-2 + []] foo]","[variable-2 + [ ]]bar]","[variable-2 + [x]]hello]","[variable-2 + ][meta [ ]]][variable-2  [world]]]","    [variable-3 + ][property [x]]][variable-3  foo]");e("taskListDash","[variable-2 - []] foo]","[variable-2 - [ ]]bar]","[variable-2 - [x]]hello]","[variable-2 - ][meta [ ]]][variable-2  [world]]]","    [variable-3 - ][property [x]]][variable-3  foo]");e("taskListNumber","[variable-2 1. []] foo]","[variable-2 2. [ ]]bar]","[variable-2 3. [x]]hello]","[variable-2 4. ][meta [ ]]][variable-2  [world]]]","    [variable-3 1. ][property [x]]][variable-3  foo]");e("SHA","foo [link be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2] bar");e("SHAEmphasis","[em *foo ][em&link be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2][em *]");e("shortSHA","foo [link be6a8cc] bar");e("tooShortSHA","foo be6a8c bar");e("longSHA","foo be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd22 bar");e("badSHA","foo be6a8cc1c1ecfe9489fb51e4869af15a13fc2cg2 bar");e("userSHA","foo [link bar@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2] hello");e("userSHAEmphasis","[em *foo ][em&link bar@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2][em *]");e("userProjectSHA","foo [link bar/hello@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2] world");e("userProjectSHAEmphasis","[em *foo ][em&link bar/hello@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2][em *]");e("num","foo [link #1] bar");e("numEmphasis","[em *foo ][em&link #1][em *]");e("badNum","foo #1bar hello");e("userNum","foo [link bar#1] hello");e("userNumEmphasis","[em *foo ][em&link bar#1][em *]");e("userProjectNum","foo [link bar/hello#1] world");e("userProjectNumEmphasis","[em *foo ][em&link bar/hello#1][em *]");e("vanillaLink","foo [link http://www.example.com/] bar");e("vanillaLinkNoScheme","foo [link www.example.com] bar");e("vanillaLinkHttps","foo [link https://www.example.com/] bar");e("vanillaLinkDataSchema","foo [link data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==] bar");e("vanillaLinkPunctuation","foo [link http://www.example.com/]. bar");e("vanillaLinkExtension","foo [link http://www.example.com/index.html] bar");e("vanillaLinkEmphasis","foo [em *][em&link http://www.example.com/index.html][em *] bar");e("notALink","foo asfd:asdf bar");e("notALink","[comment ```css]","[tag foo] {[property color]:[keyword black];}","[comment ```][link http://www.example.com/]");e("notALink","[comment ``foo `bar` http://www.example.com/``] hello");e("notALink","[comment `foo]","[comment&link http://www.example.com/]","[comment `] foo","","[link http://www.example.com/]");e("headerCodeBlockGithub","[header&header-1 # heading]","","[comment ```]","[comment code]","[comment ```]","","Commit: [link be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2]","Issue: [link #1]","Link: [link http://www.example.com/]");e("strikethrough","[strikethrough ~~foo~~]");e("strikethroughWithStartingSpace","~~ foo~~");e("strikethroughUnclosedStrayTildes","[strikethrough ~~foo~~~]");e("strikethroughUnclosedStrayTildes","[strikethrough ~~foo ~~]");e("strikethroughUnclosedStrayTildes","[strikethrough ~~foo ~~ bar]");e("strikethroughUnclosedStrayTildes","[strikethrough ~~foo ~~ bar~~]hello");e("strikethroughOneLetter","[strikethrough ~~a~~]");e("strikethroughWrapped","[strikethrough ~~foo]","[strikethrough foo~~]");e("strikethroughParagraph","[strikethrough ~~foo]","","foo[strikethrough ~~bar]");e("strikethroughEm","[strikethrough ~~foo][em&strikethrough *bar*][strikethrough ~~]");e("strikethroughEm","[em *][em&strikethrough ~~foo~~][em *]");e("strikethroughStrong","[strikethrough ~~][strong&strikethrough **foo**][strikethrough ~~]");e("strikethroughStrong","[strong **][strong&strikethrough ~~foo~~][strong **]")})();