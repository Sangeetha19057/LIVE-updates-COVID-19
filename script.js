//-------- Header  starts ------
const header = document.createElement("header");
const h3tag = document.createElement("h3");
h3tag.innerHTML = "🦠 Live COVID-19 TRACKER 🦠";
header.append(h3tag);
document.querySelector("header").append(header);
//-------- Header   Ends here------

//---------banner starts here-----
const banner_conatiner = document.createElement("div");
banner_conatiner.setAttribute("class", "banner-conatiner");

const banner_image = document.createElement("div");
banner_image.setAttribute("class", "banner-image");
const bannerimg = document.createElement("img");
bannerimg.setAttribute(
  "src",
  "https://pbs.twimg.com/media/EU6okhsUUAEJtoR.png"
);
bannerimg.setAttribute("alt", "Covid-19");
banner_image.append(bannerimg);

const banner_content = document.createElement("div");
banner_content.setAttribute("class", "banner-content");
banner_content.innerHTML = `
       <h4><span>C</span>OVID-19 Alert</h4>
        <h5>Stay At Home Quarantine To <br />Stop Corona Virus</h5>
        <p>
          Corona Viruses Are A Type Of Virus. There Are Many Different Kinds,
          And Some Cause Disease. A Newly Identified Type.
        </p>
        <button class="button-color">Let us help</button>`;
banner_conatiner.append(banner_image, banner_content);
document.querySelector("nav").append(banner_conatiner);
// document.body.append(banner_conatiner);

//---------banner Ends here-----

//------- Fetch Api Starts here-------------
async function getData() {
  const dataList = await fetch("https://covid-19.dataflowkit.com/v1", {
    method: "GET",
  });
  let data = await dataList.json();
  console.log(data);
  displayCardData(data);
}
//---------create the table Starts here ---------

function lastUpadte(datas) {
  console.log(datas);
  // ----------Table heading starts here------------
  const section1 = document.createElement("section");
  const article = document.createElement("article");
  const h4tag = document.createElement("h4");
  h4tag.innerHTML = "Live Reported Cases and Deaths by Country";
  const para = document.createElement("p");
  para.innerHTML = `<strong> Last updated:</strong> ${new Date(
    datas[0]["Last Update"]
  ).toDateString()}`;
  article.append(h4tag, para);
  section1.append(article);
  document.querySelector("main").append(section1);
  // ----------Table heading Ends  here------------
  displayData(datas);
}

function displayData(datas) {
  // ----------Table starts here------------
  const container_fluid = document.createElement("div");

  const table_responsive = document.createElement("div");
  table_responsive.classList.add("table-box");

  const table = document.createElement("table");
  table.setAttribute("id", "tablevalues");

  const thead = document.createElement("thead");
  const trow = document.createElement("tr");

  const table_head_id = document.createElement("th");
  table_head_id.innerHTML = "#";

  const table_head_country = document.createElement("th");
  table_head_country.innerHTML = "Country";

  const table_head_Total_Cases = document.createElement("th");
  table_head_Total_Cases.innerHTML = "Total Cases";

  const table_head_New_Cases = document.createElement("th");
  table_head_New_Cases.innerHTML = "New Cases";

  const table_head_Total_Deaths = document.createElement("th");
  table_head_Total_Deaths.innerHTML = "Total Deaths";

  const table_head_New_Deaths = document.createElement("th");
  table_head_New_Deaths.innerHTML = "New Deaths";

  const table_head_Total_Recovered = document.createElement("th");
  table_head_Total_Recovered.innerHTML = "Total Recovered";

  const table_head_New_Recovered = document.createElement("th");
  table_head_New_Recovered.innerHTML = "New Recovered";
  trow.append(
    table_head_id,
    table_head_country,
    table_head_Total_Cases,
    table_head_New_Cases,
    table_head_Total_Deaths,
    table_head_New_Deaths,
    table_head_Total_Recovered,
    table_head_New_Recovered
  );
  thead.append(trow);
  table.append(thead);
  table_responsive.append(table);
  container_fluid.append(table_responsive);
  document.querySelector(".add_table").append(container_fluid);

  // console.log(datas.length);
  for (var i = 1; i < datas.length - 1; i++) {
    var tablevalues = document.getElementById("tablevalues");
    var x = tablevalues.insertRow();
    x.insertCell(0);
    tablevalues.rows[i].cells[0].innerHTML = i;

    x.insertCell(1);
    tablevalues.rows[i].cells[1].innerHTML = datas[i].Country_text;

    x.insertCell(2);
    tablevalues.rows[i].cells[2].innerHTML = datas[i]["Total Cases_text"];

    x.insertCell(3);
    tablevalues.rows[i].cells[3].innerHTML = datas[i]["New Cases_text"];
    if (datas[i]["New Cases_text"] != 0) {
      tablevalues.rows[i].cells[3].style.background = "#FFEEAA";
      tablevalues.rows[i].cells[3].style.color = "#111";
    }

    x.insertCell(4);
    tablevalues.rows[i].cells[4].innerHTML = datas[i]["Total Deaths_text"];

    x.insertCell(5);
    tablevalues.rows[i].cells[5].innerHTML = datas[i]["New Deaths_text"];
    if (datas[i]["New Deaths_text"] != 0) {
      tablevalues.rows[i].cells[5].style.background = "red";
      tablevalues.rows[i].cells[5].style.color = "#fff";
    }

    x.insertCell(6);
    tablevalues.rows[i].cells[6].innerHTML = datas[i]["Total Recovered_text"];

    x.insertCell(7);
    tablevalues.rows[i].cells[7].innerHTML = datas[i]["Active Cases_text"];
    if (datas[i]["Active Cases_text"] == "N/A") {
      tablevalues.rows[i].cells[7].style.background = "none";
      tablevalues.rows[i].cells[7].style.color = "#111";
    } else {
      if (datas[i]["Active Cases_text"] != 0) {
        tablevalues.rows[i].cells[7].style.background = " #c8e6c9";
        tablevalues.rows[i].cells[7].style.color = "#111";
      }
    }
  }
}

