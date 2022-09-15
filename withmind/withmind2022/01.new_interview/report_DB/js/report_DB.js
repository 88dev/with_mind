$(document).ready(function () {
  $(".main_tab_title li").click(function () {
    var idx = $(this).index();
    $(".main_tab_title li").removeClass("on");
    $(".main_tab_title li").eq(idx).addClass("on");
    $(".main_tab_cont > section").hide();
    $(".main_tab_cont > section").eq(idx).show();
  });
  $(".sub_tab_title li").click(function () {
    var idx = $(this).index();
    $(".sub_tab_title li").removeClass("on");
    $(".sub_tab_title li").eq(idx).addClass("on");
    $(".sub_tab_cont > section").hide();
    $(".sub_tab_cont > section").eq(idx).show();
  });
  $(".action_tab_title li").click(function () {
    var idx = $(this).index();
    $(".action_tab_title li").removeClass("on");
    $(".action_tab_title li").eq(idx).addClass("on");
    $(".action_tab_cont > section").hide();
    $(".action_tab_cont > section").eq(idx).show();
    $(".action_tab_video > section").hide();
    $(".action_tab_video > section").eq(idx).show();
  });
  $(".ability_biz_tab_title li").click(function () {
    var idx = $(this).index();
    $(".ability_biz_tab_title li").removeClass("on");
    $(".ability_biz_tab_title li").eq(idx).addClass("on");
    $(".ability_biz_tab_cont > section").hide();
    $(".ability_biz_tab_cont > section").eq(idx).show();
    $(".ability_biz_tab_video > section").hide();
    $(".ability_biz_tab_video > section").eq(idx).show();
  });
  $(".ability_mock_tab_title li").click(function () {
    var idx = $(this).index();
    $(".ability_mock_tab_title li").removeClass("on");
    $(".ability_mock_tab_title li").eq(idx).addClass("on");
    $(".ability_mock_tab_cont > section").hide();
    $(".ability_mock_tab_cont > section").eq(idx).show();
    $(".ability_mock_tab_video > section").hide();
    $(".ability_mock_tab_video > section").eq(idx).show();
  });

  // 응답신중성

  $(document).on("click", ".main_tab_title li", function () {
    var text = $(this).text();
    if (text == "종합분석") {
      $(".navy_reply").show();
    } else {
      $(".navy_reply").hide();
    }
  });
});

/*  영상 종합분석도(기업)  */
var video_total_chart = document.getElementById("video_total_biz_chart");
var vitChart = new Chart(video_total_chart, {
  type: "radar",
  data: {
    labels: [
      "시선분포",
      "어깨각도",
      "얼굴각도",
      "어깨움직임",
      "목소리톤",
      "목소리속도",
    ],
    datasets: [
      {
        label: "응시자",
        data: [100, 100, 100, 100, 100, 100],
        borderColor: "#0068ED",
        pointBorderColor: "#0068ED",
        pointBackgroundColor: "#fff",
        backgroundColor: "#0068ED26",
        fill: true,
      },
      {
        label: "전체평균",
        data: [15, 20, 5, 10, 15, 40],
        borderColor: "#5F4EEE",
        pointBorderColor: "#5F4EEE",
        pointBackgroundColor: "#fff",
        fill: false,
      },
      {
        label: "그룹평균",
        data: [30, 40, 25, 1, 5, 30],
        borderColor: "#FFAA30",
        pointBorderColor: "#FFAA30",
        pointBackgroundColor: "#fff",
        fill: false,
      },
    ],
  },
  options: {
    responsive: false,
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scale: {
      pointLabels: {
        fontSize: 0,
        display: false,
      },
      angleLines: {
        display: false,
      },
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 100,
        display: false,
      },
    },
  },
});

