 $(document).ready(function() {

     var index = 0,
         entries = [
             [
                 { label: 'PHP', url: 'http://niklasknaack.blogspot.de/', target: '_blank', fontSize: '30px', tooltip: 'Advanced' },
                 { label: 'Laravel', url: 'http://www.flashforum.de/', target: '_top', fontSize: '28px', tooltip: 'Advanced' },
                 { label: 'HTML', url: 'http://www.jqueryscript.net/', target: '_top', fontSize: '28px', tooltip: 'Advanced' },
                 { label: 'JavaScript', url: 'http://forum.jswelt.de/', target: '_top', tooltip: 'Intermediate' },
                 { label: 'CSS', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_top', tooltip: 'Intermediate' },
                 { label: 'Java', url: 'http://codepen.io/', target: '_top', fontSize: '24px', tooltip: 'Intermediate' },
                 { label: 'Algorithms', url: 'http://threejs.org/', target: '_top', tooltip: 'Intermediate' },
                 { label: 'DBMS', url: 'http://threejs.org/', target: '_top', tooltip: 'Intermediate' },
                 { label: 'Python', url: 'http://threejs.org/', target: '_top', fontSize: '21px', tooltip: 'Beginner' },
                 { label: 'MySql', url: 'http://threejs.org/', target: '_top', tooltip: 'Intermediate' },
                 { label: 'MongoDB', url: 'http://threejs.org/', target: '_top', tooltip: 'Beginner' },
                 { label: 'Firebase', url: 'http://threejs.org/', target: '_top', fontSize: '23px', tooltip: 'Intermediate' },
                 { label: 'Android', url: 'http://threejs.org/', target: '_top', tooltip: 'Intermediate' },
                 { label: 'Web Development', url: 'http://threejs.org/', target: '_top', fontSize: '26px', tooltip: 'Intermediate' },
                 { label: 'Linux', url: 'http://threejs.org/', target: '_top', tooltip: 'Beginner' },
                 { label: 'C++', url: 'http://webglstudio.org/', target: '_top', tooltip: 'Beginner' },
                 { label: 'Django', url: 'http://jscompress.com/', target: '_top', tooltip: 'Beginner' },
                 { label: 'SpringBoot', url: 'https://tinypng.com/', target: '_top', fontSize: '24px', tooltip: 'Intermediate' },
                 { label: 'AWS', url: 'http://caniuse.com/', target: '_top', fontSize: '22px', tooltip: 'Beginner' },
                 { label: 'Bootstrap', url: 'https://goo.gl/', target: '_top', tooltip: 'Advanced' },
                 { label: 'JQuery', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_top', tooltip: 'Intermediate' },
                 { label: 'Git', url: 'https://twitter.com/niklaswebdev', target: '_top', fontSize: '24px', tooltip: 'Advanced' },
                 { label: 'Github', url: 'http://nkunited.deviantart.com/', target: '_top', fontSize: '21px', tooltip: 'Advanced' },
                 { label: 'VsCode', url: 'https://www.browsersync.io/', target: '_top', tooltip: 'Intermediate' },
                 { label: 'Sublime', url: 'https://github.com/', target: '_top', tooltip: 'Intermediate' },
             ]
         ];

     var settings = {

         entries: entries[index],
         width: 500,
         height: 500,
         radius: '85%',
         radiusMin: 75,
         bgDraw: true,
         bgColor: '#050A30',
         opacityOver: 1.00,
         opacityOut: 0.05,
         opacitySpeed: 6,
         fov: 1900,
         speed: 0.3,
         fontFamily: 'NewFont',
         fontSize: '20',
         fontColor: '#fff',
         fontWeight: 'normal', //bold
         fontStyle: 'normal', //italic 
         fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
         fontToUpperCase: false,
         tooltipFontFamily: 'Oswald, Arial, sans-serif',
         tooltipFontSize: '15',
         tooltipFontColor: '#fff',
         tooltipFontWeight: 'normal', //bold
         tooltipFontStyle: 'normal', //italic 
         tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
         tooltipFontToUpperCase: false,
         tooltipTextAnchor: 'middle',
         tooltipDiffX: 0,
         tooltipDiffY: 30

     };

     //  var svg3DTagCloud = new SVG3DTagCloud(document.getElementById('holder'), settings);
     $('#skills-sphere').svg3DTagCloud(settings);


     var svg3DTagCloud = $('#skills-sphere').data('plugin_SVG3DTagCloud');


     $('#next').click(function() {
         svg3DTagCloud.animOut(function() {
             index = index + 1 >= entries.length ? 0 : index + 1;
             svg3DTagCloud.setEntries(entries[index]);
             svg3DTagCloud.animIn();
         });
     });

 });