//------------Creating section tag for card conatinar---------
function displayCardData(datas) {
  console.log(datas);
  const section = document.createElement("section");
  const card_container = document.createElement("div");
  card_container.setAttribute("class", "card-container");
  card_container.innerHTML = `
<!-- Card box starts here-->
        <div class="card-box">
          <div class="card-content">
            <h5 class="textcolor-blue">Total cases</h5>
            <h4>${datas[0]["Total Cases_text"]}</h4>
          </div>
          <div class="card-image">
            <i class="fas fa-users textcolor-blue"></i>
          </div>
        </div>
        <!-- Card box Ends here-->

        <!-- Card box starts here-->
        <div class="card-box">
          <div class="card-content">
            <h5 class="textcolor-red">Total cases</h5>
            <h4>${datas[0]["Total Deaths_text"]}</h4>
          </div>
          <div class="card-image"><i class="fas fa-bed textcolor-red"></i></div>
        </div>
        <!-- Card box Ends here-->

        <!-- Card box starts here-->
        <div class="card-box">
          <div class="card-content">
            <h5 class="textcolor-green">Total cases</h5>
            <h4>${datas[0]["Total Recovered_text"]}</h4>
          </div>
          <div class="card-image">
            <i class="fas fa-child textcolor-green"></i>
          </div>
        </div>
        <!-- Card box Ends here-->

        <!-- Card box starts here-->
        <div class="card-box">
          <div class="card-content">
            <h5 class="textcolor-gold">Total cases</h5>
            <h4>${datas[0]["New Cases_text"]}</h4>
          </div>
          <div class="card-image">
            <i class="fas fa-bell textcolor-gold"></i>
          </div>
        </div>
        <!-- Card box Ends here-->
`;
  document.querySelector("section").append(card_container);
  lastUpadte(datas);
}

//---------create the table  Ends here---------
//-------- Header  starts ------
const footer = document.createElement("footer");
const para = document.createElement("p");
para.innerHTML = "Copyright © 2021 by Sangeetha";
footer.append(para);
document.querySelector("footer").append(footer);
//-------- Header   Ends here------

// loader script
const loader_div = document.createElement("div");
loader_div.setAttribute("class", "loader");
const loader_image = document.createElement("img");
loader_image.setAttribute(
  "src",
  "https://cdn.dribbble.com/users/948184/screenshots/10971368/818_covid_mask_db.gif"
);
loader_div.append(loader_image);
document.querySelector(".page_loader").append(loader_div);

const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";
    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 5000);
}
init();