/*  영상 종합분석도(모의)  */
var video_total_chart = document.getElementById("video_total_mock_chart");
var vitChart = new Chart(video_total_chart, {
  type: "radar",
  data: {
    labels: [
      "시선분포",
      "어깨각도",
      "얼굴각도",
      "어깨움직임",
      "목소리톤",
      "목소리속도",
    ],
    datasets: [
      {
        label: "응시자",
        data: [100, 100, 100, 100, 100, 100],
        borderColor: "#0068ED",
        pointBorderColor: "#0068ED",
        pointBackgroundColor: "#fff",
        backgroundColor: "#0068ED26",
        fill: true,
      },
      {
        label: "전체평균",
        data: [15, 20, 5, 10, 15, 40],
        borderColor: "#5F4EEE",
        pointBorderColor: "#5F4EEE",
        pointBackgroundColor: "#fff",
        fill: false,
      },
      {
        label: "그룹평균",
        data: [30, 40, 25, 1, 5, 30],
        borderColor: "#FFAA30",
        pointBorderColor: "#FFAA30",
        pointBackgroundColor: "#fff",
        fill: false,
      },
    ],
  },
  options: {
    responsive: false,
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scale: {
      pointLabels: {
        fontSize: 0,
        display: false,
      },
      angleLines: {
        display: false,
      },
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 100,
        display: false,
      },
    },
  },
});

$(document).ready(function () {
  // 눈동자 움직임
  $(window).scroll(function () {
    // 종합 등급 분포도
    if ($(window).scrollTop() > 800) {
      $(".pupil").addClass("x3");
    }
  });

  $(".red_1_1").css("opacity", "0.062");
  $(".red_1_2").css("opacity", "0.196");
  $(".red_1_3").css("opacity", "0.058");
  $(".red_2_1").css("opacity", "0.046");
  $(".red_2_2").css("opacity", "0.279");
  $(".red_2_3").css("opacity", "0.537");
  $(".red_3_1").css("opacity", "0");
  $(".red_3_2").css("opacity", "0");
  $(".red_3_3").css("opacity", "0");

  $(".purple_1_1").css("opacity", "0.35");
  $(".purple_1_2").css("opacity", "0.3");
  $(".purple_1_3").css("opacity", "0.4");
  $(".purple_2_1").css("opacity", "0");
  $(".purple_2_2").css("opacity", "0.5");
  $(".purple_2_3").css("opacity", "0");
  $(".purple_3_1").css("opacity", "0");
  $(".purple_3_2").css("opacity", "0");
  $(".purple_3_3").css("opacity", "0");

  $(".yellow_1_1").css("opacity", "0.35");
  $(".yellow_1_2").css("opacity", "0.3");
  $(".yellow_1_3").css("opacity", "0.4");
  $(".yellow_2_1").css("opacity", "0");
  $(".yellow_2_2").css("opacity", "0.5");
  $(".yellow_2_3").css("opacity", "0");
  $(".yellow_3_1").css("opacity", "0");
  $(".yellow_3_2").css("opacity", "0");
  $(".yellow_3_3").css("opacity", "0");

  // 자세각도
  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      $("#head_angle").animate(
        {
          rotate: "6.674deg",
        },
        3000
      );
      $("#head_shoulder").animate(
        {
          rotate: "0.013deg",
        },
        3000
      );
    }
  });
});

//응답 긴장도
/* 심박  > 응답긴장도 */
new Chart(document.getElementById("answer_tension"), {
  type: "line",
  data: {
    labels: ["Q2(질문2)", "Q2(질문3)", "Q2(질문4)"],
    datasets: [
      {
        data: [10, 0, 30],
        borderColor: "#F65454",
        pointBackgroundColor: "#F65454",
        fill: false,
        borderWidth: 2,
        lineTension: 0,
      },
      {
        data: [5, 13, 40],
        borderColor: "#158FE4",
        pointBackgroundColor: "#158FE4",
        fill: false,
        borderWidth: 2,
        lineTension: 0,
      },
    ],
  },
  options: {
    responsive: false,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: false,
          scaleLabel: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMin: 0,
          },
          scaleLabel: {
            display: false,
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 100,
        right: 100,
        top: 25,
        bottom: 5,
      },
    },
  },
});
//면접 긴장도
$(document).ready(function () {
  $(".heart_pin").addClass("heart_pin3");
});

