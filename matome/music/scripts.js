/*-----------------------------------------------------------------------------------*/
/*	POSTS GRID
/*-----------------------------------------------------------------------------------*/
$(window).load(function(){


});

// 初期設定
var disp_entry_count = 20;       //表示させたい記事の数

// RSS URL
var site = new Array();

site[0] = {
    title:'２ｃｈ音楽速報-まとめ-',
    url:'http://blog.livedoor.jp/ongaku2ch/index.rdf',
    disp_entry:4        // 取得する記事の数
};

site[1] = {
    title:'音楽がないと生きていけない系ヲタがまとめてみた',
    url:'http://otowota.com/feed/atom/',
    disp_entry:4        // 取得する記事の数
};

site[2] = {
    title:'TOWER RECORDS',
    url:'http://tower.jp/feeds/article/',
    disp_entry:4        // 取得する記事の数
};

site[3] = {
    title:'TOWER RECORDS',
    url:'http://tower.jp/feeds/article/campaign',
    disp_entry:4        // 取得する記事の数
};

site[4] = {
    title:'BARKS',
    url:'http://rss.rssad.jp/rss/barks/barks_news_gakki.rdf',
    disp_entry:4        // 取得する記事の数
};

site[4] = {
    title:'ナタリー',
    url:'http://natalie.mu/music/feed/news',
    disp_entry:4        // 取得する記事の数
};

var channel = new Array();
var entry = new Array();
var entries = new Array();
var Feed = "";

