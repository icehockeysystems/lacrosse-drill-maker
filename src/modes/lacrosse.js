let variants = [];

variants.push({
  name: "Mens Full Field",
  background: `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" fill="none">
<rect width="800" height="500" fill="white"/>
<line x1="37" y1="53" x2="762" y2="53" stroke="black" stroke-width="2"/>
<line x1="761" y1="54" x2="761" y2="447" stroke="black" stroke-width="2"/>
<line x1="762" y1="448" x2="37" y2="448" stroke="black" stroke-width="2"/>
<line x1="38" y1="447" x2="38" y2="54" stroke="black" stroke-width="2"/>
<line x1="37" y1="53" x2="762" y2="53" stroke="#CCCCCC" stroke-width="2"/>
<line x1="761" y1="54" x2="761" y2="447" stroke="#CCCCCC" stroke-width="2"/>
<line x1="762" y1="448" x2="37" y2="448" stroke="#CCCCCC" stroke-width="2"/>
<line x1="38" y1="447" x2="38" y2="54" stroke="#CCCCCC" stroke-width="2"/>
<line x1="237" y1="53" x2="237" y2="447" stroke="#CCCCCC" stroke-width="2"/>
<line x1="400" y1="54" x2="400" y2="447" stroke="#CCCCCC" stroke-width="2"/>
<line x1="564" y1="53" x2="564" y2="447" stroke="#CCCCCC" stroke-width="2"/>
<line x1="320" y1="134" x2="482" y2="134" stroke="#CCCCCC" stroke-width="2"/>
<line x1="320" y1="367" x2="482" y2="367" stroke="#CCCCCC" stroke-width="2"/>
<line x1="391.707" y1="241.293" x2="407.263" y2="256.849" stroke="#CCCCCC" stroke-width="2"/>
<line x1="407.263" y1="241.707" x2="391.707" y2="257.263" stroke="#CCCCCC" stroke-width="2"/>
<line x1="762" y1="136" x2="563" y2="136" stroke="#CCCCCC" stroke-width="2" stroke-dasharray="6 6"/>
<line x1="762" y1="369" x2="563" y2="369" stroke="#CCCCCC" stroke-width="2" stroke-dasharray="6 6"/>
<line x1="238" y1="136" x2="39" y2="136" stroke="#CCCCCC" stroke-width="2" stroke-dasharray="6 6"/>
<line x1="238" y1="369" x2="39" y2="369" stroke="#CCCCCC" stroke-width="2" stroke-dasharray="6 6"/>
<line x1="119.5" y1="244" x2="119.5" y2="257" stroke="#CCCCCC" stroke-width="3"/>
<circle cx="119.5" cy="250.5" r="20.5" stroke="#CCCCCC" stroke-width="2"/>
<line x1="679.5" y1="244" x2="679.5" y2="257" stroke="#CCCCCC" stroke-width="3"/>
<circle cx="679.5" cy="250.5" r="20.5" stroke="#CCCCCC" stroke-width="2"/>
<line x1="37" y1="53" x2="762" y2="53" stroke="#CCCCCC" stroke-width="2"/>
<line x1="761" y1="54" x2="761" y2="447" stroke="#CCCCCC" stroke-width="2"/>
<line x1="762" y1="448" x2="37" y2="448" stroke="#CCCCCC" stroke-width="2"/>
<line x1="38" y1="447" x2="38" y2="54" stroke="#CCCCCC" stroke-width="2"/>
<line x1="391.707" y1="241.293" x2="407.263" y2="256.849" stroke="#CCCCCC" stroke-width="2"/>
</svg>`,
  logo: {
    position: [0,0],
    width: 0,
  },
});