// 높은 긴장도 질문
new Chart(document.getElementById("high_tension"), {
  type: "line",
  data: {
    labels: [
      "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
    ],
    datasets: [
      {
        data: [
          0, 10, 15, 30, 40, 55, 30, 20, 50, 80, 0, 10, 15, 30, 40, 55, 30, 20, 50, 80, 0, 10, 15, 30, 40, 55, 30, 20, 50, 80, 0, 10, 15, 30, 40, 55, 30, 20, 50, 80, 0, 10, 15, 30, 40, 55, 30, 20, 50, 80, 0, 10, 15, 30, 40, 55, 30, 20, 50, 80,
        ],
        borderColor: "#F65454",
        pointRadius: 0,
        fill: false,
        borderWidth: 2,
        lineTension: 1,
      },
    ],
  },
  options: {
    responsive: false,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: false,
          scaleLabel: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMin: 0,
          },
          scaleLabel: {
            display: false,
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 25,
        bottom: 5,
      },
    },
  },
});
// 낮은 긴장도 질문
new Chart(document.getElementById("low_tension"), {
  type: "line",
  data: {
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        data: [
          0, 10, 15, 30, 40, 55, 30, 20, 50, 80, 0, 10, 15, 30, 40, 55, 30, 20,
          50, 80, 0, 10, 15, 30, 40, 55, 30, 20, 50, 80, 0, 10, 15, 30, 40, 55,
          30, 20, 50, 80, 0, 10, 15, 30, 40, 55, 30, 20, 50, 80, 0, 10, 15, 30,
          40, 55, 30, 20, 50, 80,
        ],
        borderColor: "#158FE4",
        pointRadius: 0,
        fill: false,
        borderWidth: 2,
        lineTension: 0,
      },
    ],
  },
  options: {
    responsive: false,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: false,
          scaleLabel: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMin: 0,
          },
          scaleLabel: {
            display: false,
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 25,
        bottom: 5,
      },
    },
  },
});

/*  역량 세부 분석도 1  */
var ability_detail_1 = document.getElementById("ability_detail_1");
var ability_detail_1 = new Chart(ability_detail_1, {
  type: "radar",
  data: {
    labels: ["주도성", "업무몰입", "헌신", "로열티"],
    datasets: [
      {
        label: "응시자",
        data: [100, 75, 50, 25],
        borderColor: "#0068ED",
        pointBorderColor: "#0068ED",
        pointBackgroundColor: "#fff",
        backgroundColor: "#0068ED26",
        fill: true,
      },
    ],
  },
  options: {
    responsive: false,
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scale: {
      pointLabels: {
        fontSize: 0,
        display: false,
      },
      angleLines: {
        display: false,
      },
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 100,
        display: false,
      },
    },
  },
});
/*  역량 세부 분석도 2  */
var ability_detail_2 = document.getElementById("ability_detail_2");
var ability_detail_2 = new Chart(ability_detail_2, {
  type: "radar",
  data: {
    labels: ["주도성", "업무몰입", "헌신", "로열티"],
    datasets: [
      {
        label: "응시자",
        data: [100, 75, 50, 25],
        borderColor: "#0068ED",
        pointBorderColor: "#0068ED",
        pointBackgroundColor: "#fff",
        backgroundColor: "#0068ED26",
        fill: true,
      },
    ],
  },
  options: {
    responsive: false,
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scale: {
      pointLabels: {
        fontSize: 0,
        display: false,
      },
      angleLines: {
        display: false,
      },
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 100,
        display: false,
      },
    },
  },
});
