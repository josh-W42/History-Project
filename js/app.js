var data = {
    lapdArrestsConfig: {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Total Arrests',
            backgroundColor: 'rgba(0,0,0,1)',
            data:  [
            {
              x: 1887,
              y: 5194
            },
            {
              x: 1888,
              y: 5994
            },
            {
              x: 1889,
              y: 3407
            },
            {
              x: 1890,
              y: 3292
            },
            {
              x: 1891,
              y: 2530
            },
            {
              x: 1892,
              y: 2303
            },
            {
              x: 1893,
              y: 3077
            },
            {
              x: 1894,
              y: 4022
            },
            {
              x: 1895,
              y: 4862
            },
            {
              x: 1896,
              y: 4818
            },
            {
              x: 1897,
              y: 4649
            },
            {
              x: 1898,
              y: 4369
            },
            {
              x: 1899,
              y: 3878
            },
            {
              x: 1900,
              y: 3961
            },
            {
              x: 1901,
              y: 5898
            },
            {
              x: 1902,
              y: 7613
            },
            {
              x: 1903,
              y: 9320
            },
            {
              x: 1904,
              y: 8968
            },
            {
              x: 1905,
              y: 9904
            },
            {
              x: 1906,
              y: 12649
            },
          ]
          },
          {
            label: 'Drunk',
            backgroundColor: 'rgba(0,0,128,1)',
            data: [
              {
                x: 1887,
                y: 489
              },
              {
                x: 1888,
                y: 1734
              },
              {
                x: 1889,
                y: 912
              },
              {
                x: 1890,
                y: 815
              },
              {
                x: 1891,
                y: 980
              },
              {
                x: 1892,
                y: 940
              },
              {
                x: 1893,
                y: 1075
              },
              {
                x: 1894,
                y: 1139
              },
              {
                x: 1895,
                y: 1784
              },
              {
                x: 1896,
                y: 1805
              },
              {
                x: 1897,
                y: 1883
              },
              {
                x: 1898,
                y: 1967
              },
              {
                x: 1899,
                y: 3878
              },
              {
                x: 1900,
                y: 1773
              },
              {
                x: 1901,
                y: 3006
              },
              {
                x: 1902,
                y: 4056
              },
              {
                x: 1903,
                y: 5417
              },
              {
                x: 1904,
                y: 4659
              },
              {
                x: 1905,
                y: 5519
              },
              {
                x: 1906,
                y: 7758
              },
            ]
          },
          {
            label: 'Vagrancy',
            backgroundColor: 'rgba(128,0,0,1)',
            data: [
              {
                x: 1887,
                y: 199
              },
              {
                x: 1888,
                y: 397
              },
              {
                x: 1889,
                y: 337
              },
              {
                x: 1890,
                y: 214
              },
              {
                x: 1891,
                y: 162
              },
              {
                x: 1892,
                y: 102
              },
              {
                x: 1893,
                y: 389
              },
              {
                x: 1894,
                y: 740
              },
              {
                x: 1895,
                y: 901
              },
              {
                x: 1896,
                y: 565
              },
              {
                x: 1897,
                y: 309
              },
              {
                x: 1898,
                y: 316
              },
              {
                x: 1899,
                y: 335
              },
              {
                x: 1900,
                y: 283
              },
              {
                x: 1901,
                y: 471
              },
              {
                x: 1902,
                y: 502
              },
              {
                x: 1903,
                y: 528
              },
              {
                x: 1904,
                y: 490
              },
              {
                x: 1905,
                y: 610
              },
              {
                x: 1906,
                y: 422
              },
            ]
          },
          {
            label: 'Disorderly Conduct',
            backgroundColor: 'rgba(0,128,0,1)',
            data: [
              {
                x: 1887,
                y: 1220
              },
              {
                x: 1888,
                y: 319
              },
              {
                x: 1889,
                y: 364
              },
              {
                x: 1890,
                y: 310
              },
              {
                x: 1891,
                y: 281
              },
              {
                x: 1892,
                y: 258
              },
              {
                x: 1893,
                y: 321
              },
              {
                x: 1894,
                y: 467
              },
              {
                x: 1895,
                y: 347
              },
              {
                x: 1896,
                y: 558
              },
              {
                x: 1897,
                y: 439
              },
              {
                x: 1898,
                y: 426
              },
              {
                x: 1899,
                y: 521
              },
              {
                x: 1900,
                y: 411
              },
              {
                x: 1901,
                y: 555
              },
              {
                x: 1902,
                y: 461
              },
              {
                x: 1903,
                y: 585
              },
              {
                x: 1904,
                y: 527
              },
              {
                x: 1905,
                y: 547
              },
              {
                x: 1906,
                y: 712
              },
            ]
          },
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Arrests by LAPD: 1887-1906',
        },
      },
    },

    lapdPercentagesConfig: {
      type: 'bar',
      data: {
        datasets: [
          {
            data: [37, 47, 56, 58, 62, 57, 65, 68, 70, 67],
            backgroundColor: [
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
            ],
          },
        ],
        labels: [
          '1887',
          '1889',
          '1891',
          '1893',
          '1895',
          '1897',
          '1899',
          '1901',
          '1903',
          '1905'
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Three Leading Public Order Charges as a Percentage of Total Arrests'
        },
        legend: {
          display: false,
        },
      }
    },

    lapdArrestsRGConfig: {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Total Arrests',
            backgroundColor: 'rgb(0,0,0,1)',
            data: [
              {
                x: 1894,
                y: 4022,
              },
              {
                x: 1895,
                y: 4862,
              },
              {
                x: 1896,
                y: 4818,
              },
              {
                x: 1897,
                y: 4649,
              },
              {
                x: 1898,
                y: 4369,
              },
              {
                x: 1899,
                y: 3878,
              },
              {
                x: 1900,
                y: 3961,
              },
              {
                x: 1901,
                y: 5898,
              },
              {
                x: 1902,
                y: 7613,
              },
              {
                x: 1903,
                y: 9320,
              },
              {
                x: 1904,
                y: 8968,
              },
              {
                x: 1905,
                y: 9904,
              },
              {
                x: 1906,
                y: 12649,
              },
            ],
          },
          {
            label: 'Women',
            backgroundColor: 'rgb(255,0,0,1)',
            data: [
              {
                x: 1894,
                y: 174,
              },
              {
                x: 1895,
                y: 240,
              },
              {
                x: 1896,
                y: 252,
              },
              {
                x: 1897,
                y: 246,
              },
              {
                x: 1898,
                y: 252,
              },
              {
                x: 1899,
                y: 256,
              },
              {
                x: 1900,
                y: 164,
              },
              {
                x: 1901,
                y: 220,
              },
              {
                x: 1902,
                y: 224,
              },
              {
                x: 1903,
                y: 317,
              },
              {
                x: 1904,
                y: 345,
              },
              {
                x: 1905,
                y: 108,
              },
              {
                x: 1906,
                y: 550,
              },
            ]
          },
          {
            label: 'African Americans',
            backgroundColor: 'rgb(0,255,0,1)',
            data: [
              {
                x: 1894,
                y: 179,
              },
              {
                x: 1895,
                y: 185,
              },
              {
                x: 1896,
                y: 165,
              },
              {
                x: 1897,
                y: 157,
              },
              {
                x: 1898,
                y: 107,
              },
              {
                x: 1899,
                y: 184,
              },
              {
                x: 1900,
                y: 144,
              },
              {
                x: 1901,
                y: 172,
              },
              {
                x: 1902,
                y: 151,
              },
              {
                x: 1903,
                y: 267,
              },
              {
                x: 1904,
                y: 149,
              },
              {
                x: 1905,
                y: 82,
              },
              {
                x: 1906,
                y: 490,
              },
            ]
          },
          {
            label: 'Asians',
            backgroundColor: 'rgb(0,0,255,1)',
            data: [
              {
                x: 1894,
                y: 112,
              },
              {
                x: 1895,
                y: 93,
              },
              {
                x: 1896,
                y: 225,
              },
              {
                x: 1897,
                y: 276,
              },
              {
                x: 1898,
                y: 94,
              },
              {
                x: 1899,
                y: 118,
              },
              {
                x: 1900,
                y: 71,
              },
              {
                x: 1901,
                y: 71,
              },
              {
                x: 1902,
                y: 41,
              },
              {
                x: 1903,
                y: 267,
              },
              {
                x: 1904,
                y: 67,
              },
              {
                x: 1905,
                y: 8,
              },
              {
                x: 1906,
                y: 54,
              },
            ]
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Arrests by Race and Gender, for the LA City Jail',
        },
      },
    },

    lapdPercentagesRGConfig: {
      type: 'bar',
      data: {
        datasets: [
          {
            data: [88, 89, 87, 85, 90, 86, 91.5, 91, 92.1, 95, 93, 94, 98, 91.4],
            backgroundColor: [
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
            ],
          },
        ],
        labels: [
          '1894',
          '1895',
          '1896',
          '1897',
          '1898',
          '1899',
          '1900',
          '1901',
          '1902',
          '1903',
          '1904',
          '1905',
          '1906',
        ],
      },
      options: {
        title: {
          display: true,
          text: 'White Males in City Jail as a Percentage of Total Arrests',
        },
        legend: {
          display: false,
        },
      }
    },

    meanLenImmConfig: {
      type: 'bar',
      data: {
        datasets: [
          {
            data: [58.3, 45.3, 52.2, 64.3, 75.9, 62.8],
            backgroundColor: [
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.5)',
            ],
          },
        ],
        labels: [
          '1931',
          '1932',
          '1933',
          '1934',
          '1935',
          '1936',
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Average Length of Sentence for Immigration Offenders: 1931-1936',
        },
        legend: {
          display: false,
        },
      },
    },

    lapdArrestsMexConfig: {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Total Arrests',
            backgroundColor: 'rgb(0,0,0,1)',
            data: [
              {
                x: 1928,
                y: 5007,
              },
              {
                x: 1929,
                y: 3915,
              },
              {
                x: 1930,
                y: 3048,
              },
              {
                x: 1931,
                y: 2782,
              },
              {
                x: 1932,
                y: 2991,
              },
              {
                x: 1933,
                y: 3127,
              },
              {
                x: 1934,
                y: 8604,
              },
              {
                x: 1935,
                y: 9407,
              },
              {
                x: 1936,
                y: 10712,
              },
              {
                x: 1937,
                y: 9182,
              },
              {
                x: 1938,
                y: 8823,
              },
              {
                x: 1939,
                y: 8729,
              },
            ],
          },
          {
            label: 'Person Charges',
            backgroundColor: 'rgb(255,0,0,1)',
            data: [
              {
                x: 1928,
                y: 246,
              },
              {
                x: 1929,
                y: 240,
              },
              {
                x: 1930,
                y: 157,
              },
              {
                x: 1931,
                y: 228,
              },
              {
                x: 1932,
                y: 221,
              },
              {
                x: 1933,
                y: 206,
              },
              {
                x: 1934,
                y: 487,
              },
              {
                x: 1935,
                y: 396,
              },
              {
                x: 1936,
                y: 456,
              },
              {
                x: 1937,
                y: 499,
              },
              {
                x: 1938,
                y: 593,
              },
              {
                x: 1939,
                y: 658,
              },
            ],
          },
          {
            label: 'Property Charges',
            backgroundColor: 'rgb(0,255,0,1)',
            data: [
              {
                x: 1928,
                y: 295,
              },
              {
                x: 1929,
                y: 343,
              },
              {
                x: 1930,
                y: 328,
              },
              {
                x: 1931,
                y: 228,
              },
              {
                x: 1932,
                y: 426,
              },
              {
                x: 1933,
                y: 459,
              },
              {
                x: 1934,
                y: 773,
              },
              {
                x: 1935,
                y: 615,
              },
              {
                x: 1936,
                y: 527,
              },
              {
                x: 1937,
                y: 670,
              },
              {
                x: 1938,
                y: 695,
              },
              {
                x: 1939,
                y: 793,
              },
            ],
          },
          {
            label: 'Public Moral Charges',
            backgroundColor: 'rgb(0,0,255,1)',
            data: [
              {
                x: 1928,
                y: 4466,
              },
              {
                x: 1929,
                y: 3332,
              },
              {
                x: 1930,
                y: 3048,
              },
              {
                x: 1931,
                y: 2326,
              },
              {
                x: 1932,
                y: 2344,
              },
              {
                x: 1933,
                y: 2462,
              },
              {
                x: 1934,
                y: 7344,
              },
              {
                x: 1935,
                y: 8396,
              },
              {
                x: 1936,
                y: 9729,
              },
              {
                x: 1937,
                y: 8013,
              },
              {
                x: 1938,
                y: 7535,
              },
              {
                x: 1939,
                y: 7278,
              },
            ],
          },
        ],
      },
    },
};