variants.push({
  name: "Women's Full Field",
  background: `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" fill="none">
<rect width="800" height="500" fill="white"/>
<line x1="238" y1="52" x2="238" y2="446" stroke="#CCCCCC" stroke-width="2"/>
<line x1="565" y1="52" x2="565" y2="446" stroke="#CCCCCC" stroke-width="2"/>
<line x1="100.5" y1="243" x2="100.5" y2="256" stroke="#CCCCCC" stroke-width="3"/>
<circle cx="100.5" cy="249.5" r="20.5" stroke="#CCCCCC" stroke-width="2"/>
<line x1="701.5" y1="243" x2="701.5" y2="256" stroke="#CCCCCC" stroke-width="3"/>
<circle cx="701.5" cy="249.5" r="20.5" stroke="#CCCCCC" stroke-width="2"/>
<line x1="38" y1="52" x2="763" y2="52" stroke="#CCCCCC" stroke-width="2"/>
<line x1="762" y1="53" x2="762" y2="446" stroke="#CCCCCC" stroke-width="2"/>
<line x1="763" y1="447" x2="38" y2="447" stroke="#CCCCCC" stroke-width="2"/>
<line x1="39" y1="446" x2="39" y2="53" stroke="#CCCCCC" stroke-width="2"/>
<circle cx="401" cy="248" r="61" stroke="#CCCCCC" stroke-width="2"/>
<line x1="400.5" y1="243" x2="400.5" y2="256" stroke="#CCCCCC" stroke-width="3"/>
<line x1="101" y1="151" x2="101" y2="229" stroke="#CCCCCC" stroke-width="2"/>
<line x1="101" y1="270" x2="101" y2="348" stroke="#CCCCCC" stroke-width="2"/>
<line x1="101.284" y1="228.302" x2="140.284" y2="188.302" stroke="#CCCCCC" stroke-width="2"/>
<line x1="101.707" y1="270.293" x2="140.707" y2="309.293" stroke="#CCCCCC" stroke-width="2"/>
<line x1="703" y1="149.987" x2="704" y2="228.987" stroke="#CCCCCC" stroke-width="2"/>
<line x1="704" y1="270.013" x2="703" y2="349.013" stroke="#CCCCCC" stroke-width="2"/>
<line x1="703.31" y1="228.723" x2="659.31" y2="186.723" stroke="#CCCCCC" stroke-width="2"/>
<line x1="703.699" y1="270.716" x2="661.699" y2="311.716" stroke="#CCCCCC" stroke-width="2"/>
<path d="M101 151C133.333 150.667 198 169.9 198 249.5C196.833 282.333 175.8 348 101 348" stroke="#CCCCCC" stroke-width="2"/>
<path d="M702 347.996C669.667 348.329 605 329.096 605 249.496C606.167 216.662 627.2 150.996 702 150.996" stroke="#CCCCCC" stroke-width="2"/>
<path d="M140 189.5C150.833 196.167 172.5 217.3 172.5 248.5C172.5 279.7 150.833 301.833 140 309" stroke="#CCCCCC" stroke-width="2"/>
<path d="M660.5 187C650 194.5 629 217.4 629 249C629 280.6 651.333 303.833 662.5 311.5" stroke="#CCCCCC" stroke-width="2"/>
<line x1="101" y1="321" x2="110" y2="321" stroke="#CCCCCC" stroke-width="2"/>
<line x1="101" y1="177" x2="110" y2="177" stroke="#CCCCCC" stroke-width="2"/>
<line x1="694" y1="321" x2="703" y2="321" stroke="#CCCCCC" stroke-width="2"/>
<line x1="694" y1="177" x2="703" y2="177" stroke="#CCCCCC" stroke-width="2"/>
<line x1="131.789" y1="178.614" x2="124.789" y2="187.614" stroke="#CCCCCC" stroke-width="2"/>
<line x1="679.147" y1="311.648" x2="671.762" y2="320.334" stroke="#CCCCCC" stroke-width="2"/>
<line x1="678.161" y1="185.929" x2="670.278" y2="177.691" stroke="#CCCCCC" stroke-width="2"/>
<line x1="124.525" y1="310.162" x2="132.036" y2="318.74" stroke="#CCCCCC" stroke-width="2"/>
<line x1="157.664" y1="196.747" x2="148.664" y2="204.747" stroke="#CCCCCC" stroke-width="2"/>
<line x1="172.476" y1="220.759" x2="161.246" y2="225.106" stroke="#CCCCCC" stroke-width="2"/>
<line x1="178.056" y1="249" x2="166.016" y2="249.193" stroke="#CCCCCC" stroke-width="2"/>
<line x1="172.984" y1="276.034" x2="161.66" y2="271.94" stroke="#CCCCCC" stroke-width="2"/>
<line x1="158.246" y1="300.832" x2="149.328" y2="292.741" stroke="#CCCCCC" stroke-width="2"/>
<line x1="652.246" y1="204.832" x2="643.328" y2="196.741" stroke="#CCCCCC" stroke-width="2"/>
<line x1="639.814" y1="224.974" x2="628.445" y2="221.006" stroke="#CCCCCC" stroke-width="2"/>
<line x1="634.718" y1="248.902" x2="622.678" y2="249.066" stroke="#CCCCCC" stroke-width="2"/>
<line x1="639.428" y1="272.916" x2="628.402" y2="277.755" stroke="#CCCCCC" stroke-width="2"/>
<line x1="651.628" y1="293.089" x2="642.75" y2="301.224" stroke="#CCCCCC" stroke-width="2"/>
</svg>
  `,
  logo: {
    position: [0,0],
    width: 0,
  },
});
variants.push({
  name: "Box Lacrosse",
  background: `
<svg id="a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <rect width="800" height="500" style="fill: #fff;"/>
  <rect x="40" y="82" width="721" height="338" rx="73" ry="73" style="fill: none; stroke: #ccc; stroke-width: 3px;"/>
  <line x1="401" y1="83.4343125" x2="401" y2="417.8350309" style="fill: none; stroke: #ccc;"/>
  <line x1="564" y1="80" x2="564" y2="422" style="fill: none; stroke: #ccc;"/>
  <line x1="232" y1="80" x2="232" y2="422" style="fill: none; stroke: #ccc;"/>
  <circle cx="401" cy="249" r="11" style="fill: none; stroke: #ccc; stroke-dasharray: 2 2;"/>
  <circle cx="401" cy="249" r="38.5" style="fill: none; stroke: #ccc;"/>
  <line x1="244.5" y1="83" x2="244.5" y2="102" style="fill: none; stroke: #ccc;"/>
  <line x1="553.5" y1="83" x2="553.5" y2="102" style="fill: none; stroke: #ccc;"/>
  <line x1="244" y1="101.5" x2="401" y2="101.5" style="fill: none; stroke: #ccc;"/>
  <line x1="401" y1="101.5" x2="553" y2="101.5" style="fill: none; stroke: #ccc;"/>
  <path d="M364,419c1.4509888-9.6669922,10.8819885-29,37-29" style="fill: none; stroke: #ccc;"/>
  <path d="M441.5,419.5c-2.3330078-9.8330078-13.6000061-29.5-40-29.5" style="fill: none; stroke: #ccc;"/>
  <path d="M101.5,213c-12.4000015,0-20.5,5.3329926-23,8v59.5c7.1999969,6.3999939,18.3332977,7.6669922,23,7.5,29.6000061,0,37.6670074-24.6669922,38-37,0-30.8000031-25.3330002-38.1670074-38-38Z" style="fill: none; stroke: #ccc;"/>
  <line x1="102" y1="213" x2="102" y2="288" style="fill: none; stroke: #ccc;"/>
  <line x1="101.7330017" y1="238.6799927" x2="88.7328033" y2="252.6799927" style="fill: none; stroke: #ccc;"/>
  <line x1="102.2929993" y1="265.7070007" x2="88.2929001" y2="251.7070007" style="fill: none; stroke: #ccc;"/>
  <path d="M703,288.0140076c12.4000244,0,20.5-5.3330078,23-8v-59.5c-7.2000122-6.4000092-18.3330078-7.6670074-23-7.5-29.5999756,0-37.6669922,24.6669922-38,37,0,30.7999878,25.3330078,38.1669922,38,38Z" style="fill: none; stroke: #ccc;"/>
  <line x1="702.5" y1="288.0140076" x2="702.5" y2="213.0140076" style="fill: none; stroke: #ccc;"/>
  <line x1="702.7670288" y1="262.3330078" x2="715.7670288" y2="248.3329926" style="fill: none; stroke: #ccc;"/>
  <line x1="702.2069702" y1="235.3070068" x2="716.2069702" y2="249.3070068" style="fill: none; stroke: #ccc;"/>
</svg>
  `,
  logo: {
    position: [0,0],
    width: 0,
  },
});
variants.push({
  name: "Men's Half Field",
  background: `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" fill="none">
<rect width="800" height="500" fill="white"/>
<line x1="143" y1="500" x2="143" y2="30" stroke="#CCCCCC" stroke-width="2"/>
<line opacity="0.2" x1="655" y1="500" x2="655" y2="32" stroke="black" stroke-width="2"/>
<line x1="656" y1="31" x2="144" y2="31" stroke="#CCCCCC" stroke-width="2"/>
<line x1="144" y1="287" x2="656" y2="287" stroke="#CCCCCC" stroke-width="2"/>
<circle cx="400" cy="135" r="27" stroke="#CCCCCC" stroke-width="2"/>
<line x1="390" y1="135.5" x2="408" y2="135.5" stroke="#CCCCCC"/>
<line x1="250" y1="398" x2="250" y2="498" stroke="#CCCCCC" stroke-width="2"/>
<line x1="552" y1="397" x2="552" y2="498" stroke="#CCCCCC" stroke-width="2"/>
<line x1="550" y1="32" x2="550" y2="287" stroke="#CCCCCC" stroke-width="2" stroke-dasharray="5 5"/>
<line x1="248" y1="32" x2="248" y2="287" stroke="#CCCCCC" stroke-width="2" stroke-dasharray="5 5"/>
</svg>
  `,
  logo: {
    position: [0,0],
    width: 0,
  },
});
variants.push({
  name: "Women's Half Field",
  background: `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" fill="none">
      <rect width="800" height="500" style="fill: #fff;"/>
      <line x1="641" y1="300.9490051" x2="158" y2="300.9490051" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="407.1260071" y1="132.1929932" x2="391.2070007" y2="132.1929932" style="fill: none; stroke: #ccc; stroke-width: 3px;"/>
      <circle cx="399.1670227" cy="132.5299988" r="25.1016922" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <ellipse cx="400.9999771" cy="500.9490051" rx="73.9999771" ry="75" style="fill: none; isolation: isolate; opacity: .2; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="407" y1="499.4490051" x2="391" y2="499.4490051" style="fill: none; stroke: #ccc; stroke-width: 3px;"/>
      <line x1="520" y1="132.9490051" x2="424" y2="132.9490051" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="375" y1="132.9490051" x2="278" y2="132.9490051" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="424.9660034" y1="133.6499939" x2="473.9450073" y2="181.4049988" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="373.5480042" y1="133.848999" x2="325.7929993" y2="181.6029968" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <path d="M519.9949951,132.9490051c.4089966,39.6669922-23.21698,119-120.9979858,119-40.3320007-1.4309998-120.9970093-27.2350006-120.9970093-119" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <path d="M472,180.9490051c-8.0889893,13.3339996-33.7319946,40-71.5899963,40s-64.7139893-26.6660004-73.4100037-40" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="312" y1="132.9490051" x2="312" y2="144.9490051" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="488" y1="132.9490051" x2="488" y2="144.9490051" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="486.1019897" y1="170.6649933" x2="475.0820007" y2="162.0939941" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="324.7399902" y1="161.779007" x2="314.2369995" y2="170.9759979" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="463.9289856" y1="202.3769989" x2="454.1329956" y2="191.3560028" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="434.5690002" y1="220.5809937" x2="429.2449951" y2="206.8309937" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="400.0029907" y1="227.4909973" x2="399.7669983" y2="212.7489929" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="366.8869934" y1="221.3609924" x2="371.8999939" y2="207.4949951" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="336.4779968" y1="203.3880005" x2="346.3859863" y2="192.4689941" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="157" y1="57" x2="643" y2="57" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="158" y1="500" x2="158" y2="58" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="642" y1="58" x2="642" y2="500" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <path d="M327.5,500.5c.1669922-24.6669922,14.5-74,70.5-74,25.8330078.1669922,77.5,15.2000122,77.5,74" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
</svg>
  `,
  logo: {
    position: [0,0],
    width: 0,
  },
});
variants.push({
  name: "Box Lacrosse Half Field",
  background: `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" fill="none">
      <rect width="800" height="500" style="fill: #fff;"/>
      <path d="M178.5,499.5V94.5c2.3329926-21.8332977,19.5-65.5,69.5-65.5h299.5c24.6669922.1667004,74,13.5,74,65.5v405" style="fill: none; stroke: #ccc; stroke-width: 4px;"/>
      <path d="M353.5,499c.5-16.5,11.1000061-49.5,49.5-49.5,16.5,0,49.5,9.8999939,49.5,49.5" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <path d="M389.5,497.5c.3330078-4.3330078,3.3999939-13,13-13,4.3330078,0,13,2.6000061,13,13" style="fill: none; stroke: #ccc; stroke-dasharray: 2 2;"/>
      <line x1="623" y1="499" x2="177" y2="499" style="fill: none; stroke: #ccc; stroke-width: 4px;"/>
      <line x1="623" y1="278" x2="177" y2="278" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="620" y1="295" x2="594" y2="295" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="595" y1="294" x2="595" y2="497" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <path d="M449.3880005,109.5080032c0-16.1863022-6.9620056-26.7597046-10.4429932-30.0231018h-77.6690063c-8.3540039,9.3985977-10.0069885,23.9310989-9.7900085,30.0231018,0,38.6389999,32.1990051,49.1679916,48.2980042,49.6039963,40.2050171,0,49.8210144-33.0690002,49.6040039-49.6039963Z" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="449.3880005" y1="109.8550034" x2="351.4859924" y2="109.8550034" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="416.0740051" y1="109.5879974" x2="397.7990112" y2="92.6184998" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <line x1="380.802002" y1="110.7590027" x2="399.0769958" y2="92.4840012" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
      <path d="M180,453c12.6670074,1.8429871,38,13.8240051,38,47" style="fill: none; stroke: #ccc; stroke-width: 2px;"/>
</svg>
  `,
  logo: {
    position: [0,0],
    width: 0,
  },
});
variants.push({
  name: "Blank Canvas",
  background: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
      <path fill="#FFF" d="M797.182 2.919L797.182 497.067 3.098 497.067 3.098 2.919z"/>
    </svg>
  `,
  logo: {
    position: [0, 0],
    width: 0,
  },
});

const running = [
  {
    name: "Run (free hand)",
    tool: "path",
    props: { arrow: true },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.946 0L15.946 5.867 14.88 5.867 14.88 1.067 10.08 1.067 10.08 0z"/>
        <path d="M14.5250926,0.714805774 L15.2349074,1.41919423 C14.4398731,2.220353 13.565432,3.02523036 12.5200085,3.9302531 L12.0090099,4.36820951 C11.3343585,4.93614436 8.39081347,7.38945476 7.61539296,8.08058 C6.15868117,9.37893396 5.26879132,10.3631323 4.83465071,11.2104236 C3.9341334,12.9679198 5.1750432,14.2661171 9.75384043,15.4383139 L10.0572023,15.5145863 L9.81742282,16.4854137 C4.45782756,15.1616759 2.62573876,13.3285199 3.94467646,10.7544128 C4.41889469,9.82890392 5.28918807,8.84131424 6.66754853,7.5882702 L6.95002803,7.33406174 C7.79792959,6.57833479 11.1438362,3.79325516 11.469946,3.51444393 C12.5426101,2.59735778 13.4328821,1.79327458 14.2302569,1.00841161 L14.5250926,0.714805774 Z"/>
      </svg>
    `,
  },
  {
    name: "Run with stop/pick (free hand)",
    tool: "path",
    props: { arrow: true, stop: true },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.25 4.625L11.25 9.625 10.341374 9.625 10.341374 5.53432333 6.25 5.53432333 6.25 4.625zM10.2409289.951451352L14.7409289 5.78427135 14.0090711 6.46572865 9.50907106 1.63290865zM11.3568579.125L15.8568579 4.95782 15.125 5.6392773 10.625.806457296z"/>
        <path d="M9.12136231,6.10095759 L9.80529821,6.8304997 C9.38820506,7.22151891 8.98674435,7.54698799 8.29305,8.05531459 L6.35960152,9.44497497 C5.51544398,10.0620949 5.03731501,10.4537979 4.62752107,10.8731359 L4.53403078,10.970512 C2.94024358,12.659855 3.89793272,13.9190436 9.4242622,15.354352 L10.0572023,15.5145863 L9.81742282,16.4854137 C3.12068643,14.8314226 1.41648208,12.8177488 3.80665161,10.2842762 L4.01573257,10.0699409 C4.47794958,9.61207214 5.0165952,9.18234805 5.95488155,8.50264463 L7.50867675,7.38952006 C8.23004732,6.86606797 8.63864102,6.54397974 9.02505321,6.19019814 L9.12136231,6.10095759 Z"/>
      </svg>
    `,
  },
  {
    name: "Run (straight)",
    tool: "path",
    props: { type: "straight", arrow: true },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.946 0L15.946 5.867 14.88 5.867 14.88 1.067 10.08 1.067 10.08 0z"/>
        <path d="M15.5918495 -0.352955256L16.3001505 0.352955256 0.354150514 16.3529553 -0.354150514 15.6470447z"/>
      </svg>
    `,
  },
  {
    name: "Run with stop/pick (straight)",
    tool: "path",
    props: { type: "straight", arrow: true, stop: true },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.25 4.625L11.25 9.625 10.341374 9.625 10.341374 5.53432333 6.25 5.53432333 6.25 4.625zM10.2409289.951451352L14.7409289 5.78427135 14.0090711 6.46572865 9.50907106 1.63290865zM11.3568579.125L15.8568579 4.95782 15.125 5.6392773 10.625.806457296z"/>
        <path d="M9.64644661 5.64644661L10.3535534 6.35355339 0.353553391 16.3535534 -0.353553391 15.6464466z"/>
      </svg>
    `,
  },

];

const runningWithBall = [
  {
    name: "Run with ball",
    tool: "path",
    props: { type: "waves", arrow: true },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7260579 3.61552648C12.6607993 4.39268261 12.7638513 5.76106982 11.9533194 6.66170952 11.1911771 7.50858003 9.89474963 7.63657946 8.97566394 6.98392692L8.897 6.923 8.80440731 6.88034712C8.27483442 6.66567401 7.65735616 6.83485239 7.32945762 7.27947277L7.25910101 7.38691763C6.96259832 7.89989585 7.1220637 8.53704646 7.61739864 8.87216316L7.72863894 8.93919559 7.88731574 9.07266383C8.63140573 10.0262597 8.42961951 11.3839168 7.44219347 12.0957257 6.51315816 12.7654422 5.21775055 12.6255369 4.46167093 11.7971416L4.411 11.738 4.34304789 11.694284C3.84946747 11.4130802 3.21238117 11.5003565 2.82291216 11.8999767L2.7376083 11.9977157C2.37029479 12.46845 2.43781965 13.1189098 2.87890091 13.5138422L2.97911369 13.5944008 2.39434262 14.4055992C1.40691659 13.6937903 1.20513037 12.3361332 1.94922036 11.3825373 2.64910293 10.4855959 3.9335985 10.2710878 4.89700679 10.8601449L5.03899667 10.9545454 5.1408051 11.0525554C5.5435663 11.568718 6.31605134 11.6747872 6.8574224 11.2845273 7.3515562 10.9283196 7.47651088 10.2854948 7.17100448 9.79130613L7.147 9.757 7.12116491 9.74224165C6.19361975 9.16046461 5.84800574 7.99675413 6.32026533 7.0240666L6.39332023 6.88649417C6.96266249 5.90147723 8.21089993 5.52102059 9.24912525 5.98289726L9.39591852 6.05463548 9.48005759 6.1112194C9.99105294 6.53606753 10.7698222 6.48188566 11.2100073 5.99276475 11.6112489 5.54691667 11.5910604 4.89392364 11.1806515 4.47134083L11.0867454 4.38447352 11.7260579 3.61552648zM15.946 0L15.946 5.867 14.88 5.867 14.88 1.067 10.08 1.067 10.08 0z"/>
      </svg>
    `,
  },
  {
    name: "Run with ball and stop",
    tool: "path",
    props: { type: "waves", arrow: true, stop: true },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.56212399 8C8.24193071 8.57620085 8.31687705 9.59075357 7.72740381 10.2585079 7.17312279 10.8863965 6.23027374 10.9812982 5.56185294 10.497407L5.50464325 10.4522345 5.43730363 10.4206107C5.05216268 10.2614472 4.60309105 10.3868799 4.36462123 10.7165313L4.31345318 10.7961933C4.09781652 11.1765268 4.21379045 11.6489244 4.57403126 11.8973874L4.65493267 11.9470867 4.77033309 12.0460431C5.31148527 12.7530603 5.16473279 13.7596575 4.44661031 14.2874084 3.77095348 14.7839511 2.82884613 14.6802222 2.27897429 14.0660315L2.24212298 14.0221826 2.19270365 13.9897706C1.83373884 13.7812798 1.37040693 13.8459884 1.08715893 14.1422757L1.02512024 14.2147416C.757985202 14.5637545.80709381 15.0460199 1.12787771 15.3388315L1.20075916 15.3985595.775474398 16C.0573519164 15.4722491-.0894005626 14.4656519.451751613 13.7586347.96075319 13.0936223 1.89492457 12.9345812 2.59557974 13.3713213L2.69884431 13.4413119 2.77288623 13.5139787C3.06580121 13.8966731 3.62760417 13.9753152 4.02132554 13.6859679 4.3806928 13.4218675 4.47156823 12.9452629 4.24938347 12.5788604L4.2319258 12.5534251 4.21313679 12.542483C3.5385637 12.1111405 3.28721 11.2483397 3.63066887 10.5271675L3.68379929 10.4251682C4.09786319 9.69485475 5.00566523 9.41277573 5.76073236 9.75522137L5.86749028 9.80840968 5.92868186 9.85036226C6.30031197 10.1653541 6.86668526 10.1251825 7.18681736 9.76253735 7.47862719 9.43197566 7.46394479 8.9478321 7.16546789 8.6345198L7.09717304 8.57011444 7.56212399 8zM11.25 4.625L11.25 9.625 10.341374 9.625 10.341374 5.53432333 6.25 5.53432333 6.25 4.625zM10.2409289.951451352L14.7409289 5.78427135 14.0090711 6.46572865 9.50907106 1.63290865zM11.3568579.125L15.8568579 4.95782 15.125 5.6392773 10.625.806457296z"/>
      </svg>
    `,
  },
];



const passShot = [
  {
    name: "Pass",
    tool: "path",
    props: { type: "dashed-straight", arrow: true },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.54 15.623l2.594-2.605a.735.735 0 00-1.042-1.037L.499 14.585a.735.735 0 101.041 1.038zM7.764 9.372l2.593-2.604a.735.735 0 00-1.041-1.037L6.722 8.335a.735.735 0 101.042 1.037zM15.867 0v5.867H14.8v-4.8H10V0z"/>
      </svg>
    `,
  },
  {
    name: "Shot",
    tool: "path",
    props: { type: "double", arrow: true },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.396 5.059l.754.754L3.017 15.946l-.754-.754zm-2.263-2.263l.755.754L.754 13.684 0 12.929zM15.946 0v5.867H14.88v-4.8h-4.8V0z"/>
      </svg>
    `,
  },
  {
    name: "Ground Ball",
    tool: "path",
    props: { type: "dotted", arrow: true },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">

    <polyline points="2.3561029 14.0423927 2.2692208 14.1322613 2.3561029 14.0423927" style="fill: none; stroke: #231f20; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.25px;"/>
    <line x1="3.7460837" y1="12.6046247" x2="12.4334631" y2="3.6185765" style="fill: none; stroke: #231f20; stroke-dasharray: .2499757 1.9998056; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.25px;"/>
    <polyline points="13.1284533 2.8996925 13.2153349 2.8098233 13.1284533 2.8996925" style="fill: none; stroke: #231f20; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.25px;"/>
    <line x1="11.738472" y1="4.33746" x2="3.0510933" y2="13.3235083" style="fill: none; stroke: #231f20; stroke-dasharray: .2499757 1.9998056; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.25px;"/>

  <polyline points="9.8881151 2.1401441 14.1141884 1.9254544 14.1428809 2.1187918 14.4749035 6.03861" style="fill: none; stroke: #231f20; stroke-linecap: square; stroke-miterlimit: 10;"/>
      </svg>
    `,
  },
];