google.load("feeds", "1");
function init() {

    var site_count = 0;

    for (var i=0; i<site.length; i++){

        // 読み込むRSSを設定
        var feed = new google.feeds.Feed(site[i]['url']);
        feed.setNumEntries(site[i]['disp_entry'])
        feed.load(function(rss) {
            if (!rss.error) {

                // RSSからサイトの情報を配列に格納
                channel['title'] = rss.feed.title;
                channel['link'] = rss.feed.link;
                channel['favicon'] = "http://favicon.hatena.ne.jp/?url=" + channel['link'];
                channel['description'] = rss.feed.description;
                channel['author'] = rss.feed.author;

                // RSSから記事の情報を配列に格納
                for (var j=0; j<rss.feed.entries.length; j++){

                    var feed_entry = rss.feed.entries[j];
                    var entry = {
                        site_title : channel['title'],
                        site_link : channel['link'],
                        site_favicon : channel['favicon'],
                        title : feed_entry.title,
                        link : feed_entry.link,
                        content : feed_entry.content,
                        contentSnippet : feed_entry.contentSnippet,
                        publishedDate : feed_entry.publishedDate
                    };

                    var date = new Date(entry['publishedDate']);
                    entry['time'] = date.getTime();
                    var yy = date.getYear();
                    var mm = date.getMonth() + 1;
                    var dd = date.getDate();
                    if (yy < 2000) { yy += 1900; }
                    if (mm < 10) { mm = "0" + mm; }
                    if (dd < 10) { dd = "0" + dd; }
                    entry['date'] = yy + "年" + mm + "月" + dd + "日";

                    entry['img'] = entry['content'].match(/src="(.*?)"/igm);

                    if (entry['img'] != null) {
                        for (var k=0; k<entry['img'].length; k++){
                            entry['img'][k] = entry['img'][k].replace(/src=/ig, "");
                            entry['img'][k] = entry['img'][k].replace(/"/ig, "");
                        }
                    }
                    entries.push(entry);
                }
            }
            site_count++;
            if (site.length == site_count){ disp(); }
        });
    }
}

function disp() {

    //日付順に並べ替え
    entries.sort (function (b1, b2) { return b1.time < b2.time ? 1 : -1; } );

    // 記事をhtmlに整形
    for (var l=0; l<disp_entry_count; l++){
        if (entries.length < l+1){ break; }

        // if (entries[l]['img'] != null) { Feed += '<img width="100" src="' + entries[l]['img'][0] + '">'; }
        Feed += '<article class="c_article"><div class="p_article"><a href="' + entries[l]['site_link']
                    + '" target="_blank"><h2><img src="' + entries[l]['site_favicon'] + '">'
                    + ''
                    + entries[l]['site_title'] + '</h2>'
                    + entries[l]['date'] + '</a>';
                    // if (entries[l]['img'] != null) { Feed += '<img class="a_img" src="' + entries[l]['img'][0] + '">'; }

                    Feed += '<a href="'+ entries[l]['link'] + '" target="_blank">'
                    + '<h3>'
                    + entries[l]['title']
                    + '</h3>'
                    + '<p>' + entries[l]['contentSnippet'].substr(0, 100) + '……</p>' + '</a></div></article>';
    }
    // 表示するタグに追加
    $('#topics').append( Feed );
}


google.setOnLoadCallback(init);



// ----------------------------------------------------------

// 初期設定
var disp_entry_count2 = 20;       //表示させたい記事の数

// RSS URL
var site2 = new Array();

site2[0] = {
    title2:'GIZUMODO',
    url2:'http://feeds.gizmodo.jp/rss/gizmodo/index.xml',
    disp_entry2:4        // 取得する記事の数
};

site2[1] = {
    title2:'Gigazin',
    url2:'http://feed.rssad.jp/rss/gigazine/rss_2.0',
    disp_entry2:4        // 取得する記事の数
};

site2[2] = {
    title2:'ウェブソク',
    url2:'http://news.7zz.jp/feed',
    disp_entry2:4        // 取得する記事の数
};

site2[3] = {
    title2:'コリス',
    url2:'http://coliss.com/feed',
    disp_entry2:4        // 取得する記事の数
};

var channel2 = new Array();
var entry2 = new Array();
var entries2 = new Array();
var Feed2 = "";

google.load("feeds", "1");
function init2() {

    var site_count2 = 0;

    for (var i=0; i<site2.length; i++){

        // 読み込むRSSを設定
        var feed2 = new google.feeds.Feed2(site2[i]['url2']);
        feed2.setNumEntries(site2[i]['disp_entry2'])
        feed2.load(function(rss2) {
            if (!rss2.error) {

                // RSSからサイトの情報を配列に格納
                channel2['title2'] = rss2.feed2.title2;
                channel2['link2'] = rss2.feed2.link2;
                channel2['favicon2'] = "http://favicon.hatena.ne.jp/?url=" + channel2['link2'];
                channel2['description2'] = rss2.feed2.description2;
                channel2['author2'] = rss2.feed2.author2;

                // RSSから記事の情報を配列に格納
                for (var j=0; j<rss.feed2.entries2.length; j++){

                    var feed_entry2 = rss.feed2.entries2[j];
                    var entry2 = {
                        site_title2 : channel2['title2'],
                        site_link2 : channel2['link2'],
                        site_favicon2 : channel2['favicon2'],
                        title2 : feed_entry2.title,
                        link2 : feed_entry2.link,
                        content2 : feed_entry2.content,
                        contentSnippet2 : feed_entry2.contentSnippet2,
                        publishedDate2 : feed_entry2.publishedDate2
                    };

                    var date = new Date(entry2['publishedDate2']);
                    entry2['time'] = date.getTime();
                    var yy = date.getYear();
                    var mm = date.getMonth() + 1;
                    var dd = date.getDate();
                    if (yy < 2000) { yy += 1900; }
                    if (mm < 10) { mm = "0" + mm; }
                    if (dd < 10) { dd = "0" + dd; }
                    entry2['date'] = yy + "年" + mm + "月" + dd + "日";

                    entry2['img'] = entry2['content2'].match(/src="(.*?)"/igm);

                    if (entry2['img'] != null) {
                        for (var k=0; k<entry2['img'].length; k++){
                            entry2['img'][k] = entry2['img'][k].replace(/src=/ig, "");
                            entry2['img'][k] = entry2['img'][k].replace(/"/ig, "");
                        }
                    }
                    entries2.push(entry);
                }
            }
            site_count2++;
            if (site2.length == site_count2){ disp2(); }
        });
    }
}

function disp2() {

    //日付順に並べ替え
    entries2.sort (function (b1, b2) { return b1.time < b2.time ? 1 : -1; } );

    // 記事をhtmlに整形
    for (var l=0; l<disp_entry_count2; l++){
        if (entries2.length < l+1){ break; }

        // if (entries[l]['img'] != null) { Feed += '<img width="100" src="' + entries[l]['img'][0] + '">'; }
        Feed2 += '<article class="c_article"><div class="p_article"><a href="' + entries2[l]['site_link2']
                    + '" target="_blank"><h2><img src="' + entries2[l]['site_favicon2'] + '">'
                    + ''
                    + entries2[l]['site_title2'] + '</h2>'
                    + entries2[l]['date'] + '</a>';
                    if (2[l]['img'] != null) { Feed2 += '<img class="a_img" src="' + entries2[l]['img'][0] + '">'; }

                    Feed2 += '<a href="'+ entries2[l]['link2'] + '" target="_blank">'
                    + '<h3>'
                    + entries2[l]['title2']
                    + '</h3>'
                    + '<p>contentSnippet:' + entries2[l]['contentSnippet2'].substr(0, 100) + '……</p>' + '</a></div></article>';
    }
    // 表示するタグに追加
    $('#m_topics').append( Feed2 );
}


google.setOnLoadCallback(init2);
















// ---------------------------------------------------------------

// google.setOnLoadCallback(init2);


var showFlag = false;
var topBtn = $('#page-top');
topBtn.css('bottom', '-100px');
var showFlag = false;
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        if (showFlag == false) {
            showFlag = true;
            topBtn.stop().animate({'bottom' : '20px'}, 200);
        }
    } else {
        if (showFlag) {
            showFlag = false;
            topBtn.stop().animate({'bottom' : '-100px'}, 200);
        }
    }
});
//スクロールしてトップ
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});