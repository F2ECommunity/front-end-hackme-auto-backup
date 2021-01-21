CSS
===
###### tags:`css`

-  基礎概念
預處理器
盒子模型(Box Model)
- 常用標籤介紹

```
```

# 背景
## background
```css=
    background-color: red; /* 背景色，設定顏色的其他形式 rgba(255, 99, 71, 0.1), #ff6347  */
    background-image: url("paper.gif");  /* 背景圖 */
    background-repeat: no-repeat;  /* 背景重複 */
    /* 可使用的值 
     * no-repeat 不重複，圖片只顯示一次
     * repeat-x 水平重複
     * repeat-y 垂直重複
     * repeat  水平垂直皆重複
     * space  與reaper相同但有空白做切分圖
     * round 用完整的圖形將畫面塞滿且沒有間距
    */
    background-position: left center; /* 背景圖片位置 */
    /* 水平方向: left,center,right 
     * 垂直方向: top,center,bottom */
    background-attachment: scroll 
    /* scroll 預設值 背景圖會隨著外圍頁面滾動而移動
     * fixed 圖片位置不動 
     * local 自己的區塊內如果滾動時，背景圖也會跟著移動 */
    /*備註: background-attachment 值可疊加使用造成不同效果*/
    background-clip: border-box;  /* 限制背景的範圍 border-box; padding-box; content-box;*/
    background-size: 300px 100px; /* 寬，高*/
    background-size: auto; /*瀏覽器自己決定，一般為0px*/
    background-origin: content-box;
    
    background:lightblue url("img_tree.gif") no-repeat fixed center; 
    /*一次使用多個屬性的範例寫法，插入的語法依序是
     * background-color
     * background-image
     * background-repeat
     * background-attachment
     * background-position
     * */
```

# DEMO

# 邊框(border)，邊界(margin)，間距(padding)