const balls = [
  {
    name: "Ball",
    tool: "dot",
    props: { radius: 2 },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
      </svg>
    `,
  },
  {
    name: "Group of balls",
    tool: "dot",
    props: { radius: 2, count: 9 },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10.25 14.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6.25 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3.25 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12.25 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10.75 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>
    `,
  },
];

const objects = [
  {
    name: "Stick",
    tool: "svg",
    props: { id: "stick", size: 30 },
    color: "#000000",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <rect x="7.7551851" y="5.9835907" width=".6907609" height="9.715251" style="fill: #010101;"/>
  <path data-paper-data='{"skipFill":true}' d="M10.1518073,2.3545933c0-1.0743741-.9086704-1.9453269-2.02957-1.9453269-1.1209028,0-2.0295732.8709528-2.0295732,1.9453269,0,.5409709.2305446,1.0302046.6023954,1.3828107-.0447428.2001563-.0690788.4132809-.0690788.6345618,0,1.1539557.6566326,2.0894242,1.4666254,2.0894242.8099961,0,1.4666254-.9354685,1.4666254-2.0894242,0-.2046584-.0210183-.4022235-.0595194-.5891394.4008705-.355368.6520952-.8635875.6520952-1.428233Z" style="fill: #ccc; stroke: #010101; stroke-miterlimit: 10; stroke-width: .2px;"/>
      </svg>
    `,
  },
  {
    name: "Cone",
    tool: "svg",
    props: { id: "cone", size: 25 },
    color: "#FF5E24",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.857 12.666H4.449c-.397 0-.47-.094-.36-.467L7.58.329c.015-.049.016-.109.047-.143.067-.074.154-.191.224-.186.086.007.206.108.235.194.143.417.262.842.386 1.266l3.154 10.723c.116.394.05.483-.36.483H7.857z"/>
        <path d="M7.848 15.701H3.42c-.36 0-.42-.058-.42-.412l.001-1.523c0-.254.086-.345.334-.345h9.051c.242 0 .34.1.34.346.003.516.002 1.03.001 1.546 0 .303-.084.388-.386.388H7.848z"/>
      </svg>
    `,
  },
  {
    name: "Disc",
    tool: "svg",
    props: { id: "disc", size: 16 },
    color: "#FF9D00",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.98366667,3.02065022 C5.23733333,3.02065022 3.01133389,5.24665556 3.01133389,7.99298889 C3.01133389,10.7393222 5.23733333,12.9653222 7.98366667,12.9653222 C10.73,12.9653222 12.956,10.7393222 12.956,7.99298889 C12.956,5.24665556 10.73,3.02065022 7.98366667,3.02065022 Z"/>
        <path data-paper-data='{"skipFill":true}' fill="white" d="M7.98366667,9.78032222 C6.99666667,9.78032222 6.19866667,8.97998889 6.19866667,7.99532222 C6.19866667,7.01065556 6.999,6.21032222 7.98366667,6.21032222 C8.96833333,6.21032222 9.76866667,7.01065556 9.76866667,7.99532222 C9.76866667,8.97998889 8.97066667,9.78032222 7.98366667,9.78032222 Z"/>
      </svg>
    `,
  },
  {
    name: "Crease",
    tool: "svg",
    props: { id: "crease", size: 40 },
    color: "#f6851f",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">

  <circle data-paper-data='{"skipFill":true}' cx="7.9942085" cy="8.0019305" r="7.488417" style="fill: none; stroke: #f6851f; stroke-miterlimit: 10; stroke-width: .75px;"/>
      </svg>
    `,
  },
];

