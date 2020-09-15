// teams in each year
// ref https://stats.nba.com/playoffs/
var teams = {
    "2018": {
        // West 1
        "0000": {
            name: "HOU",
            score: "0"
        },
        // West 8
        "0001": {
            name: "MIN",
            score: "0"
        },
        // West 4
        "0010": {
            name: "OKC",
            score: "0"
        },
        // West 5
        "0011": {
            name: "UTA",
            score: "0"
        },
        // West 3
        "0100": {
            name: "POR",
            score: "0"
        },
        // West 6
        "0101": {
            name: "NOP",
            score: "0"
        },
        // West 2
        "0110": {
            name: "GSW",
            score: "0"
        },
        // West 7
        "0111": {
            name: "SAS",
            score: "0"
        },

        // East 1
        "1000": {
            name: "TOR",
            score: "0"
        },
        // East 8
        "1001": {
            name: "WAS",
            score: "0"
        },
        // East 4
        "1010": {
            name: "CLE",
            score: "0"
        },
        // East 5
        "1011": {
            name: "IND",
            score: "0"
        },
        // East 3
        "1100": {
            name: "PHI",
            score: "0"
        },
        // East 6
        "1101": {
            name: "MIA",
            score: "0"
        },
        // East 2
        "1110": {
            name: "BOS",
            score: "0"
        },
        // East 7
        "1111": {
            name: "MIL",
            score: "0"
        }
    },

    "2019": {
        // West 1
        "0000": {
            name: "GSW",
            score: "0"
        },
        // West 8
        "0001": {
            name: "LAC",
            score: "0"
        },
        // West 4
        "0010": {
            name: "HOU",
            score: "0"
        },
        // West 5
        "0011": {
            name: "UTA",
            score: "0"
        },
        // West 3
        "0100": {
            name: "POR",
            score: "0"
        },
        // West 6
        "0101": {
            name: "OKC",
            score: "0"
        },
        // West 2
        "0110": {
            name: "DEN",
            score: "0"
        },
        // West 7
        "0111": {
            name: "SAS",
            score: "0"
        },

        // East 1
        "1000": {
            name: "MIL",
            score: "0"
        },
        // East 8
        "1001": {
            name: "DET",
            score: "0"
        },
        // East 4
        "1010": {
            name: "BOS",
            score: "0"
        },
        // East 5
        "1011": {
            name: "IND",
            score: "0"
        },
        // East 3
        "1100": {
            name: "PHI",
            score: "0"
        },
        // East 6
        "1101": {
            name: "BKN",
            score: "0"
        },
        // East 2
        "1110": {
            name: "TOR",
            score: "0"
        },
        // East 7
        "1111": {
            name: "ORL",
            score: "0"
        }
    },

    "2020": {
        // West 1
        "0000": {
            name: "LAL",
            score: "0"
        },
        // West 8
        "0001": {
            name: "POR",
            score: "0"
        },
        // West 4
        "0010": {
            name: "HOU",
            score: "0"
        },
        // West 5
        "0011": {
            name: "OKC",
            score: "0"
        },
        // West 3
        "0100": {
            name: "DEN",
            score: "0"
        },
        // West 6
        "0101": {
            name: "UTA",
            score: "0"
        },
        // West 2
        "0110": {
            name: "LAC",
            score: "0"
        },
        // West 7
        "0111": {
            name: "DAL",
            score: "0"
        },

        // East 1
        "1000": {
            name: "MIL",
            score: "0"
        },
        // East 8
        "1001": {
            name: "ORL",
            score: "0"
        },
        // East 4
        "1010": {
            name: "IND",
            score: "0"
        },
        // East 5
        "1011": {
            name: "MIA",
            score: "0"
        },
        // East 3
        "1100": {
            name: "BOS",
            score: "0"
        },
        // East 6
        "1101": {
            name: "PHI",
            score: "0"
        },
        // East 2
        "1110": {
            name: "TOR",
            score: "0"
        },
        // East 7
        "1111": {
            name: "BKN",
            score: "0"
        }
    },
    
};