function init() {

    document.querySelector(".navToggle").addEventListener("click", function() {
      let nav = document.querySelector(".mainNav")
      if (nav.classList.contains("closed")) {
          nav.classList.remove("closed");
      } else {
          nav.classList.add("closed");
      }
    });

    document.querySelectorAll(".hiddenContent").forEach(function (evnt) {
      evnt = evnt.parentNode;
      evnt.addEventListener("click", function (e) {
        let content = evnt.children[1];
        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
            evnt.classList.add("open");
        } else {
          evnt.classList.remove("open");
          content.classList.add("hidden");
        }
      });
    });

    document.querySelectorAll(".eventMarker").forEach(function (marker) {
      marker.addEventListener('click', function (e) {
        let targetNode = document.querySelector(`${marker.dataset.event}`);
        console.log(targetNode);
        let scrollTarget;
        let bodyRect = document.body.getBoundingClientRect();
        let nodeRect = targetNode.getBoundingClientRect();
        let offset = nodeRect.top - bodyRect.top;
        scrollTarget = offset - 200;
        $('html, body').animate({ scrollTop: scrollTarget }, 1500);
      });
    });

    let ctxArrests = document.querySelector("#lapdArrests").getContext('2d');
    window.lapdArrests = new Chart(ctxArrests, data.lapdArrestsConfig);

    let ctxPercents = document.querySelector('#lapdPercents').getContext('2d');
    window.lapdPercents = new Chart(ctxPercents, data.lapdPercentagesConfig);

    let ctxArrestsRG = document.querySelector('#lapdArrestsRG').getContext('2d');
    window.lapdArrestsRG = new Chart(ctxArrestsRG, data.lapdArrestsRGConfig);

    let ctxPercentsRG = document.querySelector('#lapdPercentsRG').getContext('2d');
    window.lapdPercentsRG = new Chart(ctxPercentsRG, data.lapdPercentagesRGConfig);

    let ctxMeanLenImm = document.querySelector('#meanLenImmigration').getContext('2d');
    window.lapdMeanLenImm = new Chart(ctxMeanLenImm, data.meanLenImmConfig);

    let ctxArrestsMex = document.querySelector('#lapdArrestsMex').getContext('2d');
    window.lapdArrestsMex = new Chart(ctxArrestsMex, data.lapdArrestsMexConfig);
}



init();