const nets = [
  {
    name: "Net left",
    tool: "svg",
    props: { id: "net-left", size: 25 },
    color: "#faa51a",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <polygon data-paper-data='{"skipFill":true}' points="2.3648133 14.0279425 2.3648133 2.022151 13.3715701 8.0250468 2.3648133 14.0279425" style="fill: #eee; stroke: #faa51a; stroke-width: .5px;"/>
  <rect x="-4.1322914" y="7.7224927" width="12.8832056" height=".6167954" transform="translate(-5.721579 10.3402018) rotate(-90)" style="fill: #e58924;"/>
</svg>
    `,
  },
  {
    name: "Net up",
    tool: "svg",
    props: { id: "net-up", size: 25 },
    color: "#faa51a",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <polygon data-paper-data='{"skipFill":true}' points="2.0019305 1.9874517 14.007722 1.9874517 8.0048263 12.9942085 2.0019305 1.9874517" style="fill: #eee; stroke: #faa51a; stroke-width: .5px;"/>
  <rect x="1.5573798" y="1.6235521" width="12.8832056" height=".6167954" style="fill: #e58924;"/>
</svg>
    `,
  },
  {
    name: "Net right",
    tool: "svg",
    props: { id: "net-right", size: 25 },
    color: "#faa51a",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <polygon data-paper-data='{"skipFill":true}' points="13.6331525 2.0338359 13.6331525 14.0396274 2.6263958 8.0367317 13.6331525 2.0338359" style="fill: #eee; stroke: #faa51a; stroke-width: .5px;"/>
  <rect x="7.2470517" y="7.7224903" width="12.8832056" height=".6167954" transform="translate(21.7195425 -5.6577664) rotate(90)" style="fill: #e58924;"/>
</svg>
    `,
  },
  {
    name: "Net down",
    tool: "svg",
    props: { id: "net-down", size: 25 },
    color: "#faa51a",
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <polygon data-paper-data='{"skipFill":true}' points="14.0134071 13.5955629 2.0076155 13.5955629 8.0105113 2.5888062 14.0134071 13.5955629" style="fill: #eee; stroke: #faa51a; stroke-width: .5px;"/>
  <rect x="1.5747521" y="13.3426672" width="12.8832056" height=".6167954" transform="translate(16.0327098 27.3021297) rotate(180)" style="fill: #e58924;"/>
</svg>
    `,
  },
];