var map_init = {
    "0000": {
        name: "",
        score: "0"
    },
    "0001": {
        name: "",
        score: "0"
    },
    "0010": {
        name: "",
        score: "0"
    },
    "0011": {
        name: "",
        score: "0"
    },
    "0100": {
        name: "",
        score: "0"
    },
    "0101": {
        name: "",
        score: "0"
    },
    "0110": {
        name: "",
        score: "0"
    },
    "0111": {
        name: "",
        score: "0"
    },

    "1000": {
        name: "",
        score: "0"
    },
    "1001": {
        name: "",
        score: "0"
    },
    "1010": {
        name: "",
        score: "0"
    },
    "1011": {
        name: "",
        score: "0"
    },
    "1100": {
        name: "",
        score: "0"
    },
    "1101": {
        name: "",
        score: "0"
    },
    "1110": {
        name: "",
        score: "0"
    },
    "1111": {
        name: "",
        score: "0"
    },

    "000": {
        name: "",
        score: "0"
    },
    "001": {
        name: "",
        score: "0"
    },
    "010": {
        name: "",
        score: "0"
    },
    "011": {
        name: "",
        score: "0"
    },
    "100": {
        name: "",
        score: "0"
    },
    "101": {
        name: "",
        score: "0"
    },
    "110": {
        name: "",
        score: "0"
    },
    "111": {
        name: "",
        score: "0"
    },

    "00": {
        name: "",
        score: "0"
    },
    "01": {
        name: "",
        score: "0"
    },
    "10": {
        name: "",
        score: "0"
    },
    "11": {
        name: "",
        score: "0"
    },

    "0": {
        name: "",
        score: "0"
    },
    "1": {
        name: "",
        score: "0"
    },

    root: {
        name: "",
        score: "4"
    }
};

var supported_years = Object.keys(teams);
var year = Math.max.apply(Math, supported_years);
var map = $.extend(true, {}, map_init);

/*
 * map serial is the brief way to store map object
 *
 * store is one of {0, 1, 2, 3, 4, q}
 * q means store ?
 *
 * first 16 number means 0000 -> 1111 store
 * next 8 number means 000 -> 111 store
 * next 4 number means 00 -> 11 store
 * next 2 number means 0 -> 1 store
 * total 30 numbers
 */
// var map_serial = '000000000000000000000000000000';

function serialize_map(map_obj) {
    var serial = "";

    for (var round = 4; round > 0; round--) {
        var team_count = Math.pow(2, round);
        for (var team = 0; team < team_count; team += 1) {
            var pos = dec2bin(team, round);
            var score = map_obj[pos]["score"];

            if (score == "?") {
                score = "q";
            }
            serial += score;
        }
    }

    return serial;
}

function unserialize_map(map_init_obj, map_str) {
    if (map_str.length < 30 || !/^[01234q]+$/.test(map_str)) {
        return map_init_obj;
    }

    var map_obj = $.extend(true, {}, map_init_obj, teams[year]);
    var index = 0;
    for (var round = 4; round > 0; round--) {
        var team_count = Math.pow(2, round);
        for (var team = 0; team < team_count; team += 1) {
            var pos = dec2bin(team, round);
            var score = map_str[index];
            if (score == "q") {
                score = "?";
            }
            map_obj[pos]["score"] = score;

            index++;
        }
    }

    return map_obj;
}

/*
 * dec number to binary number in string form
 * num, dec number
 * len, the least result string length,
 *    padding 0 if too short
 * e.g.
 *    dec2bin(10, 4)  =>   "1010"
 *    dec2bin(20, 4)  =>   "10100"
 *    dec2bin(1, 4)  =>   "0001"
 *    dec2bin(1, 2)  =>   "01"
 */
function dec2bin(num, len) {
    var bin = num.toString(2);
    var bin_len = bin.length;
    if (bin_len >= len) {
        return bin;
    }

    var padding = "0".repeat(len) + bin;
    return padding.slice(-len);
}

function logo_link(team) {
    if (team == "") {
        return "assets/logos/nba-logo-2.png";
    }
    return "assets/logos/" + team + "_logo.png";
}

function score_link(score) {
    if (score == "?") {
        return "assets/logos/score_q.png";
    }
    return "assets/logos/score_" + score + ".png";
}

function link(asset) {
    return "assets/logos/" + asset + ".png";
}

function get_opponent(pos) {
    var last = pos.slice(-1);
    var parent = pos.slice(0, -1);
    if (last == "0") {
        return parent + "1";
    } else {
        return parent + "0";
    }
}

function get_parent(pos) {
    var parent = pos.slice(0, -1);
    if (parent == "") {
        parent = "root";
    }
    return parent;
}

function refresh() {
    // construct map for bottom to top
    for (var round = 4; round > 0; round--) {
        var team_count = Math.pow(2, round);
        for (var team = 0; team < team_count; team += 1) {
            var pos = dec2bin(team, round);
            var op_pos = get_opponent(pos);
            var parent_pos = get_parent(pos);

            var name = map[pos]["name"];
            var score = map[pos]["score"];
            var op_name = map[op_pos]["name"];
            var op_score = map[op_pos]["score"];
            var parent_name = map[parent_pos]["name"];
            var parent_score = map[parent_pos]["score"];

            if (name == "") {
                continue;
            }
            if (op_name == "") {
                if (parent_name != "") {
                    map[parent_pos]["name"] = name;
                }
            }
            if (score == "4") {
                map[parent_pos]["name"] = name;
            }
        }
    }

    // set image
    $.each(map, function (pos, val) {
        var name = map[pos]["name"];
        var score = map[pos]["score"];

        var ele = $("#" + pos).svg();
        ele.attr("xlink:href", logo_link(name));
        var score_ele = $("#" + pos + "_score").svg();
        score_ele.attr("xlink:href", score_link(score));
    });

    // set crown and basketball
    var champion = "root";
    var basketball = $("#basketball").svg();
    var crown = $("#crown").svg();
    if (map[champion]["name"] == "") {
        basketball.attr("xlink:href", link("blank"));
        crown.attr("xlink:href", link("blank"));
    } else {
        basketball.attr("xlink:href", link("basketball"));
        crown.attr("xlink:href", link("crown"));
    }

    // set url query
    var newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?map=" +
        serialize_map(map) +
        "&year=" +
        year;

    if (history.pushState) {
        window.history.replaceState({ path: newurl }, "", newurl);
    }
}

