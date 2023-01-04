
//Charts render in profile.ejs


//connects to MongoDB Charts SDK via link in html/ejs
const ChartsEmbedSDK = window.ChartsEmbedSDK;

//uses base url to connect charts via chart objects
async function renderChart() {
    const sdk = new ChartsEmbedSDK({
      baseUrl: 'https://charts.mongodb.com/charts-basketherapy-gzkyj',
    });
    
    // embed a chart
    //chart object
    const chart = sdk.createChart({
      //example: needs to be change later
      chartId: '638990a5-6656-445d-8ad2-6d93dc12b104',
      height: "700px",
    });
    
    //same thing but a table
    const table = sdk.createChart({
      //example: needs to be change later
      chartId: '638990a5-6656-445d-8ad2-6d93dc12b104',
      height: "700px",
    });

    //same thing but another table
    const tableSecond = sdk.createChart({
      chartId: '638990a5-6656-445d-8ad2-6d93dc12b104',
      height: "700px",
    });

    //same thing but another table
    const tableThird = sdk.createChart({
      chartId: '638990a5-6656-445d-8ad2-6d93dc12b104',
      height: "700px",
    });
    
    // render the chart into divs(s)
    chart
      .render(document.getElementById('chart'))
    table
      .render(document.getElementById('table'))
    tableSecond
      .render(document.getElementById('table-second'))
    tableThird
      .render(document.getElementById('table-third'))
  
    //refreshes page 
      window.onload=function(){
        document.getElementById('refresh').addEventListener('click', () => chart.refresh());
      }
      
      let element = document.querySelector(".body-content")
  
  
    //filtering 
    //(based on future month collections...)
    // const monthSelect = document.getElementById("month-filter")
    // monthSelect.addEventListener("change", async (e) => {
    //   const monthSelect = e.target.value;
    //   console.log(monthSelect)
    //   monthSelect ? chart.setFilter({ month : {'$oid': monthSelect} }) : chart.setFilter({});
      
    // });
  
  
    document
      .getElementById("chartDataButton")
      .addEventListener("click", async function () {
        const chartDataButtonTextElement = document.getElementById(
          "chartDataButtonText"
        );
        const jsonViewerElement = document.getElementById("jsonViewer");
  
        const currentState = chartDataButtonTextElement.textContent;
        if (currentState === "Show") {
          // Update text inside button
          chartDataButtonTextElement.innerText = "Hide";
  
          // Get chart data and display it
          const data = await chart.getData();
          jsonViewerElement.data = data;
          jsonViewerElement.style.visibility = "visible";
        } else {
          // Update text inside button
          chartDataButtonTextElement.innerText = "Show";
          // Reset JSON Viewer element
          jsonViewerElement.data = "{}";
          jsonViewerElement.style.visibility = "hidden";
        }
      });
  }
  
  
  
  
  renderChart().catch((e) => window.alert(e.message));