const forward = [
  {
    name: "Attacker 1",
    tool: "svg",
    props: { id: "attacker-1", size:20 },
    color: "#247BA0",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #257ba0;"/>
            <path data-paper-data='{"skipFill":true}' d="M6.7548828,9.8046875h-2.2900391l-.3999023,1.2949219h-1.7851562l2.5424805-6.9321289h1.5708008l2.5620117,6.9321289h-1.7954102l-.4047852-1.2949219ZM4.8647461,8.5141602h1.4902344l-.7470703-2.4042969-.7431641,2.4042969Z" style="fill: #fff;"/>
            <path data-paper-data='{"skipFill":true}' d="M12.9160156,11.0996094h-1.609375v-5.1230469l-1.5810547.4619141v-1.21875l3.0429688-1.0522461h.1474609v6.9321289Z" style="fill: #fff;"/>
      </svg>
    `,
  },
  {
    name: "Attacker 2",
    tool: "svg",
    props: { id: "attacker-2", size:20 },
    color: "#247BA0",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #257ba0;"/>
            <path data-paper-data='{"skipFill":true}' d="M6.7548828,9.8046875h-2.2900391l-.3999023,1.2949219h-1.7851562l2.5424805-6.9321289h1.5708008l2.5620117,6.9321289h-1.7954102l-.4047852-1.2949219ZM4.8647461,8.5141602h1.4902344l-.7470703-2.4042969-.7431641,2.4042969Z" style="fill: #fff;"/>
            <path data-paper-data='{"skipFill":true}' d="M14.1962891,11.0996094h-4.8369141v-1.0478516l2.2285156-2.3422852c.5488281-.625.8232422-1.121582.8232422-1.4902344,0-.2978516-.0654297-.5249023-.1953125-.6806641-.1298828-.1552734-.3193359-.2333984-.5664062-.2333984-.2441406,0-.4423828.1040039-.5947266.3120117s-.2285156.4672852-.2285156.7783203h-1.609375c0-.425293.1064453-.8178711.3183594-1.1782227.2128906-.3603516.5078125-.6420898.8857422-.8452148s.7998047-.3046875,1.2666016-.3046875c.7490234,0,1.3261719.1733398,1.7304688.519043.4052734.3461914.6074219.8427734.6074219,1.4902344,0,.2729492-.0507812.5385742-.1523438.7973633s-.2597656.5302734-.4736328.8144531c-.2148438.2836914-.5595703.6640625-1.0361328,1.1396484l-.8945312,1.0332031h2.7275391v1.2382812Z" style="fill: #fff;"/>
      </svg>
    `,
  },
  {
    name: "Attacker 3",
    tool: "svg",
    props: { id: "attacker-3", size:20 },
    color: "#247BA0",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #257ba0;"/>
    <path data-paper-data='{"skipFill":true}' d="M6.7548828,9.8046875h-2.2900391l-.3999023,1.2949219h-1.7851562l2.5424805-6.9321289h1.5708008l2.5620117,6.9321289h-1.7954102l-.4047852-1.2949219ZM4.8647461,8.5141602h1.4902344l-.7470703-2.4042969-.7431641,2.4042969Z" style="fill: #fff;"/>
    <path data-paper-data='{"skipFill":true}' d="M10.8261719,6.9624023h.7568359c.5996094,0,.8994141-.2939453.8994141-.8808594,0-.2285156-.0712891-.4150391-.2138672-.5595703-.1435547-.1445312-.3447266-.2167969-.6044922-.2167969-.2128906,0-.3984375.0620117-.5546875.1860352-.1572266.1235352-.2363281.277832-.2363281.4614258h-1.6044922c0-.3647461.1015625-.6899414.3046875-.9755859.203125-.2861328.4853516-.5087891.8457031-.6689453.3603516-.1606445.7558594-.2407227,1.1875-.2407227.7714844,0,1.3779297.1762695,1.8183594.5283203.4414062.3525391.6621094.8364258.6621094,1.4521484,0,.2988281-.0908203.5805664-.2734375.8452148-.1826172.2651367-.4482422.4804688-.7978516.6450195.3681641.1333008.6572266.3359375.8671875.6074219.2089844.2709961.3134766.6069336.3134766,1.0068359,0,.6191406-.2373047,1.1142578-.7138672,1.4853516s-1.1015625.5576172-1.8759766.5576172c-.4541016,0-.875-.0869141-1.2636719-.2597656-.3896484-.1728516-.6835938-.4130859-.8837891-.71875-.1992188-.3066406-.2998047-.6552734-.2998047-1.0458984h1.6142578c0,.2128906.0859375.3974609.2568359.5527344.171875.1552734.3828125.2333984.6337891.2333984.2822266,0,.5078125-.0791016.6757812-.2353516.1679688-.1572266.2519531-.3583984.2519531-.6025391,0-.3491211-.0869141-.5966797-.2617188-.7426758s-.4160156-.2192383-.7236328-.2192383h-.7802734v-1.1948242Z" style="fill: #fff;"/>
        
      </svg>
    `,
  },
];

const midfielders = [
  {
    name: "Midfielder 1",
    tool: "svg",
    props: { id: "midfielder-1", size:20 },
    color: "#D00000",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #cf2026;"/>
        <path data-paper-data='{"skipFill":true}' d="M4.2529297,4.8261719l1.3544922,4.2216797,1.3505859-4.2216797h1.925293v6.0683594h-1.4667969v-1.4169922l.1416016-2.9008789-1.4672852,4.3178711h-.9667969l-1.4711914-4.3222656.1416016,2.9052734v1.4169922h-1.4628906v-6.0683594h1.9213867Z" style="fill: #fff;"/>
        <path data-paper-data='{"skipFill":true}' d="M12.8388672,10.8945312h-1.4091797v-4.4848633l-1.3837891.4042969v-1.0668945l2.6640625-.9208984h.1289062v6.0683594Z" style="fill: #fff;"/>
      </svg>
    `,
  },
  {
    name: "Midfielder 2",
    tool: "svg",
    props: { id: "midfielder-2", size:20 },
    color: "#D00000",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #cf2026;"/>
        <path data-paper-data='{"skipFill":true}' d="M4.2529297,4.8261719l1.3544922,4.2216797,1.3505859-4.2216797h1.925293v6.0683594h-1.4667969v-1.4169922l.1416016-2.9008789-1.4672852,4.3178711h-.9667969l-1.4711914-4.3222656.1416016,2.9052734v1.4169922h-1.4628906v-6.0683594h1.9213867Z" style="fill: #fff;"/>
        <path data-paper-data='{"skipFill":true}' d="M13.9599609,10.8945312h-4.234375v-.9169922l1.9501953-2.0507812c.4804688-.5473633.7216797-.9819336.7216797-1.3041992,0-.2612305-.0576172-.4599609-.1708984-.5961914-.1142578-.1362305-.2792969-.2041016-.4960938-.2041016-.2138672,0-.3876953.0908203-.5214844.2729492-.1328125.1821289-.2001953.4091797-.2001953.6811523h-1.4082031c0-.3720703.0927734-.7158203.2792969-1.03125.1855469-.3154297.4443359-.5620117.7753906-.7397461.3300781-.1777344.7001953-.2670898,1.1083984-.2670898.6552734,0,1.1611328.1518555,1.5146484.4545898.3544922.3027344.53125.737793.53125,1.3046875,0,.2387695-.0439453.4716797-.1328125.6977539-.0888672.2265625-.2275391.4643555-.4150391.7128906s-.4892578.581543-.90625.9980469l-.7832031.9042969h2.3876953v1.0839844Z" style="fill: #fff;"/>
      </svg>
    `,
  },
  {
    name: "Midfielder 3",
    tool: "svg",
    props: { id: "midfielder-3", size:20 },
    color: "#D00000",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #cf2026;"/>
    <path data-paper-data='{"skipFill":true}' d="M4.2529297,4.8261719l1.3544922,4.2216797,1.3505859-4.2216797h1.925293v6.0683594h-1.4667969v-1.4169922l.1416016-2.9008789-1.4672852,4.3178711h-.9667969l-1.4711914-4.3222656.1416016,2.9052734v1.4169922h-1.4628906v-6.0683594h1.9213867Z" style="fill: #fff;"/>
    <path data-paper-data='{"skipFill":true}' d="M11.0087891,7.2724609h.6630859c.5253906,0,.7880859-.2568359.7880859-.7709961,0-.2001953-.0625-.3632812-.1875-.4897461s-.3017578-.1894531-.5292969-.1894531c-.1865234,0-.3486328.0541992-.4863281.1625977s-.2060547.2431641-.2060547.4042969h-1.4042969c0-.3198242.0888672-.6044922.2666016-.8544922s.4238281-.4453125.7392578-.5859375c.3154297-.1401367.6621094-.2104492,1.0400391-.2104492.6757812,0,1.2060547.1542969,1.5927734.4628906.3857422.3085938.5791016.7319336.5791016,1.2709961,0,.2612305-.0800781.5078125-.2392578.7402344-.1601562.2319336-.3925781.4199219-.6982422.5644531.3222656.1166992.5751953.2939453.7578125.53125.1835938.237793.2753906.5317383.2753906.8813477,0,.5419922-.2080078.9755859-.625,1.3007812s-.9638672.4873047-1.6425781.4873047c-.3974609,0-.765625-.0751953-1.1064453-.2265625s-.5986328-.3613281-.7724609-.6298828c-.1757812-.2675781-.2626953-.5732422-.2626953-.9150391h1.4121094c0,.1865234.0751953.3476562.2255859.4833984.1503906.1367188.3349609.2050781.5546875.2050781.2470703,0,.4443359-.0693359.5917969-.2070312.1464844-.1376953.2207031-.3134766.2207031-.5273438,0-.3051758-.0761719-.5219727-.2294922-.6499023-.1523438-.1274414-.3642578-.1914062-.6337891-.1914062h-.6835938v-1.0463867Z" style="fill: #fff;"/>
      </svg>
    `,
  },
];
const defenders = [
  {
    name: "Defender 1",
    tool: "svg",
    props: { id: "defender-1", size:20 },
    color: "#21CE67",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #4eb965;"/>
    <path data-paper-data='{"skipFill":true}' d="M3.2387695,11.0332031v-6.0678711h1.9545898c.5366211,0,1.0185547.121582,1.4462891.3647461.4282227.2431641.762207.5859375,1.0024414,1.0292969s.3618164.9399414.3647461,1.4902344v.2788086c0,.5561523-.1171875,1.0541992-.3520508,1.4946289-.2348633.4394531-.5654297.7841797-.9921875,1.0332031-.4262695.2480469-.9023438.3740234-1.4272461.3769531h-1.996582ZM4.7016602,6.0947266v3.8134766h.5083008c.4199219,0,.7421875-.1494141.9672852-.4482422s.3374023-.7421875.3374023-1.331543v-.262207c0-.5864258-.1123047-1.0283203-.3374023-1.3256836s-.5532227-.4458008-.9838867-.4458008h-.4916992Z" style="fill: #fff;"/>
    <path data-paper-data='{"skipFill":true}' d="M11.7832031,11.0332031h-1.4082031v-4.484375l-1.3842773.4042969v-1.0668945l2.6635742-.9208984h.1289062v6.0678711Z" style="fill: #fff;"/>
    
      </svg>
    `,
  },
  {
    name: "Defender 2",
    tool: "svg",
    props: { id: "defender-2", size:20 },
    color: "#21CE67",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #4eb965;"/>
    <path data-paper-data='{"skipFill":true}' d="M3.2387695,11.0332031v-6.0678711h1.9545898c.5366211,0,1.0185547.121582,1.4462891.3647461.4282227.2431641.762207.5859375,1.0024414,1.0292969s.3618164.9399414.3647461,1.4902344v.2788086c0,.5561523-.1171875,1.0541992-.3520508,1.4946289-.2348633.4394531-.5654297.7841797-.9921875,1.0332031-.4262695.2480469-.9023438.3740234-1.4272461.3769531h-1.996582ZM4.7016602,6.0947266v3.8134766h.5083008c.4199219,0,.7421875-.1494141.9672852-.4482422s.3374023-.7421875.3374023-1.331543v-.262207c0-.5864258-.1123047-1.0283203-.3374023-1.3256836s-.5532227-.4458008-.9838867-.4458008h-.4916992Z" style="fill: #fff;"/>
    <path data-paper-data='{"skipFill":true}' d="M12.9042969,11.0332031h-4.234375v-.9169922l1.9511719-2.050293c.4804688-.5473633.7207031-.9819336.7207031-1.3041992,0-.2612305-.0566406-.4599609-.171875-.5961914-.1132812-.1362305-.2792969-.2041016-.4960938-.2041016-.2128906,0-.3867188.0908203-.5205078.2729492-.1328125.1821289-.1992188.4091797-.1992188.6811523h-1.4091797c0-.3720703.0927734-.7158203.2792969-1.03125s.4443359-.5620117.7753906-.7397461c.3300781-.1777344.7001953-.2670898,1.1083984-.2670898.6552734,0,1.1611328.1518555,1.5146484.4545898.3544922.3027344.53125.737793.53125,1.3046875,0,.2387695-.0439453.4716797-.1328125.6977539-.0888672.2265625-.2275391.4643555-.4150391.7128906s-.4892578.581543-.90625.9975586l-.7841797.9052734h2.3886719v1.0830078Z" style="fill: #fff;"/>
      </svg>
    `,
  },
  {
    name: "Defender 3",
    tool: "svg",
    props: { id: "defender-3", size:20 },
    color: "#21CE67",
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #4eb965;"/>
        <path data-paper-data='{"skipFill":true}' d="M3.2387695,11.0332031v-6.0678711h1.9545898c.5366211,0,1.0185547.121582,1.4462891.3647461.4282227.2431641.762207.5859375,1.0024414,1.0292969s.3618164.9399414.3647461,1.4902344v.2788086c0,.5561523-.1171875,1.0541992-.3520508,1.4946289-.2348633.4394531-.5654297.7841797-.9921875,1.0332031-.4262695.2480469-.9023438.3740234-1.4272461.3769531h-1.996582ZM4.7016602,6.0947266v3.8134766h.5083008c.4199219,0,.7421875-.1494141.9672852-.4482422s.3374023-.7421875.3374023-1.331543v-.262207c0-.5864258-.1123047-1.0283203-.3374023-1.3256836s-.5532227-.4458008-.9838867-.4458008h-.4916992Z" style="fill: #fff;"/>
        <path data-paper-data='{"skipFill":true}' d="M9.9541016,7.4116211h.6621094c.5253906,0,.7880859-.2568359.7880859-.7709961,0-.2001953-.0625-.3632812-.1875-.4897461s-.3017578-.1894531-.5292969-.1894531c-.1865234,0-.3486328.0541992-.4853516.1625977-.1376953.1083984-.2070312.2431641-.2070312.4042969h-1.4042969c0-.3198242.0888672-.6044922.2666016-.8544922s.4248047-.4453125.7402344-.5859375c.3154297-.1401367.6621094-.2104492,1.0390625-.2104492.6757812,0,1.2060547.1542969,1.5927734.4628906.3857422.3085938.5791016.7319336.5791016,1.2709961,0,.2612305-.0800781.5078125-.2392578.7402344-.1601562.2319336-.3925781.4199219-.6982422.5644531.3222656.1166992.5751953.2939453.7578125.53125.1835938.237793.2753906.5317383.2753906.8818359,0,.5410156-.2080078.9746094-.625,1.2998047s-.9638672.4873047-1.6425781.4873047c-.3964844,0-.765625-.0751953-1.1064453-.2265625s-.5986328-.3613281-.7724609-.6298828c-.175293-.2675781-.2626953-.5722656-.2626953-.9140625h1.4135742c0,.1855469.0751953.3466797.2246094.4833984.1503906.1357422.3349609.2041016.5546875.2041016.2470703,0,.4443359-.0683594.5917969-.2060547.1464844-.1376953.2207031-.3134766.2207031-.5273438,0-.3056641-.0761719-.5224609-.2294922-.6503906-.1533203-.1274414-.3642578-.1914062-.6337891-.1914062h-.6826172v-1.0463867Z" style="fill: #fff;"/>
      </svg>
    `,
  },
];
const people = [

  {
    name: "Opponent",
    tool: "svg",
    props: { id: "opponent" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8"/>
        <polygon data-paper-data='{"skipFill":true}' fill="white" points="7.078125 10.9375 8.03515625 9.01171875 8.9921875 10.9375 10.5742188 10.9375 8.94140625 8.0703125 10.53125 5.25 8.96484375 5.25 8.03515625 7.140625 7.10546875 5.25 5.54296875 5.25 7.12890625 8.0703125 5.5 10.9375"></polygon>
      </svg>
    `,
  },
  {
    name: "Player type 1",
    tool: "svg",
    props: { id: "player-1" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8"/>
      </svg>
    `,
  },
  {
    name: "Player type 2",
    tool: "svg",
    props: { id: "player-2" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <polygon points="8 0 16 16 0 16"></polygon>
      </svg>
    `,
  },
  {
    name: "Player type O",
    tool: "svg",
    props: { id: "player-O", size:20 },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle data-paper-data='{"skipFill":true}' cx="8.0183398" cy="8.0202703" r="7.3214286" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10;"/>
      </svg>
    `,
  },
  {
    name: "Player type X",
    tool: "svg",
    props: { id: "player-x" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    `,
  },
];

const positions = [
  {
    name: "Attacker",
    tool: "svg",
    props: { id: "attacker", size:20},
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <circle data-paper-data='{"skipFill":true}' cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #231f20;"/>
  <path data-paper-data='{"skipFill":true}' d="M9.4289348,10.0018183h-2.2949216l-.4007763,1.2977519h-1.78918l2.5477924-6.946392h1.5744784l2.5668769,6.946392h-1.7987223l-.4055475-1.2977519ZM7.5347896,8.7092351h1.4933689l-.74907-2.4094291-.7442989,2.4094291Z" style="fill: #fff;"/>
      </svg>
    `,
  },
  {
    name: "Midfielder",
    tool: "svg",
    props: { id: "midfielder", size:20 },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle data-paper-data='{"skipFill":true}' cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #231f20;"/>
  <path data-paper-data='{"skipFill":true}' d="M6.7659143,4.3525824l1.5522581,4.8399081,1.5478788-4.8399081h2.2071605v6.9562979h-1.6816461v-1.6243173l.1624317-3.3254711-1.6816461,4.9497883h-1.1079595l-1.6864235-4.9545657.1624317,3.3302485v1.6243173h-1.6768687v-6.9562979h2.2023831Z" style="fill: #fff;"/>
      </svg>
    `,
  },
  {
    name: "Defensive Midfielder",
    tool: "svg",
    props: { id: "defensive-midfielder", size:20 },
    icon: `
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.0159266" cy="7.9763514" r="7.8499035" style="fill: #231f20;"/>
    <path data-paper-data='{"skipFill":true}' d="M2.4033203,10.7744141v-5.7993164h1.8681641c.512207,0,.9731445.1162109,1.3818359.3481445.4091797.2324219.7285156.5605469.9580078.9838867s.3457031.8979492.3486328,1.4238281v.2670898c0,.5307617-.1123047,1.0068359-.3369141,1.4277344-.2241211.4208984-.5400391.75-.9477539.9882812-.4077148.2373047-.8623047.3574219-1.3642578.3603516h-1.9077148ZM3.8012695,6.0541992v3.6450195h.4858398c.4008789,0,.7089844-.1435547.9243164-.4287109.2148438-.2856445.3227539-.7094727.3227539-1.2724609v-.2509766c0-.5605469-.1079102-.9824219-.3227539-1.2666016-.215332-.2841797-.5283203-.4262695-.9399414-.4262695h-.4702148Z" style="fill: #fff;"/>
    <path data-paper-data='{"skipFill":true}' d="M9.5136719,4.9750977l1.2939453,4.034668,1.2910156-4.034668h1.8398438v5.7993164h-1.4023438v-1.3544922l.1347656-2.7724609-1.4023438,4.1269531h-.9238281l-1.4052734-4.1308594.1357422,2.7763672v1.3544922h-1.3984375v-5.7993164h1.8369141Z" style="fill: #fff;"/>
    </svg>
    `,
  },
  {
    name: "Long Stick Midfielder",
    tool: "svg",
    props: { id: "long-stick-midfielder", size:20 },
    icon: `
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">

    <circle cx="8.0159266" cy="7.9763514" r="7.8499035" style="fill: #231f20;"/>

    <path data-paper-data='{"skipFill":true}' d="M2.6616211,9.3417969h2.0283203v.8964844H1.4960938v-4.8339844h1.1655273v3.9375Z" style="fill: #fff;"/>
    <path data-paper-data='{"skipFill":true}' d="M7.6743164,8.9536133c0-.1704102-.0600586-.3032227-.1806641-.3984375s-.3325195-.1938477-.6357422-.2958984c-.3032227-.1015625-.5512695-.2001953-.7436523-.2954102-.6264648-.3076172-.9399414-.7304688-.9399414-1.2680664,0-.2675781.078125-.5039062.234375-.7089844.1557617-.2045898.3764648-.3637695.6621094-.4780273.2856445-.1137695.6064453-.1708984.9628906-.1708984.3476562,0,.6591797.0620117.9345703.1860352s.4897461.300293.6425781.5292969.2290039.4907227.2290039.7851562h-1.1621094c0-.1967773-.0600586-.3496094-.1806641-.4580078-.1210938-.1083984-.2841797-.1625977-.4897461-.1625977-.2080078,0-.3725586.0458984-.4931641.1376953s-.1811523.2084961-.1811523.3500977c0,.1240234.0664062.2363281.1992188.3369141.1328125.1010742.3666992.2050781.7006836.3125s.6088867.2226562.8232422.3466797c.5224609.3012695.7836914.7163086.7836914,1.2451172,0,.4223633-.1591797.7543945-.4780273.9956055s-.7558594.3623047-1.3115234.3623047c-.3916016,0-.746582-.0703125-1.0639648-.2109375-.3178711-.140625-.5566406-.3330078-.7172852-.578125-.1606445-.2441406-.2407227-.5258789-.2407227-.8442383h1.1689453c0,.2587891.0668945.449707.2006836.5727539.1337891.1220703.3515625.1835938.6523438.1835938.1923828,0,.3447266-.0410156.456543-.1240234s.1674805-.2001953.1674805-.3500977Z" style="fill: #fff;"/>
    <path data-paper-data='{"skipFill":true}' d="M10.96875,5.4042969l1.078125,3.3632812,1.0761719-3.3632812h1.5341797v4.8339844h-1.1689453v-1.1289062l.1132812-2.3105469-1.1689453,3.4394531h-.7705078l-1.171875-3.4428711.1132812,2.3139648v1.1289062h-1.1660156v-4.8339844h1.53125Z" style="fill: #fff;"/>

    </svg>
    `,
  },
  {
    name: "Defender",
    tool: "svg",
    props: { id: "defender", size:20 },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle data-paper-data='{"skipFill":true}' cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #231f20;"/>
  <path data-paper-data='{"skipFill":true}' d="M5.9765531,11.287672v-6.9054326h2.2242188c.6101979,0,1.1583485.1383221,1.6452421.4149662s.8670817.6671076,1.1405642,1.1713903.4118045,1.0694272.4149662,1.6954333v.3177455c0,.6323294-.1335796,1.1994499-.4007388,1.700571s-.6433952.8931653-1.128708,1.1761327-1.0263497.426032-1.623901.4291936h-2.2716435ZM7.6411603,5.667449v4.3397559h.5785814c.4774087,0,.8441598-.1699385,1.099858-.5098156.2560934-.3398771.3841401-.8449502.3841401-1.5156146v-.2987757c0-.6671076-.1280467-1.1698095-.3841401-1.5081057-.2556982-.3382962-.6287726-.5074444-1.1188279-.5074444h-.5596115Z" style="fill: #fff;"/>
      </svg>
    `,
  },

  {
    name: "Face Off",
    tool: "svg",
    props: { id: "face-off", size:20 },
    icon: `
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.0159266" cy="7.9763514" r="7.8499035" style="fill: #231f20;"/>

      <path data-paper-data='{"skipFill":true}' d="M7.375,8.4428711h-2.253418v2.3100586h-1.3979492v-5.7983398h3.878418v1.0791016h-2.4804688v1.3339844h2.253418v1.0751953Z" style="fill: #fff;"/>
      <path data-paper-data='{"skipFill":true}' d="M13.09375,7.9731445c0,.5654297-.1054688,1.065918-.3144531,1.5014648-.2109375.4355469-.5078125.7705078-.8945312,1.0058594-.3867188.234375-.8261719.3525391-1.3203125.3525391s-.9316406-.1142578-1.3134766-.3408203c-.3823242-.2275391-.6806641-.5517578-.894043-.9736328-.2138672-.4228516-.3261719-.9072266-.3364258-1.4541016v-.3261719c0-.5683594.1040039-1.0693359.3125-1.503418s.5068359-.769043.8955078-1.0053711.8320312-.3544922,1.328125-.3544922c.4921875,0,.9296875.1166992,1.3144531.3505859.3847656.2333984.6835938.565918.8984375.9975586.2128906.4311523.3203125.9257812.3242188,1.4829102v.2670898ZM11.671875,7.7299805c0-.5756836-.0957031-1.0131836-.2890625-1.3120117-.1914062-.2983398-.4667969-.4477539-.8261719-.4477539-.7011719,0-1.0703125.5253906-1.1113281,1.5766602l-.0039062.4262695c0,.5678711.0947266,1.0048828.2832031,1.3100586.1894531.3056641.46875.4589844.8398438.4589844.3535156,0,.625-.1503906.8164062-.4511719.1914062-.2993164.2890625-.7314453.2910156-1.2939453v-.2670898Z" style="fill: #fff;"/>

    </svg>
    `,
  },
  {
    name: "Goalie",
    tool: "svg",
    props: { id: "goalie", size:20 },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle data-paper-data='{"skipFill":true}' cx="7.984556" cy="7.9864865" r="7.8880309" style="fill: #231f20;"/>
  <path data-paper-data='{"skipFill":true}' d="M11.1003861,10.4734144c-.2563453.2848282-.6313691.5142731-1.1250712.6883347s-1.0348756.2610925-1.6235205.2610925c-.9051206,0-1.6282676-.2769163-2.1694411-.8307488s-.8307488-1.3244509-.8687259-2.3118552l-.0047471-.5981391c0-.6804228.1202608-1.274606.3607823-1.7825495s.5846889-.8987911,1.0325021-1.1725426.9660422-.4106273,1.554687-.4106273c.860814,0,1.5293689.1970061,2.0056649.5910184s.7540034.9818659.8331223,1.763561h-1.6045319c-.0569656-.3861004-.1803912-.6614343-.3702766-.8260016s-.4588898-.2468511-.8070131-.2468511c-.417748,0-.7405532.1772264-.9684157.5316792s-.3433762.860814-.3465409,1.5190835v.417748c0,.6899171.1178872,1.2081461.3536616,1.554687s.6068422.5198114,1.1132034.5198114c.4335717,0,.756377-.0965251.9684157-.2895753v-1.0728527h-1.1583012v-1.1440598h2.8245459v2.8387873Z" style="fill: #fff;"/>
      </svg>
    `,
  },
  {
    name: "Coach",
    tool: "svg",
    props: { id: "coach", size:20 },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle data-paper-data='{"skipFill":true}' cx="8.0019305" cy="8.003861" r="7.0279923" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10;"/>
    <path data-paper-data='{"skipFill":true}' d="M7.5966797,8.9941406c-.0170898.3681641-.1162109.6933594-.2978516.9746094-.1811523.2822266-.4360352.5-.7636719.6552734-.3276367.1542969-.7021484.2324219-1.1230469.2324219-.6943359,0-1.2412109-.2265625-1.6401367-.6787109s-.5986328-1.0908203-.5986328-1.9165039v-.2612305c0-.5175781.0898438-.9707031.2700195-1.3588867s.4399414-.6884766.7783203-.8999023c.3388672-.2119141.730957-.3173828,1.1757812-.3173828.6411133,0,1.15625.168457,1.5458984.5058594s.6108398.8027344.6640625,1.3955078h-1.2700195c-.0097656-.3217773-.0908203-.5527344-.2431641-.6933594-.1523438-.1401367-.3847656-.2104492-.6967773-.2104492-.3168945,0-.5488281.1186523-.6967773.355957-.1474609.2368164-.2246094.6157227-.2319336,1.1357422v.3735352c0,.5639648.0708008.9663086.2124023,1.2084961.1411133.2421875.3847656.3632812.730957.3632812.2924805,0,.5166016-.0693359.6713867-.2070312s.2368164-.3564453.246582-.6572266h1.2666016Z" style="fill: #231f20;"/>
    <path data-paper-data='{"skipFill":true}' d="M12.6728516,8.2504883c0,.5151367-.0957031.9711914-.2861328,1.3676758-.1914062.3974609-.4628906.7021484-.8154297.9169922-.3515625.2138672-.7529297.3212891-1.2021484.3212891-.4501953,0-.8496094-.1035156-1.1982422-.3105469-.3476562-.2070312-.6196289-.5029297-.8139648-.8876953-.1948242-.3847656-.296875-.8261719-.3066406-1.3242188v-.2978516c0-.5175781.0947266-.9741211.284668-1.3696289s.4619141-.7011719.8164062-.9165039c.3544922-.2148438.7578125-.3227539,1.2099609-.3227539.4472656,0,.8466797.1064453,1.1972656.3193359.3515625.2128906.6240234.5161133.8183594.9091797.1953125.3930664.2939453.8432617.2958984,1.3515625v.2431641ZM11.3769531,8.0288086c0-.5249023-.0869141-.9233398-.2626953-1.1953125-.1757812-.2724609-.4267578-.4082031-.7529297-.4082031-.6386719,0-.9755859.4790039-1.0126953,1.4370117l-.0029297.3881836c0,.5175781.0859375.9155273.2568359,1.1938477.171875.2783203.4277344.4169922.7666016.4169922.3212891,0,.5693359-.1357422.7431641-.4091797.1748047-.2734375.2626953-.6669922.2646484-1.1801758v-.2431641Z" style="fill: #231f20;"/>
      </svg>
    `,
  },
];

const numbers = [
  {
    name: "1",
    tool: "svg",
    props: { id: "number-1" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <polygon points="9.92578125 12.28125 9.92578125 3.75 9.74414062 3.75 6 5.04492188 6 6.54492188 7.9453125 5.9765625 7.9453125 12.28125"/>
      </svg>
    `,
  },
  {
    name: "2",
    tool: "svg",
    props: { id: "number-2" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1289062,12.4042969 L11.1289062,10.8808594 L7.77148438,10.8808594 L8.87304688,9.609375 C9.45898438,9.0234375 9.88378906,8.55566406 10.1474609,8.20605469 C10.4111328,7.85644531 10.6054688,7.52246094 10.7304688,7.20410156 C10.8554688,6.88574219 10.9179688,6.55859375 10.9179688,6.22265625 C10.9179688,5.42578125 10.6689453,4.81445312 10.1708984,4.38867188 C9.67285156,3.96289062 8.96289062,3.75 8.04101562,3.75 C7.46679688,3.75 6.94726562,3.875 6.48242188,4.125 C6.01757812,4.375 5.65429688,4.72167969 5.39257812,5.16503906 C5.13085938,5.60839844 5,6.09179688 5,6.61523438 L5,6.61523438 L6.98046875,6.61523438 C6.98046875,6.23242188 7.07421875,5.91308594 7.26171875,5.65722656 C7.44921875,5.40136719 7.69335938,5.2734375 7.99414062,5.2734375 C8.29882812,5.2734375 8.53125,5.36914062 8.69140625,5.56054688 C8.8515625,5.75195312 8.93164062,6.03125 8.93164062,6.3984375 C8.93164062,6.8515625 8.59375,7.46289062 7.91796875,8.23242188 L7.91796875,8.23242188 L5.17578125,11.1152344 L5.17578125,12.4042969 L11.1289062,12.4042969 Z"/>
      </svg>
    `,
  },
  {
    name: "3",
    tool: "svg",
    props: { id: "number-3" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.01171875,12.2714844 C8.96484375,12.2714844 9.734375,12.0429688 10.3203125,11.5859375 C10.90625,11.1289062 11.1992188,10.5195312 11.1992188,9.7578125 C11.1992188,9.265625 11.0703125,8.85253906 10.8125,8.51855469 C10.5546875,8.18457031 10.1992188,7.93554688 9.74609375,7.77148438 C10.1757812,7.56835938 10.5029297,7.30371094 10.7275391,6.97753906 C10.9521484,6.65136719 11.0644531,6.3046875 11.0644531,5.9375 C11.0644531,5.1796875 10.7929688,4.58398438 10.25,4.15039062 C9.70703125,3.71679688 8.9609375,3.5 8.01171875,3.5 C7.48046875,3.5 6.99316406,3.59863281 6.54980469,3.79589844 C6.10644531,3.99316406 5.75976562,4.26757812 5.50976562,4.61914062 C5.25976562,4.97070312 5.13476562,5.37109375 5.13476562,5.8203125 L5.13476562,5.8203125 L7.109375,5.8203125 C7.109375,5.59375 7.20605469,5.40429688 7.39941406,5.25195312 C7.59277344,5.09960938 7.8203125,5.0234375 8.08203125,5.0234375 C8.40234375,5.0234375 8.65039062,5.11230469 8.82617188,5.29003906 C9.00195312,5.46777344 9.08984375,5.69726562 9.08984375,5.97851562 C9.08984375,6.70117188 8.72070312,7.0625 7.98242188,7.0625 L7.98242188,7.0625 L7.05078125,7.0625 L7.05078125,8.53320312 L8.01171875,8.53320312 C8.390625,8.53320312 8.6875,8.62304688 8.90234375,8.80273438 C9.1171875,8.98242188 9.22460938,9.28710938 9.22460938,9.71679688 C9.22460938,10.0175781 9.12109375,10.2646484 8.9140625,10.4580078 C8.70703125,10.6513672 8.4296875,10.7480469 8.08203125,10.7480469 C7.7734375,10.7480469 7.51367188,10.6523438 7.30273438,10.4609375 C7.09179688,10.2695312 6.98632812,10.0429688 6.98632812,9.78125 L6.98632812,9.78125 L5,9.78125 C5,10.2617188 5.12304688,10.6904297 5.36914062,11.0673828 C5.61523438,11.4443359 5.97753906,11.7392578 6.45605469,11.9521484 C6.93457031,12.1650391 7.453125,12.2714844 8.01171875,12.2714844 Z M8.09375,10.7480469 C7.34765625,10.7480469 6.97460938,10.2089844 6.97460938,9.13085938 L6.97460938,9.13085938 L6.97460938,8.5390625 C7.06054688,8.36328125 7.19140625,8.21484375 7.3671875,8.09375 C7.54296875,7.97265625 7.76171875,7.91210938 8.0234375,7.91210938 C8.36328125,7.91210938 8.63574219,8.04394531 8.84082031,8.30761719 C9.04589844,8.57128906 9.1484375,8.91210938 9.1484375,9.33007812 C9.1484375,9.73632812 9.04785156,10.0742188 8.84667969,10.34375 C8.64550781,10.6132812 8.39453125,10.7480469 8.09375,10.7480469 Z"/>
      </svg>
    `,
  },
  {
    name: "4",
    tool: "svg",
    props: { id: "number-4" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.140625,12.28125 L10.140625,10.4707031 L11.0078125,10.4707031 L11.0078125,8.94726562 L10.140625,8.94726562 L10.140625,3.75 L8.16601562,3.75 L8.16601562,3.76757812 L4.75,9.26367188 L4.8671875,10.4707031 L8.16601562,10.4707031 L8.16601562,12.28125 L10.140625,12.28125 Z M8.16601562,8.94726562 L6.63085938,8.94726562 L8.04296875,6.52148438 L8.16601562,6.32226562 L8.16601562,8.94726562 Z"/>
      </svg>
    `,
  },
  {
    name: "5",
    tool: "svg",
    props: { id: "number-5" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00008492,12.3984375 C8.60164742,12.3984375 9.12313179,12.2792969 9.56453804,12.0410156 C10.0059443,11.8027344 10.3487177,11.4619141 10.5928584,11.0185547 C10.836999,10.5751953 10.9590693,10.0800781 10.9590693,9.53320312 C10.9590693,8.62695312 10.7315302,7.92285156 10.2764521,7.42089844 C9.82137398,6.91894531 9.17000679,6.66796875 8.32235054,6.66796875 C8.10360054,6.66796875 7.87996773,6.69921875 7.65145211,6.76171875 C7.42293648,6.82421875 7.23836617,6.89648438 7.09774117,6.97851562 L7.09774117,6.97851562 L7.29110054,5.28515625 L10.6719599,5.28515625 L10.6719599,3.75 L5.68563179,3.75 L5.16414742,8.109375 L6.73445992,8.47851562 C6.96102242,8.18164062 7.30477242,8.03320312 7.76570992,8.03320312 C8.57820992,8.03320312 8.98445992,8.48828125 8.98445992,9.3984375 C8.98445992,10.3828125 8.65242867,10.875 7.98836617,10.875 C7.69539742,10.875 7.45906929,10.7832031 7.27938179,10.5996094 C7.09969429,10.4160156 7.00008492,10.1679688 6.98055367,9.85546875 L6.98055367,9.85546875 L5.00008492,9.85546875 C4.99617867,10.3398438 5.12703804,10.7744141 5.39266304,11.1591797 C5.65828804,11.5439453 6.02547554,11.8466797 6.49422554,12.0673828 C6.96297554,12.2880859 7.46492867,12.3984375 8.00008492,12.3984375 Z"/>
      </svg>
    `,
  },
  {
    name: "6",
    tool: "svg",
    props: { id: "number-6" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.14648438,12.2714844 C8.70507812,12.2714844 9.21386719,12.1435547 9.67285156,11.8876953 C10.1318359,11.6318359 10.4892578,11.2773438 10.7451172,10.8242188 C11.0009766,10.3710938 11.1289062,9.87304688 11.1289062,9.33007812 C11.1289062,8.45507812 10.9101562,7.74804688 10.4726562,7.20898438 C10.0351562,6.66992188 9.44726562,6.40039062 8.70898438,6.40039062 C8.02929688,6.40039062 7.46679688,6.61914062 7.02148438,7.05664062 C7.13085938,6.42773438 7.42285156,5.93652344 7.89746094,5.58300781 C8.37207031,5.22949219 8.97851562,5.05273438 9.71679688,5.05273438 L9.71679688,5.05273438 L9.8046875,5.05273438 L9.8046875,3.5 L9.50585938,3.5 C8.65429688,3.5 7.87890625,3.69921875 7.1796875,4.09765625 C6.48046875,4.49609375 5.94238281,5.04589844 5.56542969,5.74707031 C5.18847656,6.44824219 5,7.23828125 5,8.1171875 L5,8.1171875 L5,8.90820312 C5.0078125,9.57617188 5.14453125,10.1660156 5.41015625,10.6777344 C5.67578125,11.1894531 6.046875,11.5830078 6.5234375,11.8583984 C7,12.1337891 7.54101562,12.2714844 8.14648438,12.2714844 Z M8.09375,10.7480469 C7.34765625,10.7480469 6.97460938,10.2089844 6.97460938,9.13085938 L6.97460938,9.13085938 L6.97460938,8.5390625 C7.06054688,8.36328125 7.19140625,8.21484375 7.3671875,8.09375 C7.54296875,7.97265625 7.76171875,7.91210938 8.0234375,7.91210938 C8.36328125,7.91210938 8.63574219,8.04394531 8.84082031,8.30761719 C9.04589844,8.57128906 9.1484375,8.91210938 9.1484375,9.33007812 C9.1484375,9.73632812 9.04785156,10.0742188 8.84667969,10.34375 C8.64550781,10.6132812 8.39453125,10.7480469 8.09375,10.7480469 Z"/>
      </svg>
    `,
  },
  {
    name: "7",
    tool: "svg",
    props: { id: "number-7" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.959 12.281L11.146 4.805 11.146 3.75 5 3.75 5 5.273 9.066 5.273 5.873 12.281z"/>
      </svg>
    `,
  },
  {
    name: "8",
    tool: "svg",
    props: { id: "number-8" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99414062,12.2714844 C8.91601562,12.2714844 9.63964844,12.0507812 10.1650391,11.609375 C10.6904297,11.1679688 10.953125,10.5664062 10.953125,9.8046875 C10.953125,9.33203125 10.8339844,8.92285156 10.5957031,8.57714844 C10.3574219,8.23144531 10.0351562,7.95898438 9.62890625,7.75976562 C9.98828125,7.56835938 10.2705078,7.31445312 10.4755859,6.99804688 C10.6806641,6.68164062 10.7832031,6.31640625 10.7832031,5.90234375 C10.7832031,5.16015625 10.53125,4.57421875 10.0273438,4.14453125 C9.5234375,3.71484375 8.83984375,3.5 7.9765625,3.5 C7.12109375,3.5 6.44140625,3.71484375 5.9375,4.14453125 C5.43359375,4.57421875 5.18164062,5.16015625 5.18164062,5.90234375 C5.18164062,6.31640625 5.28515625,6.68164062 5.4921875,6.99804688 C5.69921875,7.31445312 5.984375,7.56835938 6.34765625,7.75976562 C5.91796875,7.96289063 5.5859375,8.24023438 5.3515625,8.59179688 C5.1171875,8.94335938 5,9.34765625 5,9.8046875 C5,10.5625 5.26757812,11.1630859 5.80273438,11.6064453 C6.33789062,12.0498047 7.06835938,12.2714844 7.99414062,12.2714844 Z M7.99414062,7.02734375 C7.72070312,7.02734375 7.51367188,6.93359375 7.37304688,6.74609375 C7.23242188,6.55859375 7.16210938,6.3125 7.16210938,6.0078125 C7.16210938,5.69921875 7.23144531,5.45800781 7.37011719,5.28417969 C7.50878906,5.11035156 7.7109375,5.0234375 7.9765625,5.0234375 C8.25,5.0234375 8.45605469,5.11132812 8.59472656,5.28710938 C8.73339844,5.46289062 8.80273438,5.703125 8.80273438,6.0078125 C8.80273438,6.3125 8.73535156,6.55859375 8.60058594,6.74609375 C8.46582031,6.93359375 8.26367188,7.02734375 7.99414062,7.02734375 Z M7.99414062,10.7480469 C7.69335938,10.7480469 7.45019531,10.6494141 7.26464844,10.4521484 C7.07910156,10.2548828 6.98632812,9.98632812 6.98632812,9.64648438 C6.98632812,9.29492188 7.078125,9.02441406 7.26171875,8.83496094 C7.4453125,8.64550781 7.68554688,8.55078125 7.98242188,8.55078125 C8.27929688,8.55078125 8.51855469,8.64550781 8.70019531,8.83496094 C8.88183594,9.02441406 8.97265625,9.29492188 8.97265625,9.64648438 C8.97265625,9.99023438 8.8828125,10.2597656 8.703125,10.4550781 C8.5234375,10.6503906 8.28710938,10.7480469 7.99414062,10.7480469 Z"/>
      </svg>
    `,
  },
  {
    name: "9",
    tool: "svg",
    props: { id: "number-9" },
    icon: `
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.4296875,12.2714844 C7.33984375,12.2714844 8.13671875,12.0859375 8.8203125,11.7148438 C9.50390625,11.34375 10.0302734,10.8125 10.3994141,10.1210938 C10.7685547,9.4296875 10.953125,8.61328125 10.953125,7.671875 L10.953125,7.671875 L10.953125,6.91601562 C10.9453125,6.24023438 10.8144531,5.64355469 10.5605469,5.12597656 C10.3066406,4.60839844 9.95214844,4.20800781 9.49707031,3.92480469 C9.04199219,3.64160156 8.53320312,3.5 7.97070312,3.5 C7.41601562,3.5 6.90917969,3.63671875 6.45019531,3.91015625 C5.99121094,4.18359375 5.63476562,4.5546875 5.38085938,5.0234375 C5.12695312,5.4921875 5,6 5,6.546875 C5,7.421875 5.2265625,8.12109375 5.6796875,8.64453125 C6.1328125,9.16796875 6.74609375,9.4296875 7.51953125,9.4296875 C8.046875,9.4296875 8.5234375,9.23828125 8.94921875,8.85546875 C8.796875,10.0078125 8.04101562,10.6171875 6.68164062,10.6835938 L6.68164062,10.6835938 L6.30664062,10.6894531 L6.30664062,12.2714844 L6.4296875,12.2714844 Z M8.05273438,8.00585938 C7.72070312,8.00585938 7.45898438,7.87402344 7.26757812,7.61035156 C7.07617188,7.34667969 6.98046875,6.9921875 6.98046875,6.546875 C6.98046875,6.125 7.07421875,5.765625 7.26171875,5.46875 C7.44921875,5.171875 7.68164062,5.0234375 7.95898438,5.0234375 C8.27148438,5.0234375 8.51953125,5.15429688 8.703125,5.41601562 C8.88671875,5.67773438 8.97851562,6.08203125 8.97851562,6.62890625 L8.97851562,6.62890625 L8.97851562,7.44921875 C8.79101562,7.8203125 8.48242188,8.00585938 8.05273438,8.00585938 Z"/>
      </svg>
    `,
  },
  {
    name: "0",
    tool: "svg",
    props: { id: "number-0" },
    icon: `
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
       <path d="M10.9150579,8.8096485c0,1.169954-.2626665,2.0729673-.7879996,2.7070971-.525333.6349069-1.2667054.9519719-2.2225629.9519719-.9636287,0-1.7092752-.3193963-2.2369396-.9581888-.5276644-.6380154-.791108-1.5386974-.791108-2.7008801v-1.5826046c0-1.169954.2626665-2.0721902.7879996-2.7070971.5257216-.6345184,1.2682596-.9519719,2.2283913-.9519719.9597431,0,1.7034468.3193963,2.2311112.9578003.5268873.6387925.791108,1.5410287.791108,2.7070971v1.5767762ZM8.9100886,6.9713714c0-.6228616-.081209-1.0879678-.2440156-1.3953187-.1624181-.3073509-.4204219-.4612206-.7732343-.4612206-.3450412,0-.5960509.1429901-.7526406.4285816-.1569782.2855916-.2409072.7180588-.2529525,1.2970131v2.2132374c0,.6465637.081209,1.1194412.2440156,1.4186323.1624181.2999683.4204219.4499524.7732343.4499524.3411556,0,.5929425-.1460985.7557491-.4375185s.2459584-.748755.249844-1.3716166v-2.1417424Z" style="fill: #231f20;"/>
    </svg>`,
  },
];

export const mode = {
  id: "ice-hockey",
  name: "Ice Hockey",
  strokeWidth: 2,
  ratio: 0.5,
  logo: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g fill="#253E56" fill-rule="nonzero">
        <path d="M30.2708864,63.0794583 C27.6265204,63.0794583 25.0320476,63.0794583 22.3876816,63.0794583 C20.9906573,61.6902049 20.5915078,59.6559417 19.4938466,58.0682243 C20.7910825,55.5874155 22.0883194,53.2058398 23.285768,50.7250311 C25.2815165,46.7061204 27.2772641,42.6375942 29.2730126,38.668301 C29.5224816,38.1225223 29.9715243,37.6759767 30.3207806,37.1798155 C34.6116388,37.1798155 38.8027097,37.1798155 43.0935689,37.1798155 C43.3929311,37.9240583 42.8441,38.4202194 42.5946311,38.9659981 C41.2973951,41.3971903 40.0500524,43.778766 38.8027097,46.2099592 C38.5532417,46.6565049 38.4035602,47.2022825 38.2039854,47.7976767 C41.1976078,47.7976767 44.0415485,47.7976767 47.085065,47.7976767 C47.6338951,46.7557369 48.1827262,45.515333 48.8313447,44.3741602 C50.0786874,42.141433 51.3759233,39.9087049 52.4236913,37.5271282 C52.4735845,37.3782796 52.6731592,37.2790476 52.7729466,37.1798155 C55.267632,37.1798155 57.7623175,37.1798155 60.2570029,37.1798155 C61.2548767,38.9163816 62.2028573,40.6529476 63.2506252,42.5383621 C59.758066,49.3853942 56.2156126,56.2324262 52.6731592,63.0794583 C48.3324078,63.0794583 44.1413359,63.0794583 39.7506903,63.0794583 C39.8504777,62.7321447 39.8504777,62.3352155 40.0001592,62.0375184 C41.0978204,59.7551748 42.1954816,57.5224466 43.2931437,55.2401029 C43.4428243,54.9424058 43.5426117,54.5950922 43.6922932,54.1485466 C40.6986709,54.1485466 37.8547301,54.1485466 34.8611078,54.1485466 C33.2645087,57.075901 31.7676981,60.1024874 30.2708864,63.0794583 Z"/>
        <path d="M93.8853592 47.8472932C92.488335 50.5761825 91.191099 53.0569913 89.9437563 55.5874155 88.6964136 58.0682243 87.498965 60.5986495 86.2516223 63.0298417 76.1730942 63.0298417 66.1444592 63.0298417 56.0659311 63.0298417 56.0659311 61.3428922 57.5128485 60.3505689 57.911999 58.9117 63.6497748 58.9117 69.2877631 58.9117 75.0255388 58.9117 75.4246883 58.1178408 75.9236252 57.3239816 76.2229874 56.4805068 76.4724563 55.6866485 77.5202243 55.1904864 77.2208621 54.0493146 71.6826612 54.0493146 66.1444592 54.0493146 60.556365 54.0493146 62.4523252 50.328101 64.248499 46.7061204 66.1444592 42.9849078 65.2463728 41.1491097 64.248499 39.2636942 63.3005184 37.3782796 63.3504126 37.2790476 63.4003058 37.2294311 63.4003058 37.1798155 63.4502 37.130199 63.5000932 37.0805825 63.5499874 37.0805825 75.324901 37.0805825 87.1497087 37.0805825 98.9246233 37.0805825 99.0244107 37.0805825 99.1241981 37.1798155 99.2738786 37.2790476 98.6252612 38.569068 97.9766427 39.8590883 97.3280243 41.1987252 91.6401427 41.1987252 85.9522602 41.1987252 80.3142718 41.1987252 79.1168223 43.3818369 78.0191612 45.515333 76.7718184 47.7976767 82.5594883 47.8472932 88.0976893 47.8472932 93.8853592 47.8472932zM19.2443777 63.0298417C13.0575592 63.0298417 7.07031456 63.0298417.883495146 63.0298417 1.0331767 62.4840641 1.0830699 61.9382864 1.33253883 61.6405893 2.72956214 59.9536388 3.42807379 57.8697602 4.42594854 55.9843456 6.87073981 51.3700408 9.11595631 46.6068883 11.4609602 41.8437359 10.9121291 40.305634 9.51510583 39.0652301 9.31553107 37.2294311 15.2528816 37.2294311 21.1403388 37.2294311 27.1774767 37.2294311 26.2294971 39.7102398 24.6827922 41.7941194 23.6350243 44.0764631 22.5373621 46.4084233 21.3399136 48.6411515 20.142465 50.9731117 18.9949097 53.2554553 17.8473544 55.5874155 16.6499058 57.9689922 17.4482049 59.5070932 18.3462913 61.1940437 19.2443777 63.0298417z"/>
      </g>
    </svg>
  `,
  variants: variants,
  toolbars: [
    running,
    runningWithBall,
    passShot,
    balls,
    objects,
    nets,
    forward,
    midfielders,
    defenders,
    positions,
    people,
    numbers,
  ],
  colors: [
    { name: "Black", color: "black" },
    { name: "Red", color: "#D00000" },
    { name: "Green", color: "#3F7D20" },
    { name: "Orange", color: "#FF5E24" },
    { name: "Blue", color: "#247BA0" },
    { name: "Grey", color: "#CFCFCF" },
    { name: "Yellow", color: "#F3DE1E" },
    { name: "Purple", color: "#840BE3" },
    { name: "Pink", color: "#FF00E5" },
  ],
  pdf: {
    logo: "",
    footer: "",
  },
};