function init() {
    refresh();

    // bind click event
    $("svg image").each(function (index, element) {
        var team_ele = $(element).svg();

        // only bind for team elements
        var ele_regex = /^[01]{1,4}$/;
        var id = $(element).attr("id");
        if (!ele_regex.test(id)) {
            return;
        }

        team_ele.hover(function (event) {
            var ele = $(event.target).svg();
            var id = $(event.target).attr("id");
            var name = map[id]["name"];

            if (name == "") {
                ele.css("cursor", "auto");
            } else {
                ele.css("cursor", "pointer");
            }
        });

        team_ele.click(function (event) {
            var winner = $(event.target).attr("id");
            var loser = get_opponent(winner);

            var winner_name = map[winner]["name"];
            var loser_name = map[loser]["name"];

            // if winner is nobody, return
            // if loser is nobody, winner into next round, loser still nobody, score 4:?
            // else popup to set score, if not set, do nothing
            if (winner_name == "") {
                return false;
            }

            var ele = $(event.target).svg();
            var origin_w = ele.attr("width");
            var origin_h = ele.attr("height");
            var origin_x = ele.attr("x");
            var origin_y = ele.attr("y");
            ele.animate(
                {
                    svgWidth: +origin_w + 10,
                    svgHeight: +origin_h + 10,
                    svgX: +origin_x - 5,
                    svgY: +origin_y - 5
                },
                50
            );
            ele.animate(
                {
                    svgWidth: origin_w,
                    svgHeight: origin_h,
                    svgX: origin_x,
                    svgY: origin_y
                },
                50
            );

            if (loser_name == "") {
                map[winner]["score"] = "4";
                map[loser]["score"] = "?";

                refresh();

                return false;
            }

            var modal = $("#vs").svg();
            var vs = "vs.svg";
            if (isMobile()) {
                vs = "vs-mobile.svg";
            }

            modal.load(vs, function () {
                $("#modal").modal();

                var svg_root = $("#vs_root").svg();
                svg_root.attr("width", "100%");
                svg_root.attr("height", "100%");

                // set winner loser logo
                $("#vs_winner").attr("xlink:href", logo_link(map[winner]["name"]));
                $("#vs_loser").attr("xlink:href", logo_link(map[loser]["name"]));

                $("[id^=point_]").each(function (index, element) {
                    var point_ele = $(element).svg();

                    point_ele.hover(function (event) {
                        var point = $(event.target)
                            .attr("id")
                            .slice(-1);
                        var circle = $("#circle_" + point).svg();
                        var number = $("#path_" + point).svg();
                        circle.css("cursor", "pointer");
                        number.css("cursor", "pointer");
                    });

                    point_ele.click(function (event) {
                        var point = $(event.target)
                            .attr("id")
                            .slice(-1);
                        // animate
                        var circle = $("#circle_" + point).svg();
                        circle.animate({ svgR: "+=10" }, 50);
                        circle.animate({ svgR: "-=10" }, 50);

                        // q means question mark '?'
                        if (point == "q") {
                            point = "?";
                        }
                        map[winner]["score"] = 4;
                        map[loser]["score"] = point;
                        refresh();

                        setTimeout(function () {
                            $.modal.close();
                        }, 100);
                    });
                });
            });
        });
    });
}

function isMobile() {
    return /Mobi/.test(navigator.userAgent);
}

// from https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}

$(document).ready(function () {
    // get query
    var map_serial = getQueryVariable("map");
    var which_year = getQueryVariable("year");

    // set map
    if ($.inArray(which_year, supported_years) != -1) {
        year = which_year;
    }
    if (map_serial) {
        map = unserialize_map(map_init, map_serial);
    }

    $(document).attr("title", "大胆预测" + year + "季后赛");

    var container = $("#container").svg();
    var schedule = "schedule.svg";
    if (isMobile()) {
        schedule = "schedule-mobile.svg";
    }

    container.load(schedule, function () {
        var svg_root = $("#svg8").svg();
        svg_root.attr("width", "100%");
        svg_root.attr("height", "100%");

        init();
    });
});