![](https://i.imgur.com/MVf0edk.png)


## border
```css=
    border-style: dotted;
    /* dotted dashed solid double groove ridge inset outset none hidden */
    border-style: dotted dashed solid double;
    border-width: 5px 20px; /* 5px top and bottom, 20px on the sides */
    border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
    border-color: #ff0000; /* rgb(255, 0, 0) */
    border-color: red green blue yellow; /* red top, green right, blue bottom and yellow left */

    border-top-style: dotted;
    border-right-style: solid;
    border-bottom-style: dotted;
    border-left-style: solid;

    border-left: 6px solid red;
    border-bottom: 6px solid red;
    border-collapse: collapse; /* separate 預設值，邊框彼此間分開 collapse 邊框合併為單一邊框 inherit 繼承自父層的 border-collapse 屬性值。 */

    border-radius: 5px; /*可填1-4個參數*/
```
## margin
```css=
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
    margin: 25px 50px 75px 100px;
```
## padding
```css=
    padding: 25px 50px 75px 100px;
    padding: 25px;
```

## outline
```css=
    /* 最外層 outline 中間 border 內容 content */

    outline-style: dotted;
    /* dotted dashed solid double groove ridge inset outset none hidden */
    outline-color: red; /* #ff0000 rgb(255, 0, 0) */
    outline-width: thin;
    /* thin medium thick */
    outline: 5px solid yellow;
    outline-offset: 15px;
    /* outline 距離 border 長度 */
```
# DEMO


# 長寬
## width & height
```css=
    height: 100px;
    width: 500px;
    max-width: 500px;
    max-height: 500px;
    min-width: 500px;
    max-height: 300px;
```

# 文字

## text
```css=
     /*用於文字框*/
    color: green;
    text-align: center; /* left right justify */
    vertical-align: top; /* middle bottom 文繞圖效果*/

    direction: rtl;
    unicode-bidi: bidi-override;

    text-decoration: none; /* overline line-through underline */
    text-transform: uppercase; /* lowercase capitalize */
    text-indent: 50px;
    letter-spacing: 3px;
    letter-spacing: -3px;
    line-height: 0.8;
    word-spacing: 10px;
    white-space: nowrap; /* 影藏內文 */
    text-shadow: 2px 2px 5px red; /*文字陰影 可輸入2-4個內容有不同效果*/


    font-family: "Lucida Console", "Courier New", monospace;
    

    font-style: normal; /* italic */
    font-weight: normal; /* bold */
    font-variant: normal; /* small-caps */
    font-size: 30px; /* 2.5em 100% 10vw*/
    
    span{
    display: block; /* none 調整為不顯示 inline 顯示為內行元素 block 顯示為區塊元素 flex*/
    visibility: hidden; /* 與display none的差異是內容不會出現，但占用的位置還是會在 */
    }
    
    opacity: 0.3; /* 透明度 */


    /* Google Fonts */
    /* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire"> */
```
# 超連結 
```css=
    a:link {color: red;}
    a:visited {color: green;}
    a:hover {color: hotpink;}
    a:active {color: blue;}
    a:hover, a:active {background-color: red;}
    a.four:link {color: #ff0000;}
```
# 列表
```css=
    /* 清單 ul li ol*/
    ul.a {
        list-style-type: circle; /* none */
        list-style-image: url('sqpurple.gif'); /* 將前面的符號變成圖片 */
        list-style-position: outside; /* inside 將前面的符號顯示在內容內或外 */
        list-style: square inside url("sqpurple.gif");
    }
```
## 圖片

``` css=
    img {
        position: absolute;
        clip: rect(0px,60px,200px,0px);
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;
    }
```

# 區塊

## box-sizing
```css=
    box-sizing:content-box;
    調整區塊的內距與邊框計算方式
    /* border-box; box-sizing:inherit;*/
```

# 浮動

## float / clear
``` css=
img {
float: right; /* left none inherit */
clear: both;
}
```

# 顯示
``` css=
p {
display: in-line; /* left none inherit */
clear: both;
}
```


### 
```css=


/* table 補充屬性 RWD border border-collapse border-spacing caption-side empty-cells table-layout */



div {
position: relative; /* absolute fixed relative static */
width: 400px;
height: 200px;
border: 3px solid #73AD21;
}



/* 文層 Overflow */
div {
width: 200px;
height: 50px;
background-color: #eee;
overflow: visible; /* hidden scroll auto */
}



/* CSS 選取器分為五個種類
Simple selectors，Combinator selectors，Pseudo-class selectors，Pseudo-elements selectors，Attribute selectors */

/* Combinator selectors */
div p {background-color: yellow;} /* 指定div標籤內全部p標籤的元素 */
div > p {background-color: yellow;} /* 指定全部p標籤父標籤為div的元素 */
div + p {background-color: yellow;} /* 指定第一個div標籤內全部p標籤的元素 */
div ~ p {background-color: yellow;} /* 指定出現過p標籤包在div標籤後裡面的p標籤 */

/* Pseudo-class selectors */

a:active {color: #0000FF;}

a.highlight:hover {color: #ff0000;}
/* highlight 是class名稱 */

div:hover {background-color: blue;}
div:hover p{background-color: blue;} /* 當div被滑鼠蓋住 作用在裡面的p標籤上 */
p:first-child {color: blue;} /*作用在第一個P標籤上*/
p i:first-child {color: blue;} /*作用在P標籤裡面第一個I標籤上*/
p:first-child i {color: blue;} /*作用在P標籤裡面所有的I標籤上*/
q:lang(no) {quotes: "~" "~";}
/* <p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p> */



/* Pseudo-elements selectors */
h1::before {content: url(smiley.gif);} /* 標籤前使用屬性 */
input:focus{outline: none; border: 5px #faa solid;} /*當輸入提示在上面時觸發*/
p::before {content: attr(data-foo) " ";} /* attr 可以取得屬性值 */

/* Attribute selectors */
a[target=_blank] {background-color: yellow;} /* 當超連結有這個屬性設定相同就套用 */
/* <a href="http://www.disney.com" target="_blank">disney.com</a> */
[title~="flower"] {border: 5px solid yellow;} /* 當title屬性內有flower這個詞就套用 */
[class|="top"] {background: yellow;} /*當class中的top為一個獨立的詞就會套用 ex: top top-text 但像 toptext這種不套用*/
[class$="test"] {background: yellow;} /*當class內的結尾為test就會套用*/
[class*="te"] {background: yellow;} /*當class內含有te的字就會套用*/
input[type="button"] { /*也可套用在form的標籤上*/
width: 120px;
margin-left: 35px;
display: block;
}
```

```css=

/* form表單常用的css */
textarea {resize: none;}
select { border-radius: 4px;}





/*額外補充*/

/*內鍵記數器範例*/
body {
counter-reset: section;
}

h2::before {
counter-increment: section;
content: "Section " counter(section) ": ";
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
.column.side, .column.middle {
width: 100%;
}
}

/* 邊用圖形呈現 */
#borderimg {
border: 10px solid transparent;
padding: 15px;
border-image: url(border.png) 30 stretch;
}

/* unit 單位 */

/* transform */
div{
    transform: translate(50px, 100px);
    transform: rotate(20deg);
}


/* transition ex:幾秒變成長變短 */
div {
width: 100px;
height: 100px;
background: red;
transition: width 2s;
}
#div1 {transition-timing-function: linear;}
#div2 {transition-timing-function: ease;}

/* CSS Animations */

/* Multiple Columns */

/* CSS Variables */

/* CSS Flex */

/* CSS Grid */

.myMOUSE {cursor: help;} /* 可改變滑鼠圖形 */

* {box-sizing: border-box;}

@media screen and (min-width: 480px) {
body {
background-color: lightgreen;
}
}

```

``` html=
<!--添加CSS的三種方式
1.外部(External) CSS
2.內部(Internal) CSS
3.單行(Inline) CSS -->


<!-- CSS 註解 /**/ -->


<!-- 補充文件 - 偽類和偽元素 -->
<!-- 偽類總表 -->
<!-- https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%E4%BC%AA%E7%B1%BB%EF%BC%88Pseudo-class%EF%BC%89 -->
<!-- https://www.w3schools.com/css/css_pseudo_classes.asp -->
<!-- https://www.w3schools.com/css/css_pseudo_elements.asp -->
<!-- 偽元素中也可搭配 attr ，從原本的 Element 獲取屬性的資料 -->



<!-- 偽類能夠在特定動作時改變 DOM 的 CSS 樣式 ex: :hover -->
<!-- 偽元素則是基於原有的 DOM ，創建另一個可設定不同 CSS 的 DOM 屬性 ex: ::after ::before -->



<!-- icon -->

<!-- <script src="https://kit.fontawesome.com/a076d05399.js"></script> -->
<i class="fas fa-heart"></i> -->

<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
<i class="glyphicon glyphicon-user"></i>

<!-- 常見的範例 -->
導覽列 Navigation Bars
下拉選單 Dropdowns
圖片畫廊 image gallery
icon版導覽列 Image Sprites
響應式表單 Responsive Form
Tooltip
Hoverable Buttons
Simple Pagination

<!-- 網頁範例 -->
header
Navigation Menu
Content Main Content Content
```
# RWD響應式網頁
``` css=
<!-- css RWD -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

參考資源
1. [金魚都能懂的CSS必學屬性](https://ithelp.ithome.com.tw/articles/10248942)
2. [w3school](https://www.w3schools.com/)
3. [Wibibi網頁設計教學百科](https://www.wibibi.com/)



---
